function pathFix(str) {//removes everything from the path up till the name of the page
  let index = 0;
  let tempDifficulty = "";
  index = 1 + str.lastIndexOf("/");
  tempDifficulty = str.substring(index);
  return tempDifficulty;
}//checks which page the user is on
var page = pathFix(window.location.pathname); // https://www.w3schools.com/js/js_window_location.asp
console.log(page);
//booleans for which page the user is on
var tutorial = (page == "tutorial.html")
var main = (page == "main.html")
var instruction = (page == "instruction.html")

var state;
var height = 8;
var width = 12;
var pigArray = [];//array of all pig locations

let number = 0;//difficulty of pigs as used in genPigs()

/*Sprites/Images from:

- Mineraft/Mojang/Microsoft https://minecraft.novaskin.me/resourcepacks#default/assets/minecraft/models/block, 

- Angry Birds
https://www.spriters-resource.com/mobile/angrybirds/sheet/66438/

- Clash Royale/Supercell/Tencent
https://clashroyale.fandom.com/wiki/Royal_Hogs
*/

let andesite = '<img src="images/andesite.png">';
let sand = '<img src="images/sand.png">';
let cobble = '<img src="images/cobblestone.png">';
let dirt = '<img src="images/dirt.png">';
let grass = '<img src="images/grass.png">';
let gravel = '<img src="images/gravel.png">';
let oak = '<img src="images/oakplank.png">';
let endstone = '<img src="images/endstone.png">'
let sandstone = '<img src="images/sandstone.png">';
let endbeam = '<img src="images/endbeam.png">';
let soulsand = '<img src="images/soulsand.png">';
let prismarine = '<img src="images/prismarine.png">';
let darkprismarine = '<img src="images/darkprismarine.png">';
let brick = '<img src="images/brick.png">';
let redstone = '<img src="images/redstone.png">';

let blackstone = '<img src="images/blackstone.png">';
let mud = '<img src="images/mud.png">';


let magma = '<img src="images/magmaimage.png">';
let path = '<img src="images/path.png">';
let s = '<img src="images/sculksensor.png">';
let cs = '<img src="images/calibratedSculkSensor1.png">';
let shrieker = '<img src="images/sculkshreiker.png">';

let boom = '<img src="images/sonicBoom.gif">';
let boom2 = '<img src="images/echoBoom.gif">';
let boom1 = '<img src="images/sculkSoul.gif">';
let portal = '<img src="images/portal.gif">';
let portals = 0;//portal quantity
//portal positions which are set to arbitrary values
let xp1 = 1000;
let xp2 = 1000;
let yp2 = 1000;
let yp1 = 1000;
var p;//path
var e;//background
let bedrock = '<img src="images/bedrock.png">';
let blackconcretepowder = '<img src="images/blackconcretepowder.png">';
let coarsedirt = '<img src="images/coarsedirt.png">';
let mycelium = '<img src="images/mycelium.png">';
let netherrack = '<img src="images/netherrack.png">';
let obsidian = '<img src="images/obsidian.png">';
let oldnetherrack = '<img src="images/oldnetherrrack.png">';
let redsand = '<img src="images/redsand.png">';

var snow = '<img src="images/snowball.png">';
var snowier = '<img src="images/snowball1.png">';
var snowiest = '<img src="images/snowball2.png">';
var ice = '<img src="images/ice2.png">';
//A random number between 0 and 1 is generated and based on the value a background and path image are selected
let background = Math.random(0, 1);
console.log(background);
if(tutorial){
  p = gravel;
  e = grass;
}
else{
  if(background <.1){
    p = bedrock;
    e = blackconcretepowder;
  }
    else if(background < .15){
      p = blackconcretepowder;
      e = endstone;
    }
    else if(background < .2){
      p = oak;
      e = cobble;
  }
  else if(background < .25){
    p = path;
    e = grass;
  }
  else if(background < .3){
    p = obsidian;
    e = netherrack;
  }
  else if(background < .35){
    p = prismarine;
    e = darkprismarine;
  }
  else if(background < .4){
    p = redsand;
    e = sand;
  }
  else if(background < .45){
    p = coarsedirt;
    e = mycelium;
  }
  else if(background < .5){
    p = dirt;
    e = cobble;
  }
  else if(background < .55){
    p = oak;
    e = brick;
  }
  else if(background < .6){
    p = redstone;
    e = sandstone;
  }
  else if(background < .65){
    p = blackconcretepowder;
    e = soulsand;
  }
  else if(background < .7){
    p = path;
    e = coarsedirt;
  }
  else if(background < .75){
    p = path;
    e = dirt;
  }
  else if(background < .8){
    p = path;
    e = gravel;
  }
  else if(background < .85){
    p = netherrack;
    e = soulsand;
  }
  else if(background < .9){
    p = netherrack;
    e = blackconcretepowder;
  }
  else if(background < .99){
    p = sand;
    e = sandstone;
  }
  else{
    p = gravel;
    e = bedrock;
  }
  
}

let l = '<img src="images/snowball.png">';
let f = '<img src="images/demon.png">';//left player
let m = '<img src="images/observer.png">';//top player
let fire = '<img src="images/fire.png">';
let fire1 = '<img src="images/fire1.gif">';
let fire2 = '<img src="images/fire2.gif">';
let fire3 = '<img src="images/fire3.gif">';
let anvil = '<img src="images/anvil.png">';


let E = '<img src="images/Empty.png">';;
let pig = '<img src="images/rsz_pig.png">';
let a = '<img src="images/rsz_avgpig.png">';//healthy normal pig(bad var name)
var r1 = '<img src="images/royalePig.png">';
var r2 = '<img src="images/damagedPig.png">';
var r3 = '<img src="images/moreDamagedPig.png">';
var r4 = '<img src="images/dyingPig.png">';
var r5 = '<img src="images/cookedPig.png">';
let poof = '<img src="images/poof.png">'; 
let poof1 = '<img src="images/poof1.png">';
let poof2 = '<img src="images/poof2.png">';
let puffPig = '<img src="images/Puffed_Pig.png">';
let king = '<img src="images/pigKing.png">';
let king0 = '<img src="images/SadKing.gif">';
let king1 = '<img src="images/damagedKing.png">';
let king2 = '<img src="images/veryDamagedKing.png">';
let burner = '<img src="images/burner.png">';
let crafter = '<img src="images/crafter.png">';
let dropper = '<img src="images/player.png">';
let dropper2 = '<img src="images/player1.png">';
let dropper3 = '<img src="images/player2.png">';
let dropper4 = '<img src="images/player3.png">';

