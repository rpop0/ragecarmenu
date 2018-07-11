
$('#menuOkay').click(() =>{
	mp.trigger('menuOkayToServer');
});

$('#menuFix').click(() =>{
	mp.trigger('menuFixToServer');
});

$('#menuEngine').click(() =>{
	$("#mainButtons").fadeIn(300, function(){
		$("#mainButtons").hide();
		$("#engineButtons").fadeIn(300);
		$("#backButton").fadeIn();
	});

});

$('#menuTrans').click(() =>{
	$("#mainButtons").fadeIn(300, function(){
		$("#mainButtons").hide();
		$("#transmissionButtons").fadeIn(300);
		$("#backButton").fadeIn();
	});
});

$('#menuBreaks').click(() =>{
	$("#mainButtons").fadeIn(300, function(){
		$("#mainButtons").hide();
		$("#breaksButtons").fadeIn(300);
		$("#backButton").fadeIn();
	});
});

$('#menuSusp').click(() =>{
	$("#mainButtons").fadeIn(300, function(){
		$("#mainButtons").hide();
		$("#suspensionButtons").fadeIn(300);
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
		$("#mainButtons").fadeIn(300);
		$("#backButton").fadeOut();
	});
});