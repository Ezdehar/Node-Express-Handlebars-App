
//Express Routes
var express = require("express");

var router = express.Router();

var burgers = require("/Users/ezdeharjaber/Documents/cwru/burger/models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burgers.insertOne(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.updateOne(
    {
      sleepy: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});


// Export routes for server.js to use.
module.exports = router;

// connection.query("SELECT * FROM burgers;", function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     res.render("index", { burgers: data });
//   });
// });

// connection.query("INSERT INTO burgers VALUES (?)", [req.body.burger], function(err, result) {
//     if (err) {
//       return res.status(500).end();
//     }

//     // Send back the ID of the new movie
//     res.json({ id: result.insertId });
//     console.log({ id: result.insertId });
//   });
// });
// connection.query("UPDATE burgers SET burger = ? WHERE id = ?", [req.body.burger, req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.changedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();


//   });





