document.addEventListener('DOMContentLoaded', e => {
    const standfirst = document.querySelector( '.post--full > p:first-of-type' )
    const footer = document.querySelector('body > footer')

    
    
    const newStandFirst = `<div class="standfirst">${standfirst.innerHTML}</div>`
    standfirst.innerHTML = newStandFirst;
    
    const newFooter = `<div class="footer-inner">${footer.innerHTML}</div>`
    footer.innerHTML = newFooter;
    
    const searchWidget = document.querySelector('.search-view');
    if(searchWidget != null) {
        relocateSearchWidget(searchWidget);
        searchResults = document.querySelector( ".search-results" );
        searchInput = document.getElementById( "search-input" );

        searchInput.addEventListener( "input", displayResults );
        searchInput.addEventListener( "change", displayResults );

        // console.log(searchInput)
    }
})

function relocateSearchWidget(searchWidget) {
    searchWidget.remove();

    document.body.appendChild(searchWidget);
}