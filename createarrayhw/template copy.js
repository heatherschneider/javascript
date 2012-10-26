$(function(){
	var response= prompt ('do you want to create an (a)nimal, (c)olor, (p)erson, or (q)uit?')
	while response is != 'q')
{
	if (response== 'a')
		var numbera= prompt('how many animals would you like to create?')
		numbera = parseInt(numbera);
		var arraya= prompt ('please list ' + numbera + 'animals')
 		console.log= arraya


	if (response== 'c')
		var numberc= prompt('how many colors would you like to create?')
		numberc = parseInt(numberc);
		var arrayc= prompt ('please list ' + numberc + 'colors')
		console.log= arrayc

		/*var response = prompt('enter a color or (q)uit');
		var colors = [];
		while(response != "q")
{
	colors.push(response);
	console.log('you just typed in :' + response);
	response = prompt('enter a color or (q)uit')*/
}

console.log(colors);

	if (response== 'p')
		var numberp= prompt('how many people would you like to create?')
		numberp = parseInt(numberp);
		var arrayp= prompt ('please list ' + numberp + 'people')
		console.log= arrayp

}
response= prompt ('do you want to create an (a)nimal, (c)olor, (p)erson, or (q)uit?')


	var remove= prompt ('do you want to delete something? Type (ra)nimal, (rc)olor, (rp)erson or (q)')
	while remove is != 'q')
{
	if (remove== 'ra')
		var animalremove= prompt ('which animal would you like to remove?')

	if (remove== 'rc')
		var colorremove= prompt ('which color would you like to remove?')

	if (remove== 'rp')
		var personremove= prompt ('which person would you like to remove?')

}
remove= prompt ('do you want to delete something? Type (ra)nimal, (rc)olor, (rp)erson or (q)')
	while remove is != 'q')
}
 console.log('Here are your arrays')






