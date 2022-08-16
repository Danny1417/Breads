const React = require("react");
const Default = require("./layouts/default");

function Show({ bread }) {
      return (
            <Default>
                  <h2>Show Page</h2>
                  <h3>{bread.name}</h3>
                  <p>
                        and it 
                  
                        {
                              bread.hasGluten
                                    ? <span> it  does  </span>
                                    : <span> it  does  NOT </span>
                        }
                         
                        have gluten.
                  </p>
                  <img src={bread.image} alt={bread.name} />
                  <li> <a href="/breads"> GO HOME</a></li>
            </Default>
      )
};

module.exports = Show