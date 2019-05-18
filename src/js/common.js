function AjaxFormRequest(result_id, formMain, url) {
  jQuery.ajax({
    url: url,
    type: "POST",
    dataType: "html",
    data: jQuery("#" + formMain).serialize(),
    success: function (response) {
      $(':input', '#' + formMain)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
      setTimeout(() => {
        $("#message").hide();
      }, 5000);
    },
    error: function (response) {
      var par = document.getElementById(result_id);
      var error = document.createElement('p');
      error.classList.add("mt-3");
      error.innerHTML = "Возникла ошибка при отправке формы.";
      par.appendChild(error);
      setTimeout(func, 700);
    }
  });
}
function func() {
  $("p.mt-3").detach();
}

$('#retalForm').submit(function (e) {
  e.preventDefault();
  AjaxFormRequest('messegeResult-feedback', 'retalForm', './order.php');
});

function mask(event) {
  var matrix = "+7 (___) ___ __ __",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  if (def.length >= val.length) val = def;
  this.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
  });
  if (event.type == "blur") {
    if (this.value.length == 2) this.value = ""
  } else setCursorPosition(this.value.length, this)
};

var input = document.querySelector("#inputTel");
input.addEventListener("input", mask, false);
input.addEventListener("focus", mask, false);
input.addEventListener("blur", mask, false);



$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 2,
        loop: false
      }
    }
  })
  $('input, select').styler();
  var mixer = mixitup(".container-mix", {
    pagination: {
      limit: 6 // impose a limit of 8 targets per page
    },
    controls: {
      toggleLogic: 'and'
    }
  });

  var selectSort = $("#sort");
  var nameCar = $("#namecar");
  var typeCar = $("#typecar");
  var showAll = "all"
  var selector = "all";
  var type = "all";
  var order = selectSort.val();

  $("#showCars").click(function () {
    mixer.filter(showAll);
    // 
    if (selector != "all") {
      mixer.toggleOn(selector);
    }
    else if (type === "all") {
      mixer.filter(showAll);
      mixer.toggleOff(showAll);
    }
    if (type != "all") {
      mixer.toggleOn(type);
    }
    else if (selector === "all") {
      mixer.filter(showAll);
      mixer.toggleOff(showAll);
    }


    mixer.sort(order);

  });

  $(nameCar).change(function () {
    selector = nameCar.val();
  });

  $(typeCar).change(function () {
    type = typeCar.val();
  });

  $(selectSort).change(function () {
    order = selectSort.val();
  });

$("#showSedan").click(function () { 
  mixer.filter(showAll);
  mixer.toggleOn(".sedan");
});

$("#showHetchback").click(function () { 
  mixer.filter(showAll);
  mixer.toggleOn(".hetchbek");
});

$("#showCross").click(function () { 
  mixer.filter(showAll);
  mixer.toggleOn(".jeep");
});

$("#showUniversal").click(function () { 
  mixer.filter(showAll);
  mixer.toggleOn(".universal");
});
$("#showCitroen").click(function () { 
  mixer.filter(showAll);
  mixer.toggleOn(".citroen");
});
$("#showMercedes").click(function () { 
  mixer.filter(showAll);
  mixer.toggleOn(".mercedes");
});
$("#showAudi").click(function () { 
  mixer.filter(showAll);
  mixer.toggleOn(".audi");
});
$("#showTesla").click(function () { 
  mixer.filter(showAll);
  mixer.toggleOn(".tesla");
});


$(".showAllCars").click(function () { 
  mixer.filter(showAll);
});



  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  $('.panel-heading').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel-heading').not(this).removeClass('in').next().slideUp();
  });
});

$("a[href='#small-dialog']").click(function () {
  $("#price").text($(this).closest(".car-item").find(".price").text());
  $("#product-img").attr("src", $(this).closest(".car-item").find("img").attr("src"));
  $("#product-name").text($(this).closest(".car-item").find("h3").text());
  $("#description").html($(this).closest(".car-item").find(".d-1").html())
  $("#inputCar").val($("#product-name").text());
});

$(".popular-cars__item").click(function () {
  console.log("fdsfd");
  $("#price").text($(this).closest(".popular-cars__item").find(".price").text());
  $("#product-img").attr("src", $(this).closest(".popular-cars__item").find("img").attr("src"));
  $("#product-name").text($(this).closest(".popular-cars__item").find("h3").text());
  $("#description").html($(this).closest(".popular-cars__item").find(".d-1").html())
  $("#inputCar").val($("#product-name").text());
});

$(function(){
  $("a[href^='#c']").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+30+"px"});
          return false;
  });
});

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,

  fixedContentPos: false
});