let mustache1 = '<img src="images/mustache1.png">';
let mustache2 = '<img src="images/mustache2.png">';
let mustache3 = '<img src="images/mustache3.png">';
let dispenser1 = '<img src="images/breaker.png">';
let dispenser2 = '<img src="images/breaker1.png">';
let dispenser3 = '<img src="images/breaker2.png">';
let b1 = '<img src="images/block1.png">';
let b2 = '<img src="images/block2.png">';
let b3 = '<img src="images/block3.png">';
let b4 = '<img src="images/block4.png">';
var rock1 = '<img src="images/rock.png">';
var rock2 = '<img src="images/rock1.png">';
var rock3 = '<img src="images/rock2.png">';
let s1 = '<img src="images/soldier1.png">';
let s2 = '<img src="images/soldier2.png">';
let s3 = '<img src="images/soldier3.png">';
let pearl = '<img src="images/pearl.png">';
let crystal = '<img src="images/crystal.png">';
let star = '<img src="images/star.png">';
let o = pearl;//shortens the length so its easier to read
let c1 = '<img src="images/crate1.png">';
let c2 = '<img src="images/crate2.png">';
let c3 = '<img src="images/crate3.png">';
let c4 = '<img src="images/crate4.png">';
let c5 = '<img src="images/crate5.png">';
let c6 = '<img src="images/crate6.png">';
let c7 = '<img src="images/crate7.png">';
let c8 = '<img src="images/crate8.png">';
let c9 = '<img src="images/crate10.png">';
let c10 = '<img src="images/crate11.png">';
let boss = false;//boss mode boolean
let cake = '<img src="images/cake.png">';
let monster = '<img src="images/monsterPig.gif">';
let flamer1 = '<img src="images/burner.png">';
let flamer2 = '<img src="images/burnt.png">';
let flamer3 = '<img src="images/cooked.png">';

//A random number between 0 and 1 is generated and based on the value a map is generated
let map = Math.random(0, 1);
console.log(map);
var anvilArray = [];//array of anvil positions
if(main){
  if(map < 0.25){
    state = [//bottom
      [p, p, e, e, e, e, e, e, e, e, e, e],
      [e, p, p, e, e, e, e, e, e, p, p, p],
      [e, e, p, e, e, e, e, e, p, p, e, p],
      [e, e, p, e, p, p, p, e, p, e, e, p],
      [e, e, p, e, p, e, p, e, p, e, e, p],
      [e, e, p, e, p, e, p, e, p, e, e, p],
      [e, e, p, p, p, e, p, p, p, e, e, p],
      [e, e, e, e, e, e, e, e, e, e, e, p]
    ];
    state1 = [// middle
      [cake, E, E, m, E, E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E],
      [f, E, E, E, E, E, E, E, E, E, b2, E],
      [E, E, E, E, E, E, E, b3, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E],
      [E, E, E, b1, E, E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E]
    ];
  }
  else if(map<0.5){
    state = [//bottom
      [p, p, e, e, e, e, e, e, e, e, e, e],
      [e, p, p, e, e, p, p, p, e, e, e, e],
      [e, e, p, e, e, p, e, p, p, p, p, e],
      [e, e, p, e, p, p, e, e, e, e, p, e],
      [e, e, p, e, p, e, e, e, e, e, p, e],
      [e, e, p, e, p, e, e, e, e, e, p, p],
      [e, e, p, p, p, e, e, e, e, e, e, p],
      [e, e, e, e, e, e, e, e, e, e, e, p]
    ];
    state1 = [// middle
      [cake, E, E, m, E, E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E],
      [f, E, E, E, E, E, b1, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, b1],
      [E, E, E, E, E, b1, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E]
    ];
  }
  else if(map<0.75){
    state = [//bottom
      [p, p, e, e, e, e, e, e, e, p, p, p],
      [e, p, p, e, e, e, e, e, e, p, e, p],
      [e, e, p, e, p, p, p, e, e, p, e, p],
      [e, e, p, e, p, e, p, e, e, p, e, p],
      [e, e, p, e, p, e, p, e, e, p, e, p],
      [e, e, p, p, p, e, p, p, e, p, e, p],
      [e, e, e, e, e, e, e, p, p, p, e, p],
      [e, e, e, e, e, e, e, e, e, e, e, p]
    ];
    state1 = [// middle
      [cake, E, E, m, E, E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, b2, E],
      [f, E, E, E, E, E, E, b1, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E],
      [E, E, E, E, E, b1, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E]
    ];
  }
  else if(map<1){
    state = [//bottom
      [p, p, e, e, e, e, e, e, e, e, e, e],
      [e, p, p, e, e, e, e, e, e, e, e, e],
      [e, e, p, e, e, p, p, p, e, e, e, e],
      [e, e, p, e, e, p, e, p, e, p, p, p],
      [e, e, p, e, e, p, e, p, e, p, e, p],
      [e, e, p, p, e, p, e, p, e, p, e, p],
      [e, e, e, p, p, p, e, p, p, p, e, p],
      [e, e, e, e, e, e, e, e, e, e, e, p]
    ];
    state1 = [// middle
      [cake, E, E, m, E, E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E],
      [f, E, E, E, E, E, E, E, E, E, E, b3],
      [E, E, E, E, E, E, b1, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E],
      [E, E, E, E, b2, E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E, E, E, E, E, E]
    ];
  }
  state2 = [ //top
    [o, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E]
  ];
}
else{
  state = [
    [p, p, e, e, e, e, e, e, e, e, e, e],
    [e, p, p, e, e, e, e, e, e, e, e, e],
    [e, e, p, p, p, e, e, e, e, e, e, e],
    [e, e, e, e, p, e, e, e, e, e, e, e],
    [e, e, e, e, p, e, p, p, p, e, e, e],
    [e, e, e, e, p, p, p, e, p, p, p, e],
    [e, e, e, e, e, e, e, e, e, e, p, p],
    [e, e, e, e, e, e, e, e, e, e, e, p]
  ];
  state1 = [
    [E, E, E, m, e, e, e, e, e, E, E, E],
    [E, E, E, e, e, e, e, e, e, E, E, E],
    [f, e, E, E, E, E, E, E, E, E, E, E],
    [E, e, E, E, E, E, E, E, E, E, E, E],
    [E, e, E, E, E, E, E, E, E, E, E, E],
    [E, e, E, E, E, E, E, E, E, E, E, E],
    [E, e, E, E, E, E, E, E, E, E, E, E],
    [E, E, e, e, e, e, e, e, e, e, e, e]
  ];
  state2 = [
    [o, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E, E, E, E, E, E]
  ];
}

