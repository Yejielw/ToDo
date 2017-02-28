app.factory('model1', function() {
  var todos = [];

  var show = function(todoT){
	  todos.push({name:todoT, done: false});
	};

	var remove = function(item) { 
	  var index = item;
	  todos.splice(index, 1);     
    };

  return { 
  	todo: todos,
  	showw: show,
  	removee: remove
   };
});