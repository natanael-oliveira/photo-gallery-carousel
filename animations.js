export class AnimationGallery {
    constructor({ modalEl, imagesEl, btnCloseEL, btnPrevEl, btnNextEl, imageCarouselEl }) {
        this.modal = document.querySelector(modalEl)
        this.modal_img = document.querySelector(imageCarouselEl)
        this.images = document.querySelectorAll(imagesEl)
        this.btn_close = document.querySelector(btnCloseEL)
        this.btn_prev = document.querySelector(btnPrevEl)
        this.btn_next = document.querySelector(btnNextEl)
        this.active_model
        this.id_img_active = 0
        this.eventListener()
    }
    eventListener() {
        this.btn_close.addEventListener('click', () => { this.toggle() })
        for (let i = 0; i < this.images.length; i++) {
            this.images[i].addEventListener('click', () => {
                this.toggle(i)
                this.modalHandler(this.images[i])
            })
        }
        this.btn_prev.addEventListener('click', () => {
            if (this.id_img_active > 0) {
                this.id_img_active--
                this.modalHandler(this.images[this.id_img_active])
            }
            console.log(this.id_img_active)
        })
        this.btn_next.addEventListener('click', () => {
            if (this.id_img_active < this.images.length - 1) {
                this.id_img_active++
                this.modalHandler(this.images[this.id_img_active])
            }
            console.log(this.id_img_active)
        })
    }
    toggle(idImg) {
        this.modal.classList.toggle('modal_active')
        this.active_model = !this.active_model
        this.active_model ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
        this.id_img_active = idImg
    }
    modalHandler(img) {
        this.modal_img.setAttribute('src', img.getAttribute('src'))
    }

}