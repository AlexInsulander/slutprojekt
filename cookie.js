var cookies = 0;
var cursorCost = 10;
var grandmaCost = 100;

class item {
  constructor(name, cost, amount, cps) {
    this.name = name;
    this.cost = cost;
    this.amount = amount;
    this.amount = cps;
  }
}

var cursor = new item("cursors", 10, 0, 0.1);
var grandma = new item("grandma", 100, 0, 1);
var farm = new item("farm", 10, 0, 10);
var mine = new item("mine", 10, 0, 100);
var factory = new item("factory", 10, 0, 1000);
var bank = new item("bank", 10, 0, 10000);

var items = [cursor, grandma, farm, mine, factory, bank];
function buyCursor(item, itemCost) {
  if (cookies >= itemCost) {
    cookies = cookies - itemCost;
    item = item + 1;
    itemCost = Math.round(itemCost * 1.15);

    document.getElementById("cookies").innerHtml = cookies;
    document.getElementById(`${itemCost}`).innerHtml = itemCost;
    document.getElementById(`${item}`).innerHtml = item;
  }
}

function addToCookies(amount) {
  cookies = cookies + amount;
  document.getElementById("cookies").innerHTML = cookies;
}

//setInterval(function() (

//) )
