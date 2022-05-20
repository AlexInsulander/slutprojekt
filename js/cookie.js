var cookies = 0;
var cookiesReal = 0;
let itemList = document.getElementById("itemList");
let upgradeList = document.getElementById("upgradeList");
var maxCookies = 0;
var highestItem = 0;

class item {
  constructor(name, cost, amount, cps, reveal, upgrades) {
    this.name = name;
    this.cost = cost;
    this.ogCost = cost;
    this.amount = amount;
    this.cps = cps;
    this.reveal = reveal;
    this.realCost = convertToMillion(cost);
    this.upgrades = upgrades;
  }
}

class upgrade {
  constructor(itemName, name, description, cost, reveal, img) {
    this.itemName = itemName;
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.reveal = reveal;
    this.img = img;
    this.bought = false;
  }
}

var base = new upgrade("base", "base", "", 1, false);

var cursor1 = new upgrade(
  "cursor1",
  "Reinforced index finger",
  "",
  100,
  false,
  "/images/cursor.png"
);
var cursor2 = new upgrade(
  "cursor2",
  "Carpal tunnel prevention cream",
  "",
  500,
  false,
  "/images/cursor.png"
);
var cursor3 = new upgrade(
  "cursor3",
  "Ambidextrous",
  "",
  10000,
  false,
  "/images/cursor.png"
);
var cursor4 = new upgrade(
  "cursor4",
  "Thousand fingers",
  "",
  100000,
  false,
  "/images/cursor.png"
);
var cursor5 = new upgrade(
  "cursor5",
  "Million fingers",
  "",
  10000000,
  false,
  "/images/cursor.png"
);

var grandma1 = new upgrade(
  "grandma1",
  "Forwards from grandma",
  "",
  1000,
  false,
  "/images/grandma.png"
);
var grandma2 = new upgrade(
  "grandma2",
  "Steel-plated rolling pins",
  "",
  5000,
  false,
  "/images/grandma.png"
);
var grandma3 = new upgrade(
  "grandma3",
  "Lubricated dentures",
  "",
  50000,
  false,
  "/images/grandma.png"
);
var grandma4 = new upgrade(
  "grandma4",
  "Prune juice",
  "",
  5000000,
  false,
  "/images/grandma.png"
);
var grandma5 = new upgrade(
  "grandma5",
  "Double thick glasses",
  "",
  500000000,
  false,
  "/images/grandma.png"
);

var farm1 = new upgrade(
  "farm1",
  "Cheap hoes",
  "",
  11000,
  false,
  "/images/farm.png"
);
var farm2 = new upgrade(
  "farm2",
  "Fertilizer",
  "",
  55000,
  false,
  "/images/farm.png"
);
var farm3 = new upgrade(
  "farm3",
  "Cookie trees",
  "",
  550000,
  false,
  "/images/farm.png"
);
var farm4 = new upgrade(
  "farm4",
  "Genetically-modified cookies",
  "",
  55000000,
  false,
  "/images/farm.png"
);
var farm5 = new upgrade(
  "farm5",
  "Gingerbread scarecrows",
  "",
  5500000000,
  false,
  "/images/farm.png"
);

var mine1 = new upgrade(
  "mine1",
  "Sugar gas",
  "",
  120000,
  false,
  "/images/mine.png"
);
var mine2 = new upgrade(
  "mine2",
  "Mega drill",
  "",
  600000,
  false,
  "/images/mine.png"
);
var mine3 = new upgrade(
  "mine3",
  "Ultra drill",
  "",
  6000000,
  false,
  "/images/mine.png"
);
var mine4 = new upgrade(
  "mine4",
  "Ultima drill",
  "",
  600000000,
  false,
  "/images/mine.png"
);
var mine5 = new upgrade(
  "mine5",
  "H-bomb mining",
  "",
  60000000000,
  false,
  "/images/mine.png"
);

var factory1 = new upgrade(
  "factory1",
  "Sturdier conveyor belts",
  "",
  1300000,
  false,
  "/images/factory.png"
);
var factory2 = new upgrade(
  "factory2",
  "Child labor",
  "",
  6500000,
  false,
  "/images/factory.png"
);
var factory3 = new upgrade(
  "factory3",
  "Sweatshop",
  "",
  65000000,
  false,
  "/images/factory.png"
);
var factory4 = new upgrade(
  "factory4",
  "Radium reactors",
  "",
  6500000000,
  false,
  "/images/factory.png"
);
var factory5 = new upgrade(
  "factory5",
  "Recombobulators",
  "",
  650000000000,
  false,
  "/images/factory.png"
);

