exports.gradebook_settings = {
    map: function(doc) {
	var result = {
	    'CourseOfferingId': doc['Course Offering Id'],
	    'CourseOfferingCode': doc['Course Offering Code'],
	    'CourseOfferingName': doc['Course Offering Name'],
	    'GradeItemCount': doc['Grade Item Count'],
	    'GradeValuesEntered': doc['Grade Values Entered'],
	    'CourseDefaultGradeScheme': doc['Course Default Grade Scheme'],
	    'CourseGradingSystemType': doc['Course Grading System Type'],
	    'UngradedItems': doc['Ungraded Items'],
	    'AutoUpdateGrades': doc['Auto Update Grades'],
	    'FinalGradeReleased': doc['Final Grade Released'],
	    'ManagingViewDisplayPointsGrade': doc['Managing View Display Points Grade'],
	    'ManagingViewDisplayWeightedGrade': doc['Managing View Display Weighted Grade'],
	    'ManagingViewDisplayGradeSchemeSymbol': doc['Managing View Display Grade Scheme Symbol'],
	    'ManagingViewDisplayGradeSchemeColor': doc['Managing View Display Grade Scheme Color'],
	    'StudentViewDisplayDecimalPointsDisplayed': doc['Student View Display Decimal Points Displayed'],
	    'GradeItemId': doc['Grade Item Id'],
	    'GradeItemName': doc['Grade Item Name'],
	    'GradeItemOutOf': doc['Grade Item Out Of'],
	    'GradeItemGradeScheme': doc['Grade Item Grade Scheme'],
	    'GradeItemType': doc['Grade Item Type'],
	    'GradeItemCanExceedMaxPoints': doc['Grade Item Can Exceed Max Points'],
	    'ManagingViewOverride': doc['Managing View Override'],
	    'ManagingViewOverrideShowPoints': doc['Managing View Override Show Points'],
	    'ManagingViewOverrideShowGradeSchemeSymbol': doc['Managing View Override Show Grade Scheme Symbol'],
	    'ManagingViewOverrideShowGradeSchemeColor': doc['Managing View Override Show Grade Scheme Color'],
	    'THRIVEToggleStatus': doc['THRIVE Toggle Status']
	};
	
	//emit(doc['_id'], result);
	emit(doc['_id'], result);
    }

}
