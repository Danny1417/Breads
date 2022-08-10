const React = require('react')
const Default = require('./layouts/default')

function Index ({breads}) {
    return (
      <Default>
        
        <ul>
          {
            breads.map((bread, index) => {
              return (
                <li key={index}>
                  <a href={`/breads/${index}`}>
                    
                    {bread.name} 
                </a>
                   </li>
              
              )
            })
          }
        </ul>
        
      </Default>
    )
}

module.exports = Index
