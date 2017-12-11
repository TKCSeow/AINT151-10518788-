var stats = [
  {
    Money: 300
  },
  {
    week:1
  }
]

var Inventory = [
  {
    itemName: 'Animal Pelts',
    amount: 0,
    buyPrice:30,
    sellPrice:70,
  },
  {
    itemName: 'Meat',
    amount: 0,
    buyPrice:20,
    sellPrice:60,
  },
  {
    itemName: 'Fruit & Veg',
    amount: 0,
    buyPrice:10,
    sellPrice:40,
  },
  {
    itemName: 'Wheat',
    amount: 0,
    buyPrice:15,
    sellPrice:50,
  },
  {
    itemName: 'Tools',
    amount: 0,
    buyPrice:120,
    sellPrice:200,
  },
  {
    itemName: 'Weapons',
    amount: 0,
    buyPrice:250,
    sellPrice:450,
  },
]

var startingTown = [
{
  title:'Intro',
  text:'You have always wanted to open your own shop. </br>You have 100 Dauns to pursue the dream. Amass 1,000 Dauns in 10 weeks. You can only make only purchase per week, but you can sell how many times you want.',
  choices:[
    {
      text:'Next',
      index:16
    },
    {
      text:'',
      index:1
    },
  ]
},

{
  title:'Intro',
  text:'First you need to register at the Merchant Guild to become a merchant. The Merchant Guild will act as the hub of operation as you do not have a shop yet.',
  choices:[
    {
      text:'To the Merchant Guild',
      index:2
    }
  ]
},

{
  title:'Merchant Guild',
  text:'You walk up to the counter and talk to the man there. </br></br><i> Man: You wanna be a merchant!? You\'ll need to prove you have the money to even get started.</i>',
  choices:[
    {
      text:'Show him your money',
      index:3
    }
  ]
},



{
  title:'Merchant Guild',
  text:'<i>Man: Ha! You just scrapped the minimum amount. Well, a pass is a pass. I\'ll sort out your membership.</i><br><br>The man hands you your membership documents.<br>Now you need a horse and cart to carry around your stock. Head over to the stables.',
  choices:[
    {
      text:'To the Stables',
      index:4
    }
  ]
},
{
  title:'Stables',
  text:'The stable master says he\'ll offer you 150 Dauns.',
  choices:[
    {
      text:'Accept',
      index:5
    },
    {
      text:'Barter [3]',
      index:6
    }
  ]
},

{
  title:'Stables',
  text:'You paid 150 Dauns for the horse and cart. You head back to the Merchant Guild to register your horse.',
  choices:[
    {
      text:'Back to the Merchant Guild',
      index:7
    }
  ]
},

{
  title:'Stables',
  text:'You failed the barter. You pay up 150 Dauns for the horse and cart. You head back to the Merchant Guild to register your horse.',
  choices:[
    {
      text:'Back to the Merchant Guild',
      index:7
    }
  ]
},

{
  title:'Merchant Guild',
  text:'Your horse is now registered. You now need to purchase some goods.<br>Head to the local hunter',
  choices:[
    {
      text:'To the hunter',
      index:8
    }
  ]
},
{
  title:'Hunter',
  text:'You can purchases goods from many types of vendors. <br> For now, purchase 70 wolf pelts which cost 60 Duans.',
  choices:[
    {
      text:'Buy the wolf pelts',
      index:10
    },
    {
      text:' ',
      index:9
    },
  ]
},

{
  title:'Hunter',
  text:'You find a bundle of wheat. It doesn\'t seem to belong to anyone. <br> However, you feel something special about it. You decide to pick it up.',
  choices:[
    {
      text:'Back',
      index:8
    }
  ]
},

{
  title:'Hunter',
  text:'You pay for the pelts and leave for the Merchant Guild to rest for the night.',
  choices:[
    {
      text:'To the Merchant Guild',
      index:12
    }
  ]
},

{
  title:'Hunter',
  text:'You notice a pile of apples to the corner. You can tell they are of good quality and bring up it with hunter. <br><br> <i>Hunter: Haha! You noticed them?! They\'re actually home grown by my wife. They\'re the best you can get. <br> Hey, how about I throw in half of what I have here. Take it as a gesture of good will.</i><br><br>You pay for the pelts and load them onto the cart with the apples. You decide to keep the apples for yourself<br>You thank the hunter and leave for the Merchant Guild to rest for the night.',
  choices:[
    {
      text:'To the Merchant Guild',
      index:12
    }
  ]
},

{
  title:'Merchant Guild',
  text:'You rest up for the night',
  choices:[
    {
      text:'Finish',
      index:13
    }
  ]
},

{
  title:'Merchant Guild',
  text:'You now need to sell off your goods. Head to the Trading Company.',
  choices:[
    {
      text:'To the Trading Company',
      index:14
    }
  ]
},

{
  title:'Trading Company',
  text:'The Trading Company is where you can sell your goods. Here you will always sell at a profit but be careful, there are exceptions. Check the Market News to make the best choices.',
  choices:[
    {
      text:'Sell your wolf pelts (210 Dauns)',
      index:15
    }
  ]
},

{
  title:'Trading Company',
  text:'Now, make 1000 Daun',
  choices:[
    {
      text:'Back to Merchant Guild',
      index:16
    }
  ]
},
{
  title:'Merchant Guild',
  text:'Where to next?',
  choices:[
    {
      text:'Hunter',
      index:17
    },
    {
      text:'Farmer',
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
  title:'Hunter',
  text:'<i>Hunter: What do you need?</i>',
  choices:[
    {
      text:'Buy Animal Pelts',
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
  title:'Hunter',
  text:'Purchased Animal Pelts',
  choices:[
    {
      text:'Back',
      index:33
    }
  ]
},
{
  title:'Hunter',
  text:'Purchased Meat',
  choices:[
    {
      text:'Back',
      index:33
    }
  ]
},
{
  title:'Farmer',
  text:'<i>Farmer: How can I help?</i>',
  choices:[
    {
      text:'Buy Fruit & Veg',
      index:21
    },
    {
      text:'Buy Wheat',
      index:22
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
      index:33
    }
  ]
},
{
  title:'Farmer',
  text:'Purchased Wheats',
  choices:[
    {
      text:'Back',
      index:33
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
      index:33
    }
  ]
},
{
  title:'Blacksmith',
  text:'Purchased Weapons',
  choices:[
    {
      text:'Back',
      index:33
    }
  ]
},
{
  title:'Trading Company',
  text:'',
  choices:[
    {
      text:'Sell Animal Pelts',
      index:27
    },
    {
      text:'Sell Meat',
      index:28
    },
    {
      text:'Sell Fruit & Veg',
      index:29
    },
    {
      text:'Sell Wheat',
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
      index:26
    },
  ]
},
{
  title:'Trading Company',
  text:'Sold Animal Pelts',
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

]




var marketNews = [
{
  headline:'Dry Season',
  article:'Due to lack of rain, wheat is forecasted to be under supplied.',
},
{
  headline:'Pesticide Horror!',
  article:'Supplies of pesticide have found to been tampered! The Royals suspects neighbouring country.',
},
{
  headline:'Tension Rises',
  article:'Tensions with the neighbouring country has risen. <br>Meanwhile, infestations have caused a drop in crop supply',
},
{
  headline:'War Declared!',
  article:'War has broken out with the neighbouring country.',
},
]
