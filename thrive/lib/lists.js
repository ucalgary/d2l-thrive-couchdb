var templates = require('duality/templates');

exports.gradebook_settings_csv = function(head, req) {
    exports.csv_document(head, req, 'gradebook_settings.csv');
}

exports.csv_document = function(head, req, template) {
    var row = null;
    
    start({
	    code: 200,
		headers: {
		'Content-Type': 'text/csv'
		    }
	});

    // CSV header
    send('Course Offering Id,' + 
	 'Course Offering Code,' + 
	 'Course Offering Name,' + 
	 'Grade Item Count,' + 
	 'Grade Values Entered,' + 
	 'Course Default Grade Scheme,' + 
	 'Course Grading System Type,' + 
	 'Ungraded Items,' + 
	 'Auto Update Grades,' + 
	 'Final Grade Released,' + 
	 'Managing View Display Points Grade,' + 
	 'Managing View Display Weighted Grade,' + 
	 'Managing View Display Grade Scheme Symbol,' + 
	 'Managing View Display Grade Scheme Color,' + 
	 'Student View Display Decimal Points Displayed,' + 
	 'Grade Item Id,' + 
	 'Grade Item Name,' + 
	 'Grade Item Out Of,' + 
	 'Grade Item Grade Scheme,' + 
	 'Grade Item Type,' + 
	 'Grade Item Can Exceed Max Points,' + 
	 'Managing View Override,' + 
	 'Managing View Override Show Points,' + 
	 'Managing View Override Show Grade Scheme Symbol,' + 
	 'Managing View Override Show Grade Scheme Color,' + 
	 'THRIVE Toggle Status\n');

    // output document values
    while (row = getRow()) {
	send(templates.render(template, req, {
		    doc: row.doc ? row.doc : row.value
			}));
    }
}