function render() {//renders the three state arrays (state, state1, and state2)
  const elements = document.querySelectorAll('#main td');//https://www.w3schools.com/jsref/met_document_queryselector.asp
  let pos = 0;
  //loops through the table and replaces it with the state array
  for (const element of elements) { // https://www.w3schools.com/js/js_loop_forin.asp
    element.innerHTML = state[Math.floor(pos / (width))][pos % (width)];
    if (element.innerHTML === " " || element.innerHTML === "undefined") element.innerHTML = "&nbsp";
    ++pos
  }

  const elements1 = document.querySelectorAll('#second td');//https://www.w3schools.com/jsref/met_document_queryselector.asp
  pos = 0;
  //loops through the table and replaces it with the state1 array
  for (const element of elements1) { // https://www.w3schools.com/js/js_loop_forin.asp
    element.innerHTML = state1[Math.floor(pos / (width))][pos % (width)];
    if (element.innerHTML === " " || element.innerHTML === "undefined") element.innerHTML = "&nbsp";
    ++pos
  }

  const elements2 = document.querySelectorAll('#third td');//https://www.w3schools.com/jsref/met_document_queryselector.asp
  pos = 0;
  //loops through the table and replaces it with the state2 array
  for (const element of elements2) { // https://www.w3schools.com/js/js_loop_forin.asp
    element.innerHTML = state2[Math.floor(pos / (width))][pos % (width)];
    if (element.innerHTML === " " || element.innerHTML === "undefined") element.innerHTML = "&nbsp";
    ++pos
  }
}

render();
var x = 0;//left character
var y = 2;
var x1 = 3;//top character
var y1 = 0;
var x2 = 0;//pearl
var y2 = 0;
var posArray = [];//snowball shooters
var posArray1 = [];//anvil droppers
var posArray2 = [];//shreikers
var posArray3 = [];//star
document.addEventListener('keydown', function(event) {
  if (event.key === 's' && y + 1 < height) {//down for left character
    state1[y][x] = E;
    y += 1;
    state1[y][x] = f;
    render();
  }
  if (event.key === 'w' && y - 2 >= 0) {//up for left character
    state1[y][x] = E;
    y -= 1;
    state1[y][x] = f;
    render();
  }//down for pearl
  if (event.key === 'k' && y2+1 < height) {
    state2[y2][x2] = E;
    y2 += 1;
    state2[y2][x2] = pearl;
    render();
  }
  //up for pearl
  if (event.key === 'i' && y2 > 0) {
    state2[y2][x2] = E;
    y2 -= 1;
    state2[y2][x2] = pearl;
    render();
  }
  if (event.key === 'u') {//place crystal
    if(state1[y2][x2] == E &&(state[y2][x2] == p) && score>=3){
      addScore(-3)
      state1[y2][x2] = crystal;
      render();
    }

  }//left for pearl
  if (event.key === 'j' && x2 >0) {
    state2[y2][x2] = E;
    x2 -= 1;
    state2[y2][x2] = pearl;
    render();
  }//right for pearl
  if (event.key === 'l' && x2 + 1 <width) {
    state2[y2][x2] = E;
    x2 += 1;
    state2[y2][x2] = pearl;
    render();
  }
  if (event.key === 'o')//places portal
  {
    if((state1[y2][x2] == E || state1[y2][x2] == e) && state[y2][x2] != p && portals < 2  && score>0){
      state1[y2][x2] = portal;
      portals++;
      if(portals == 1)
      {
        xp1 = x2;
        yp1 = y2;
      }
      else
      {
        xp2 = x2;
        yp2 = y2;
      }
      addScore(-1);
      render();
    }
  }
  if (event.keyCode == 39 && x1 + 1 < width) {//right for top character
    if(state[y1][x1+1] != p ){
      state1[y1][x1] = E;
      x1 += 1
      state1[y1][x1] = m;
      render();
    }        
  }
  if (event.keyCode === 37 && x1 - 1 >= 2) {//left for top character
    state1[y1][x1] = E;
    x1 -= 1;
    state1[y1][x1] = m;
    render();
  }
  if (event.keyCode === 16) {//Right shift (anvil dropper)
    if (state1[y1+1][x1] == E  && state[y1+1][x1] != p && score>=3) {
      state1[y1+1][x1] = crafter;
      addScore(-5);
      posArray1.push(x1);
      render();
    }
  }
  if (event.keyCode === 18) {//Right alt (shrieker)
    event.preventDefault();//stops default action which unselects the page
    if (state1[y1+1][x1] == s && score>=4) {
      state1[y1+1][x1] = cs;
      addScore(-4);
      posArray2.push(x1);
      render();
    }
    if (state1[y1+1][x1] == cs && score>=8) {
      state1[y1+1][x1] = shrieker;
      addScore(-8);
      posArray2.push(x1);
      render();
    }
    if (state1[y1+1][x1] == E && state[y1+1][x1] != p && score>=3) {
      state1[y1+1][x1] = s;
      addScore(-3);
      posArray2.push(x1);
      render();
    }
  }
  if (event.key === 'p') {//Crystal Placer Placer (star)
    if (state1[y2][x2] == E  && state[y2][x2] != p && score>=20) {
      state1[y2][x2] = star;
      addScore(-20);
      posArray3.push([y2,x2]);
      render();
    }
  }
  if (event.key === 'e') {//shoot all turrets
    if (score >= 5) {
      addScore(-5);
      shoot();
      shootBoom();
    }
  }
  if (event.key === 'r'){//flamethrower
    if (state1[y][x + 1] == dropper && score>=12) {
      state1[y][x + 1] = flamer1;
      addScore(-12);
      posArray.push(y);
      posArray.push(y);
      render();
    }
    else if (state1[y][x + 1] == flamer1 && score >=15) {
      state1[y][x + 1] = flamer2;
      addScore(-15);
      posArray.push(y);
      posArray.push(y);
      render();
    }
    else if (state1[y][x + 1] == flamer2 && score >=18) {
      state1[y][x + 1] = flamer3;
      addScore(-18);
      posArray.push(y);
      posArray.push(y);
      render();
    }
  }
  if (event.key === 'd') {//snowballer
    if (state1[y][x + 1] == dropper && score>=4) {
      state1[y][x + 1] = dropper2;
      addScore(-4);
      posArray.push(y);
      render();
    }
    else if (state1[y][x + 1] == dropper2 && score >=5) {
      state1[y][x + 1] = dropper3;
      addScore(-5);
      posArray.push(y);
      render();
    }
    else if (state1[y][x + 1] == dropper3 && score >=6) {
      state1[y][x + 1] = dropper4;
      addScore(-6);
      posArray.push(y);
      render();
    }
    else if (state1[y][x + 1] == E && state[y][x + 1] != p && score>=3) {
      state1[y][x + 1] = dropper;
      addScore(-3);
      posArray.push(y);
      render();
    }
  }
  if (event.key === 'q') {//sell
    if (state1[y][x + 1] == dropper) {
      state1[y][x + 1] = E;
      addScore(2);
      posArray.splice(posArray.indexOf(y), 1);
      render();
    }
    if (state1[y][x + 1] == dropper2) {
      state1[y][x + 1] = E;
      addScore(4);
      posArray.splice(posArray.indexOf(y), 2);
      render();
    }
    if (state1[y][x + 1] == dropper3) {
      state1[y][x + 1] = E;
      addScore(7);
      posArray.splice(posArray.indexOf(y), 3);
      render();
    }
    if (state1[y][x + 1] == dropper4) {
      state1[y][x + 1] = E;
      addScore(10);
      posArray.splice(posArray.indexOf(y), 4);
      render();
    }
    if (state1[y][x + 1] == flamer1) {
      state1[y][x + 1] = E;
      addScore(10);
      posArray.splice(posArray.indexOf(y), 4);
      render();
    }
    if (state1[y][x + 1] == flamer2) {
      state1[y][x + 1] = E;
      addScore(15);
      posArray.splice(posArray.indexOf(y), 1);
      render();
    }
    if (state1[y][x + 1] == flamer3) {
      state1[y][x + 1] = E;
      addScore(20);
      posArray.splice(posArray.indexOf(y), 2);
      render();
    }
    if (state1[y][x + 1] == dispenser1) {
      state1[y][x + 1] = E;
      addScore(4);
      posArray.splice(posArray.indexOf(y), 2);
      render();
    }
    if (state1[y][x + 1] == dispenser2) {
      state1[y][x + 1] = E;
      addScore(7)
      posArray.splice(posArray.indexOf(y), 3);
      render();
    }
    if (state1[y][x + 1] == dispenser3) {
      state1[y][x + 1] = E;
      addScore(10);
      posArray.splice(posArray.indexOf(y), 3);
      render();
    }
    if (state1[y1 + 1][x1] == crafter) {
      state1[y1 + 1][x1] = E;
      addScore(2);
      posArray1.splice(posArray1.indexOf(x1), 1);
      render();
    }
    if (state1[y1+1][x1] == s) {
      state1[y1+1][x1] = E;
      addScore(1);
      posArray2.splice(posArray2.indexOf(x1), 1);
      render();
    }
    if (state1[y1+1][x1] == cs) {
      state1[y1+1][x1] = E;
      addScore(3);
      posArray2.splice(posArray2.indexOf(x1), 1);
      render();
    }
    if (state1[y1+1][x1] == shrieker) {
      state1[y1+1][x1] = E;
      addScore(5);
      posArray2.splice(posArray2.indexOf(x1), 2);
      render();
    }
  }
  if (event.key === 'f') { // rock thrower
    if (state1[y][x + 1] == dispenser1 && score>=5) {
      state1[y][x + 1] = dispenser2;
      addScore(-5);
      posArray.push(y);
      render();
    }
    else if (state1[y][x + 1] == dispenser2 && score>=6) {
      state1[y][x + 1] = dispenser3;
      addScore(-6);
      posArray.push(y);
      render();
    }
    else if (state1[y][x + 1] == E && state[y][x + 1] != p && score>=4) {
      state1[y][x + 1] = dispenser1;
      addScore(-4);
      posArray.push(y);
      render();
    }
  }
});

