var perk;
var purchaseCounter = 0;

function navResponsive() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

//Store Player information from Game Setup Page
function StorePlayerData()
{

	var name = document.forms[0]["playername"].value;

	localStorage.setItem("playername", name);


	var goods = document.forms[0]["Perk"].value;

	localStorage.setItem("Perk", goods);


}

var perkArray = [
	'No Perk',
	'Barterer',
	'Salesman'
];


function OnLoad()
{
	navResponsive();
	for(var i = 0; i < perkArray.length; i++)
	{
 		var tag = "<option value='" + i + "'>" + perkArray[i] + "</option>";
 		document.forms[0]["Perk"].innerHTML += tag;
	}
}

function SelectPerk()
{
	var selection = 0
	selection = document.forms[0]["Perk"].value


  if (selection == 0)
  {
    document.getElementById("currentPerk").innerHTML = "No Perk";
  }
  else if (selection == 1)
  {
    document.getElementById("currentPerk").innerHTML = "10% discount on all purchases (applied on purchase)";
  }
  else
  {
    document.getElementById("currentPerk").innerHTML = "5% extra on all sold items (applied on sale)";
  }
}

function DisplayPerk()
{
	var selection = 0;
	selection = perk;


  if (selection == 0)
  {
    document.getElementById("PlayerName").innerHTML += "";
  }
  else if (selection == 1)
  {
    document.getElementById("PlayerName").innerHTML += " (Barterer)";
  }
  else
  {
    document.getElementById("PlayerName").innerHTML += " (Salesman)";
  }
}

function OnGameLoad()
{
	var playerName = localStorage.getItem("playername");
  perk = localStorage.getItem("Perk");

	 document.getElementById('PlayerName').innerHTML = playerName

	 document.getElementById('headline').innerHTML = marketNews[0].headline;

	 document.getElementById('article').innerHTML = marketNews[0].article;

   DisplayPerk();

	 InventoryText();
	 PricesText();


   ChangeText(0);

}

//This is the main function of the game
function ChangeText(index)
{
  UpdatePurchases(index);
  EventsAndResets(index);
	Transactions(index, perk);
	WeekEvents(index);
  MarketNewsUpdate();

  ChangeImage(index);
	UpdateInventory();
	UpdatePrices();

	document.getElementById('roomChoices').innerHTML = "";

	for(var i = 0; i < startingTown[index].choices.length; i++)
	{
		var tag = "<button class=\"Next\" onClick=\"ChangeText(" + startingTown[index].choices[i].index + ")\">" + startingTown[index].choices[i].text + "</button>";
		document.getElementById('roomChoices').innerHTML += tag;
	}

	document.getElementById('title').innerHTML = startingTown[index].title

	document.getElementById('text').innerHTML = startingTown[index].text

	document.getElementById('Week').innerHTML = "Week: " + String(stats[1].week);

	document.getElementById('Money').innerHTML = String(stats[0].Money) + " Dauns"

}


function EventsAndResets(index)
{
  if (stats[1].week == 10 && stats[0].Money >= 1000)
  {
    startingTown[16].choices[4].index = 39;
    startingTown[33].choices[4].index = 39;
  }

  if (stats[1].week == 10 && stats[0].Money < 1000)
  {
    startingTown[16].choices[4].index = 38;
    startingTown[33].choices[1].index = 38;
  }


  if (index == 34 || index == 13 || index == 39)
	{
		stats[1].week += 1;
	}

	if (index == 0)
	{
		stats[0].Money = 300;
    startingTown[16].choices[4].index = 34;
    stats[1].week = 0;
    ResetPrices();
	}

	if (index == 16)
	{
		startingTown[26].choices[6] = {text:'Back', index:16};

	}

  if (index == 39)
	{
    stats[0].Money -= 1000;
    startingTown[16].choices[4].index = 34;
    startingTown[33].choices[1].index = 16;
	}

}


function UpdatePurchases(index)
{
  document.getElementById('purchase').innerHTML = "Purchases: " + String(3 - purchaseCounter) + " left"

  if (index == 34 || index == 0)
  {
    purchaseCounter = 0;
  }

  if (purchaseCounter == 3)
  {
    startingTown[18].choices[0].index = 17;
    startingTown[19].choices[0].index = 17;
    startingTown[21].choices[0].index = 20;
    startingTown[22].choices[0].index = 20;
    startingTown[24].choices[0].index = 23;
    startingTown[25].choices[0].index = 23;
  }
}


function Transactions(index)
{
    TutorialTransactions(index);

    FarmerTransactions(index);
    MaterialSupplierTransactions(index);
    BlacksmithTransactions(index);

}

