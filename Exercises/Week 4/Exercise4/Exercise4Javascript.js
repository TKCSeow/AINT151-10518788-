function CreatePlayer()
{
  var playerName = document.getElementById("playername").value;
  document.getElementById("name").innerHTML = playerName;

  var playerColour = document.getElementById("playercolour").value;
  document.getElementById("colour").style.backgroundColor = playerColour;

  var playerHealth = document.getElementById("playerhealth").value;
  document.getElementById("health").innerHTML = playerHealth;

  var playerWeapon = document.getElementById("playerweapon").value;

  if (playerWeapon == 1)
  {
    document.getElementById("weapon").innerHTML = "Crossbow of much hurting";
  }
  else if (playerWeapon == 2)
  {
    document.getElementById("weapon").innerHTML = "Broadsword of so slicing";
  }
  else
  {
    document.getElementById("weapon").innerHTML = "Wand of amaze magics";
  }

// var weaponChoice;
//   switch (playerWeapon)
//   {
//       case 1:
//           weaponChoice = "Crossbow of much hurting";
//           break;
//       case 2:
//           weaponChoice = "Broadsword of so slicing";
//           break;
//       case 3:
//           weaponChoice = "Wand of amaze magics";
//           break;
//   }

// document.getElementById("weapon").innerHTML = weaponChoice;





}