function shoot() {//shoots projectiles from left to right which are the snowballs, fire, and rocks using the posArray which contains all of the turrets postions and the state1 array to add the images to the table in the whole row and checks each element in that row to see if the projectile hit something or not. If it did, it damages the pig from the array by changing its image, or kills the pig which then displays the poof and ends that projectile.
  render();
  for (let j = 0; j < posArray.length; j++) {
    let pos = posArray[j];
    let replace = E;
    if (state1[pos][x + 1] == dropper) {
      replace = snow;
    }
    else if (state1[pos][x + 1] == dropper2) {
      replace = snowier;
    }
    else if (state1[pos][x + 1] == dropper3){
      replace = snowiest;
    }
    else if (state1[pos][x + 1] == dropper4){
      replace = ice;
    }
    else if (state1[pos][x + 1] == dispenser1){
      replace = rock1;
    }
    else if (state1[pos][x + 1] == dispenser2){
      replace = rock2;
    }
    else if (state1[pos][x + 1] == dispenser3){
      replace = rock3;
    }
    else if (state1[pos][x + 1] == flamer1){
      replace = fire1;
    }
    else if (state1[pos][x + 1] == flamer2){
      replace = fire2;
    }
    else if (state1[pos][x + 1] == flamer3){
      replace = fire3;
    }
    for (let i = x + 2; i < state1[0].length; i++) {
      if (state1[pos][1] == dispenser1 || state1[pos][1] == dispenser2 || state1[pos][1] == dispenser3){
        breaker = true;//boolean to check if it can breaker "harder" things example: the blockers and helmets
      }
      else{
        breaker = false;
      }
      let hit = state1[pos][x + i];
      if (hit == a) {
        state1[pos][x + i] = pig;
        break;
      }
      if (hit == pig) {
        state1[pos][x + i] = poof;
        addScore(2);
        break;
      }
      if (hit == puffPig) {
        state1[pos][x + i] = poof;
        addScore(1);
        break;
      }
      if (hit == king) {
        state1[pos][x + i] = king0;
        break;
      }
      if (hit == king0) {
        state1[pos][x + i] = king1;
        break;
      }
      if (hit == king1) {
        state1[pos][x + i] = king2;
        break;
      }
      if (hit == king2) {
        state1[pos][x + i] = poof;
        addScore(3);
        break;
      }
      if (hit == r1) {
        state1[pos][x + i] = r2;
        break;
      }
      else if (hit == r2) {
        state1[pos][x + i] = r3;
        break;
      }
      else if (hit == r3) {
        state1[pos][x + i] = r4;
        break;
      }
      else if (hit == r4) {
        state1[pos][x + i] = r5;
        break;
      }
      else if (hit == r5) {
        state1[pos][x + i] = poof;
        addScore(4);
        break;
      }
      else if (hit == poof || hit == poof1 || hit == poof2 ||  hit == crystal || hit == anvil || hit == star){//continues if it hits something it is allowed to go through
        continue;
      }
      else if (hit == b4){
        if(breaker){
          state1[pos][x + i] = poof;
        }
        break;
      }
      else if (hit == b3){
        if(breaker){
          state1[pos][x + i] = b4;
        }

        break;

      }
      else if (hit == b2){
        if(breaker){
          state1[pos][x + i] = b3;
        }
        break;

      }
      else if (hit == b1){
        if(breaker){
          state1[pos][x + i] = b2;
        }
        break;
      }
      if (hit == s1) {
        if(breaker){
          state1[pos][x + i] = s2;
        }
        break;
      }
      else if (hit == s2) {
        if(breaker){
          state1[pos][x + i] = s3;
        }
        break;
      }
      else if (hit == s3) {
        if(breaker){
          state1[pos][x + i] = pig;
          addScore(2);
        }
        
        break;
      }
      else if (hit == monster) {
        if(breaker){
          state1[pos][x + i] = poof;
          addScore(2);
        }
        
        break;
      }
      if (hit == mustache1) {
        state1[pos][x + i] = mustache2;
        break;
      }
      if (hit == mustache2) {
        state1[pos][x + i] = mustache3;
        break;
      }
      if (hit == mustache3) {
        state1[pos][x + i] = poof;
        addScore(3);
        break;
      }
      if (hit == c1) {
        state1[pos][x + i] = c2;
        break;
      }
      if (hit == c2) {
        state1[pos][x + i] = c3;
        break;
      }
      if (hit == c3) {
        state1[pos][x + i] = c4;
        break;
      }
      if (hit == c4) {
        state1[pos][x + i] = c5;
        break;
      }
      if (hit == c5) {
        state1[pos][x + i] = c6;
        break;
      }
      if (hit == c6) {
        state1[pos][x + i] = c7;
        break;
      }
      if (hit == c7) {
        state1[pos][x + i] = c8;
        break;
      }
      if (hit == c8) {
        state1[pos][x + i] = c9;
        break;
      }
      if (hit == c9) {
        state1[pos][x + i] = c10;
        break;
      }
      if (hit == c10) {
        addScore(1);
        state1[pos][x + i] = genPig(true);//generates a random pig if a crate is broken
        break;
      }
      if(state1[pos][x+i] == portal)//moves to the location of the other portal and will continue on at that point
        {
          if(pos == yp2 && i == xp2)
          {
            i = xp1;
            pos = yp1;
          }
          else
          {
            i = xp2;
            pos = yp2;
          }
        }
       else {
        state1[pos][x + i] = replace;
      }
    }
  }

  render();
  sleep(500).then(() => { clearProjectiles(); }); // after 500ms it will clear the projectiles
  render();
}