//Tutorial Transactions
function TutorialTransactions(index)
{
	if (index == 5)
	{
		stats[0].Money = stats[0].Money - 220;
	}

  if (index == 8)
  {
    stats[0].Money = stats[0].Money - 20;
    Inventory[0].amount = Inventory[0].amount + 1;

  }

	if (index == 11)
	{
		stats[0].Money = stats[0].Money + 40;
    Inventory[0].amount = Inventory[0].amount - 1;
	}
}

//Farmer: Buy/Sell Transactions and Error Catching
function FarmerTransactions(index)
{
	//Animal Pelts
	//Buy
		if (index == 18)
		{
      if (perk == 1)
      {
        stats[0].Money = stats[0].Money - (Inventory[0].buyPrice * 0.9);
      }
      else
      {
        stats[0].Money = stats[0].Money - Inventory[0].buyPrice;
      }

			Inventory[0].amount = Inventory[0].amount + 1;
			purchaseCounter++;
      if (purchaseCounter == 3)
      {
        startingTown[26].choices[6].index = 33;
        startingTown[18].choices[0].index = 33;
      }
		}

	//Sell
		if (index == 27)
		{
      if (perk == 2)
      {
        stats[0].Money = stats[0].Money + (Inventory[0].sellPrice * 1.05);
      }
      else
      {
        stats[0].Money = stats[0].Money + Inventory[0].sellPrice;
      }

			Inventory[0].amount = Inventory[0].amount - 1;
		}

	//Buy-error
	if (stats[0].Money < Inventory[0].buyPrice)
	{
		startingTown[17].choices[0].index = 36;
		startingTown[36].choices[0].index = 17;
	}
	else if (stats[0].Money >= Inventory[0].buyPrice)
	{
		startingTown[17].choices[0].index = 18;
	}
	//Sell-error
		if (Inventory[0].amount == 0)
		{
			startingTown[26].choices[0].index = 35;
		}
		else if (Inventory[0].amount > 0)
		{
			startingTown[26].choices[0].index = 27;
		}

		//Meats
		//Buy
			if (index == 19)
			{
        if (perk == 1)
        {
				      stats[0].Money = stats[0].Money - (Inventory[1].buyPrice * 0.9);
        }
        else
        {
          stats[0].Money = stats[0].Money - Inventory[1].buyPrice;
        }
				Inventory[1].amount = Inventory[1].amount + 1;
        purchaseCounter++;
        if (purchaseCounter == 3)
        {
          startingTown[26].choices[6].index = 33;
          startingTown[19].choices[0].index = 33;
        }
			}
		//Sell
			if (index == 28)
			{
        if (perk == 2)
        {
				  stats[0].Money = stats[0].Money + (Inventory[1].sellPrice * 1.05);
        }
        else
        {
          stats[0].Money = stats[0].Money + Inventory[1].sellPrice;
        }
				Inventory[1].amount = Inventory[1].amount - 1;
			}

		//Buy-error
		if (stats[0].Money < Inventory[1].buyPrice)
		{
			startingTown[17].choices[1].index = 36;
			startingTown[36].choices[0].index = 17;
		}
		else if (stats[0].Money >= Inventory[1].buyPrice)
		{
			startingTown[17].choices[1].index = 19;
		}
		//Sell-error
			if (Inventory[1].amount == 0)
			{
				startingTown[26].choices[1].index = 35;
			}
			else if (Inventory[1].amount > 0)
			{
				startingTown[26].choices[1].index = 28;
			}
}

//Material Supplier: Buy/Sell Transactions and Error Catching
function MaterialSupplierTransactions(index)
{
	//Fruits & Veg
	//Buy
		if (index == 21)
		{
      if (perk == 1)
      {
			     stats[0].Money = stats[0].Money - (Inventory[2].buyPrice * 0.9);
      }
      else
      {
        stats[0].Money = stats[0].Money - Inventory[2].buyPrice;
      }
			Inventory[2].amount = Inventory[2].amount + 1;
      purchaseCounter++;
      if (purchaseCounter == 3)
      {
        startingTown[26].choices[6].index = 33;
        startingTown[21].choices[0].index = 33;
      }
		}
	//Sell
		if (index == 29)
		{
      if (perk == 2)
      {
			  stats[0].Money = stats[0].Money + (Inventory[2].sellPrice * 1.05);
      }
      else
      {
        stats[0].Money = stats[0].Money + Inventory[2].sellPrice;
      }
			Inventory[2].amount = Inventory[2].amount - 1;
		}

	//Buy-error
	if (stats[0].Money < Inventory[2].buyPrice)
	{
		startingTown[20].choices[0].index = 36;
		startingTown[36].choices[0].index = 20;
	}
	else if (stats[0].Money >= Inventory[2].buyPrice)
	{
		startingTown[20].choices[0].index = 21;
	}
	//Sell-error
	if (Inventory[2].amount == 0)
	{
			startingTown[26].choices[2].index = 35;
	}
	else if (Inventory[2].amount > 0)
	{
			startingTown[26].choices[2].index = 29;
	}

	//Wheat
	//Buy
		if (index == 22)
		{
      if (perk == 1)
      {
			    stats[0].Money = stats[0].Money - (Inventory[3].buyPrice * 0.9);
      }
      else
      {
        stats[0].Money = stats[0].Money - Inventory[3].buyPrice;
      }
			Inventory[3].amount = Inventory[3].amount + 1;
      purchaseCounter++;
      if (purchaseCounter == 3)
      {
        startingTown[26].choices[6].index = 33;
        startingTown[22].choices[0].index = 33;
      }
		}
	//Sell
		if (index == 30)
		{
      if (perk == 2)
      {
			   stats[0].Money = stats[0].Money + (Inventory[3].sellPrice * 1.05);
      }
      else
      {
        stats[0].Money = stats[0].Money + Inventory[3].sellPrice;
      }
			Inventory[3].amount = Inventory[3].amount - 1;
		}

	//Buy-error
	if (stats[0].Money < Inventory[3].buyPrice)
	{
		startingTown[20].choices[1].index = 36;
		startingTown[36].choices[0].index = 20;
	}
	else if (stats[0].Money >= Inventory[3].buyPrice)
	{
		startingTown[20].choices[1].index = 22;
	}
	//Sell-error
		if (Inventory[3].amount == 0)
		{
			startingTown[26].choices[3].index = 35;
		}
		else if (Inventory[3].amount > 0)
		{
			startingTown[26].choices[3].index = 30;
		}
}

