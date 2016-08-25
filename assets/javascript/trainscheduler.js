<script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDrKWSJmT8ppT87DpEPhDE3mJODW2X90pg",
    authDomain: "test-e8c2b.firebaseapp.com",
    databaseURL: "https://test-e8c2b.firebaseio.com",
    storageBucket: "test-e8c2b.appspot.com",
  };
  firebase.initializeApp(config);
</script>


// submit info button, collect data
$('#Submit').on('click', function(){

		trainName = $('#name').val().trim();
		destination = $('#destination').val().trim();
		frequency = $('#freq').val().trim();
		uTc = $('#time').val().trim();

		DatabaseURL.push({
			name: trainName,
			place: destination,
			frequency: frequency,
			militaryTime: uTc
});
    	$('#name').val('');
		$('#destination').val('');
		$('#freq').val('');
		$('#time').val('');

		return false;

});

// need to add all the train data to database

//DataBaseURL.on('child_added', function(childSnapshot){
//    		var table = $('#table');
//            var row = $('<td>');
    