function dropAnvils(){//Spawns an anvil one element below at every anvil dropper using the posArray1 which contains the position of the anvil droppers and adds the positions of the anvils to the anvilArray.
  for (let i = 0; i < posArray1.length; i++) {
    if(state1[2][posArray1[i]] != E){//checks if the location it is trying to place the anvil is empty
      if(state1[2][posArray1[i]] == s1 || state1[2][posArray1[i]] == s2 || state1[2][posArray1[i]] == s3){
        state1[2][posArray1[i]] = pig;
        addScore(1);
      }
      else if(state1[2][posArray1[i]] == c1 || state1[2][posArray1[i]] == c2 || state1[2][posArray1[i]] == c3 || state1[2][posArray1[i]] == c4 || state1[2][posArray1[i]] == c5 || state1[2][posArray1[i]] == c6 || state1[2][posArray1[i]] == c7 || state1[2][posArray1[i]] == c8 || state1[2][posArray1[i]] == c9 || state1[2][posArray1[i]] == c10){ // if its a crate it spawns a pig
        state1[2][posArray1[i]] = genPig(true);
      }
      else{
        state1[2][posArray1[i]] = poof;
        addScore(1);
      }
    }
    else{
      state1[2][posArray1[i]] = anvil;
      anvilArray.push([2, posArray1[i], anvil])
    }
  }
  render();
}
var score = 5;
var secs = 120.1;
var moveInterval = 12;
var spawnInterval = 23;
timer();
function timer() {//keeps track of time
  secs = (Math.round((secs - 0.1) * 10)) / 10;
  let bigSecs = secs*10;
  if (bigSecs % 6 == 0) {
    moveAnvils();
    render();
  }
  if (!boss) {
    if(secs%1==0){
      document.getElementById("seconds").innerHTML = String(secs) + ".0";
    }
    else{
      document.getElementById("seconds").innerHTML = String(secs);
    }
  }
  else
  {
    document.getElementById("seconds").innerHTML = String("♾️");
  }
  if (secs > 0) {
    setTimeout(timer, 100);
  }
  else{//when the timer hits 0 it resets the game and changes a couple of things
    let num = Math.random(0, 1);
    //changes map color
    if(num < 0.5){
      p = mud;
      e = blackstone;
    }
    else{
      p = blackstone;
      e = magma;
    }
    //reloads map
    if(map < 0.25){
      state = [
        [p, p, e, e, e, e, e, e, e, e, e, e],
        [e, p, p, e, e, e, e, e, e, p, p, p],
        [e, e, p, e, e, e, e, e, p, p, e, p],
        [e, e, p, e, p, p, p, e, p, e, e, p],
        [e, e, p, e, p, e, p, e, p, e, e, p],
        [e, e, p, e, p, e, p, e, p, e, e, p],
        [e, e, p, p, p, e, p, p, p, e, e, p],
        [e, e, e, e, e, e, e, e, e, e, e, p]
      ];
    }
    else if(map<0.5){
      state = [
        [p, p, e, e, e, e, e, e, e, e, e, e],
        [e, p, p, e, e, p, p, p, e, e, e, e],
        [e, e, p, e, e, p, e, p, p, p, p, e],
        [e, e, p, e, p, p, e, e, e, e, p, e],
        [e, e, p, e, p, e, e, e, e, e, p, e],
        [e, e, p, e, p, e, e, e, e, e, p, p],
        [e, e, p, p, p, e, e, e, e, e, e, p],
        [e, e, e, e, e, e, e, e, e, e, e, p]
      ];
    }
    else if(map<.75){
      state = [
        [p, p, e, e, e, e, e, e, e, p, p, p],
        [e, p, p, e, e, e, e, e, e, p, e, p],
        [e, e, p, e, p, p, p, e, e, p, e, p],
        [e, e, p, e, p, e, p, e, e, p, e, p],
        [e, e, p, e, p, e, p, e, e, p, e, p],
        [e, e, p, p, p, e, p, p, e, p, e, p],
        [e, e, e, e, e, e, e, p, p, p, e, p],
        [e, e, e, e, e, e, e, e, e, e, e, p]
      ];
    }
    else if(map<1){
      state = [
        [p, p, e, e, e, e, e, e, e, e, e, e],
        [e, p, p, e, e, e, e, e, e, e, e, e],
        [e, e, p, e, e, p, p, p, e, e, e, e],
        [e, e, p, e, e, p, e, p, e, p, p, p],
        [e, e, p, e, e, p, e, p, e, p, e, p],
        [e, e, p, p, e, p, e, p, e, p, e, p],
        [e, e, e, p, p, p, e, p, p, p, e, p],
        [e, e, e, e, e, e, e, e, e, e, e, p]
      ];
    }
    setTimeout(timer, 100);
    secs += 10000;
    moveInterval -= 2;
    spawnInterval -= 1;
    boss = true;
    number++;
  }
  if (bigSecs %3 == 0){ //every 0.3 seconds it will render the poofs
    
    poofer();
  }
  if (bigSecs % moveInterval == 0) {
    movePigs();
  }
  if (bigSecs % 59 == 0) {// every 5.9 seconds it will drop an anvil
    dropAnvils();
  }
  if (bigSecs % 150 == 0){// every 15 seconds it will spawn a crystal for next to the crystal placers
    placeCrystals();
  }
  if (bigSecs % 29 == 0) { // every 2.9 seconds it will shoot the projectiles
    shoot();
    shootBoom();
  }
  if(moveInterval == 0) // the player wins when the pigs stop moving.
  {
    if(localStorage.getItem("highscore") == null || parseInt(localStorage.getItem("highscore")) < score){
      localStorage.setItem("highscore", score);
    }
    window.location.href = 'win.html';
    localStorage.setItem("score", score);
  }
  if (bigSecs % spawnInterval == 0) {
    summonPig();
  }
  if (bigSecs % 800 == 0){//every 80 seconds the pigs get faster
    moveInterval-=1;
  }
  if (bigSecs % 1000 == 0){//every 100 seconds the pigs spawn faster
    spawnInterval -= 1;
  }
}

