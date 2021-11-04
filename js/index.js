// Скрипт плавного перехода к якорю
window.addEventListener('DOMContentLoaded',  function() {
  $(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
  })
})

window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container_1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination_1',
      // String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"
      type: 'bullets',
      bulletElement: 'span',
      clickable: true,
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next_1',
    //   prevEl: '.swiper-button-prev_1',
    // },

    autoplay: {
      delay: 3000
    },
        
  })
})

window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container_2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: 2,

    breakpoints: {
      290: {spaceBetween: 0},
      350: {spaceBetween: 5},
      400: {spaceBetween: 8},
      450: {spaceBetween: 13},
      500: {spaceBetween: 15},
      550: {spaceBetween: 20},
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination_2',
      // String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"
      type: 'bullets',
      bulletElement: 'span',
      clickable: true,
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next_2',
    //   prevEl: '.swiper-button-prev_2',
    // },

    autoplay: {
      delay: 3000
    },
        
  })
})

window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container_3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination_3',
      // String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"
      type: 'bullets',
      bulletElement: 'span',
      clickable: true,
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next_3',
    //   prevEl: '.swiper-button-prev_3',
    // },

    autoplay: {
      delay: 3000
    },
        
  })
})

window.addEventListener('DOMContentLoaded', function () {
  // конечная дата
  const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 0, 26, 13, 26);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});

window.addEventListener('DOMContentLoaded', function () {
  $('body').on('input', '.buy__input:nth-child(2)', function(){
    this.value = this.value.replace(/[^0-9]/g, '');
  });
})