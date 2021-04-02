var motSecret;

var now=new Date();
var tableauMot=new Array();
var mots=new Array();

var tailleMot;
var coupsManques=0;
var lettresTrouvees=0;
var fini=false;

mots[0]="DOCTORWHO";
mots[1]="SMALLVILLE";
mots[2]="HEROES";
mots[3]="QUANTICO";
mots[4]="RIVERDALE";
mots[5]="MURDER";
mots[6]="DYNASTIE";
mots[7]="LOST";
mots[8]="GOODGAME";
mots[9]="FRIENDS";
mots[10]="LUCIFER";
mots[11]="GOODGAME";
mots[12]="XFILES";
mots[13]="SUPERNATURAL";
mots[14]="SHERLOCK";
mots[15]="COLUMBO";

motSecret=mots[now.getSeconds() % mots.length];
tailleMot=motSecret.length;

function changeCouleur(element,couleur)
{ element.style.backgroundColor=couleur;
}

function proposer(element) {
  if (element.style.backgroundColor=="lightBlue" ||fini) return;
  var lettre=element.innerHTML;
  changeCouleur(element,"lightBlue");
  var trouve=false;
  for (var i=0; i<tailleMot; i++) {
    if (tableauMot[i].innerHTML==lettre){
        tableauMot[i].style.visibility='visible';
    trouve=true;
    lettresTrouvees++;
  }
}

if (!trouve){
  coupsManques++;
  document.images['pendu'].src="images/pendu_"+coupsManques+".jpg";
if (coupsManques==9){
  alert("AH! AH! T'es une merde");
  for (var i=0; i<tailleMot;i++) tableauMot[i].style.visibility='visible';
  fini=true;
  }
}

if(lettresTrouvees==tailleMot){
  alert("GG! T'es un monstre !");
  fini=true;
}
