function isMobile(){
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 )
    return true;
 else
    return false;
}

initLoxMessageBox('Cancel','OK');
var selectedTab = getUrlParam("selectedtab", "default");

/*var ahrefDomains = document.getElementsByClassName("lx-panel-a-mcl");
alert(ahrefDomains + " - "+ahrefDomains.length);
for (var i = 0; i < ahrefDomains.length; i++)
	ahrefDomains[i].addEventListener("click", onDomainLinkClick);*/