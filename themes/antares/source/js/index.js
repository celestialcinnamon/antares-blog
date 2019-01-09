const searchData = [];
let searchInput;
let searchResults;
let feedbackForm;
let db;

document.addEventListener("DOMContentLoaded", e => {
  searchResults = document.querySelector(".search-results");
  searchInput = document.getElementById("search-input");

  _init();
});

function _init() {
  feedbackForm = document.querySelector(".feedback-form");
  const toast = document.querySelector(".toast");
  const searchWidget = document.querySelector("#search");

  if (searchResults != null) {
    window.searchResults;
  }

  if (feedbackForm != null) {
    initializeFeedbackForm(feedbackForm);
  }

  if (toast != null) {
    window.toast = toast;
  }

  const noscripts = document.querySelectorAll(".noscript");
  noscripts.forEach(item => item.classList.remove("noscript"));

  fetch(searchDataEndpoint)
    .then(raw => {
      return raw.json();
    })
    .then(data => searchData.push(...data));

  searchInput.addEventListener("input", displayResults);
  searchInput.addEventListener("change", displayResults);

  document.querySelectorAll(".example-container--fixable")
    .forEach( item => item.addEventListener( 'dblclick', e => item.classList.toggle( 'fixed' )))
  
  //initialize Firebase Cloudstore
  try {
    firebase.firestore();
  } catch(e) { return; }

  db = firebase != null ? firebase.firestore() : {};

  // Disable deprecated features
  db.settings({
    timestampsInSnapshots: true
  });

}

function initializeFeedbackForm(feedbackForm) {
  feedbackForm.addEventListener("submit", feedbackFormSubmitListener);
}

function feedbackFormSubmitListener(event) {
  event.preventDefault();
  const arguments = {
    age: this["age"].value,
    url: this["post-url"].value,
    rating: this["rating"].value,
    feedback: this["feedback"].value
  };

  sendFeedback(arguments);
}

function showToast({ message, type }) {
  if (window.toast == null) return;

  const messageElement = _generateToastMessage(message);

  window.toast.appendChild(messageElement);
  console.log(type);
  window.toast.classList.add(type);
  window.toast.classList.add("shown");

  setTimeout(() => {
    window.toast.classList.remove("shown");
    setTimeout(() => messageElement.remove(), 300);
  }, 5000);
}

function _generateToastMessage(message) {
  const messageElement = document.createElement("span");
  messageElement.innerHTML = message;

  return messageElement;
}

function searchForContent(wordToMatch, data) {
  const regex = new RegExp(wordToMatch, "gi");

  return data.filter(post => {
    const titleMatched = post.title.match(regex);
    const contentMatched = post.content.match(regex);
    const urlMatched = post.url.match(regex);

    return titleMatched || contentMatched || urlMatched;
  });
}

function displayResults(event) {
  if (this.value === "") {
    searchResults.innerHTML = "";
    return;
  }

  const matches = searchForContent(this.value, searchData);
  const html = matches.map(item => {
    const regex = new RegExp(this.value, "gi");
    const title = item.title.replace(regex, `<mark>${this.value}</mark>`);
    const url = item.url//.replace( "<%- config.root %>", CONFIG_ROOT ).replace( "<%- config.url %>", CONFIG_URL );
    const content =
      item.content
        .replace(regex, `<mark>${this.value}</mark>`)
        .substring(0, 120) + "&hellip;";


    return `
      <li>
        <h3 class="result__header"><a href="${item.url}">${title}</a></h3>
        <span class="result-link">${CONFIG_URL}${url}</span>
        <p class="content-snippet">${content}</p>
      </li>`;
  });

  console.log(html, searchData);

  searchResults.innerHTML = html.join("");
}

function sendFeedback({ age, url, rating, feedback }) {
  db.collection("feedback")
    .add({ age, url, rating, feedback })
    .then(function(docRef) {
      showToast({ message: "Thanks for your feedback!", type: "success" });
    })
    .catch(function(error) {
      showToast({
        message: "Your feedback was not sent. (It's not you, it's me. Sorry.)",
        type: "error"
      });
    });
}

// POLYFILL FOR Element.remove() [IE9>=]

( function ( arr ) {
  arr.forEach( function ( item ) {
    if ( item.hasOwnProperty( 'remove' ) ) {
      return;
    }
    Object.defineProperty( item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        if ( this.parentNode !== null )
          this.parentNode.removeChild( this );
      }
    } );
  } );
} )( [ Element.prototype, CharacterData.prototype, DocumentType.prototype ] );

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('is_dark_mode', document.documentElement.classList.contains('dark'))
}

function initDarkMode() {
  const siteIsOnDarkMode = localStorage.getItem('is_dark_mode');
  console.log(siteIsOnDarkMode)

  if(siteIsOnDarkMode) {
    document.documentElement.classList.add('dark');
  }
}

initDarkMode();