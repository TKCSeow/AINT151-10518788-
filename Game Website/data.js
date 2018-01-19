var stats = [
  {
    Money: 300
  },
  {
    week:0
  }
]

var Inventory = [
  {
    itemName: 'Fruit & Veg',
    amount: 0,
    buyPrice:20,
    sellPrice:40,
  },
  {
    itemName: 'Meat',
    amount: 0,
    buyPrice:30,
    sellPrice:50,
  },
  {
    itemName: 'Wood Bundles',
    amount: 0,
    buyPrice:240,
    sellPrice:320,
  },
  {
    itemName: 'Ores',
    amount: 0,
    buyPrice:280,
    sellPrice:360,
  },
  {
    itemName: 'Tools',
    amount: 0,
    buyPrice:1000,
    sellPrice:1200,
  },
  {
    itemName: 'Weapons',
    amount: 0,
    buyPrice:1150,
    sellPrice:1350,
  },
]

var mainData = [
{
  title:'Intro',
  text:'You have always wanted to open your own shop. </br>You have 300 Dauns to pursue the dream. Amass 10,000 Dauns in 30 weeks. <br>First you need to register with the Merchant Guild',
  choices:[
    {
      text:'To the Merchant Guild',
      index:1
    },
  ]
},

{
  title:'Merchant Guild',
  text:'You walk up to the counter and talk to the man there. </br></br><i> Man: You wanna be a merchant!? You\'ll need to prove you have the money to even get started.</i>',
  choices:[
    {
      text:'Show him your money',
      index:2
    }
  ]
},



{
  title:'Merchant Guild',
  text:'<i>Man: Ha! You just scrapped the minimum amount. Well, a pass is a pass. I\'ll sort out your membership.</i><br><br>The man hands you your membership documents.',
  choices:[
    {
      text:'Next',
      index:3
    }
  ]
},
{
  title:'Merchant Guild',
  text:'Now you need a horse and cart to carry around your stock. Head over to the stables.',
  choices:[
    {
      text:'To the Stables',
      index:4
    },
  ]
},
{
  title:'Stables',
  text:'The stable master says he\'ll offer you 220 Dauns.',
  choices:[
    {
      text:'Buy',
      index:5
    },
  ]
},

{
  title:'Stables',
  text:'You paid 220 Dauns for the horse and cart. You head back to the Merchant Guild to register your horse.',
  choices:[
    {
      text:'Next',
      index:6
    }
  ]
},

{
  title:'Merchant Guild',
  text:'Your horse is now registered. You now need to purchase some goods.<br>Head to the local farmer',
  choices:[
    {
      text:'To the Farmer',
      index:7
    }
  ]
},
{
  title:'Farmer',
  text:'You can purchase goods from different types of suppliers. However, you can only make three purchases per week. <br>Check the Prices list to see what the buy and sell prices of goods are at.<br> For now, purchase Fruit & Veg which cost 20 Duans.',
  choices:[
    {
      text:'Buy Fruit & Veg',
      index:8
    },
  ]
},

{
  title:'Farmer',
  text:'Fruit & Veg purchased.',
  choices:[
    {
      text:'Next',
      index:9
    }
  ]
},

{
  title:'Merchant Guild',
  text:'Now you have some goods. You now need to sell them off. Head to the Trading Company',
  choices:[
    {
      text:'To the Trading Comapany',
      index:10
    }
  ]
},

{
  title:'Trading Company',
  text:'The Trading Company is where you can sell your goods. You can sell as many times you want each week, or not sell at all and sell at a later date. Here you will always sell at a profit but be careful, there are exceptions. Prices can fluctuate, meaning they can rise or drop. <br>Check the Market News every week to make an informed choice.',
  choices:[
    {
      text:'Sell Fruit & Veg',
      index:11
    }
  ]
},

{
  title:'Trading Company',
  text:'Fruit & Veg Sold',
  choices:[
    {
      text:'Next',
      index:12
    }
  ]
},

{
  title:'Merchant Guild',
  text:'There is nothing left to do now. So rest up for the next week',
  choices:[
    {
      text:'Rest',
      index:13
    }
  ]
},

{
  title:'Merchant Guild',
  text:'Rested',
  choices:[
    {
      text:'Next',
      index:14
    }
  ]
},

{
  title:'Merchant Guild',
  text:'It is now the next week. Be sure to check on any price changes and the news.<br> Remember, you don\'t have to sell every week.',
  choices:[
    {
      text:'Next',
      index:15
    }
  ]
},

{
  title:'Merchant Guild',
  text:'From now on you are on your own. You have 10 weeks to make 1000 Dauns to buy a shop license. Right now only the Farmer is available, more will be unlocked later.',
  choices:[
    {
      text:'Next',
      index:16
    }
  ]
},
{
  title:'Merchant Guild',
  text:'Where to next?',
  choices:[
    {
      text:'Farmer',
      index:17
    },
    {
      text:'Material Supplier',
      index:20
    },
    {
      text:'Blacksmith',
      index:23
    },

    {
      text:'Trading Company',
      index:26
    },
    {
      text:'Rest',
      index:34
    },
  ]
},

{
  title:'Farmer',
  text:'<i>Farmer: How can I help?</i>',
  choices:[
    {
      text:'Buy Fruit & Veg',
      index:18
    },
    {
      text:'Buy Meat',
      index:19
    },
    {
      text:'Back',
      index:16
    }
  ]
},
{
  title:'Farmer',
  text:'Purchased Fruit & Veg',
  choices:[
    {
      text:'Back',
      index:17
    }
  ]
},
{
  title:'Farmer',
  text:'Purchased Meat',
  choices:[
    {
      text:'Back',
      index:17
    }
  ]
},
{
  title:'Material Supplier',
  text:'<i>Material Supplier: What do you need?</i>',
  choices:[
    {
      text:'Buy Wood Bundles',
      index:21
    },
    {
      text:'Buy Ores',
      index:22
    },
    {
      text:'Back',
      index:16
    }
  ]
},
{
  title:'Material Supplier',
  text:'Purchased Wood Bundles',
  choices:[
    {
      text:'Back',
      index:20
    }
  ]
},
{
  title:'Material Supplier',
  text:'Purchased Ores',
  choices:[
    {
      text:'Back',
      index:20
    }
  ]
},
{
  title:'Blacksmith',
  text:'<i>Blacksmith: Whatcha need?</i>',
  choices:[
    {
      text:'Buy Tools',
      index:24
    },
    {
      text:'Buy Weapons',
      index:25
    },
    {
      text:'Back',
      index:16
    }
  ]
},
{
  title:'Blacksmith',
  text:'Purchased Tools',
  choices:[
    {
      text:'Back',
      index:23
    }
  ]
},
{
  title:'Blacksmith',
  text:'Purchased Weapons',
  choices:[
    {
      text:'Back',
      index:23
    }
  ]
},
{
  title:'Trading Company',
  text:'What to sell?',
  choices:[
    {
      text:'Sell Fruit & Veg',
      index:27
    },
    {
      text:'Sell Meat',
      index:28
    },
    {
      text:'Sell Wood Bundles',
      index:29
    },
    {
      text:'Sell Ores',
      index:30
    },
    {
      text:'Sell Tools',
      index:31
    },
    {
      text:'Sell Weapons',
      index:32
    },
    {
      text:'Back',
      index:16
    },
  ]
},
{
  title:'Trading Company',
  text:'Sold Fruit & Veg',
  choices:[
    {
      text:'Back',
      index:26
    }
  ]
},
{
  title:'Trading Company',
  text:'Sold Meats',
  choices:[
    {
      text:'Back',
      index:26
    }
  ]
},
{
  title:'Trading Company',
  text:'Sold Fruit & Veg',
  choices:[
    {
      text:'Back',
      index:26
    }
  ]
},
{
  title:'Trading Company',
  text:'Sold Wheat',
  choices:[
    {
      text:'Back',
      index:26
    }
  ]
},
{
  title:'Trading Company',
  text:'Sold Tools',
  choices:[
    {
      text:'Back',
      index:26
    }
  ]
},
{
  title:'Trading Company',
  text:'Sold Weapons',
  choices:[
    {
      text:'Back',
      index:26
    }
  ]
},
{
  title:'Merchant Guild',
  text:'Where to Next?',
  choices:[
    {
      text:'Trading Company',
      index:26
    },
    {
      text:'Rest',
      index:34
    },
  ]
},

{
  title:'Merchant Guild',
  text:'Rested',
  choices:[
    {
      text:'Next',
      index:16
    },

  ]
},

{
  title:'',
  text:'Not enough stock',
  choices:[
    {
      text:'Back',
      index:26
    },

  ]
},

{
  title:'',
  text:'Not enough money',
  choices:[
    {
      text:'Back',
      index:0
    },

  ]
},

{
  title:'The Dream',
  text:'You have opened a shop and now living the dream',
  choices:[
    {
      text:'Finish',
      index:0
    },

  ]
},
{
  title:'Maybe the Next Life',
  text:'You weren\'t able to open a shop. Maybe in a next life.',
  choices:[
    {
      text:'Finish',
      index:0
    },

  ]
},

{
  title:'Milestone One',
  text:'You have successfully earned 1000 Dauns. You have bought the rights to a shop license. You now need land to build your shop. There is an empty plot on the high street. You need 3000 Dauns to pay for it. (Material Supplier now available)',
  choices:[
    {
      text:'Next',
      index:16
    },

  ]
},

{
  title:'Milestone Two',
  text:'You have successfully earned 3000 Dauns. You have bought the land to build your shop. You now need 6000 Dauns to build your shop. (Blacksmith now available)',
  choices:[
    {
      text:'Next',
      index:16
    },

  ]
},

]




