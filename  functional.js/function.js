

const links = document.querySelectorAll(".lmt");
const fourthParagraph = document.querySelector(".fourth-block_column .fourth_paragraph");

links.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Чтобы предотвратить переход по ссылке
    const paragraph = this.nextElementSibling;
    paragraph.style.height = paragraph.scrollHeight + "px";
  });

  link.addEventListener("mouseover", function () {
    const paragraph = this.nextElementSibling;
    paragraph.style.height = paragraph.scrollHeight + "px";
  });

  link.addEventListener("mouseout", function () {
    const paragraph = this.nextElementSibling;
    paragraph.style.height = 0;
  });


  link.addEventListener("focus", function () {
    link.classList.add("focused");
  });

  link.addEventListener("blur", function () {
    link.classList.remove("focused");
  });
});


let center = [55.73473456901208, 37.58833200000002];
function init() {
  let map = new ymaps.Map("map", {
    center: center,
    zoom: 18,
  });
  


  let placemark1 = new ymaps.Placemark(
    center,
    
    {
      balloonContent: `

			<div class="balloon">
        <div class='baloon__name'>BARBER</div>
				<div class="balloon__address">УЛ. ЛЬВА ТОЛСТОГО, Д.16,<br> Г.Москва</div>
				<div class="balloon__contacts">
					<a href="tel:+74951481181">+7(495)-148-11-81</a>
				</div>
			</div>

		`,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "http://127.0.0.1:5500/barbershop/img/Logo.png",
      iconImageSize: [60, 60],
      iconImageOffset: [-19, -44],
    }
    
  );
  
  


  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark1);
}



ymaps.ready(init);

// закрытие по крестику
document.getElementById('open-modal-btn').addEventListener("click", function(){
  document.getElementById('my-modal').classList.add('open')
})

document.getElementById('close-my-modal-btn').addEventListener("click", function(){
  document.getElementById('my-modal').classList.remove('open')
})

// Закрытие по Escape
window.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') {
    document.getElementById('my-modal').classList.remove('open')
  }
})

// Закрытие если нажать на пустое место 
document.querySelector("#my-modal .modal__box").addEventListener('click', event=>{
  event._isClickWithInModal = true
});

document.getElementById("my-modal").addEventListener('click', event=>{
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open')
});

// Оброботчик событийт для других кнопок

document.getElementById('button2').addEventListener('click', function(){
  document.getElementById('my-modal').classList.add('open')
})

document.getElementById('button3').addEventListener("click", function(){
  document.getElementById('my-modal2').classList.add('open')
})

document.getElementById('close-my-modal-btn2').addEventListener("click", function(){
  document.getElementById('my-modal2').classList.remove('open')
})

// Закрытие по Escape
window.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') {
    document.getElementById('my-modal2').classList.remove('open')
  }
})

// Закрытие если нажать на пустое место 
document.querySelector("#my-modal2 .modal__box").addEventListener('click', event=>{
  event._isClickWithInModal = true
});

document.getElementById("my-modal2").addEventListener('click', event=>{
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open')
});














document.addEventListener('DOMContentLoaded', function(){
  
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e){
    e.preventDefault();
    let error = formValidate(form)
  }

  function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req')
    for(let index = 0; index < formReq.length; index ++){
      const input = formReq[index];
      formRemoveError(input);
      if(input.classList.contains('_email')){
        if(emailTest(input)){
          formAddError(input);
          error++;
        }

      }else if(input.getAttribute("type") ==="checkbox" && input.checked === false){
        formAddError(input);
        error++;
      }else{
        if (input.value === ''){
          formAddError(input);
          error++;
        }
      }

    }
  }
  function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  // функция теста email
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/ .test(input.value);
  }
});

// плавно опустить до плока с нашими услугами 

document.querySelector('.button_services').addEventListener('click', function(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const targetPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1500; // Продолжительность анимации в миллисекундах

  let start = null;
  function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, startPosition + distance * ease(progress / duration));
      if (progress < duration) {
          requestAnimationFrame(step);
      }
  }

  requestAnimationFrame(step);
});

function ease(t) {
  return t<.5 ? 2*t*t : -1+(4-2*t)*t;
}

















