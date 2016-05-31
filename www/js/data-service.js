dataService = (function () {

    var baseURL = "";

    // The public API
    return {
         findByName: function(searchKey) {
          return $.ajax({url: baseURL + "/find", data: {name: searchKey}});
        },
        deleteCol: function(deleteItem) {
          return $.ajax({url: baseURL + "/delete", data: {item: deleteItem}});
        },
        addCol: function(addItem) {
         return $.ajax({url: baseURL + "/add", data: {item: addItem}});
        }
   };

}());