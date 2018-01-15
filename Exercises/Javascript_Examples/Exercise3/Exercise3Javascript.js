var isLightOn = false;
function ToggleLight()
{
	if (isLightOn == false)
	{
		document.getElementById("lightBulb").src = "img/bulb-on.png";
		isLightOn = true;
	}
	else
	{
		document.getElementById("lightBulb").src = "img/bulb-off.png";
		isLightOn = false;
	}

}

function AddNumbers(numA, numB)
{
	var sum = numA + numB;

document.getElementById("numbers").innerHTML = sum;

}
