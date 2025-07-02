//for slideslow 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let objs = [
    //rogue-like: never end maybe 9?
    {
        "id":"#skul",
        "filedirectory": "skul",
        "title":"Skul: The Hero Slayer",
        "shortdescription": "Exceptional 2D action rogue-like that will keep you engaged!",
        "description": "Guide 'Skul' on his quest to single-handedly take on the Imperial Army and rescue his King from captivity, in an action-packed rogue-lite 2D platformer for the ages.",
        "link": "<a href ='https://store.steampowered.com/app/1147560/Skul_The_Hero_Slayer/'>Steam page</a>",
        "spec":"MINIMUM:<br>OS: Windows 7+<br>Processor: Dual core from Intel or AMD at 2.8 GHz<br>Memory: 4 GB RAM<br>Graphics: Nvidia 450 GTS / Radeon HD 5750 or better<br>DirectX: Version 11<br>Storage: 1 GB available space<br>Additional Notes: DirectX 9.1+ or OpenGL 3.2+",
        "related": ["#tinyrogue", "#dungreed", "#deadcell"],
    },
    {
        "id":"#tinyrogue",
        "filedirectory": "tinyrogue",
        "title":"Tiny Rogue",
        "shortdescription": "A simple topdown fastpaced action rogue-like!",
        "description": "Tiny Rogues is a challenging fantasy rogue-lite bullet-hell dungeon crawler with rpg elements. Build a new unique character each run and fight one monster-infested room after another! Discover unique weapons, collect magical items and level up to become more and more powerful!",
        "link": "<a href ='https://store.steampowered.com/app/2088570/Tiny_Rogues/'>Steam page</a>",
        "spec":"OS: Windows 7<br>Processor: Dual Core 2.00GHz<br>Memory: 4 GB RAM<br>Graphics: Intel HD 520<br>Storage: 300 MB available space",
        "related": ["#skul", "#dungreed", "#deadcell"],
    },
    {
        "id":"#dungreed",
        "filedirectory":"dungreed",
        "title":"Dungreed",
        "shortdescription": "A deep exploration action rogue-like that holds many secret",
        "description": "Dungreed is a 2D side-scrolling action game with 2D Rogue-LITE elements. You become an adventurer exploring a continuously evolving dungeon to prevent the town from being destroyed. Eliminate enemies, use a variety of weapons and magic, eat food, and defeat evil in the dungeon!",
        "link": "<a href ='https://store.steampowered.com/app/753420/Dungreed/'>Steam page</a>",
        "spec":"OS: Windows 7+<br>Processor: Dual core 2.6 ghz +<br>Memory: 1 GB RAM<br>Graphics: nVidia GTS 450 or better<br>Storage: 400 MB available space",
        "related": ["#tinyrogue", "#dungreed", "#deadcell"]
    },
    {
        "id":"#demoncrawl",
        "filedirectory":"demoncrawl",
        "title":"DemonCrawl",
        "shortdescription": "Combine minesweeper and dungeoncrawler, what do you get?",
        "description": "DemonCrawl is a puzzle roguelite that combines the addicting gameplay of Minesweeper with hundreds of unique items, stages, and abilities!",
        "link": "<a href ='https://store.steampowered.com/app/1141220/DemonCrawl/'>Steam page</a>",
        "spec":"OS: Windows 7<br>Memory: 512 MB RAM",
        "related":["#luckbealandlord", "#peglin", "#shotgunking"],
    },
    {
        "id":"#shotgunking",
        "filedirectory":"shotgunking",
        "title":"Shotgun King: The Final Checkmate",
        "shortdescription": "Your king piece versus the world, but with a... shotgun?",
        "description": "Every turn, you may either move your king or shoot at enemy pieces, after what you'll need to move again to reload your shotgun. Avoid checkmate and kill the enemy king to complete the floor. After each floor, you may choose between two random combinations of one upgrade for you and one upgrade for the other side. Choose wisely and keep on winning floors and you just may get your kingdom back.",
        "link": "<a href ='https://store.steampowered.com/app/1972440/Shotgun_King_The_Final_Checkmate/'>Steam page</a>",
        "spec":"OS: Windows 7<br>Processor: yes, you should have one<br>Graphics: you'll need a screen<br>Storage: 80 MB available space<br>Sound Card: if your computer can play sound, you should be good<br>Additional Notes: in theory, if your computer can run Windows, it can run Shotgun King",
        "related":["#luckbealandlord", "#peglin", "#demoncrawl"],
    },
    {
        "id":"#vampiresurvivor",
        "filedirectory":"vampiresurvivor",
        "title":"Vampire Survivor",
        "shortdescription": "This game provides enough dopamine for you to last for days!",
        "description": "Mow down thousands of night creatures and survive until dawn! Vampire Survivors is a gothic horror casual game with rogue-lite elements, where your choices can allow you to quickly snowball against the hundreds of monsters that get thrown at you.",
        "link": "<a href ='https://store.steampowered.com/app/1794680/Vampire_Survivors/'>Steam page</a>",
        "spec":"Requires a 64-bit processor and operating system<br>OS: Windows 10 64bit<br>Processor: x64 architecture with SSE2 instruction set support<br>Memory: 1 GB RAM<br>Graphics: DX11, DX12 capable<br>Storage: 600 MB available space",
        "related":["#peglin", "#shotgunking", "#tinyrogue"],
    },
    {
        "id":"#luckbealandlord",
        "filedirectory":"luckbealandlord",
        "title":"Luck be a Landlord",
        "shortdescription": "Additive slot machine deck-builder rogue-like, luck is the key to victory!",
        "description": "Luck be a Landlord is a roguelike deckbuilder about using a slot machine to earn rent money and defeat capitalism. This game does not contain any real-world currency gambling or microtransactions.",
        "link": "<a href ='https://store.steampowered.com/app/1404850/Luck_be_a_Landlord/'>Steam page</a>",
        "spec":"Processor: 2.0 GHz<br>Memory: 1 GB RAM<br>Storage: 165 MB available space",
        "related":["#shotgunking", "#peglin", "#demoncrawl"],
    },
    {
        "id":"#peglin",
        "filedirectory":"peglin",
        "title":"Peglin",
        "shortdescription": "Traditional pachinko combines with rogue-like progression, also r/dadjokes would love this game",
        "description": "Peglin is a Pachinko Roguelike - Fight enemies by collecting special orbs and popping pegs to deal damage. Acquire special relics that radically change the game and ensure no two runs are the same. Aim carefully to survive in this unique turn-based RPG!",
        "link": "<a href ='https://store.steampowered.com/app/1296610/Peglin/'>Steam page</a>",
        "spec":"Requires a 64-bit processor and operating system<br>OS: Windows 7<br>Processor: 2.0GHz<br>Memory: 2048 MB RAM<br>Graphics: Integrated Graphics<br>Storage: 300 MB available space",
        "related":["#shotgunking", "#luckbealandlord", "#demoncrawl"],
    },
    {
        "id":"#deadcell",
        "filedirectory":"deadcell",
        "title":"Dead Cells",
        "shortdescription": "Side-scroller rogue-like with more traditional action element",
        "description": "Dead Cells is a rogue-lite, metroidvania inspired, action-platformer. You'll explore a sprawling, ever-changing castle... assuming youre able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat. Regular free content updates!",
        "link": "<a href ='https://store.steampowered.com/app/588650/Dead_Cells/'>Steam page</a>",
        "spec":"OS: Windows 7+<br>Processor: Intel i5+<br>Memory: 2 GB RAM<br>Graphics: Nvidia 450 GTS / Radeon HD 5750 or better<br>Storage: 500 MB available space<br>Additional Notes: DirectX 9.1+ or OpenGL 3.2+",
        "related": ["#tinyrogue", "#dungreed", "#skul"]
    },
    //puzzle
    {
        "id":"#babaisyou",
        "filedirectory":"babaisyou",
        "title":"Baba is you",
        "shortdescription": "Incredible puzzle games with mind-twisting puzzle, try to solve without walkthrough",
        "description": "Baba Is You is a puzzle game where the rules you have to follow are present as blocks you can interact with. By manipulating them, you can change how the game works, repurpose things you find in the levels and cause surprising interactions!",
        "link": "<a href ='https://store.steampowered.com/app/736260/Baba_Is_You/'>Steam page</a>",
        "spec":"OS: Windows 7<br>Processor: 2.0 GHz+, 32-bit<br>Memory: 1 GB RAM<br>Graphics: ATI Radeon X1300/NVIDIA GeForce 6600 GT/Intel HD 3000 or better<br>Storage: 200 MB available space<br>Sound Card: Intel High Definition Audio",
        "related":["#patrickparabox", "#cosmicexpress", "#canofwormholes"],
    },
    {
        "id":"#polybridge",
        "filedirectory":"polybridge",
        "title":"Poly Bridge",
        "shortdescription": "Engineer a bridge to get the vehicles across, whether the bridge stays afterward is optional",
        "description": "Unleash your engineering creativity with an engaging and fresh bridge-building simulator with all the bells and whistles. Enjoy hours of physics-based puzzle solving in the Campaign and then jump in the Sandbox to create your own bridge designs and puzzles!",
        "link": "<a href ='https://store.steampowered.com/app/367450/Poly_Bridge/'>Steam page</a>",
        "spec":"OS: Windows 7<br>Processor: 1GHz<br>Memory: 2 GB RAM<br>Graphics: 512Mb<br>DirectX: Version 9.0<br>Storage: 150 MB available space",
        "related":["#terranil", "#babaisyou", "#cosmicexpress"],
    },
    {
        "id":"#canofwormholes",
        "filedirectory":"canofwormholes",
        "title":"Can of Wormholes",
        "shortdescription": "Deep puzzle game with tons of unique interactions!",
        "description": "Push, slice, ingest, flip, and squish worms in this puzzle game in which you play as a little sentient tin can.<br>The puzzles in this game are an exploration of how far the interactions between a seemingly simple collection of objects can be taken. Each puzzle is designed to teach a new idea or interaction that was hidden in plain sight all along.",
        "link": "<a href ='https://store.steampowered.com/app/1295320/Can_of_Wormholes/'>Steam page</a>",
        "spec":"OS: Windows 10<br>Processor: 1.8 GHz<br>Memory: 500 MB RAM<br>Graphics: Intel HD Graphics 3000 or 256 MB NVidia/AMD card<br>Storage: 100 MB available space",
        "related":["#patrickparabox", "#cosmicexpress", "#babaisyou"],
    },
    {
        "id":"#patrickparabox",
        "filedirectory":"patrickparabox",
        "title":"Patricks Parabox",
        "shortdescription": "A puzzle game that messes with perception and logic!",
        "description": "A mind-bending recursive puzzle game about boxes within boxes within boxes within boxes. Learn to use infinity to your advantage as you explore a deep and elegant system.",
        "link": "<a href ='https://store.steampowered.com/app/1260520/Patricks_Parabox/'>Steam page</a>",
        "spec":"OS: Windows 7+<br>Memory: 1 GB RAM<br>Storage: 250 MB available space",
        "related":["#canofwormholes", "#cosmicexpress", "#babaisyou"],
    },
    {
        "id":"#thewitness",
        "filedirectory":"thewitness",
        "title":"The Witness",
        "shortdescription": "3D open world puzzle solver with tons of hidden secrets in plain sight",
        "description": "The Witness is a single-player game in an open world with dozens of locations to explore and over 500 puzzles. This game respects you as an intelligent player and it treats your time as precious. There's no filler; each of those puzzles brings its own new idea into the mix. So, this is a game full of ideas.",
        "link": "<a href ='https://store.steampowered.com/app/210970/The_Witness/'>Steam page</a>",
        "spec":"OS: Windows 7<br>Processor: 1.8GHz<br>Memory: 4 GB RAM<br>Graphics: Intel HD 4000 series<br>DirectX: Version 10<br>Storage: 5 GB available space",
        "related":["#canofwormholes", "#cosmicexpress", "#babaisyou"],
    },
    {
        "id":"#cosmicexpress",
        "filedirectory":"cosmicexpress",
        "title":"Cosmic Express",
        "shortdescription": "A straightforward puzzle game but very difficult!",
        "description": "Cosmic Express is a puzzle game about planning the train route for the world's most awkward space colony, from the minds behind A Good Snowman Is Hard To Build and the art of Tyu from Klondike. It's cute, harder than it looks, and guaranteed to give you hours of frustrating fun across hundreds of levels.",
        "link": "<a href ='https://store.steampowered.com/app/583270/Cosmic_Express/'>Steam page</a>",
        "spec":"OS: Windows 7+<br>Processor: SSE2 instruction set support<br>Memory: 2 GB RAM<br>Graphics: 256 MB NVidia or ATI graphics card, Intel HD Graphics 3000 or better<br>DirectX: Version 9.0c<br>Storage: 500 MB available space",
        "related":["#canofwormholes", "#patrickparabox", "#babaisyou"],
    },
    //mix
    {
        "id":"#inscryption",
        "filedirectory":"inscryption",
        "title":"Inscryption",
        "shortdescription": "Seemingly a rogue-like deckbuilder game, this game hides many unnerving secret",
        "description": "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
        "link": "<a href ='https://store.steampowered.com/app/1092790/Inscryption/'>Steam page</a>",
        "spec":"OS: Windows 7<br>Processor: Intel Core i5-760 (4 * 2800); AMD Athlon II X4 645 AM3 (4 * 3100)<br>Memory: 4 GB RAM<br>Graphics: GeForce GTX 550 Ti (3072 VRAM); Radeon HD 6850 (1024 VRAM)<br>Storage: 3 GB available space",
        "related":["#luckbealandlord", "#thewitness", "#backpackhero"],
    },
    {
        "id":"#caseofthegoldenidol",
        "filedirectory":"caseofthegoldenidol",
        "title":"The Case of the Golden Idol",
        "shortdescription": "A detective puzzle that encourages you to pay attention to every details",
        "description": "A new kind of detective game that allows you to think and investigate freely. Discover clues surrounding 12 strange and gruesome deaths and build your own theory. Pick your suspect, deduce the motive, unmask the awful truth.",
        "link": "<a href ='https://store.steampowered.com/app/1677770/The_Case_of_the_Golden_Idol/'>Steam page</a>",
        "spec":"Requires a 64-bit processor and operating system<br>OS: Windows 7 64 bit<br>Processor: 1.7 GHz Dual Core<br>Memory: 4 GB RAM<br>Graphics: Intel HD Graphics 4600<br>DirectX: Version 12<br>Storage: 400 MB available space",
        "related":["#canofwormholes", "#patrickparabox", "#babaisyou"],
    },
    {
        "id":"#thereisnogame",
        "filedirectory":"thereisnogame",
        "title":"There Is No Game: Wrong Dimension",
        "shortdescription": "You read it. There is no game. Go home.",
        "description": "There is no game. So dont go messing things up by clicking everywhere. You dont want to be kicked out of your video game world, do you? Of course not!",
        "link": "<a href ='https://store.steampowered.com/app/1240210/There_Is_No_Game_Wrong_Dimension/'>Steam page</a>",
        "spec":"OS: Windows 7 SP1+, 10<br>Processor: x86, x64 architecture with SSE2 instruction set support.<br>Memory: 4 GB RAM<br>Graphics: Intel HD 4000<br>DirectX: Version 10<br>Storage: 950 MB available space<br>Sound Card: Built In",
        "related":["#canofwormholes", "#patrickparabox", "#babaisyou"],
    },
    {
        "id":"#terranil",
        "filedirectory":"terranil",
        "title":"Terra Nil",
        "shortdescription": "Can you restore the land and make them prosper?",
        "description": "Terra Nil is an intricate environmental strategy game about transforming a barren wasteland into a thriving, balanced ecosystem. Bring life back to a lifeless world by purifying soil, cleaning oceans, planting trees, and reintroducing wildlife, then leave without a trace.",
        "link": "<a href ='https://store.steampowered.com/app/1593030/Terra_Nil/'>Steam page</a>",
        "spec":"Requires a 64-bit processor and operating system<br>OS: Windows 7 x64<br>Processor: Intel Core i5-4590 / AMD FX-8350<br>Memory: 8 GB RAM<br>Graphics: GeForce GTX 760 / Radeon RX 560X<br>Storage: 2 GB available space",
        "related":["#canofwormholes", "#patrickparabox", "#babaisyou"],
    },
    {
        "id":"#cardshark",
        "filedirectory":"cardshark",
        "title":"Card Shark",
        "shortdescription": "How about a video game teaching you how to cheat in card?",
        "description": "Card Shark is an adventure game full of cunning, intrigue, and delectable deceit. Enter a world where you will need to play your opponents better than you play your cards.<br>Cheat your way to the top of 18th-century French society. Master deceptions using card marking, false shuffles, deck switching, false deals, and more! Use your ill-gotten gains to buy your way into the closed world of high-stakes tables.",
        "link": "<a href ='https://store.steampowered.com/app/1371720/Card_Shark/'>Steam page</a>",
        "spec":"Requires a 64-bit processor and operating system<br>OS: Windows 7<br>Processor: Intel Core i3-530 (2*2930) / AMD A8-3850 (4 * 2900) or equivalent<br>Memory: 4 GB RAM<br>Graphics: Intel HD Graphics / Radeon HD 6550D or equivalent<br>Storage: 2 GB available space<br>Additional Notes: Controller Recommended",
        "related":["#thereisnogame", "#inscryption", "#thewitness"],
    },
    {
        "id":"#backpackhero",
        "filedirectory":"backpackhero",
        "title":"Backpack hero",
        "shortdescription": "Inventory management being the main mechanic of a rogue-like game",
        "description": "Storm the Dungeon! Backpack Hero is the inventory management roguelike! Collect rare items, organize your bag, and vanquish your foes!<br>Backpack Hero is a twist on your standard deck-building roguelike! It isn't just about what you carry, but how you organize items within your bag! Their placement has huge effects on their power! You can move items to increase their power!",
        "link": "<a href ='https://store.steampowered.com/app/1970580/Backpack_Hero/'>Steam page</a>",
        "spec":"OS: Windows 7 (SP1+), Windows 10 and Windows 11<br>Processor: 1.1 GHz Processor<br>Memory: 1 GB RAM<br>Graphics: DX10, DX11, DX12 capable.<br>DirectX: Version 10<br>Storage: 250 MB available space",
        "related": ["#tinyrogue", "#dungreed", "#skul"],
    },
    //leave this shit here!!
    {
        "id":"",
        "title":"",
        "shortdescription": "",
        "description": "",
        "spec":"",
    },

]