function addScore(num) { // adds score to the screen
  score += num;
  document.getElementById("score").innerHTML =  String(score) + "🪙";
}
function poofer(){ // checks for poofs and advances them to the next stage of the poof
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if(state1[i][j] == poof2){
        state1[i][j] = E;
      }
      if(state1[i][j] == poof1){
        state1[i][j] = poof2;
      }
      if(state1[i][j] == poof){
        state1[i][j] = poof1;
      }
    }
  }
  render();
}

function clearProjectiles() 
{
  for (let i = 0; i < height; i++)
  {
    for (let j = 0; j < width; j++)
    {
      if (isProjectile(state1[i][j]))                                      
      {
         state1[i][j] = E;
      }
    } 
  }
  render();
}

function isProjectile(element)
{
  projectiles = [snow, snowier, snowiest, ice, rock1, rock2, rock3, boom, boom1, boom2, fire1, fire2, fire3];
  for(let i = 0; i < projectiles.length; i++)
  {
    if(element == projectiles[i])
    {
      return true;
    }
  }
  return false;
}

function sleep(ms) {//https://www.sitepoint.com/delay-sleep-pause-wait/
  return new Promise(resolve => setTimeout(resolve, ms));
}

function summonPig() {//spawns a random pig at the bottom right
  let piggy = genPig(false);
  state1[7][11] = piggy;
  let pigPos = [7, 11, piggy, false];
  pigArray.push(pigPos);
}

//used to mark which direction it was moving (it continues doing that until it can't) ie moves up until it can move left
var moved = false;
var moved1 = false;
function movePigs() {
  let removal = [];//locations marked for removal
  for (let i = 0; i < pigArray.length; i++) {
    let pos = pigArray[i];
    if (pos[0] == 0 && pos[1] == 0) {// "you lose"
      if(localStorage.getItem("highscore") == null || parseInt(localStorage.getItem("highscore")) < score){// checks if the highscore is null or if it is less than your score and sets highscore to your score if it is higher
        localStorage.setItem("highscore", score);
      }
      localStorage.setItem("score", score);
      window.location.href = "lose.html";
    }
    moved = false;
    moved1 = false;
    pigArray[i][2] = state1[pigArray[i][0]][pigArray[i][1]];
    if (pigArray[i][2] == poof || pigArray[i][2] == snow || pigArray[i][2] == E || pigArray[i][2] == poof1|| pigArray[i][2] == poof2 || pigArray[i][2] == crystal) {
      removal.push(i);
      continue;
    }
    if (pos[1] - 1 >= 0) {//LEFT
      if (state[pos[0]][pos[1] - 1] == p) {
        pigArray[i][1] = pos[1] - 1;
        if(state1[pigArray[i][0]][pigArray[i][1]] == crystal){
          if(pos[2] == s1 || pos[2] == s2 || pos[2] == s3){
            state1[pigArray[i][0]][pigArray[i][1]] = pig;
            addScore(1);
          }
          else if(pos[2] == c1 || pos[2] == c2 || pos[2] == c3 || pos[2] == c4 || pos[2] == c5 || pos[2] == c6 || pos[2] == c7 || pos[2] == c8 || pos[2] == c9 || pos[2] == c10){
            state1[pigArray[i][0]][pigArray[i][1]] = genPig(true);
          }
          else{
            state1[pigArray[i][0]][pigArray[i][1]] = poof;
            addScore(1);
          }

        }
        else{
          state1[pigArray[i][0]][pigArray[i][1]] = pos[2];
        }
        state1[pigArray[i][0]][pigArray[i][1] + 1] = E;
        moved = true;
        pigArray[i][3] = false;
      }
    }
    if (pos[0] - 1 >= 0 && !moved && !pigArray[i][3]) {//UP
      if (state[pos[0] - 1][pos[1]] == p) {
        pigArray[i][0] = pos[0] - 1;
        if(state1[pigArray[i][0]][pigArray[i][1]] == crystal){
          if(pos[2] == s1 || pos[2] == s2 || pos[2] == s3){
            state1[pigArray[i][0]][pigArray[i][1]] = pig;
            addScore(1);
          }
          else if(pos[2] == c1 || pos[2] == c2 || pos[2] == c3 || pos[2] == c4 || pos[2] == c5 || pos[2] == c6 || pos[2] == c7 || pos[2] == c8 || pos[2] == c9 || pos[2] == c10){
            state1[pigArray[i][0]][pigArray[i][1]] = genPig(true);
          }
          else{
            state1[pigArray[i][0]][pigArray[i][1]] = poof;
            addScore(1);
          }
        }
        else{
          state1[pigArray[i][0]][pigArray[i][1]] = pos[2];
        }
        state1[pigArray[i][0] + 1][pigArray[i][1]] = E;
        moved1 = true;
      }
    }

    if (!moved && !moved1) {//DOWN
      if (pos[0] + 1 < height) {
        if (state[pos[0] + 1][pos[1]] == p) {
          pigArray[i][3] = true;
          pigArray[i][0] = pos[0] + 1;
          if(state1[pigArray[i][0]][pigArray[i][1]] == crystal){
            if(pos[2] == s1 || pos[2] == s2 || pos[2] == s3){
              state1[pigArray[i][0]][pigArray[i][1]] = pig;
              addScore(1);
            }
            else if(pos[2] == c1 || pos[2] == c2 || pos[2] == c3 || pos[2] == c4 || pos[2] == c5 || pos[2] == c6 || pos[2] == c7 || pos[2] == c8 || pos[2] == c9 || pos[2] == c10){
              state1[pigArray[i][0]][pigArray[i][1]] = genPig(true);
            }
            else{
              state1[pigArray[i][0]][pigArray[i][1]] = poof;
              addScore(1);
            }
          }
          else{
            state1[pigArray[i][0]][pigArray[i][1]] = pos[2];
          }
          state1[pigArray[i][0] - 1][pigArray[i][1]] = E;
        }
      }
    }
  }
  for (let i = 0; i < removal.length; i++) {
    pigArray.splice(removal[i] - i, 1);
  }
  render();
}

