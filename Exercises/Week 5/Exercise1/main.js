
var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{

	for(var i = 0; i < weaponsArray.length; i++)
	{
 		var tag = "<option value='" + 0 + "'>" + weaponsArray[i] + "</option>";
 		document.forms[0]["weapons"].innerHTML += tag;
	}
}


function SelectWeapon()
{

 var selection = document.forms[0]["weapons"].value

	document.getElementById("currentWeapon").innerHTML = selection


}
