
var input = $('#input-box').val();
var output = $('#output-box').val();

$(function(){

$('#button-clear').click(clear);
$('#button-normal').dblclick(normal);
$('#button-big').hover(big);
$('#button-small').hover(small);
$('#button-reverse').hover(flip);
$('#button-black').click(black);
$('#button-yellow').click(yellow);

});

function clear()
{
	input = "";
	$('#input-box').val(input);
}

function normal()
{
	output = $('#input-box').val();
	$('#output-box').text(output);
}

function big()
{
	$('#output-box').toggleClass('big');
}

function small()
{
	$('#output-box').toggleClass('small');
}

function flip()
{	
	var straight = $('#output-box').text();
	var around = straight.split("").reverse().join("");
	$('#output-box').text(around);
}

/*
	$('#output-box').text(output);
	output = text.rev.value;
	for (i = 0; i <= output.length; i++)
	text = output.substring(i, i+1) + text;
	form.rev.value = text;
	
	/*
	$('#output-box').toggleClass('reverse');
	output = $('#output-box').val();
	$.reverse('#output-box');
	$('#output-box').val(output);
	//output = $('#output').val();
	//output = output.reverseString('#output');
	//$.reverse('#output-box');
	//$('#output-box').val(output);
	//
	*/
		

/*//$('#output-box').text(output);
    return output.split("").reverse().join("");
    $('#output-box').text(output);

 */


function black()
{
	$('#body').css('background-color','black');
}

function yellow()
{
	$('#body').css('background-color','yellow');
}