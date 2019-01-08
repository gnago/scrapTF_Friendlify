console.log("IT WORKS");

let $$ = selector => document.querySelector(selector);
let $$All = selector => document.querySelectorAll(selector);

for (let item of [...$$All(".item")])
{
	let dataContent = item.getAttribute("data-content");
	
	let craftIndex = dataContent.indexOf("Craft #") + 6;
	if (craftIndex !== 5)
	{
		if (item.querySelector("div.cratetext") === null)
		{
			let craft = dataContent.substring(craftIndex, dataContent.indexOf("<", craftIndex));
			item.insertAdjacentHTML("beforeend", `<span class='itemCraft'>${craft}</span>`);
		}
	}
	
	let lvlIndex = dataContent.indexOf("Level ") + 6;
	if (lvlIndex !== 5)
	{
		let lvl = dataContent.substring(lvlIndex, dataContent.indexOf("<", lvlIndex));
		item.insertAdjacentHTML("beforeend", `<span class='itemLvl'>Lvl${lvl}</span>`);
	
	}
	
	let boxShadowSize = 0;
	let boxShadowComma = "";
	
	let partIndex = dataContent.indexOf("<span style='color:#CF6A32'>Strange Part:");
	if (partIndex !== -1)
	{
		boxShadowSize++;
		item.style.boxShadow += `${boxShadowComma}0 0 0 ${boxShadowSize*2}pt #66ff66`;
		boxShadowComma = ", ";
	}
	
	let spellIndex = dataContent.indexOf("<span style='color:#8e44ad;'>Halloween Spell:");
	if (spellIndex !== -1)
	{
		boxShadowSize++;
		item.style.boxShadow += `${boxShadowComma}0 0 0 ${boxShadowSize*2}pt fuchsia`;
		boxShadowComma = ", ";
	}
}