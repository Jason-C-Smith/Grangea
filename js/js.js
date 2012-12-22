function buildRectangles() {

document.write(
"<body>" +

    "<div id='page-wrapper'>" +
        // Top rectangle
        "<div class='rectangle' id='top'>" +
            "<h2 style='text-align:center'>Rectangle</h2>" +
            "<p style='text-align:center'><input type='button' value='Say hello to the King of Grangea' onclick='return showKing()' /></p>" +
         "</div>" +

        // Bottom rectangle
        "<div class='rectangle-1' id='bottom'><h2 style='text-align:center'>Rectangle-1</h2>" +
        "</div>" +

        // Right rectangle
        "<div class='rectangle-2' id='right'><h2 style='text-align:center'>Rectangle-2</h2>" +
        "</div>" +

        // Left rectangle
        "<div class='rectangle-3' id='left'><h2 style='text-align:left'>Rectangle-3</h2>" +
        "</div>" +

        // Center rectangle
        "<div class='rectangle-4' id='center'><h2 style='text-align:center'>Rectangle-4</h2>" +
        "</div>" +

    "</div>" +
"</body>")
}

// Click On & Off button functions.
function showKing() {
	// Change content of center rectangle
	var centerRectangle = document.getElementById("center");
	
	var centerContent = '<p style="text-align:center"><img src="theking.jpg" alt="theking" /></p>';
	
	centerRectangle.innerHTML = centerContent;	
	
	// Change content of top rectangle
	var topRectangle = document.getElementById("top");
	
	var topContent = '<h2 style="text-align:center">Rectangle</h2><p style="text-align:center"><input type="button"  value="Say goodbye to the King of Grangea!" onclick="return hideKing()" /></p>';
	
	topRectangle.innerHTML = topContent;	
}

function hideKing() {
	// Hide content from center rectangle
    var centerRectangle = document.getElementById("center");
	
	var centerContent = '<h2 style="text-align:center">Rectangle-4</h2>';
	
	centerRectangle.innerHTML = centerContent;	
	
	// Change content of top rectangle
	var topRectangle = document.getElementById("top");
	
	var topContent = '<h2 style="text-align:center">Rectangle</h2><p style="text-align:center"><input type="button"  value="Say hello to the King of Grangea!" onclick="return showKing()" /></p>';
	
	topRectangle.innerHTML = topContent;	

}