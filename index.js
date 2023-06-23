var list1 = document.querySelectorAll(" .allTab .homeProduct>img ")
		for (i=0;i<=list1.length-1;i++){
		var imgL1 = list1[i];
		j = i +1;
		imgL1.src = "media/" + j + ".webp"
	}

var list2 = document.querySelectorAll(".blendedTab .homeProduct>img" )
		for (i = 0; i <= list2.length - 1; i++) {
      var imgL2 = list2[i];
      j = i + 1;
      imgL2.src = "media/blended/" + j + ".webp";
    }

var list3 = document.querySelectorAll(".groundedTab .homeProduct>img")
	for (i = 0; i <= list3.length - 1; i++) {
    var imgL3 = list3[i];
    j = i + 1;
    imgL3.src = "media/grounded/" + j + ".webp";
  }

var list4 = document.querySelectorAll(".otherTab .homeProduct>img");
  for (i = 0; i <= list4.length - 1; i++) {
    var imgL4 = list4[i];
    j = i + 1;
    imgL4.src = "media/other/" + j + ".webp";
  }

	$(".homeSlider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
		prevArrow: $('.prev-arr'),
		nextArrow: $('.next-arr'),
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
