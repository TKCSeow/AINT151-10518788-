
function StorePlayerData()
{

var name = document.forms[0]["playername"].value;

localStorage.setItem("playername", name);


var health = document.forms[0]["playerhealth"].value;

localStorage.setItem("playerhealth", health);


var colour = document.forms[0]["playercolour"].value;

localStorage.setItem("playercolour", colour);


}
