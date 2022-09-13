"use strict"

const imgRemove = document.querySelectorAll('.promo__adv img');
const textreplace = document.querySelector('.promo__genre');
const backgroundfon= document.querySelector('.promo__bg');
const barterText = document.querySelector('.promo__interactive-list');

imgRemove.forEach(item=> {
  item.remove()});

textreplace.textContent='Genre'

backgroundfon.style.background = 'url("img/1.jpg")'

SeriesDB = {
  series:[
    'OMAR',
    'THE FINAL LEGACY',
    'ERTUGRUL',
    'MAGNIFICENT CENTURY',
    'GREAT SELJUKS: GUARDIANS...'
  ],
};

barterText.innerHTML= ''

SeriesDB.series.forEach(item, idx => {
  barterText.innerHTML+=
  `<li class="promo__interactive-item">
          omar  
        <div class="delete"></div>
      </li>`
});