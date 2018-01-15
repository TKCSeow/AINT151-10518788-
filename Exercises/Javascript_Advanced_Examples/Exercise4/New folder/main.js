function OnLoad()
{
	document.getElementById('roomTitle').innerHTML = roomArray[0].title

	document.getElementById('roomText').innerHTML = roomArray[0].text




	SelectRoom(0);

}

function SelectRoom(roomIndex)
{
	document.getElementById('roomChoices').innerHTML = "";

	for(var i = 0; i < roomArray[roomIndex].choices.length; i++)
	{
		var tag = "<button onClick=\"SelectRoom(" + roomArray[roomIndex].choices[i].index + ")\">" + roomArray[roomIndex].choices[i].text + "</button>";
		document.getElementById('roomChoices').innerHTML += tag;
	}

	document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title

	document.getElementById('roomText').innerHTML = roomArray[roomIndex].text


}