//Blacksmith: Buy/Sell Transactions and Error Catching
function BlacksmithTransactions(index)
{
	//Tools
	//Buy
		if (index == 24)
		{
      if (perk == 1)
      {
			   stats[0].Money = stats[0].Money - (Inventory[4].buyPrice * 0.9);
      }
      else
      {
        stats[0].Money = stats[0].Money - Inventory[4].buyPrice;
      }
			Inventory[4].amount = Inventory[4].amount + 1;
      purchaseCounter++;
      if (purchaseCounter == 3)
      {
        startingTown[26].choices[6].index = 33;
        startingTown[24].choices[0].index = 33;
      }
		}
	//Sell
		if (index == 31)
		{
      if (perk == 2)
      {
			   stats[0].Money = stats[0].Money + (Inventory[4].sellPrice * 1.05);
      }
      else
      {
        stats[0].Money = stats[0].Money + Inventory[4].sellPrice;
      }
			Inventory[4].amount = Inventory[4].amount - 1;
		}

	//Buy-error
	if (stats[0].Money < Inventory[4].buyPrice)
	{
		startingTown[23].choices[0].index = 36;
		startingTown[36].choices[0].index = 23;
	}
	else if (stats[0].Money >= Inventory[4].buyPrice)
	{
		startingTown[23].choices[0].index = 24;
	}
	//Sell-error
	if (Inventory[4].amount == 0)
	{
			startingTown[26].choices[4].index = 35;
	}
	else if (Inventory[4].amount > 0)
	{
			startingTown[26].choices[4].index = 31;
	}

	//Weapons
	//Buy
		if (index == 25)
		{
      if (perk == 1)
      {
			     stats[0].Money = stats[0].Money - (Inventory[5].buyPrice * 0.9);
      }
      else
      {
        stats[0].Money = stats[0].Money - Inventory[5].buyPrice;
      }
			Inventory[5].amount = Inventory[5].amount + 1;
      purchaseCounter++;
      if (purchaseCounter == 3)
      {
        startingTown[26].choices[6].index = 33;
        startingTown[25].choices[0].index = 33;
      }
		}
	//Sell
		if (index == 32)
		{
      if (perk == 2)
      {
			    stats[0].Money = stats[0].Money + (Inventory[5].sellPrice * 1.05);
      }
      else
      {
        stats[0].Money = stats[0].Money + Inventory[5].sellPrice;
      }
			Inventory[5].amount = Inventory[5].amount - 1;
		}

	//Buy-error
	if (stats[0].Money < Inventory[5].buyPrice)
	{
		startingTown[23].choices[1].index = 36;
		startingTown[36].choices[0].index = 23;
	}
	else if (stats[0].Money >= Inventory[5].buyPrice)
	{
		startingTown[23].choices[1].index = 25;
	}
	//Sell-error
		if (Inventory[5].amount == 0)
		{
			startingTown[26].choices[5].index = 35;
		}
		else if (Inventory[5].amount > 0)
		{
			startingTown[26].choices[5].index = 32;
		}
}


