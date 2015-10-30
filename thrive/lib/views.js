exports.gradebook_settings = {
    map: function(doc) {
	emit(doc['_id'], doc);
    }

}