function genPig(fromCrate) {
  if (number == 0) {
    number += 0.01;
    return puffPig;//damaged pig 100% guaranteed to start
  }
    number += 0.01;// over time the pigs get stronger
  let num = Math.random(0, 1);// the random number from 0 to 1 that is used to determine which pig will be spawned
  if (num - number > 0.45) {
    return puffPig; // puffed pig
  }
  if (num - number > 0.15) {
    return a;// regular  pig
  }
  if (num - number > 0.06) {
    return mustache1;
  }
  if (num - number > -.01) {
    return king;
  }
  if (num - number > -.02) {
    return monster;
  }
  if (num - number >  -0.15) {
    return r1;// royale hog
  }
  if (num - number >  -0.3) {
    return s1;// soldier hog
  }
  if(fromCrate){//if it is from a crate its summons one of these
    if(num>0.7){
      return r1;
    }
    if(num>0.4){
      return s1;
    }
    if(num>0.2){
      return king;
    }
    if(num>0.1){
      return mustache1;
    }
    else{
      return c1;
    }
  }
  else{
    return c1;
  }

}

function moveAnvils() {//moves all the anvils one unit down using the anvilArray which is an array of the anvils positions and the removal array that contains the element of the anvil that should be removed and later on removes them, that has either hit a pig or the bottom of the map.
  let removal = [];
  for (let i = 0; i < anvilArray.length; i++) {
    let pos = anvilArray[i];
    anvilArray[i][0] = pos[0] + 1;
    if (anvilArray[i][0] >= height-1){// if its at the bottom of the map it will remove it from the array
      removal.push(i);
      state1[anvilArray[i][0]-1][anvilArray[i][1]] = E;
      state1[anvilArray[i][0]][anvilArray[i][1]] = poof;      
      continue;
    }
    if(state1[anvilArray[i][0]-1][anvilArray[i][1]] != E && state1[anvilArray[i][0]-1][anvilArray[i][1]] != crafter && state1[anvilArray[i][0]-1][anvilArray[i][1]] != anvil && !isProjectile(state1[anvilArray[i][0]-1][anvilArray[i][1]])){//removal of the anvil if it hits a soldier or crate
      console.log(state1[anvilArray[i][0]-1][anvilArray[i][1]]);
      state1[anvilArray[i][0]-1][anvilArray[i][1]] = E;
      if(state1[anvilArray[i][0]-1][anvilArray[i][1]] == s1 || state1[anvilArray[i][0]-1][anvilArray[i][1]] == s2 || state1[anvilArray[i][0]-1][anvilArray[i][1]] == s3){ // hits a soldier
        state1[anvilArray[i][0]-1][anvilArray[i][1]] = pig;
        addScore(1);
      }
        //if its a crate generates a pig 
      else if(state1[anvilArray[i][0]-1][anvilArray[i][1]] == c1 || state1[anvilArray[i][0]-1][anvilArray[i][1]] == c2 || state1[anvilArray[i][0]-1][anvilArray[i][1]] == c3 || state1[anvilArray[i][0]-1][anvilArray[i][1]] == c4 || state1[anvilArray[i][0]-1][anvilArray[i][1]] == c5 || state1[anvilArray[i][0]-1][anvilArray[i][1]] == c6 || state1[anvilArray[i][0]-1][anvilArray[i][1]] == c7 || state1[anvilArray[i][0]-1][anvilArray[i][1]] == c8 || state1[anvilArray[i][0]-1][anvilArray[i][1]] == c9 || state1[anvilArray[i][0]-1][anvilArray[i][1]] == c10){
        state1[anvilArray[i][0]-1][anvilArray[i][1]] = genPig(true);
      }
      else{ // if its not a crate or a soldier
        state1[anvilArray[i][0]-1][anvilArray[i][1]] = poof;
        addScore(1);
      }
      removal.push(i);
      continue;
    }

    if(state1[anvilArray[i][0]][anvilArray[i][1]] != E && !isProjectile(state1[anvilArray[i][0]-1][anvilArray[i][1]])){//removal when it hits a pig
      
      state1[anvilArray[i][0]-1][anvilArray[i][1]] = E;
      if(state1[anvilArray[i][0]][anvilArray[i][1]] == s1 || state1[anvilArray[i][0]][anvilArray[i][1]] == s2 || state1[anvilArray[i][0]][anvilArray[i][1]] == s3){
        state1[anvilArray[i][0]][anvilArray[i][1]] = pig;
        addScore(1);
      }
        //if its a crate
      else if(state1[anvilArray[i][0]][anvilArray[i][1]] == c1 || state1[anvilArray[i][0]][anvilArray[i][1]] == c2 || state1[anvilArray[i][0]][anvilArray[i][1]] == c3 || state1[anvilArray[i][0]][anvilArray[i][1]] == c4 || state1[anvilArray[i][0]][anvilArray[i][1]] == c5 || state1[anvilArray[i][0]][anvilArray[i][1]] == c6 || state1[anvilArray[i][0]][anvilArray[i][1]] == c7 || state1[anvilArray[i][0]][anvilArray[i][1]] == c8 || state1[anvilArray[i][0]][anvilArray[i][1]] == c9 || state1[anvilArray[i][0]][anvilArray[i][1]] == c10){
        state1[anvilArray[i][0]][anvilArray[i][1]] = genPig(true);
      }
      else{
        state1[anvilArray[i][0]][anvilArray[i][1]] = poof;
        addScore(1);
      }
      removal.push(i);
      continue;
    }
    state1[anvilArray[i][0]-1][anvilArray[i][1]] = E;
    state1[anvilArray[i][0]][anvilArray[i][1]] = pos[2];                
  }
  for (let i = 0; i < removal.length; i++) {
    anvilArray.splice(removal[i] - i, 1);
  }
  render();
}

