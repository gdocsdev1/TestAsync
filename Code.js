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
  console.log('in getListOfItems');
  var i = 1+2;
  console.log('value of i = ' + i);
  var items = ["One", "Two", "Three"];
  
  var html1 = HtmlService.createHtmlOutputFromFile('login').setWidth(300).setHeight(200);
  SpreadsheetApp.getUi().showModalDialog(html1,'Sign In'); 
  
  items.push('Four');
  console.log('returning items');  
  return items;
}

function setCredentials(loginData){
  console.log('inSetcredentials');
  if(loginData.user !== '' && loginData.pwd !== ''){
    console.log('uName = ' + loginData.user + ' and password = ' + loginData.pwd);
    console.log('credentials set');
  }
  return true;
}