var bank1 = new upgrade(
  "bank1",
  "Taller tellers",
  "",
  14000000,
  false,
  "/images/bank.png"
);
var bank2 = new upgrade(
  "bank2",
  "Scissor-resistant credit cards",
  "",
  70000000,
  false,
  "/images/bank.png"
);
var bank3 = new upgrade(
  "bank3",
  "Acid proff vaults",
  "",
  700000000,
  false,
  "/images/bank.png"
);
var bank4 = new upgrade(
  "bank4",
  "Chocolate coins",
  "",
  70000000000,
  false,
  "/images/bank.png"
);
var bank5 = new upgrade(
  "bank5",
  "Exponential interest rates",
  "",
  7000000000000,
  false,
  "/images/bank.png"
);

var temple1 = new upgrade(
  "temple1",
  "Golden idols",
  "",
  200000000,
  false,
  "/images/temple.png"
);
var temple2 = new upgrade(
  "temple2",
  "Sacrifices",
  "",
  1000000000,
  false,
  "/images/temple.png"
);
var temple3 = new upgrade(
  "temple3",
  "Delicius blessing",
  "",
  10000000000,
  false,
  "/images/temple.png"
);
var temple4 = new upgrade(
  "temple4",
  "Sun festival",
  "",
  1000000000000,
  false,
  "/images/temple.png"
);
var temple5 = new upgrade(
  "temple5",
  "Enlarged pantheon",
  "",
  100000000000000,
  false,
  "/images/temple.png"
);

var tower1 = new upgrade(
  "tower1",
  "Pointier hats",
  "",
  3300000000,
  false,
  "/images/tower.png"
);
var tower2 = new upgrade(
  "tower2",
  "Beardlier beards",
  "",
  16500000000,
  false,
  "/images/tower.png"
);
var tower3 = new upgrade(
  "tower3",
  "Ancient grimoires",
  "",
  165000000000,
  false,
  "/images/tower.png"
);
var tower4 = new upgrade(
  "tower4",
  "Kitchen curses",
  "",
  16500000000000,
  false,
  "/images/tower.png"
);
var tower5 = new upgrade(
  "tower5",
  "School of sorcery",
  "",
  1650000000000000,
  false,
  "/images/tower.png"
);

var cursor = new item("cursor", 15, 0, 0.1, true, [
  cursor1,
  cursor2,
  cursor3,
  cursor4,
  cursor5,
]);
var grandma = new item("grandma", 100, 0, 1, true, [
  grandma1,
  grandma2,
  grandma3,
  grandma4,
  grandma5,
]);
var farm = new item("farm", 1100, 0, 8, false, [
  farm1,
  farm2,
  farm3,
  farm4,
  farm5,
]);
var mine = new item("mine", 12000, 0, 47, false, [
  mine1,
  mine2,
  mine3,
  mine4,
  mine5,
]);
var factory = new item("factory", 130000, 0, 260, false, [
  factory1,
  factory2,
  factory3,
  factory4,
  factory5,
]);
var bank = new item("bank", 1400000, 0, 1400, false, [
  bank1,
  bank2,
  bank3,
  bank4,
  bank5,
]);
var temple = new item("temple", 20000000, 0, 7800, false, [
  temple1,
  temple2,
  temple3,
  temple4,
  temple5,
]);
var tower = new item("tower", 330000000, 0, 44000, false, [
  tower1,
  tower2,
  tower3,
  tower4,
  tower5,
]);

var allItems = [cursor, grandma, farm, mine, factory, bank, temple, tower];

const revealedUpgrades = [base];
const allUpgrades = [
  cursor1,
  cursor2,
  cursor3,
  cursor4,
  cursor5,
  grandma1,
  grandma2,
  grandma3,
  grandma4,
  grandma5,
  farm1,
  farm2,
  farm3,
  farm4,
  farm5,
  mine1,
  mine2,
  mine3,
  mine4,
  mine5,
  factory1,
  factory2,
  factory3,
  factory4,
  factory5,
  bank1,
  bank2,
  bank3,
  bank4,
  bank5,
  temple1,
  temple2,
  temple3,
  temple4,
  temple5,
  tower1,
  tower2,
  tower3,
  tower4,
  tower5,
];

