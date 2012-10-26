$(function(){

$('#addcolors').click(add_colors);

});

function add_colors()
{
	var colors = $('#input').val();
	var colors_array = colors.split(", ");

	var loop = colors_array.length;

	for(i=0; i < loop; i++)
	{
		var box = $('<div>');
		box.addClass('box');
		var color = colors_array[i];
		box.css('background-color',color);
		$('#boxes').prepend(box);
		console.log(color);
	}

}
