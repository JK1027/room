function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚙️ 추가 기능')
    .addItem('HTML 화면 열기', 'showHtmlDialog')
    .addToUi();
}

function showHtmlDialog() {
  var html = HtmlService.createHtmlOutputFromFile('index')
      .setWidth(1000)
      .setHeight(750)
      .setTitle('HTML 도구');
  SpreadsheetApp.getUi().showModalDialog(html, ' ');
}

// 웹 앱(Web App) URL로 직접 접속 시 HTML을 화면에 렌더링하는 함수입니다.
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('HTML 도구')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

