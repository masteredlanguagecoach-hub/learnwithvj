/**
 * GOOGLE APPS SCRIPT FOR LEARN WITH VEEJE
 * -------------------------------------------------------------
 * Full persistence backend & deduplication for Google Sheets.
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

    var regId = data['Registration ID'] || '';
    var paymentId = data['Payment ID'] || '';
    
    // DEDUPLICATION CHECK: Check if Registration ID or Payment ID already exists in sheet
    var lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      var existingData = sheet.getRange(2, 1, lastRow - 1, 15).getValues();
      for (var i = 0; i < existingData.length; i++) {
        var existingRegId = existingData[i][0];
        var existingPaymentId = existingData[i][10];

        // If duplicate registration ID or duplicate payment ID found, do not append a second row!
        if ((regId && existingRegId === regId) || (paymentId && existingPaymentId === paymentId)) {
          // Update existing row status if needed
          if (data['Status']) {
            sheet.getRange(i + 2, 15).setValue(data['Status']);
          }
          if (data['Payment ID']) {
            sheet.getRange(i + 2, 11).setValue(data['Payment ID']);
          }
          return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Row updated (duplicate prevented)' }))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }
    }
    
    // Append new row if not a duplicate
    var row = [
      regId,
      data['Date'] || new Date().toLocaleDateString(),
      data['Time'] || new Date().toLocaleTimeString(),
      data['Name'] || '',
      data['Email'] || '',
      data['Phone'] || '',
      data['City'] || '',
      data['Profession'] || '',
      data['Problem to Solve'] || '',
      data['Course'] || 'AI Business System Design Masterclass',
      paymentId,
      data['Order ID'] || '',
      data['Signature'] || '',
      data['Amount'] || 3,
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
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();
    
    if (lastRow <= 1) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', registrations: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var data = sheet.getRange(1, 1, lastRow, 15).getValues();
    var headers = data[0];
    var registrations = [];
    
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var record = {};
      for (var j = 0; j < headers.length; j++) {
        record[headers[j]] = row[j];
      }
      registrations.push({
        registrationId: String(record['Registration ID'] || ''),
        date: String(record['Date'] || ''),
        time: String(record['Time'] || ''),
        name: String(record['Name'] || ''),
        email: String(record['Email'] || ''),
        phone: String(record['Phone'] || ''),
        city: String(record['City'] || ''),
        profession: String(record['Profession'] || ''),
        problemToSolve: String(record['Problem to Solve'] || ''),
        course: String(record['Course'] || ''),
        paymentId: String(record['Payment ID'] || ''),
        orderId: String(record['Order ID'] || ''),
        signature: String(record['Signature'] || ''),
        amount: Number(record['Amount']) || 3,
        status: String(record['Status'] || 'SUCCESS'),
        createdAt: String(record['Date'] || ''),
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success', registrations: registrations }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
