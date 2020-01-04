updateInstance = function(payload) {
	animation = payload.presentationInstance ? payload.presentationInstance.shouldAnimate : false;
	var marsImage = '<img id="mars" class="display-mars" src="http://pngimg.com/uploads/mars_planet/mars_planet_PNG27.png"/>';
	var skyBackground = '<img id="display-sky-background" src="https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg"/>';
	var welcome = animation ? '<div id="title" class="title"> WELCOME TO THE</div>' : null;
	var rocket = animation ? '<img id="rocket" class="rocket" src="https://img.pngio.com/rocket-rocket-clipart-rocket-cartoon-png-and-vector-a-rocket-png-260_525.png"/>' : null;
	console.log(welcome)
	var displayBoardHTML = '';
	displayBoardHTML += '<div id="full-screen-display">'
		displayBoardHTML += '<div id="image-background">'
			displayBoardHTML += skyBackground;
			displayBoardHTML += marsImage;
			displayBoardHTML += welcome;
			displayBoardHTML += rocket;
			displayBoardHTML += '<img id="logo" class="LGLogo" src="https://i.ibb.co/q1BdC9y/lg-logo-white-02.png"/>'
		displayBoardHTML += '</div>'
	

	return displayBoardHTML;
}