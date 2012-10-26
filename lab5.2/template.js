var amount = 0;

$(function(){

$('#red').click(red);
$('#blue').click(blue);

$('#p10').click(addition_10);
$('#p20').click(addition_20);
$('#p30').click(addition_30);

$('#n10').click(subtraction_10);
$('#n20').click(subtraction_20);
$('#n30').click(subtraction_30);

});


function addition_10()
{
	var add=$('#p10').text();
	add = parseInt(add);	
	amount = amount + add;
	console.log(amount);
	$('#amount').text(amount);
}

function addition_20()
{
	var add=$('#p20').text();
	add = parseInt(add);	
	amount = amount + add;
	console.log(amount);
	$('#amount').text(amount);
}

function addition_30()
{
	var add=$('#p30').text();
	add = parseInt(add);	
	amount = amount + add;
	console.log(amount);
	$('#amount').text(amount);
}

function subtraction_10()
{
	var add=$('#n10').text();
	add = parseInt(add);	
	amount = amount + add;
	console.log(amount);
	$('#amount').text(amount);
}

function subtraction_20()
{
	var add=$('#n20').text();
	add = parseInt(add);	
	amount = amount + add;
	console.log(amount);
	$('#amount').text(amount);
}

function subtraction_30()
{
	var add=$('#n30').text();
	add = parseInt(add);	
	amount = amount + add;
	console.log(amount);
	$('#amount').text(amount);
}




function red(){
	var amount=$('#amount');
	amount.css('color','red');
}

function blue(){
	var amount=$('#amount')
	amount.css('color','blue');
}