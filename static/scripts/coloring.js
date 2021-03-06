
  console.log("Starting color coding script");
  var QUALITY_LEGENDARY = "#ff8000";
  var QUALITY_EPIC = "#ff8000";
  var QUALITY_RARE = "#0070dd";

  var colors = {
    QUALITY_LEGENDARY : "#ff8000",
    QUALITY_EPIC : "#a335ee",
    QUALITY_RARE : "#0070dd",
    QUALITY_UNCOMMON : "#1eff00",
    QUALITY_COMMON : "#ffffff",
    QUALITY_POOR : "#9d9d9d",
    CLASS_DK : "#C41F3B",
    CLASS_DH : "#A330C9",
    CLASS_DRUID : "#FF7D0A",
    CLASS_HUNTER : "#A9D271",
    CLASS_MAGE : "#40C7EB",
    CLASS_MONK : "#00FF96",
    CLASS_PALADIN : "#F58CBA",
    CLASS_PRIEST : "#FFFFFF",
    CLASS_ROGUE : "#FFF569",
    CLASS_SHAMAN : "#0070DE",
    CLASS_WARLOCK : "#8787ED",
    CLASS_WARRIOR : "#C79C6E"
  };

  var items;
  var items = document.querySelectorAll("p.crole");
  
  var i;
  var healers = 0;
  var tanks = 0;
  var dps = 0;
  var norole =0;
  for (i = 0; i < items.length; i++) {
    items[i].style.textShadow = "#000000 0px 0px 0px";
    if (items[i].innerHTML.trim() == "Tank") {
      items[i].style.color = colors["CLASS_SHAMAN"];
      tanks++;
    }
    else if (items[i].innerHTML.trim() == "Healer") {
      items[i].style.color = colors["CLASS_MONK"];
      healers++;
    }
    else if (items[i].innerHTML.trim() == "DPS") {
      items[i].style.color = colors["CLASS_DK"];
      dps++;
    }
    else {
      items[i].style.color = colors["CLASS_PRIEST"];
      norole++;
    }

  }
  document.getElementById("messagebox").innerHTML = items.length + " players: " + tanks + " tanks, " + healers + " healers, " + dps + " dps";

  var classes;
  var classes = document.querySelectorAll("p.cclass");

  for (i = 0; i < classes.length; i++) {
    classes[i].style.textShadow = "#000000 0px 0px 0px";
    switch(classes[i].innerHTML.trim()){
      case "DK":
        classes[i].style.color = colors["CLASS_DK"];
        break;
      case "Death Knight":
        classes[i].style.color = colors["CLASS_DK"];
        break;
      case "Druid":
        classes[i].style.color = colors["CLASS_DRUID"];
        break;
      case "Hunter":
        classes[i].style.color = colors["CLASS_HUNTER"];
        break;
      case "Mage":
        classes[i].style.color = colors["CLASS_MAGE"];
        break;
      case "Monk":
        classes[i].style.color = colors["CLASS_MONK"];
        break;
      case "Paladin":
        classes[i].style.color = colors["CLASS_PALADIN"];
        break;
      case "Priest":
        classes[i].style.color = colors["CLASS_PRIEST"];
        break;
      case "Rogue":
        classes[i].style.color = colors["CLASS_ROGUE"];
        break;
      case "Shaman":
        classes[i].style.color = colors["CLASS_SHAMAN"];
        break;
      case "Warlock":
        classes[i].style.color = colors["CLASS_WARLOCK"];
        break;
      case "Warrior":
        classes[i].style.color = colors["CLASS_WARRIOR"];
        break;
      default:
        console.log("No match found for " + classes[i].innerHTML.trim())
    };
  };

  var weeklies = document.querySelectorAll("p.cweekly");

  for (i = 0; i < weeklies.length; i++) {
    weeklies[i].style.textShadow = "#000000 0px 0px 0px";

    if (Number(weeklies[i].innerHTML) >= 15) {
      weeklies[i].style.color = colors["QUALITY_LEGENDARY"];
    }
    else if (Number(weeklies[i].innerHTML) >= 10) {
      weeklies[i].style.color = colors["QUALITY_EPIC"];
    }
    else if (Number(weeklies[i].innerHTML) >= 5) {
      weeklies[i].style.color = colors["QUALITY_RARE"];
    }
    else if (Number(weeklies[i].innerHTML) >= 0) {
      weeklies[i].style.color = colors["QUALITY_UNCOMMON"];
    }
    else {
      weeklies[i].style.color = colors["QUALITY_POOR"];
    }
  };
