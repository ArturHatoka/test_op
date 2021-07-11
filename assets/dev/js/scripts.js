import Swiper from 'swiper/bundle';

new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 250,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const show_more = document.querySelectorAll('button[data-action="show_more"]')
show_more.forEach((show)=>{
  show.addEventListener('click',() => {
    removeClosed(show)
  })
})

let removeClosed = (elem) =>{
  elem.parentNode.querySelector('.closed').classList.remove('closed')
  elem.classList.add('d-none')
}