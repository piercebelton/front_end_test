var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'img/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'img/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'img/beast.jpg'
	}
};

$(document).ready(function() {

	var elements = Object.keys(images).map(function(item) {
	  var img = images[item];
	  return(
	    "<div class='col-sm-4'><div class='hov-container img-container'><img class='img-responsive' src='" + img.path + "'><div class='hov-text'><h4>" + img.heading+"</h4>" +img.description+"</div></div></div>"
	  )
	});

	$("div#img-row").html(elements);

});
