function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/191GYwGuV1mXLTN_HGSwtTSIPQZwXtV7y_jCV2rUxmos/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("QnA");

  ws.appendRow([
    //question answers
    formObject.Question01Answer01,
    formObject.Question01Answer02,
    formObject.Question01Answer03,
    formObject.Question01Answer04,

    formObject.Question02,

    formObject.Question03Answer01,
    formObject.Question03Answer02,
    formObject.Question03Answer03,
    
    formObject.Question04,

    formObject.Question05Answer01,
    formObject.Question05Answer02,
    formObject.Question05Answer03,
    formObject.Question05Answer04,
    formObject.Question05Answer05,

    formObject.Question06Answer01,
    formObject.Question06Answer02,
    formObject.Question06Answer03,
    formObject.Question06Answer04,
    
    formObject.Question07,
    
    formObject.Question08,

    formObject.Question09,
    
    formObject.Question10,

    //student information
    formObject.Name,
    formObject.PhoneNumber,
    formObject.Email,

  ]);
}
