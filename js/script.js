/**
 * Created by user on 27.09.2016.
 */

/*alert ("текст");
 console.log('текст');
 console.log($('ul.product-box').length);

 $(document).ready(function(){
 $('ul.product-box').hide();
 $('ul.product-box').show();
 $('.category').click(function() {
 console.log('текст');
 return false;
 });
 });
 */

$(document).ready(function() {
	$('.category').click(function() {
		$('.category').removeClass("active");
		$('.remove').removeClass("hide");
		$(this).addClass("active");
		$('.product-box').hide();
		var product_box = $(this).data('product-box');
		$('.product-box' + product_box).show();
		return false;
	});

	$('.select option').click(function() {
		$('.remove').removeClass("hide");
		$('.product-box').hide();
		var product_box = $(this).data('product-box');
		$('.product-box' + product_box).show();
		return false;
	});

// mobile menu

	$('div.menu').click(function() {
		$('#accordion').slideToggle("slow");
	});

	$('.menu-sub').click(function() {
		$('.has-sub.first').toggleClass("open");
		$('.has-sub .has-sub').slideToggle("slow");
	});
	/*
	 $('.has-sub.submenu').click(function() {
	 $(this).toggleClass("open");
	 $('.submenu').slideToggle("slow");
	 });
	 */
	$('.has-sub.submenu').click(function() {
		$(this).toggleClass("open");
		$(this).find('ul.submenu').slideToggle();
		/*$('ul.submenu').slideToggle("slow");*/
		/*$('ul.submenu').hide();
		 /*var sub_menu = $('ul.submenu').data('submenu');*/
		/*$('ul.submenu'/* + sub_menu).show();*/
	});

// catalog

	$(".catalog").click(function() {
		$(this).toggleClass("open");
		$(".menu-catalog").slideToggle("slow");
	});



// menu button

	(function() {

		"use strict";

		var toggles = document.querySelectorAll(".cmn-toggle-switch");

		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};

		function toggleHandler(toggle) {
			toggle.addEventListener( "click", function(e) {
				e.preventDefault();
				(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
			});
		}

	})();



});



