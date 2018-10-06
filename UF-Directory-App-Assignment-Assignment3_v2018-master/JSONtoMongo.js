'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Listing = require('./ListingSchema.js'),
  config = require('./config');



mongoose.connect(config.db.uri, function (e) {
  if (!e) {
    console.log("Connected successfully");

    var data = JSON.parse(fs.readFileSync('listings.json', 'utf8'));
    data.entries.forEach(listing => {
      var lst = new Listing(listing);
      lst.save(function(e){
        if (!e) {
          console.log("Successfully saved")
        }
        else 
        {
          console.error(e);
        }
      });
    });
  }
  else
  {
    console.error(e);
  }
  mongoose.disconnect();
});




/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 

  Remember that we need to read in a file like we did in Bootcamp Assignment #1.
 */


/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */