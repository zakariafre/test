// --------------------- about the sport Item on the list :

var S = document.getElementById('sport')
var Hid = document.getElementById('hiddenPage1')

function showPage () {
    Hid.style.display = "block" ; 
    femmePage.style.display = "none"
         
}

function hidePage () {
    Hid.style.display = "none"
}


S.onmouseenter = showPage ;
S.onpointerout = hidePage  ;
Hid.onmouseenter = showPage ;
Hid.onmouseleave = hidePage ;










// xxxxxxxxxxxxxx ABOUT FEMME ITEM xxxxxxxxxxxxxxxxxxxxx

let femmeItem = document.getElementById("femme")
let femmePage = document.getElementById("femme-list-bg")
let femmeList = document.getElementById("femme-list")

    function ShowFemmePage () {
    femmePage.style.display = "block"
    Hid.style.display = "none"
}

femmeItem.onmouseenter = ShowFemmePage ;
femmeList.onpointerenter = ShowFemmePage ;


    function hideFemmePage () {
    femmePage.style.display = "none"
}
// femmeItem.onmouseout = hideFemmePage ;
femmeList.onmouseleave = hideFemmePage ;




















// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx about the email label xxxxxxxxxxxxxxxxxxxxxxxxxx :

var label = document.getElementById("mail-label") ; 
var inputMail = document.getElementById("mail") ;
var section5 = document.getElementById("S5") 


function ShowTranslat () {
       label.style.top = "-145px"
       label.style.transition = "0.6s"
       label.style.backgroundColor = "#00621B"
       label.style.zIndex = "2"
}

function HideTranslet () {
    label.style.top = "-120px"
}

inputMail.onfocus = ShowTranslat ;
section5.onmouseleave = HideTranslet ; 















// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx SEARCH CLICK xxxxxxxxxxxxxxxxxxxxxxxxxxx 
let searchIcon = document.getElementById("search") ;
let searchPage = document.getElementById("search-page");
let closeIcon = document.getElementById("close");
var search2 = document.getElementById("search2") ; 

function showSearchPage () {

    searchPage.style.display = "block" ;
    femmePage.style.display = "none"
    
}

function hideSearchPage () {

    searchPage.style.display = "none"
    
}


searchIcon.onclick = showSearchPage ;
closeIcon.onclick = hideSearchPage ; 













// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx FOR LOGIN  FORM xxxxxxxxxxxxxxxxxxxxxxxxxx

let favIcon = document.getElementById("fav-icon") ;
let favPage = document.getElementById("fav-page") ; 
let closeConnect = document.getElementById( "close2" ) ;
let seConnecterIBtn = document.getElementById( "btn-seConnect" ) ;

function showConnectPage () {
    favPage.style.display = "block"
    
} 

function closeConnectPage () {
    favPage.style.cssText = `
    display: none ;
    `
    passLabel.style.top = "-20px"
    adresseLabel.style.top = "-25px"
    femmePage.style.display = "none"

}

favIcon.onclick = showConnectPage ;
seConnecterIBtn.onclick = showConnectPage ; 
closeConnect.onclick = closeConnectPage ;














//  xxxxxxxxxxxxxxxxxx FOR THE TRANSLATE-Y ON THE LOGIN FORM xxxxxxxxxxxxxxxxxxxx
//  for the adresse e-mail input
let adresseLabel = document.getElementById("connect-label")
let adresseInput = document.getElementById("connect-inp")
function EmailLabelUp () {
            adresseLabel.style.top = "-50px" ;
            adresseLabel.style.background = "#fff"
            adresseLabel.style.zIndex = "1"

            // passLabel.style.top = "-20px"z
        }


        adresseInput.onfocus = EmailLabelUp ;


// for the password input
let passLabel = document.getElementById("pass-label")
let passInput = document.getElementById("pass-inp")

function PassLabelUp () {
    passLabel.style.top = "-45px"
    passLabel.style.background = "#fff"
    passLabel.style.zIndex = "2"

    // adresseLabel.style.top = "-25px"
}

       passInput.onfocus = PassLabelUp ;















// xxxxxxxxxxxxxxxxxxxxxx ALERT SE-CONNECTER xxxxxxxxxxxxxxxxxxxxxxxx
let seConnecter = document.getElementById("connect-window")
let seConnectItem = document.getElementById("seConnect")

function showSeConnect () {
    seConnecter.style.display = "block" ; 
    
}

seConnectItem.onmouseenter =showSeConnect ;
seConnecter.onmouseenter = showSeConnect ;  

function hideSeConnect () {
    seConnecter.style.display = "none"
}

seConnectItem.onmouseleave  = hideSeConnect ; 
seConnecter.onmouseleave = hideSeConnect ;


















// xxxxxxxxxxxxxxxxxxxx FOR THE MENU IN MOBILE xxxxxxxxxxxxxxxxxxx

let menuIco = document.getElementById("menu-icon");
let MenuMobile = document.getElementById("burger-bar");
let icons = document.getElementById("head-icons");
let closerIco = document.getElementById("closerIcon") ;

function showMenuBar () {
    MenuMobile.style.left = "0px";
    icons.style.opacity = "0%";
    menuIco.style.opacity = "0%";
    closerIco.style.display = "block";
    MenuMobile.style.zIndex = "20"
}
menuIco.onclick = showMenuBar;


function hideMenuBar () {
    MenuMobile.style.left = "-380px";
    icons.style.opacity = "100%";
    menuIco.style.opacity = "100%";
}
closerIco.onclick = hideMenuBar;
















// xxxxxxxxxxxxxxxxxxx SEARCH PAGE FOR MOBILE xxxxxxxxxxxxxxxxxxxxxxxxxxx

var SearchMobile = document.getElementById("search-page")
var searchBtn = document.getElementById("search")
var SearchCloser = document.getElementById("searchCloser")
var searchLogo = document.getElementById("logo1")

function showSearchMobile () {
    SearchMobile.style.display = "block"
    SearchMobile.style.left = "0px"
    SearchMobile.style.zIndex = "40"
    searchLogo.style.opacity = "100%"
}
searchBtn.onclick = showSearchMobile ;


function CloseSearchMobile () {
    SearchMobile.style.left = "-380px"
    SearchMobile.style.display = "block"
    searchLogo.style.opacity = "10%"
    
}
SearchCloser.onclick = CloseSearchMobile ;