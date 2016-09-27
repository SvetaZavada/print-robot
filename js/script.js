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




	$(".catalog").click(function() {
		$(this).toggleClass("open");
		$(".menu-catalog").slideToggle("slow");
	});

});

