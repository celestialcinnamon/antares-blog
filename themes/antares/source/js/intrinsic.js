document.addEventListener('DOMContentLoaded', e => {
    const feedbackSidebar = document.querySelector('.feedback-sidebar');
    
    console.log(feedbackSidebar)
    feedbackSidebar.remove();

    document.querySelector('.footer')
        .innerHTML += feedbackSidebar.innerHTML;
    
    const disclosureWidgets = document.querySelectorAll('.sidebar details');
    const newContents = [...disclosureWidgets].map(widget => `<div>${widget.innerHTML}</div>`);
    document.querySelector('.sidebar')
        .innerHTML = newContents.join("\n");
})