//Update Prices based on Market News events
function WeekEvents()
{
  if (stats[1].week == 2)
	{
		Inventory[0].buyPrice = 40;
    Inventory[0].sellPrice = 60;
	}

	if (stats[1].week == 3)
	{
		Inventory[1].buyPrice = 10;
    Inventory[1].sellPrice = 50;
    Inventory[0].buyPrice = 20;
    Inventory[0].sellPrice = 40;
	}

	if (stats[1].week == 4)
	{
		Inventory[0].buyPrice = 30;
    Inventory[0].sellPrice = 40;
	}

  if (stats[1].week == 5)
	{
		Inventory[1].buyPrice = 50;
    Inventory[1].sellPrice = 70;
	}

  if (stats[1].week == 6)
	{
		Inventory[1].buyPrice = 60;
    Inventory[1].sellPrice = 80;
	}

  if (stats[1].week == 7)
	{
    Inventory[0].buyPrice = 20;
    Inventory[0].sellPrice = 40;
		Inventory[1].buyPrice = 60;
    Inventory[1].sellPrice = 90;
	}

  if (stats[1].week == 8)
	{
		Inventory[1].buyPrice = 30;
    Inventory[1].sellPrice = 50;
	}

  if (stats[1].week == 9)
	{
		Inventory[0].buyPrice = 50;
    Inventory[0].sellPrice = 70;
	}

  if (stats[1].week == 12)
	{

	}
  if (stats[1].week == 9)
	{

	}
}

//Create Inventory tags
function InventoryText()
{

	for(var i = 0; i < Inventory.length; i++)
	{

	var itemSlotTag = "<li id=\"itemSlot" + i + "\"></li>";


	document.getElementById('Inventory').innerHTML += itemSlotTag;


	}
}

//Update Inventory tags
function UpdateInventory()
{
	for(var i = 0; i < Inventory.length; i++)
	{
		var itemName = "itemSlot" + String(i);


	document.getElementById(itemName).innerHTML = Inventory[i].itemName + ": " + String(Inventory[i].amount);


	}
}

//Create Prices tags
function PricesText()
{

	// document.getElementById('Prices').innerHTML += "<li>Buy Sell</li>";

	for(var i = 0; i < Inventory.length; i++)
	{

		var itemNameTag = "<li id=\"itemName1" + i + "\"></li>";
		var buyTag = "<li id=\"Buy" + i + "\"></li>";
		var sellTag = "<li id=\"Sell" + i + "\"></li>";

		document.getElementById('Prices').innerHTML += itemNameTag;
		document.getElementById('Prices').innerHTML += buyTag;
		document.getElementById('Prices').innerHTML += sellTag;

	}
}

//Update Prices tags
function UpdatePrices()
{
	for(var i = 0; i < Inventory.length; i++)
	{
		var itemName = "itemName1" + String(i);
		var buy = "Buy" + String(i);
		var sell = "Sell" + String(i);

	document.getElementById(itemName).innerHTML = "<br><u>" + Inventory[i].itemName + "<u>";
	document.getElementById(buy).innerHTML = "Buy: " + String(Inventory[i].buyPrice)
	document.getElementById(sell).innerHTML = "Sell: " + String(Inventory[i].sellPrice)

	}
}

//Update Market News
function MarketNewsUpdate()
{
  if (stats[1].week < marketNews.length)
  {
    document.getElementById('headline').innerHTML = marketNews[stats[1].week].headline;
    document.getElementById('article').innerHTML = marketNews[stats[1].week].article;
  }
}

//Reset Prices to original when returning to beginning
function ResetPrices()
{
  Inventory[0].buyPrice = 20;
  Inventory[0].sellPrice = 40;
  Inventory[1].buyPrice = 30;
  Inventory[1].sellPrice = 50;
  Inventory[2].buyPrice = 240;
  Inventory[2].sellPrice = 300;
  Inventory[3].buyPrice = 360;
  Inventory[3].sellPrice = 420;
  Inventory[4].buyPrice = 1100;
	Inventory[4].sellPrice = 1400;
  Inventory[5].buyPrice = 1500;
	Inventory[5].sellPrice = 1800;
}

//Display image based on index
function ChangeImage(index)
{
  if (index == 16  || index == 33) //Merchant Guild
  {
    var tag = "<img src=\"img/FM.png\" class=\"image\">"
    document.getElementById('Image').innerHTML = tag;
  }
  else if (index == 17) //Farmer
  {
    var tag = "<img src=\"img/FF.png\" class=\"image\">"
    document.getElementById('Image').innerHTML = tag;
  }
  else if (index == 20) //Material Supplier
  {
    var tag = "<img src=\"img/FH.png\" class=\"image\">"
    document.getElementById('Image').innerHTML = tag;
  }
  else if (index == 23) //Blacksmith
  {
    var tag = "<img src=\"img/FB.png\" class=\"image\">"
    document.getElementById('Image').innerHTML = tag;
  }
  else if (index == 26) //Trading Company
  {
    var tag = "<img src=\"img/FT.png\" class=\"image\">"
    document.getElementById('Image').innerHTML = tag;
  }

}
