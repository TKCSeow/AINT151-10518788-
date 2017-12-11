
function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function StorePlayerData()
{

	var name = document.forms[0]["playername"].value;

	localStorage.setItem("playername", name);


	var goods = document.forms[0]["goods"].value;

	localStorage.setItem("goods", goods);


}

var goodsArray = [
	'Food',
	'Materials',
	'Weapons'
];


function OnLoad()
{
	myFunction();
	for(var i = 0; i < goodsArray.length; i++)
	{
 		var tag = "<option value='" + i + "'>" + goodsArray[i] + "</option>";
 		document.forms[0]["goods"].innerHTML += tag;
	}
}


function SelectGoods()
{
	var selection = 0
	selection = document.forms[0]["goods"].value


  if (selection == 0)
  {
    document.getElementById("currentGoods").innerHTML = "Food";
  }
  else if (selection == 1)
  {
    document.getElementById("currentGoods").innerHTML = "Materials";
  }
  else
  {
    document.getElementById("currentGoods").innerHTML = "Weapons";
  }
}

function OnGameLoad()
{
	var playerName = localStorage.getItem("playername");
  var goods = localStorage.getItem("goods");

	 document.getElementById('PlayerName').innerHTML = playerName

	 document.getElementById('headline').innerHTML = marketNews[0].headline;

	 document.getElementById('article').innerHTML = marketNews[0].article;

	 InventoryText();
	 PricesText();


   ChangeText(0);

}

function ChangeText(index)
{
	Transactions(index);
	WeekEvents(index);
  MarketNewsUpdate();
	ifs(index);

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

function ifs(index)
{
  if (stats[1].week == 10 && stats[0].Money >= 1000)
  {
    startingTown[16].choices[4].index = 37;
  }

  if (stats[1].week == 10 && stats[0].Money < 1000)
  {
    startingTown[16].choices[4].index = 38;
  }




  if (index == 34)
	{
		stats[1].week += 1;
	}

	if (index == 0 )
	{
		stats[0].Money = 100;
    stats[1].week = 1;
    ResetPrices();
	}



	if (index == 9 )
	{
		startingTown[8].choices[1] = {text:'???', index:11}
		startingTown[11].choices[1] = {text:' ', index:13}
		startingTown[13] = {title:'Secret', text:'You find 5,000 Dauns', choices:[{text:'Finish',index:0}]}

	}



	if (index == 16)
	{
		startingTown[26].choices[6] = {text:'Back', index:16};
	}




}

function Transactions(index)
{
	if (index == 10 || index == 11 )
	{
		stats[0].Money = stats[0].Money - 60;

	}

	if (index == 5 || index == 6)
	{
		stats[0].Money = stats[0].Money - 150;
	}


	if (index == 15)
	{
		stats[0].Money = stats[0].Money + 210;
	}

HunterTransactions(index);
FarmerTransactions(index);
BlacksmithTransactions(index);
}


function HunterTransactions(index)
{
	//Animal Pelts
	//Buy
		if (index == 18)
		{
			stats[0].Money = stats[0].Money - Inventory[0].buyPrice;
			Inventory[0].amount = Inventory[0].amount + 1;
			startingTown[26].choices[6].index = 33;
		}
	//Sell
		if (index == 27)
		{
			stats[0].Money = stats[0].Money + Inventory[0].sellPrice;
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
				stats[0].Money = stats[0].Money - Inventory[1].buyPrice;
				Inventory[1].amount = Inventory[1].amount + 1;
				startingTown[26].choices[6].index = 33;
			}
		//Sell
			if (index == 28)
			{
				stats[0].Money = stats[0].Money + Inventory[1].sellPrice;
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

function FarmerTransactions(index)
{
	//Fruits & Veg
	//Buy
		if (index == 21)
		{
			stats[0].Money = stats[0].Money - Inventory[2].buyPrice;
			Inventory[2].amount = Inventory[2].amount + 1;
			startingTown[26].choices[6].index = 33;
		}
	//Sell
		if (index == 29)
		{
			stats[0].Money = stats[0].Money + Inventory[2].sellPrice;
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
			stats[0].Money = stats[0].Money - Inventory[3].buyPrice;
			Inventory[3].amount = Inventory[3].amount + 1;
			startingTown[26].choices[6].index = 33;
		}
	//Sell
		if (index == 30)
		{
			stats[0].Money = stats[0].Money + Inventory[3].sellPrice;
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

function BlacksmithTransactions(index)
{
	//Tools
	//Buy
		if (index == 24)
		{
			stats[0].Money = stats[0].Money - Inventory[4].buyPrice;
			Inventory[4].amount = Inventory[4].amount + 1;
			startingTown[26].choices[6].index = 33;
		}
	//Sell
		if (index == 31)
		{
			stats[0].Money = stats[0].Money + Inventory[4].sellPrice;
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
			stats[0].Money = stats[0].Money - Inventory[5].buyPrice;
			Inventory[5].amount = Inventory[5].amount + 1;
			startingTown[26].choices[6].index = 33;
		}
	//Sell
		if (index == 32)
		{
			stats[0].Money = stats[0].Money + Inventory[5].sellPrice;
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

function WeekEvents()
{
	if (stats[1].week == 2)
	{
		Inventory[3].sellPrice = 90;
		Inventory[3].buyPrice = 50;
	}

	if (stats[1].week == 3)
	{
		Inventory[2].sellPrice = 110;
		Inventory[2].buyPrice = 60;
	}
  if (stats[1].week == 4)
	{
		Inventory[5].sellPrice = 800;
		Inventory[5].buyPrice = 500;
	}
}

function InventoryText()
{

	for(var i = 0; i < Inventory.length; i++)
	{

	var itemSlotTag = "<li id=\"itemSlot" + i + "\"></li>";


	document.getElementById('Inventory').innerHTML += itemSlotTag;


	}
}

function UpdateInventory()
{
	for(var i = 0; i < Inventory.length; i++)
	{
		var itemName = "itemSlot" + String(i);


	document.getElementById(itemName).innerHTML = Inventory[i].itemName + ": " + String(Inventory[i].amount);


	}
}

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

function MarketNewsUpdate()
{
  if (stats[1].week <= marketNews.length)
  {
    document.getElementById('headline').innerHTML = marketNews[stats[1].week - 1].headline;
    document.getElementById('article').innerHTML = marketNews[stats[1].week - 1].article;
  }
}

function ResetPrices()
{
  Inventory[0].buyPrice = 30;
  Inventory[0].sellPrice = 70;
  Inventory[1].buyPrice = 30;
  Inventory[1].sellPrice = 60;
  Inventory[2].buyPrice = 10;
  Inventory[2].sellPrice = 40;
  Inventory[3].buyPrice = 15;
  Inventory[3].sellPrice = 50;
  Inventory[4].buyPrice = 120;
	Inventory[4].sellPrice = 200;
  Inventory[5].buyPrice = 250;
	Inventory[5].sellPrice = 450;
}
