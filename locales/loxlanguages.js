/* 
* Copyright (c) 2018 - Lox Game Studio. All rights reserved.
* Purpose: Handles the localization system without any server function (only javascript).
* Developed by: LordOf Xen
*/
var english = 
{
    "title": "Lox Game Studio", 
    "test": "This is a lox sample text for the language system."
};
var turkish = 
{
    "title": "Lox Oyun Stüdyosu", 
    "test": "Bu Lox dil sistemi için bir örnektir."
};

var defaultLanguage = english; // Select a language as a default language when can't find the language the user searched by adding as a parameter on the URL.

// To make language names short, we're using a dictionary.
var languageDictionary = {
    "en": english,
    "tr": turkish
  };

// Gets the specified language from the dictionary if exists.
function getLanguage(lang)
{
    for(var key in languageDictionary) 
    {
       if (key == lang)
        return languageDictionary[key];
    }
    return "none";
}

var currentLanguage = null;
function loadLanguage(langname) 
{
    var lang = getLanguage(langname);
    if (lang != "none")
        currentLanguage = lang;
    else
        currentLanguage = defaultLanguage; // Use the default language when can't find the specified language.
}

function getToken(tokenName)
{
    return currentLanguage[tokenName];
}

// Source: https://html-online.com/articles/get-url-parameters-javascript/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1)
    {
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}
// End source.

function changeAllTexts()
{
    var innerText = document.getElementsByTagName('body');
    alert(innerText);

    for (var key in currentLanguage) 
    {
        if (currentLanguage.hasOwnProperty(key)) {
            innerText = innerText.replace(key, currentLanguage[key]);
        }
    }
}

var langName = getUrlParam('lang','en');
loadLanguage(langName);

document.title = getToken("title");