const searchData = [];
let searchInput;
let searchResults;

document.addEventListener("DOMContentLoaded", e => {
    searchResults = document.querySelector(".search-results");
    searchInput = document.getElementById( "search-input" );

    _init();
});

function _init() {
    const feedbackForm = document.querySelector( ".feedback-form" );
    const toast = document.querySelector( ".toast" );
    const searchWidget = document.querySelector( "#search" );

    if(searchResults != null) {
        window.searchResults
    }

    if ( feedbackForm != null ) {
        initializeFeedbackForm( feedbackForm );
    }

    if ( toast != null ) {
        window.toast = toast;
    }

    const noscripts = document.querySelectorAll( ".noscript" );
    noscripts.forEach( item => item.classList.remove( "noscript" ) );

    fetch( searchDataEndpoint )
        .then( raw => {console.log(raw); return raw.json()} )
        .then( data => searchData.push( ...data ) );

    searchInput.addEventListener( "input", displayResults );
    searchInput.addEventListener( "change", displayResults );
}

function initializeFeedbackForm(feedbackForm) {
  feedbackForm.addEventListener("submit", feedbackFormSubmitListener);
}

function feedbackFormSubmitListener(event) {
  event.preventDefault();
  const formSubmittedSuccessfully = submitForm({});
  console.log(formSubmittedSuccessfully);

  if (formSubmittedSuccessfully) {
    showToast({
      message: "Thanks for your feedback!",
      type: "success"
    });
  } else {
    showToast({
      message: "Something went wrong.",
      type: "error"
    });
  }
}

function submitForm(feeedback) {
  return false;
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
    const url = "/" + item.url.replace("<%- config.root %>", "");
    const content =
      item.content
        .replace(regex, `<mark>${this.value}</mark>`)
        .substring(0, 120) + "&hellip;";

    return `
      <li>
        <h3 class="result__header"><a href="${item.url}">${title}</a></h3>
        <span class="result-link"><%- config.url %>${url}</span>
        <p class="content-snippet">${content}</p>
      </li>`;
  });

  console.log(html, searchData)

  searchResults.innerHTML = html.join("");
}
