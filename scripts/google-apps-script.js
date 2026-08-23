/**
 * GOOGLE APPS SCRIPT FOR LEARN WITH VEEJE
 * -------------------------------------------------------------
 * 1. Open your Google Sheet.
 * 2. Click Extensions > Apps Script.
 * 3. Replace all code with this snippet.
 * 4. Click 'Deploy' > 'New Deployment'.
 * 5. Select type: 'Web app'.
 * 6. Set "Execute as": "Me".
 * 7. Set "Who has access": "Anyone" (crucial so webhook can post without CORS issue).
 * 8. Copy Web App URL and set as GOOGLE_SHEETS_WEBHOOK_URL in environment!
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      var headers = [
        'Registration ID',
        'Date',
        'Time',
        'Name',
        'Email',
        'Phone',
        'City',
        'Profession',
        'Problem to Solve',
        'Course',
        'Payment ID',
        'Order ID',
        'Signature',
        'Amount',
        'Status'
      ];
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setValues([headers]);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#0f172a');
      headerRange.setFontColor('#ffffff');
    }
    
    // Append row
    var row = [
      data['Registration ID'] || '',
      data['Date'] || new Date().toLocaleDateString(),
      data['Time'] || new Date().toLocaleTimeString(),
      data['Name'] || '',
      data['Email'] || '',
      data['Phone'] || '',
      data['City'] || '',
      data['Profession'] || '',
      data['Problem to Solve'] || '',
      data['Course'] || 'AI Business System Design Masterclass',
      data['Payment ID'] || '',
      data['Order ID'] || '',
      data['Signature'] || '',
      data['Amount'] || 249,
      data['Status'] || 'SUCCESS'
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Registration recorded' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Learn with Veeje - Google Sheets Webhook active.");
}
