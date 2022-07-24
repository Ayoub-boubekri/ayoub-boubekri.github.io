

const parentContainer = document.querySelector('.services-grid');

parentContainer .addEventListener('click', event=>{
   
    const current = event.target;

    const isReadMoreBtn = current.className.includes('btn secondary-btn');

if(!isReadMoreBtn) return;

const currentText = event.target.parentNode.querySelector('.secondary-text');

currentText.classList.toggle('secondary-text--show');

current.textContent = current.textContent.includes('Read More') ?

"Read less..." : "Read More...";
})