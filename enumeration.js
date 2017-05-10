var Enumeration = function() {}

Enumeration.prototype = {

  find: function(array, callback){
    // code here that makes the test pass!
    for(var beatle of array){
      if(callback(beatle)){
        return beatle;
      }
    }
  },

  map: function(array, callback){

  }

}


module.exports = Enumeration;