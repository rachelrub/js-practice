function average(numbers_list) {
	// add all the numbers up and then divide them by how many numbers there are
	var average = 0;
	var sum = 0;
	for (var i = 0; i < numbers_list.length; i++) {
		sum += numbers_list[i];
	}
	return sum/i
}

function assignGrade(grade) {
	// slpit up the numbers into letters so i return letters for certain numbers
	 if (grade >= 90) {
	 	return "A";
	 }
	 else if (90 > grade >= 80) {
	 	return "B";
	 }
	 else if (79 >= grade >=70) {
	 	return "C";
	 }
	 else if (70 > grade >=60) {
	 	return "D";
	 }
	 else if (grade <= 59) {
	 	return "F";
	 }
}

function pluralize(num, noun) {
	//  plurals are more than one so i added an s when there were more than one of said noun
	if (num > 1){
		return num + " " + noun + "s";
	}
	else if (num = 1) {
		return num + " " + noun;
	}



}

function longestWord(sentence) {
	// split the sentance into words and then compare the length of all of the words
	// and then return the longest word
	var str = sentence.split(" ");
	var longest = 0;
	var word = null;
	for (var i = 0; i <= str.length - 1; i++) {
		if (longest < str[i].length) {
			longest = str[i].length;
			word = str[i]
			
		}
	}
	return word;
}

function palindrome(word) {
	// split the word into letters, reverse the letters, rejoin the letters to a new word
	// if the new word = the old word then "yes" palindrome
	var palindrome = word.split("").reverse().join("")

	if (word === palindrome) {
		return "yes";
	}
	else {
		return "no";
	}

}

function letterCounter(phrase, letter) {
	var letters = phrase.split("");
	var count = 0; 
	for (var i = 0; i <= letters.length - 1; i++) {
		if (letters[i] === letter) {
			count++;
		}

	}	
return count;


}

function longestPalindrome(sentence) {
	// i found ouf the longest word using the longest word constructor and then found out if that word was a palindrome using the palindrome constructor

	var str = sentence.split(" ");
	var longest = 0;
	var word = null;
	for (var i = 0; i <= str.length - 1; i++) {
		if (longest < str[i].length) {
			longest = str[i].length;
			word = str[i]
			
		}
	}

	var palindrome = word.split("").reverse().join("")

	if (word === palindrome) {
		return word + " is a palindrome";
	}
	else {
		return word + " is not a palindrome";
	}

}

function doItTwice(f) {
	// i called the function f() twice!!!
	return f() + f();
}

function objectFun(first, last, age, email, color) {
	// i created a person with the person constructor
	var person = {
		first_name: first,
		last_name: last,
		age: age,
		email: email,
		fav_color: color,
	};
	return person;
}

function numChildren(obj) {
	// children is an array in the object so find the length of the array
	var count = obj.children.length;
	return count;
}


function greeting(name) {
	// return a greting for some name
	return "Hello, " + name + "!";

}

function sayHello(first, last, greet) {
	// make the first and last into one name and the create a greeting that returns a greeting for said name
	var name = first + " " + last;
	var greets = greet(name);
	return greets;
	

}

function goodnight(name) {
	// return something that says goodnigh with the name inputed in the statement
	return "Goodnight, " + name + "!";
}

function sayGoodnight(name, status, message) {
	// create an if else statement that will return different things based on the status
	if (status === "Morning") {
		return "It's not bedtime!"
	}
	else {
		return message(name);
	}
}
