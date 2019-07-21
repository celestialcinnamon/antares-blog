(function(){
    const activityGrid = document.querySelector('.activity-grid');
    activityGrid.classList.remove('hidden');

    const activityButtons = document.querySelectorAll('.btn--activity')
    activityButtons.forEach(button => button.addEventListener('click', triggerActivity));
    window.activityArea = document.querySelector('iframe'); // This is another way of declaring global variables.
})();

function triggerActivity(event) {
    const clickedButton = event.target;
    const url = `activities/${clickedButton.dataset['url']}`

    activityArea.src = url;
    document.documentElement.classList.add('no-scroll');
}