var config = {
    apiKey: "AIzaSyDvR6nqSedj7Vxi5o_yMggbZhG19JcHnZA",
    authDomain: "employeeindex.firebaseapp.com",
    databaseURL: "https://employeeindex.firebaseio.com",
    projectId: "employeeindex",
    storageBucket: "employeeindex.appspot.com",
    messagingSenderId: "241241817268"
  };
  firebase.initializeApp(config);

  //variable to reference the database
  var database = firebase.database();

  // initial variables
  var name = "";
  var role = "";
  var start = "";
  var mWork = "";
  var mRate = "";
  var tBill = "";

  $("#submitButton").on("click", function(event){

    //prevent the page from refreshing
    event.preventDefault();
    console.log("hit button");
    // grab the inputs from the entry fields
    name = $("#employeeNameInput").val().trim();
    role = $("#employeeRoleInput").val().trim();
    start = $("#employeeStartDateInput").val().trim();
    mRate = $("#employeeMonthlyRateInput").val().trim();
    console.log(name, role, start, mRate);
    //want to make a row that adds information in the input fields
    database.ref().push({
      name: name,
      role: role,
      start: start,
      mWork: mWork,
      mRate: mRate,
      tBill: tBill
    });

    
  });

  database.ref().on("child_added", function(snapshot){
    console.log(snapshot.val());
    

  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  