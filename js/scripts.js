// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	//Good Stuff goes here(main body)

	new Maplace({
		show_markers: true,
		locations: [{
			lat: 47.637703, 
			lon: -117.3854611,
			zoom: 15
		}]
	}).Load(); 


	console.log('Page Loaded. Lets Do this!');

}); 