function buyItem(item) {
  if (cookies >= item.cost) {
    cookies = cookies - item.cost;
    item.amount = item.amount + 1;
    item.cost = Math.round(item.cost * 1.15);
    cookiesReal = convertToMillion(Math.floor(cookies));
    item.realCost = convertToMillion(item.cost);

    document.getElementById("cookies").innerHTML = cookiesReal;
    document.getElementById(item.name + "-cost").innerHTML = item.realCost;
    document.getElementById(item.name + "-amount").innerHTML = item.amount;
    document.getElementById("cps").innerHTML = convertToMillion(Cps());

    var i = allItems.indexOf(item);

    if (item.amount == 1) {
      if (revealedUpgrades.length == 1) {
        revealedUpgrades.splice(1, 0, item.upgrades[0]);
        upgradeList.insertAdjacentHTML(
          "beforeend",
          htmlAddUpgrade(item.upgrades[0])
        );
      } else if (revealedUpgrades.length > 1)
        for (let j = revealedUpgrades.length - 1; j > -1; j--) {
          if (item.upgrades[0].cost >= revealedUpgrades[j].cost) {
            revealedUpgrades.splice(j + 1, 0, item.upgrades[0]);
            upgradeList.innerHTML = "";
            for (let l = 1; l < revealedUpgrades.length; l++) {
              upgradeList.insertAdjacentHTML(
                "beforeend",
                htmlAddUpgrade(revealedUpgrades[l])
              );
            }
            break;
          }
        }
    }

    if (item.amount == 5) {
      for (let j = revealedUpgrades.length - 1; j > -1; j--) {
        if (item.upgrades[1].cost >= revealedUpgrades[j].cost) {
          revealedUpgrades.splice(j + 1, 0, item.upgrades[1]);
          upgradeList.innerHTML = "";
          for (let l = 1; l < revealedUpgrades.length; l++) {
            upgradeList.insertAdjacentHTML(
              "beforeend",
              htmlAddUpgrade(revealedUpgrades[l])
            );
          }
          break;
        }
      }
    } else if (item.amount == 25) {
      for (let j = revealedUpgrades.length - 1; j > -1; j--) {
        if (item.upgrades[2].cost >= revealedUpgrades[j].cost) {
          revealedUpgrades.splice(j + 1, 0, item.upgrades[2]);
          upgradeList.innerHTML = "";
          for (let l = 1; l < revealedUpgrades.length; l++) {
            upgradeList.insertAdjacentHTML(
              "beforeend",
              htmlAddUpgrade(revealedUpgrades[l])
            );
          }
          break;
        }
      }
    } else if (item.amount == 50) {
      for (let j = revealedUpgrades.length - 1; j > -1; j--) {
        if (item.upgrades[3].cost >= revealedUpgrades[j].cost) {
          revealedUpgrades.splice(j + 1, 0, item.upgrades[3]);
          upgradeList.innerHTML = "";
          for (let l = 1; l < revealedUpgrades.length; l++) {
            upgradeList.insertAdjacentHTML(
              "beforeend",
              htmlAddUpgrade(revealedUpgrades[l])
            );
          }
          break;
        }
      }
    } else if (item.amount == 100) {
      for (let j = revealedUpgrades.length - 1; j > -1; j--) {
        if (item.upgrades[4].cost >= revealedUpgrades[j].cost) {
          revealedUpgrades.splice(j + 1, 0, item.upgrades[4]);
          upgradeList.innerHTML = "";
          for (let l = 1; l < revealedUpgrades.length; l++) {
            upgradeList.insertAdjacentHTML(
              "beforeend",
              htmlAddUpgrade(revealedUpgrades[l])
            );
          }
          break;
        }
      }
    }
  }
}

function buyUpgrade(upgrade) {
  if (cookies >= upgrade.cost) {
    cookies = cookies - upgrade.cost;
    upgrade.reveal = false;
    upgrade.bought = true;
    document.getElementById("cps").innerHTML = convertToMillion(Cps());

    i = revealedUpgrades.indexOf(upgrade);
    revealedUpgrades.splice(i, 1);
    upgradeList.innerHTML = "";
    for (let l = 1; l < revealedUpgrades.length; l++) {
      upgradeList.insertAdjacentHTML(
        "beforeend",
        htmlAddUpgrade(revealedUpgrades[l])
      );
    }
  }
}

