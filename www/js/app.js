
var App = React.createClass({
   
    getInitialState: function() {
        return {
            searchKey: '',
            result: [],
            willDelete: false
        }
    },

    handleDelete: function() {
        if(this.state.result.length>1){
        this.setState({ willDelete: true});
    }
    },

    searchHandler: function() {
        var checkValues=['quotationStart','quotationEnd','alternateQuotationStart','alternateQuotationEnd']
     var searchInput= document.getElementById("searchinput").value;
         for(var i=0;i<checkValues.length;i++){
        if(searchInput == checkValues[i] ){
        this.setState({searchKey: searchInput}, function(){
            dataService.findByName(this.state.searchKey).done(function(result) {
            this.setState({result: result});
        }.bind(this));  
        });
       

    }
}
    
    },

   handleDeleteCol: function(item) {
      dataService.deleteCol(item).done(function(result) {
            this.setState({result: result});
        }.bind(this)); 
      this.setState({ willDelete: false});

   },
   handleAdd: function(item) {
if(this.state.result.length>1){
   this.setState({ willAdd: true});
}

},

   submitItem: function() {
   var inputLanguage= document.getElementById("itemLanguage").value;
   var inputName= document.getElementById("itemName").value;
    var item= {Language:inputLanguage, name:inputName};
    dataService.addCol(item).done(function(result) {
            this.setState({result: result});
        }.bind(this)); 
    this.setState({ willAdd: false});
   },
    render: function(){
         var self = this;
        var divStyle = {
       position: 'absolute',
       top:'160px',
       left:'100px'
             };
             var listyle = {
       listStyleType: 'none',
      float: 'left',
      border: '1px solid',
      padding: '20px',
      marginLeft: '2px'
             };
           var postionIcon = {
            position: 'relative',
            left: '59px',
            top: '-22px',
            fontSize: '15px'
           };
           var formPosition = {
            position: 'relative',
            left: '200px',
            top: '200px',
            fontSize: '25px',
            border: "2px solid #ccc",
            width: '600px',
            padding: '10px',
            boxShadow: '0 0 20px #666',
            zIndex: '999',
            lineHeight: '35px'
           };
           var btnLocation = {
             position: 'absolute',
            right: '40px',
            top: '100px',
            padding: '10px'
           };
           var btnSpacing = {
            marginLeft: '10px'
           }
           
    let len= this.state.result.length;
    let willDelete= this.state.willDelete;       
    let willAdd= this.state.willAdd;       
        return (
            <div>
            <h2> Search Using Delimiters </h2>
            <div className="bar bar-standard bar-header-secondary">

                <input type="search" id="searchinput" onChange={this.searchHandler} />
            </div>
            <ul style={divStyle}>
            {

        this.state.result.map(function(item, $index) {
          return <li style={listyle}>
        {
            
            willDelete ?
            <i className="fa fa-times" onClick={self.handleDeleteCol.bind(self,item)} style={postionIcon}></i> 
            : null
        }
          {item.Language} = {item.name}
          {
            ($index !=len-1) ?
            <span >,</span>
            : null
        }

          </li>
           })
          }
      </ul>
      <div style={btnLocation}>
      <button className="btn btn-primary" onClick={this.handleAdd}> Add Item</button>
      <button  style={btnSpacing} className="btn btn-primary" onClick={this.handleDelete}> Delete Item</button>
      </div>
      {
        willAdd ?
     
        <div style={formPosition}>
      Language: <input type="text" id="itemLanguage" />
      Name: <input type="text" id="itemName" />
       <button  className="btn btn-success" onClick={this.submitItem}> Submit </button>
       </div>

       :null
      }
      
        </div> 
        );

    }
});

React.render(<App/>, document.getElementById('result'));