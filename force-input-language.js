hebrewMap = {
	65: 'ש',
	66: 'נ',
	67: 'ב',
	68: 'ג',
	69: 'ק',
	70: 'כ',
	71: 'ע',
	72: 'י',
	73: 'ן',
	74: 'ח',
	75: 'ל',
	76: 'ך',
	77: 'צ',
	78: 'מ',
	79: 'ם',
	80: 'פ',
	81: '/',
	82: 'ר',
	83: 'ד',
	84: 'א',
	85: 'ו',
	86: 'ה',
	87: '\'',
	88: 'ס',
	89: 'ט',
	90: 'ז',
	186: 'ף',
	188: 'ת',
	190: 'ץ',
	191: '.',
	192: ';',
	219: ']',
	221: '[',
	222: ','
}
englishMap = {
	186: ';',
	188: ',',
	190: '.',
	191: '/',
	192: '`',
	219: '[',
	221: ']',
	222: '\''
}

function forceHebrew(e) {
	var key = e.keyCode || e.whish;
	if (hebrewMap[key] && !e.ctrlKey && !e.altKey) {
		e.preventDefault();
		e.target.value += hebrewMap[key]; // || key;
		console.log('key -> ' + key);
	}
}

function forceEnglish(e) {
	var key = e.keyCode || e.whish;
	if (hebrewMap[key] && !e.ctrlKey && !e.altKey) {
		e.preventDefault();
		e.target.value += englishMap[key] || String.fromCharCode(key).toLowerCase();
		console.log('key -> ' + key);
	}
}

function forceEnglishUppercase(e) {
	var key = e.keyCode || e.whish;
	if (hebrewMap[key] && !e.ctrlKey && !e.altKey) {
		e.preventDefault();
		e.target.value += englishMap[key] || String.fromCharCode(key);
		console.log('key -> ' + key);
	}
}

document.querySelector('input[fil=he]').addEventListener('keydown', function(e) {
	forceHebrew(e);
})
document.querySelector('input[fil=en]').addEventListener('keydown', function(e) {
	forceEnglish(e);
})
document.querySelector('input[fil=EN]').addEventListener('keydown', function(e) {
	forceEnglishUppercase(e);
})
elm = document.querySelectorAll('input[fil=en], input[fil=EN]');
for (var i = 0; i < elm.length; i++) {
	elm[i].style.direction = 'ltr';
}