function convertToMillion(number) {
  return Math.abs(Number(number)) >= 1.0e15
    ? (Math.abs(Number(number)) / 1.0e915).toFixed(1) + " Q"
    : Math.abs(Number(number)) >= 1.0e12
    ? (Math.abs(Number(number)) / 1.0e12).toFixed(1) + " T"
    : Math.abs(Number(number)) >= 1.0e9
    ? (Math.abs(Number(number)) / 1.0e9).toFixed(1) + " B"
    : Math.abs(Number(number)) >= 1.0e6
    ? (Math.abs(Number(number)) / 1.0e6).toFixed(1) + " M"
    : Math.abs(Number(number)) >= 1.0e3
    ? (Math.abs(Number(number)) / 1.0e3).toFixed(1) + " K"
    : Math.abs(Number(number));
}

function Cps() {
  var cps = 0;
  var multiplier = 1;
  for (let i = 0; i < allItems.length; i++) {
    multiplier = 1;

    for (let d = 0; d < 5; d++) {
      if (allItems[i].upgrades[d].bought == true) {
        multiplier *= 2;
      }
    }

    cps += allItems[i].cps * allItems[i].amount * multiplier;
  }
  return Math.round(cps * 10) / 10;
}

function addToCookies(amount) {
  cookies = cookies + amount;
  cookiesReal = convertToMillion(Math.floor(cookies));
  document.getElementById("cookies").innerHTML = cookiesReal;
}

setInterval(function () {
  cookies += Cps() / 20;
  cookiesReal = convertToMillion(Math.floor(cookies));
  document.getElementById("cookies").innerHTML = cookiesReal;
  if (cookies > maxCookies) {
    maxCookies = cookies;
    for (let i = 0; i < allItems.length - 2; i++) {
      if (maxCookies >= allItems[i].ogCost && allItems[i + 2].reveal == false) {
        allItems[i + 2].reveal = true;
        itemList.insertAdjacentHTML("beforeend", htmlAddItem(i + 2));
      }
    }
  }

  for (let i = 0; i < allItems.length; i++) {
    if (cookies < allItems[i].cost && allItems[i].reveal == true) {
      document.getElementById(allItems[i].name).style.filter =
        "brightness(50%)";
    } else if (cookies >= allItems[i].cost && allItems[i].reveal == true) {
      document.getElementById(allItems[i].name).style.filter =
        "brightness(100%)";
    }
  }

  for (let i = 1; i < revealedUpgrades.length; i++) {
    if (cookies < revealedUpgrades[i].cost) {
      document.getElementById(revealedUpgrades[i].itemName).style.filter =
        "brightness(50%)";
    } else if (cookies >= revealedUpgrades[i].cost) {
      document.getElementById(revealedUpgrades[i].itemName).style.filter =
        "brightness(100%)";
    }
  }
}, 50);

function htmlAddItem(i) {
  let itemHtml = `
    <button class="item" id="${allItems[i].name}" onclick="buyItem(${allItems[i].name})">
      <img class="item-image" src="${allItems[i].upgrades[1].img}" alt="${allItems[i].name}">
      <div class="item-cost">
        <p class="item-title">${allItems[i].name}</p>
        <div class="item-cookies">
          <span class="cost" id="${allItems[i].name}-cost">${allItems[i].realCost}</span>
        </div>
      </div>
      <div class="grow"></div>
      <span class="amount" id="${allItems[i].name}-amount">0</span>
    </button>
      `;
  return itemHtml;
}

function htmlAddUpgrade(upgrade) {
  let itemHtml = `
  <div class="upgrade" id="${upgrade.itemName}" onclick="buyUpgrade(${
    upgrade.itemName
  })">
    <div class="x2">
      <img class="upgrade-image" src="${upgrade.img}" alt="${
    upgrade.itemName}-upgrade"><p id="x2">x 2</p>
    </div>
    <div class="upgrade-cost">
      ${convertToMillion(upgrade.cost)}
    </div
  </div>
  `;
  return itemHtml;
}
