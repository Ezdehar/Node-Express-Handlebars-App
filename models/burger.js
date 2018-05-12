// Import the ORM to create functions that will interact with the database.
var orm = require("/Users/ezdeharjaber/Documents/cwru/burger/config/orm.js");

var burger = {
    selectAll: function(cb) {
     orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
    });
  },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

// Export the database functions for the controller (catsController.js).
module.exports = burger;










// <script type="text/javascript">
// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//     $(".change-devoured").on("click", function(event) {
//       var id = $(this).data("id");
//       var newDevoured = $(this).data("newDevoured");
  
//       var newDevouredState = {
//         devoured: newDevoured
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: newDevouredState
//       }).then(
//         function() {
//           console.log("changed devoured to", newDevoured);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
  
//       var newBurger = {
//         name: $("#bu").val().trim(),
//         devoured: $("[name=devoured]:checked").val().trim()
//       };
  
//       // Send the POST request.
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new Burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//   });
// </script>










 
 
  
 