function getInfoById(id)
{
    let obj = {};
    for (let i = 0; i < objs.length; i++)
    {
        if (objs[i].id == id)
        {
            obj = Object.assign({}, objs[i]);
            break;
        }
    }
    document.getElementById("title").innerHTML = obj.title;
    document.getElementById("subtitle").innerHTML = obj.title;
    document.getElementById("shortdescription").innerHTML = obj.shortdescription;
    document.getElementById("link").innerHTML = obj.link;
    document.getElementById("description").innerHTML = obj.description;
    document.getElementById("spec").innerHTML = obj.spec;

    for (let i = 0; i < obj.related.length; i++)
    {
        let sub_obj = {};
        for (let j = 0; j < objs.length; j++)
        {
            if (objs[j].id == obj.related[i])
            {
                sub_obj = Object.assign({}, objs[j]);
                break;
            }
        }
        let tempLink = 'subPage.html' + sub_obj.id;
        let tempLinkPlaceHolder = document.getElementById("link_" + i);
        tempLinkPlaceHolder.setAttribute("href",tempLink);
        document.getElementById("related_title_" + i).innerHTML = sub_obj.title;
        document.getElementById("related_description_" + i).innerHTML = sub_obj.description;
        document.getElementById("icon_"+i).src ="img/" + sub_obj.filedirectory + "/icon.jpg";
    }
    //img gallery
    document.getElementById("banner").style.backgroundImage = "url(img/" + obj.filedirectory + "/banner.jpg)";
    
    for (let i = 0; i < 6; i++)
    {
        document.getElementById("slide"+i).src = "img/" + obj.filedirectory + "/slide_" + i + ".jpg";
        document.getElementById("big_slide"+i).src = "img/" + obj.filedirectory + "/slide_" + i + ".jpg";
    }
}
//call on entrance
getInfoById(window.location.hash);

function reloadPage()
{
    window.location.reload();
}
