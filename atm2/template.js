$(function(){

var balance_checking = $('#cash_checking').text();
balance_checking = parseInt(balance_checking);

$('#deposit_checking').click(dep);
$('#withdraw_checking').click(wd);

function dep()
{

	var amount_checking = $('#amount_checking').val();
	amount_checking = parseInt(amount_checking);

	balance_checking = balance_checking+amount;
	balance_checking = parseInt(balance_checking);

	$('#cash').text(balance_checking);

if(balance_checking < 0)
	$('#container').css('background-color','red');
else
	$('#container').css('background-color','white');
}

function wd()
{
amount_checking = $('#amount_checking').val();
amount_checking = parseInt(amount_checking);

balance_checking = balance_checking-amount;
balance_checking = parseInt(balance_checking);

$('#cash').text(balance_checking);

if(balance_checking < 0)
	$('#container').css('background-color','red');
else
	$('#container').css('background-color','white');
}



var balance_savings = $('#cash-savings').text();
balance_savings = parseInt(balance_savings);

$('#deposit_savings').click(dep);
$('#withdraw_savings').click(wd);

function dep()
{

	var amount-savings = $('#amount_savings').val();
	amount_savings = parseInt(amount_savings);

	balance_savings = balance_savings+amount;
	balance_savings = parseInt(balance_savings);

	$('#cash').text(balance);

if(balance_savings < 0)
	$('#container').css('background-color','red');
else
	$('#container').css('background-color','white');
}

function wd()
{
amount_savings = $('#amount-savings').val();
amount_savings = parseInt(amount_savings);

balance_savings = balance_amount;
balance_savings = parseInt(balance_savings);

$('#cash').text(balance_savings);

if(balance_savings < 0)
	$('#container').css('background-color','red');
else
	$('#container').css('background-color','white');
}
});
