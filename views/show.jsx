const React = require("react");
const Default = require("./layouts/default");

function ShowView({bread}) {
      return (
             
            <Default title="show Details">
                  <h2>Show Details page {bread.name} bread</h2>
                 
                  <p>
                        and it 
                        {
                              bread.hasGluten
                              ?
                                    
                                    <span> does </span>
                                    :<span> does not </span>
                        
                                    
                        }
                  have gluten
                  
                  </p>  
                    <img src={bread.image} alt="Bread Image" />   
            
            </Default>
       )
}
 module.exports = ShowView