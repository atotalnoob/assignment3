var mongoose = require('mongoose'),
Listing = require('./ListingSchema.js'),
config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
mongoose.connect(config.db.uri, function (e) {
  if (!e) {
    console.log("Connected successfully");
    var lsts = mongoose.model('Listings', Listing.schema);
    lsts.find({"name": "Library West"}, function (e, result) {
      if (!e) {
        console.log("success running query");
        console.log(result);
        mongoose.connection.close();
      }
      else{ console.error(e);
        mongoose.connection.close();
      }
    })
    }
   
  });
  
};
var removeCable = function() {
  mongoose.connect(config.db.uri, function (e) {
    if (!e) {
      console.log("Connected successfully");
      var lsts = mongoose.model('Listings', Listing.schema);
      lsts.deleteMany({"code": "CABL"}, function (e, result) {
        if (!e) {
          console.log("success running query");
          console.log(result);
          mongoose.connection.close();
        }
        else{ console.error(e);
          mongoose.connection.close();
        }
      })
      }
      
    });
    
};
var updatePhelpsMemorial = function() {
  mongoose.connect(config.db.uri, function (e) {
    if (!e) {
      console.log("Connected successfully");
      var lsts = mongoose.model('Listings', Listing.schema);
      lsts.findOneAndUpdate({"code": "PHL"},{$set:{"address":"Correct Address"}}, function (e, result) {
        if (!e) {
          console.log("success running query");
          console.log(result);
          mongoose.connection.close();
        }
        else{ console.error(e);
          mongoose.connection.close();
        }
      })
      }
      
    });
};
var retrieveAllListings = function() {
  mongoose.connect(config.db.uri, function (e) {
    if (!e) {
      console.log("Connected successfully");
      var lsts = mongoose.model('Listings', Listing.schema);
      lsts.find({}, function (e, result) {
        if (!e) {
          console.log("success running query");
          console.log(result);
          mongoose.connection.close();
        }
        else{ console.error(e);
          mongoose.connection.close();
        }
      })
      }
      
    });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();