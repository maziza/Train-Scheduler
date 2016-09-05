	  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyBUJRnnzmJrHBqNwGjhtaHXWhaQstBS3us",
	    authDomain: "trainscheduler-924b1.firebaseapp.com",
	    databaseURL: "https://trainscheduler-924b1.firebaseio.com",
	    storageBucket: "",
	  };
	  firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function(){


// submit info button, collect data
$('#Submit').on('click', function(){

		var trainName = $('#name').val().trim();
		var destination = $('#destination').val().trim();
		var frequency = $('#freq').val().trim();
		var uTc = moment($('#time').val().trim(), "hh:mm").subtract(10, "years").format("X");

		database.ref().push(

		{
			name: trainName,
			place: destination,
			frequency: frequency,
			militaryTime: uTc
});
    	$('#name').val('');
		$('#destination').val('');
		$('#freq').val('');
		$('#time').val('');

	// empty();
	return false;

});

	
});
// need to add all the train data to database

//DataBaseURL.on('child_added', function(childSnapshot){
//    		var table = $('#table');
//            var row = $('<td>');

database.ref().on('child_added',function(snapshot){
        //Time input of the frequency of train.
        var frequency = snapshot.val().frequency;
        //live time is real time.
        var liveTime = moment();
        var firstTrain = moment(liveTime);
        //one month back to avoid live time.
        var oneMonth = moment(snapshot.val().firstTrain, 'hh:mm').subtract(1, 'month');
        var timeOftrain = moment(oneMonth).format('HH:mm:ss');
        //another one, to track the time of the train by the time put on Input.
        var anotherMonth = moment(timeOftrain,'hh:mm' ).subtract(1, 'month');
        
        var residualTime = moment().diff(moment(oneMonth), 'minutes');
        //Time apart between trains.
        var timeRemainder = residualTime % frequency;
        //math equation to solve the minutes till the next train.
        var whereIstheTrain = frequency - timeRemainder; 
        //next train arrival 
        var nextarrival = moment().add(nextarrival, 'minutes').format('HH:mm:ss');
        //Appending the child_add database into a tbody table when the name is inserted in the input.
        $('#theTimeSchedule > tbody').append('<tr><td>' + snapshot.val().trainName + '</td><td>' +
            snapshot.val().destination + '</td><td>' + snapshot.val().frequency + " minutes" + '</td><td>' +
            nextarrival + '</td><td>' + whereIstheTrain + " minutes" + '</td></tr>');
    });


