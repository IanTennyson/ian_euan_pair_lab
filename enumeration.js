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
    var newArray = [];
    for(var num of array){
      newArray.push(callback(num));
    }
    return newArray;
  },

  filter: function(array, callback){
    var evenArray = [];
    for(var num of array){
      if(callback(num)){
        evenArray.push(num)
      }
    }
    return evenArray;
  },

  some: function(array, callback){
    for(var num of array){
      if(callback(num)){
        return true;
      }
    }
    return false;
  },

  every: function(array, callback){
    for(var num of array){
      if(callback(num) === false){
        return false;
      }
    }
    return true
  },

  reduce: function(array, callback){
    var counter = 0;
    for(var item of array) {
      callback(item);
      counter += item
    }
    return counter;
  },

  forEach: function(array, callback){
    for(var item of array){
      callback(item);
    }
  }

}


module.exports = Enumeration;