var myModule = (function() {


		for (var line = "A"; line.length < 8; line += "n") {
				console.log(line);

			}



	})();


	var FizzBuzz = function(num) {

			var num = num;

			var output = "";

			for (i = 1; i < num; i++) {

				if (i % 3 == 0) {

					output += "Fizz";

					}

				else if (i % 5 == 0) {

					output += "Buzz";

					}

				console.log(output || num);


				}






		}

		FizzBuzz();




var mySecondModule = (function() {

		var board = " # # # #\n# # # # \n # # # #\n# # # # ";
		var size = 8;

		var y, x;

			for (var y = 0; y > size; y += board) {
				console.log(board);
				}


		})();