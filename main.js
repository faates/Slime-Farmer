var saveData = {
  count: 0,
  countPerClick: 1,
  countPerClickCost: 10,
  countClicker: 0,
  countClickerCost: 100
}

function countTwo() {
  saveData.count += saveData.countPerClick
  document.getElementById("totalCount").innerHTML = saveData.count + " Count"
}

function countOne() {
  saveData.count += saveData.countClicker
  document.getElementById("totalCount").innerHTML = saveData.count + " Count"
}

function buyCountTick() {
  if (saveData.count >= saveData.countPerClickCost) {
    saveData.count -= saveData.countPerClickCost
    saveData.countPerClick += 1
    saveData.countPerClickCost += 12
    document.getElementById("totalCount").innerHTML = saveData.count + " Count"
    document.getElementById("countUp").innerHTML = "Upgrade Clicker (Lvl " + saveData.countPerClick + ") Cost: " + saveData.countPerClickCost
  }
}

function buyClicker() {
  if (saveData.count >= saveData.countClickerCost) {
    saveData.count -= saveData.countClickerCost
    saveData.countClickerCost += 22
    saveData.countClicker += 1
    document.getElementById("totalCount").innerHTML = saveData.count + " Count"
    document.getElementById("clickerUp").innerHTML = "Buy a Counter (Lvl " + saveData.countClicker + ") Cost: " + saveData.countClickerCost
  }
}

var mainLoop = window.setInterval(function() {
  countOne()
}, 1000)

/*
var saveThing = JSON.parse(localStorage.getItem("countSave"))
if (saveThing !== null) {
  //saveData = saveThing
}

var saveLoop = window.setInterval(function() {
  localStorage.setItem('countSave', JSON.stringify(saveData))
}, 15000)
*/
