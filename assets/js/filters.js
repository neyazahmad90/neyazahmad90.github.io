app.filter('star',[function () {
	return function (stringNum) {
		if(stringNum && stringNum.length) {
			var ratingNum = Math.round(stringNum);
			var ratingObj = [];
			for (var i = 1; i <= 5; i++) {
				if(i<=ratingNum)
					ratingObj.push({star: true});
				else
					ratingObj.push({star: false});
			}
			return ratingObj;
		}
		else
			return [];
	}
}])