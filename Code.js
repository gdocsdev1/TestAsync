function onInstall(e) {
  onOpen(e);
}

function onOpen(e){
  var mainMenu = SpreadsheetApp.getUi().createAddonMenu();
  mainMenu.addItem('Sidebar', 'onSidebar');
  mainMenu.addToUi();
}

function onSidebar(){
  var html = HtmlService.createHtmlOutputFromFile('sidebar').setTitle('My Sidebar');
  SpreadsheetApp.getUi().showSidebar(html);
} 

function getListOfItems(){
  Logger.log('in getListOfItems');
  var i = 1+2;
  Logger.log('value of i = ' + i);
  var items = ["One", "Two", "Three"];
  
  var html1 = HtmlService.createHtmlOutputFromFile('login').setWidth(300).setHeight(200);
  SpreadsheetApp.getUi().showModalDialog(html1,'Sign In'); 
  
  return items;
}

function setCredentials(loginData){
  Logger.log('inSetcredentials');
  if(loginData.user !== '' && loginData.pwd !== ''){
    Logger.log('uName = ' + loginData.user + ' and password = ' + loginData.pwd);
    Logger.log('credentials set');
  }

}