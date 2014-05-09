
// First coin demo
$("#demo-coin-button").click(function() {
	$("#demo-coin-answer").show();
});			

// Name demo
$("#demo-name-button").click(function() {
	$("#name-list").show();
	$("#demo-name-button").hide();
	setTimeout(function() {
		$("#name-list").hide();
		$("#name-content").html("Time's up!<br><br>In the previous list, were there more:<ul><li><a id='men'>Men </a></li><li><a id='women'>Women </a></li><li><a id='same'>Same number of each</a></li></ul>");
		getAnswer();
	}, 15000);
});		

function getAnswer() {
	$("#men").click(function() {
		$("#name-content").html("Interesting choice. The majority of people choose <strong>Women</strong>. Watch the next video to find out why!");
	});

	$("#women").click(function() {
		$("#name-content").html("The majority of people choose <strong>Women</strong>. Watch the next video to find out why!");
	});

	$("#same").click(function() {
		$("#name-content").html("You're right! However, the majority of people choose <strong>Women</strong>. Watch the next video to find out why!");
	});
};