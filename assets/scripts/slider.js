$('.slider_fist').slick({
    dots: false,
    autoplay:true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 3,   
    infinite: true,
    dots: true
    }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2
    }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    ]
    });
    $('.slider_second_slider').slick({
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.old'),
        nextArrow: $('.new'),
    });
    $('.slider_member').slick({
      dots: false,
      autoplay:true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('#mem_prev'),
      nextArrow: $('#mem_next'),
  });
  
  let select = document.querySelector('.visible_part')
  let item = document.querySelector('.select_part')
  select.onclick = function(){
      if (item.classList.contains('show')) {
        item.classList.remove('show')
      }else{
        item.classList.add('show')
      }
  };
  let ham = document.querySelector('.hamburger_menu')
  ham.addEventListener('click', ()=>{
    ham.classList.toggle('active')
  })