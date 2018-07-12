
$('#menuOkay').click(() =>{
	mp.trigger('menuOkayToServer');
});

$('#menuFix').click(() =>{
	mp.trigger('menuFixToServer');
});


$('#menuEngine').click(() =>{
	$("#mainButtons").fadeIn(300, function(){
		$("#mainButtons").hide();
		$("#maint").hide();
		$('#enopt').show();
		$("#engineButtons").fadeIn(300);
		$("#backButton").fadeIn();
	});

});

$('#menuTrans').click(() =>{
	$("#mainButtons").fadeIn(300, function(){
		$("#mainButtons").hide();
		$("#maint").hide();
		$('#tropt').show();
		$("#transmissionButtons").fadeIn(300);
		$("#backButton").fadeIn();
	});
});

$('#menuBrakes').click(() =>{
	$("#mainButtons").fadeIn(300, function(){
		$("#mainButtons").hide();
		$("#maint").hide();
		$('#bropt').show();
		$("#brakesButtons").fadeIn(300);
		$("#backButton").fadeIn();
	});
});

$('#menuSusp').click(() =>{
	$("#mainButtons").fadeIn(300, function(){
		$("#mainButtons").hide();
		$("#maint").hide();
		$('#suopt').show();
		$("#suspensionButtons").fadeIn(300);
		$("#backButton").fadeIn();
	});
});

$('#menuColor').click(() =>{
	$("#mainButtons").fadeIn(300, function(){
		$("#mainButtons").hide();
		$("#maint").hide();
		$('#colopt').show();
		$("#colorOptions").fadeIn(300);
		$("#backButton").fadeIn();
	});
});

$('#menuTurbo').click(() =>{
	mp.trigger('menuTurboToServer');
});

$('#ems1').click(() =>{
	mp.trigger('ems1');
});

$('#ems2').click(() =>{
	mp.trigger('ems2');
});
$('#ems3').click(() =>{
	mp.trigger('ems3');
});
$('#ems4').click(() =>{
	mp.trigger('ems4');
});
$('#ems5').click(() =>{
	mp.trigger('ems5');
});
$('#trs1').click(() =>{
	mp.trigger('trs1');
});
$('#trs2').click(() =>{
	mp.trigger('trs2');
});
$('#trs3').click(() =>{
	mp.trigger('trs3');
});
$('#trs4').click(() =>{
	mp.trigger('trs4');
});

$('#br1').click(() =>{
	mp.trigger('br1');
});
$('#br2').click(() =>{
	mp.trigger('br2');
});
$('#br3').click(() =>{
	mp.trigger('br3');
});
$('#br4').click(() =>{
	mp.trigger('br4');
});

$('#su1').click(() =>{
	mp.trigger('su1');
});
$('#su2').click(() =>{
	mp.trigger('su2');
});
$('#su3').click(() =>{
	mp.trigger('su3');
});
$('#su4').click(() =>{
	mp.trigger('su4');
});
$('#su5').click(() =>{
	mp.trigger('su5');
});


$("#backButton").click(() =>{
	$(".rozihide").slideUp(300, function(){
		$(".rozihide").hide();
		$(".mtitles").hide();
		$("#maint").show();
		$("#mainButtons").fadeIn(300);
		$("#backButton").fadeOut();
	});
});


//COLOR SLIDER
var canvas = $("#myCanvas").get(0);
var ctx = canvas.getContext("2d");
var image = new Image();
image.crossOrigin = 'anonymous';
image.src = "https://i.imgur.com/WPrIoBg.png";
image.onload = function() {
ctx.drawImage(image, 0, 0);
};
$("#myCanvas").mousemove(function(e) { // mouse move handler

        var canvasOffset = $(canvas).offset();
        var canvasX = Math.floor(e.pageX - canvasOffset.left);
        var canvasY = Math.floor(e.pageY - canvasOffset.top);
        var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
        var pixel = imageData.data;
        var pixelColor = "rgba("+pixel[0]+", "+pixel[1]+", "+pixel[2]+", "+pixel[3]+")";

        $('#preview').css('backgroundColor', pixelColor);

    });
$('#myCanvas').click(function(e,red,green,bblue) { // mouse click handler
        var canvasOffset = $(canvas).offset();
        var canvasX = Math.floor(e.pageX - canvasOffset.left);
        var canvasY = Math.floor(e.pageY - canvasOffset.top);
        var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
        var pixel = imageData.data;
        var red = pixel[0];
        var green = pixel[1];
        var blue = pixel[2];
        mp.trigger('carColorChangeToServer', red, green, blue);

    });




     