function placeCrystals(){// uses the posArray which contains the positions of all the crystal placers to place the crystal around it.
  for (let j = 0; j < posArray3.length; j++) {
    console.log(posArray3[j])
    if(state1[posArray3[j][0]][posArray3[j][1]] == star){// if the location is a star it places stars directly around it
      //down
      if(posArray3[j][0]+1 < height){
        if((state1[posArray3[j][0]+1][posArray3[j][1]] == E || isProjectile(state1[posArray3[j][0]+1][posArray3[j][1]]) ) && state[posArray3[j][0]+1][posArray3[j][1]] == p){
          state1[posArray3[j][0]+1][posArray3[j][1]] = crystal;
        }
      }
      //up
      if(posArray3[j][0]-1 >=0){
        if((state1[posArray3[j][0]-1][posArray3[j][1]] == E || isProjectile(state1[posArray3[j][0]-1][posArray3[j][1]])) && state[posArray3[j][0]-1][posArray3[j][1]] == p){
          state1[posArray3[j][0]-1][posArray3[j][1]] = crystal;
        }
      }
      //left
      if((state1[posArray3[j][0]][posArray3[j][1]-1] == E || isProjectile(state1[posArray3[j][0]][posArray3[j][1]-1])) && state[posArray3[j][0]][posArray3[j][1]-1] == p){
        state1[posArray3[j][0]][posArray3[j][1]-1] = crystal;
      }
      //right
      if((state1[posArray3[j][0]][posArray3[j][1]+1] == E || isProjectile(state1[posArray3[j][0]][posArray3[j][1]+                 
  1])) && state[posArray3[j][0]][posArray3[j][1]+1] == p){
        state1[posArray3[j][0]][posArray3[j][1]+1] = crystal;
      }
    }
  }
}

// very similar to the shoot function
function shootBoom() {////shoots the sonic shriekers from left top to down, using the posArray2 which contains all of the sonic shriekers postions and the state1 array to add the images to the table in the whole column and checks each element in that column to see if the projectile hit something or not. If it did, it damages the pig from the array by changing its image, or kills the pig which then displays the poof and ends that projectile.
  render();
  for (let j = 0; j < posArray2.length; j++) {
    let pos = posArray2[j];
    let replace = E;
    let breaker = false;//boolean to check if it can breaker "harder" things

    if (state1[y1+1][pos] == s) {
      replace = boom;
    }
    else if (state1[y1+1][pos] == cs) {
      replace = boom2;
    }
    else if (state1[y1+1][pos] == shrieker) {
      replace = boom1;
      breaker = true;
    }

    for (let i = y1 + 2; i < height; i++) {
      let hit = state1[y1+i][pos];
      if (hit == a) {
          state1[y1+i][pos] = pig;
        break;
      }
      if (hit == pig) {
          state1[y1+i][pos] = poof;
        addScore(2);
        break;
      }
      if (hit == puffPig) {
          state1[y1+i][pos] = poof;
        addScore(1);
        break;
      }
      if (hit == king) {
        state1[y1+i][pos] = king0;
        break;
      }
      if (hit == king0) {
        state1[y1+i][pos] = king1;
        break;
      }
      if (hit == king1) {
        state1[y1+i][pos] = king2;
        break;
      }
      if (hit == king2) {
        state1[y1+i][pos] = poof;
        addScore(3);
        break;
      }
      if (hit == r1) {
        state1[y1+i][pos] = r2;
        break;
      }
      else if (hit == r2) {
          state1[y1+i][pos] = r3;
        break;
      }
      else if (hit == r3) {
          state1[y1+i][pos] = r4;
        break;
      }
      else if (hit == r4) {
        state1[y1+i][pos] = r5;
        break;
      }
      else if (hit == r5) {
        state1[pos][x + i] = poof;
        addScore(4);
        break;
      }
      else if (hit == poof || hit == poof1 || hit == poof2 ||  hit == crystal || hit == anvil || hit == star){
        continue;
      }
      else if (hit == b4){
        if(breaker){
          state1[y1+i][pos] = poof;
        }
        break;
      }
      else if (hit == b3){
        if(breaker){
          state1[y1+i][pos] = b4;
        }

        break;

      }
      else if (hit == b2){
        if(breaker){
          state1[y1+i][pos] = b3;
        }
        break;

      }
      else if (hit == b1){
        if(breaker){
          state1[y1+i][pos] = b2;
        }
        break;
      }
      if (hit == s1) {
        if(breaker){
          state1[y1+i][pos] = s2;
        }
        break;
      }
      else if (hit == s2) {
        if(breaker){
          state1[y1+i][pos] = s3;
        }
        break;
      }
      else if (hit == s3) {
        if(breaker){
          state1[y1+i][pos] = pig;
          addScore(2);
        }        
        break;
      }
      else if (hit == monster) {
        if(breaker){
          state1[y1+i][pos] = poof;
          addScore(2);
        }        
        break;
      }
      if (hit == mustache1) {
        state1[y1+i][pos] = mustache2;
        break;
      }
      if (hit == mustache2) {
        state1[y1+i][pos] = mustache3;
        break;
      }
      if (hit == mustache3) {
        state1[y1+i][pos] = poof;
        addScore(3);
        break;
      }
      if (hit == c1) {
        state1[y1+i][pos] = c2;
        break;
      }
      if (hit == c2) {
        state1[y1+i][pos] = c3;
        break;
      }
      if (hit == c3) {
        state1[y1+i][pos] = c4;
        break;
      }
      if (hit == c4) {
        state1[y1+i][pos] = c5;
        break;
      }
      if (hit == c5) {
        state1[y1+i][pos] = c6;
        break;
      }
      if (hit == c6) {
        state1[y1+i][pos] = c7;
        break;
      }
      if (hit == c7) {
        state1[y1+i][pos] = c8;
        break;
      }
      if (hit == c8) {
        state1[y1+i][pos] = c9;
        break;
      }
      if (hit == c9) {
        state1[y1+i][pos] = c10;
        break;
      }
      if (hit == c10) {
        addScore(1);
        state1[y1+i][pos] = genPig(true);
        break;
      }
      if(state1[i][pos] == portal)
      {
        if(pos == xp2 && i == yp2)
        {
          i = yp1;
          pos = xp1;
        }
        else
        {
          i = yp2;
          pos = xp2;
        }
      }
      else {
          state1[y1+i][pos] = replace;
      }
    }
  }

  render();
  sleep(500).then(() => { clearProjectiles(); });
  render();
}
function back(){//sends the user back to the lose page and updates the highscore       
  if(localStorage.getItem("highscore") == null || parseInt(localStorage.getItem("highscore")) < score){
    localStorage.setItem("highscore", score);
  }
  localStorage.setItem("score", score);
  window.location.href = "lose.html";
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function killValue(pig){

}