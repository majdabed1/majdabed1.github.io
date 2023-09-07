/*=====--- Filterable Gallery with Lightbox ---=====*/

const body = document.body;
const galleryImgs = document.querySelectorAll('.gallery_item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox_img');
const lightboxLink = document.querySelector('.lightbox_link');
const lightboxCloseBtn = document.querySelector('.lightbox_close');




/*===== 02) Lightbox functionality =====*/

galleryImgs.forEach((currImg) => {
    currImg.addEventListener('click', (e) => {

        let imgSrc = e.target.getAttribute('src');

        lightboxImg.setAttribute('src', imgSrc);
        lightboxLink.setAttribute('href', imgSrc);

        lightbox.classList.add('open');
        body.classList.add('overflow_hide');

    });
});


// Function for closing the Lightbox
const lightboxClose = () => {
    lightbox.classList.remove('open');
    body.classList.remove('overflow_hide');
};


// closing the lightbox on clicking the lightboxClose btn.
lightboxCloseBtn.addEventListener('click', lightboxClose);


// closing the lightbox on clicking outside of it.
window.addEventListener('click', (e) => {
    if (e.target.className === 'lightbox_wrapper') {
        lightboxClose();
    }
});


// closing the lightbox on pressing the Escape key.
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightboxClose();
    }
});