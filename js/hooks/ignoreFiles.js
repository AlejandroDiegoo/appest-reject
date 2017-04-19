module.exports = function(context) {

	console.log('START IGNOREFILES.JS');

	const fs = require('fs');

	const blackListExtensions = ['psd'];
	const blackListPaths = [
		'platforms\\android\\assets\\www\\assets\\images\\',
		'platforms\\android\\assets\\www\\assets\\images\\android\\'
	];

	function getBlackListFiles(imagesPath) {
		var imagesArray = fs.readdirSync(imagesPath, {'encoding': 'UTF-8'});
		imagesArray.forEach(function(value) {
		  value = imagesPath + value;
			var valueExtension = value.substr(value.length - 3).toLowerCase();
			if (blackListExtensions.indexOf(valueExtension) != -1) {
				fs.unlinkSync(value);
			}
		});
	}

	blackListPaths.forEach(function(value) {
		getBlackListFiles(value);
	});

	console.log('END IGNOREFILES.JS');

}