var marketNews = [
  {
    headline:'Early Winter',
    article:'Winter has come early in the North.',
  },
  {
    headline:'Harvest Festival',
    article:'Harvest Festival is next week. Demand for Fruit & Veg is to go up',
  },
  {
    headline:'Going Vegetarian',
    article:'It is forecasted that the Harvest Festival will caused a drop in demand of meat. Therefore, creating an abundance of meat supply',
  },
  {
    headline:'Over Doing the Festivities',
    article:'This Harvest Festival will be bigger than expected. Fruit & Veg supply will be low.',
  },
  {
    headline:'Craving the Meat',
    article:'With the Harvest Festival over, it is expected that meat demand will be high and rise for the next three weeks.',
  },
  {
    headline:'Eating the Meat (or "Meating" as We\'re Calling it)',
    article:'Meat demand has risen and still to keep rising.',
  },
  {
    headline:'The Meating Continues',
    article:'Meat demand has risen and still to keep rising. Fruit & Veg prices are to return to normal.',
  },
  {
    headline:'Meating Season Coming to an End',
    article:'Demand for meat is to return to normal next week.',
  },
  {
    headline:'A Quick Diet',
    article:'Fruit & veg Prices demand to rise, increasing prices. Why? Maybe because all of the meat that was consumed.',
  },
  {
    headline:'Quiet Week',
    article:'Prices to return to normal next week',
  },
  {
    headline:'No Changes',
    article:'Keep calm and carry on because nothing is happening.',
  },
  {
    headline:'Bringing in the Riches',
    article:'The discovery of rich sources of ores will lead to an increase in supply making them cheaper to buy. This will continue for the coming weeks.',
  },
  {
    headline:'Winter has Finally Come',
    article:'Wood prices are set to steadily rise for the next three weeks.',
  },
  {
    headline:'Rich no More',
    article:'Ore prices are to return to normal next week.',
  },
  {
    headline:'Season of Gifts',
    article:'It\'s the holiday season and luxury gifts like jewelry are expected to be in very high demand for a few weeks.',
  },
  {
    headline:'Stowing the Wood',
    article:'Demand of wood is to return to normal next week.',
  },
  {
    headline:'Hot Winter',
    article:'This Winter has been warmer than usual causing a abundance of wood supply. Buy prices are set to be low for a while.',
  },
  {
    headline:'Scandal Pending',
    article:'It has been discovered that jewelers have been purposely selling highly impure jewelry without disclosing that it is. Sell any ores you may have as they will become near worthless once this news reaches the public.',
  },
  {
    headline:'The Impure Jewels',
    article:'Ores demand has dropped and prices have lowered. This will continue into next week. Meanwhile wood supply is still high.',
  },
  {
    headline:'All Better',
    article:'Wood and ore prices will return to normal next week.',
  },

  {
    headline:'Did I Tell You There\'s a King? ',
    article:'Well there is, and you live in a kingdom. Meanwhile the market remains stable.',
  },
  {
    headline:'The King\'s Jubilee  Incoming',
    article:'The King\'s Jubilee  is soon and in preparation craftmans are gearing up to produce their best works and will need new tools. This will go on for a few weeks with prices rising steadily.',
  },
  {
    headline:'Peaceful Times',
    article:'The Kingdom has been at peace for many years now. There couldn\'t be a better time to be alive. Supply for weapons are overflowing, buy prices are becoming low.',
  },
  {
    headline:'Tooling Up',
    article:'Demand for tools continues to rise. Though will return to normal the week after as the Jubilee is next week (pretty damn excited!).',
  },
  {
    headline:'Jubilee Horror!',
    article:'During the parade there was a assassination attempt on the King. The assassin was caught and it seems he came from the West. Tensions with the West has risen to alarming levels. War seems imminent.',
  },
  {
    headline:'Tensions Still High',
    article:'The West denies the assassination, investigations and talks continues.',
  },
  {
    headline:'Conclusions are Being Made',
    article:'While tensions remain high, a conclusion is soon to come.',
  },
  {
    headline:'The Truth Not Yet Revealed',
    article:'It turns out the assassination attempt was made by a Royal rebelist. The West had no involvement. Once the this news goes public weapons will become worthless. Sell them now!',
  },
  {
    headline:'The Truth Revealed',
    article:'The truth about the assassination has gone public, weapon prices has dropped and will be like this next week. The people are relieved there will be no war.',
  },
  {
    headline:'Stuck in the Mud',
    article:'Merchant are unable to sell weapons due to the large cost it will incur. Things are forecasted to return to normal next week.',
  },
  {
    headline:'It\'s a Pleasant Day Today',
    article:'The weather\'s good today and I\'m sick of writing the news. Have a good day, I hope you enjoyed the read.',
  },
]
