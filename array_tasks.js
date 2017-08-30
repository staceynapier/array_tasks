var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(num) {
			return Math.pow(num, 2)
		})
	},

	sum: function (arr) {
		return arr.reduce( function(accumulator, num) {
		  return accumulator + num;
		}, 0)
	},

	findDuplicates: function (arr) {
		var duplicates = []
		for (var num = 0; num < arr.length - 1; num++) {
			if ( arr[num + 1] === arr[num]) {
				duplicates.push(arr[num]);
			}
		}
		return duplicates;
	},

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
