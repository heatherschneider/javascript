$(function(){


}
function check(evt){

var current;

evt = evt || window.event;
var target = evt.target || evt.srcElement;
current = target;

if(current.className = 'flipped') return:

current.className = 'flipped';
}


window.onload = function() {
	var element = document.getElementById('pieces');
	element.onclick = check;
}