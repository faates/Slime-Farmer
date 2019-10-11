var saveData = {
  count: 0,
  jellies: 0,
  countPerClick: 1,
  countPerClickCost: 10,
  countClicker: 1,
  countClickerCost: 100
}

function countTwo() {
  saveData.count += saveData.jellies * saveData.countClicker
  saveData.jellies = 0
  document.getElementById("Green Jellies").innerHTML = saveData.jellies + " Green Jellies"
  document.getElementById("totalCount").innerHTML = "$" + saveData.count
}

function countOne() {
  saveData.jellies += saveData.countPerClick
  document.getElementById("Green Jellies").innerHTML = saveData.jellies + " Green Jellies"
}

function buyCountTick() {
  if (saveData.count >= saveData.countPerClickCost) {
    saveData.count -= saveData.countPerClickCost
    saveData.countClicker += 1
    saveData.countPerClickCost = Math.floor(saveData.countPerClickCost * 1.75)
    document.getElementById("totalCount").innerHTML = '$' + saveData.count
    document.getElementById("countUp").innerHTML = "Upgrade Jelly Refinery (Lvl: " + saveData.countClicker + ") Cost: " + saveData.countPerClickCost
  }
}

function buyClicker() {
  if (saveData.count >= saveData.countClickerCost) {
    saveData.count -= saveData.countClickerCost
    saveData.countClickerCost = Math.floor(saveData.countClickerCost * 1.95)
    saveData.countPerClick += 1
    document.getElementById("totalCount").innerHTML = "$"saveData.count
    document.getElementById("clickerUp").innerHTML = "Buy a Green Slime (No: " + saveData.countPerClick + ") Cost: " + saveData.countClickerCost
  }
}

var mainLoop = window.setInterval(function() {
  countOne()
}, 1000)

//Saves are commented out for a little while until I have a more complete 'thing'
/*
var saveThing = JSON.parse(localStorage.getItem("countSave"))
if (saveThing !== null) {
  //saveData = saveThing
}

var saveLoop = window.setInterval(function() {
  localStorage.setItem('countSave', JSON.stringify(saveData))
}, 15000)
*/
