 // Train Schedule: Homework 7
 // Using Firebase, create a train schedule
 //   and the ability to add a new train
 //  First display the schedule of trains already in the database
 //    Every minute, update the Next Arrival time and the Minutes
 //    Away for each train on the screen.
 //  
 
 
 // 1. Initialize Firebase
 var config = {
   apiKey: "AIzaSyA_QypGPkcjPtylRDscf7-HQl8ribnFeIs",
   authDomain: "time-sheet-55009.firebaseapp.com",
   databaseURL: "https://time-sheet-55009.firebaseio.com",
   storageBucket: "time-sheet-55009.appspot.com"
 };
 
 firebase.initializeApp(config);
 
 var database = firebase.database();
 
 // 2. Button for adding Train
 $("#add-train-btn").on("click", function() {
 
   // Grabs user input
   var trainName = $("#train-name-input").val().trim();
   var trainDestination = $("#destination-input").val().trim();
  var trainFirstTrainTime = moment($("#first-train-time-input").val().trim(), "DD/MM/YY").format("X");
  var trainFrequency = moment($("#train-frequency-input").val().trim(), "mm").format("X");
 
   // Creates local "temporary" object for holding train data
   var newTrain = {
     name: trainName,
     destination: trainDestination,
     traintime: trainFirstTrainTime,
     tfrequency: trainFrequency
   };
 
   // Uploads employee data to the database
   database.ref().push(newTrain);
 
   // Logs everything to console
   console.log(newtrain.name);
   console.log(newtrain.destination;
   console.log(newtrain.traintime);
   console.log(newtrain.tfrequency);
 
   // Alert
   alert("Train successfully added");
 
   // Clears all of the text-boxes
   $("#train-name-input").val("");
   $("#destination-input").val("");
   $("#first-train-time-input").val("");
   $("#train-frequency-input").val("");
 
   // Prevents moving to new page
   return false;
 });
 
 // 3. Create Firebase event for adding a train to the database and a row in the html when a user adds an entry
 database.ref().on("child_added", function(childSnapshot, prevChildKey) {
 
   console.log(childSnapshot.val());
 
   // Store everything into a variable.
   var trainName = childSnapshot.val().name;
   var trainDestination = childSnapshot.val().destination;
   var trainFirstTrainTime = childSnapshot.val().traintime;
   var trainFrequency = childSnapshot.val().tfrequency;


   // Employee Info
   console.log(trainName);
   console.log(trainDestination);
   console.log(trainFirstTrainTime);
   console.log(trainFrequency);
 
   // arrival time is check if first train is greater than time now
   //   and time now plu
   // standardize the first train time
   var trainNextArrivalStd = moment.unix(trainArrival).format("HH:mm");
 
   // Calculate the months worked using hardcore math
   // To calculate the months worked
   var trainMinutesAway = moment().diff(moment.unix(empStart, "X"), "months");
   console.log(trainMinutesAway);
 
   // Calculate the total billed rate
   var trainArrival = moment().diff(moment.unix(empStart, "X"), "months");
   console.log(trainArrival);
 
   // Add each train's data into the table
   $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
   trainFrequency + "</td><td>" + trainNextArrivalStd + "</td><td>" + trainMinutesAway + "</td></tr>");
 });
 
	




  // Assume the following situations.
 
       // (TEST 1)
       // First Train of the Day is 3:00 AM
       // Assume Train comes every 3 minutes.
       // Assume the current time is 3:16 AM....
       // What time would the next train be...? (Use your brain first)
       // It would be 3:18 -- 2 minutes away
 
       // (TEST 2)
       // First Train of the Day is 3:00 AM
       // Assume Train comes every 7 minutes.
       // Assume the current time is 3:16 AM....
       // What time would the next train be...? (Use your brain first)
       // It would be 3:21 -- 5 minutes away
 
 
       // ==========================================================
 
       // Solved Mathematically
       // Test case 1:
       // 16 - 00 = 16
       // 16 % 3 = 1 (Modulus is the remainder)
       // 3 - 1 = 2 minutes away
       // 2 + 3:16 = 3:18
 
       // Solved Mathematically
       // Test case 2:
       // 16 - 00 = 16
       // 16 % 7 = 2 (Modulus is the remainder)
       // 7 - 2 = 5 minutes away
       // 5 + 3:16 = 3:21
 
       // Assumptions
       var tFrequency = 3;
 
       // Time is 3:30 AM
       var firstTime = "03:30";
 
       // First Time (pushed back 1 year to make sure it comes before current time)
       var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
       console.log(firstTimeConverted);
 
       // Current Time
       var currentTime = moment();
       console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
 
       // Difference between the times
       var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
       console.log("DIFFERENCE IN TIME: " + diffTime);
 
       // Time apart (remainder)
       var tRemainder = diffTime % tFrequency;
       console.log(tRemainder);
 
       // Minute Until Train
   
       var tMinutesTillTrain = tFrequency - tRemainder;
       console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
 
       // Next Train
       var nextTrain = moment().add(tMinutesTillTrain, "minutes");
       console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
 












    // Using .on("value", function(snapshot)) syntax will retrieve the data
     // from the database (both initially and every time something changes)
     // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
     database.ref().on("value", function(snapshot) {
 
       // Then we console.log the value of snapshot
       console.log(snapshot.val());
 
   
       // Then we change the html associated with the number.
       $("#click-value").html(snapshot.val().clickCount);
 
       // Then update the clickCounter variable with data from the database.
       clickCounter = snapshot.val().clickCount;
 
     // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
     // Again we could have named errorObject anything we wanted.
     }, function(errorObject) {
 
       // In case of error this will print the error
       console.log("The read failed: " + errorObject.code);
     });
 
 

