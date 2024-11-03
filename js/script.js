let btn = document.getElementsByClassName('album-info');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
        let img = document.getElementsByClassName('album-btn-img');
        img[i].classList.toggle('rotate');
    })
}


