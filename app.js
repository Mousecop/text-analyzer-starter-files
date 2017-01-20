//PROBLEM:
//Analyze the Text in the textarea for these key things:
	//Word count
	//Unique word count
	//Average word length
	//Average sentence length
//Do not need to add any HTML or CSS, but maybe hooks for jQuery in the HTML
//Need to remove 'hidden' class from results when its time to display the results


function getWords(str) {
	var re = /[\s+,\.();?!:]/;
	return str.toLowerCase().split(re).filter(Boolean);
}

function totalWordCount(str) {
	var words = getWords(str);
	console.log(words);
	return words.length;
}

function getWordMap(str) {
	var words = getWords(str);
	var wordMap = {};
	for (var i = 0; i < words.length; i++){
		if (wordMap[words[i]]) {
			// increment the count
			wordMap[words[i]]++;
		} else {
			// initialize the word
			wordMap[words[i]] = 1;
		}
	}
	return wordMap;
}

function uniqueWordCount(str) {
	var wordMap = getWordMap(str);
	return Object.keys(wordMap).length;
}

function averageWordLength(str) {
	// Get length of array
	// loop through array to find the the length of each string
	// add to a counter
	// divide the total length by the length of the array
	var counter = 0;
	var wordArray = getWords(str);
	for (var i = 0; i < wordArray.length; i++) {
		counter += wordArray[i].length;
	}
	var avgLength = counter / wordArray.length;
	return avgLength.toFixed(2);
}

function averageSentenceLength(str) {
	var numSentences = str.match(/[.!?]+/g) ? str.match(/[.!?]+/g).length : 1;
 	var wordCount = getWords(str).length;
 	return (wordCount / numSentences).toFixed(2);
}


/* event handlers*/
$('#submit').click(function (e) {
	e.preventDefault();
	var words = $('#user-text').val();
	var wc = totalWordCount(words);
	var uwc = uniqueWordCount(words);
	var awc = averageWordLength(words);
	var asl = averageSentenceLength(words);
	$('dl.hidden').removeClass('hidden');
	// put the results in the DOM
	$('#wc').text(wc);
	$('#uwc').text(uwc);
	$('#awc').text(awc + ' characters');
	$('#asl').text(asl + ' words');
})