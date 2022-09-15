const React = require("react");
const Default = require("./layouts/default");

function Show({ bread, index }) {
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
                  <a href={`/breads/${index}/Edit`}>
                        <button>Edit</button>
                  </a>
<div>
                  <form action={`/breads/${index} ?_method=DELETE`} method="POST">
                        
<input type="submit" value="DELETE" />

                        </form>
                        </div>
                  
                  <div className="backButton">
  <a href="/breads"><button>Go back to the index</button></a>
</div>
            </Default>
      )
};


module.exports = Show