const React = require('react')
const Default = require('./layouts/default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
        <h2>hello johnatan</h2>
        <ul>
          {
            breads.map((bread, index) => {
              return (
                <li key={index}>
                  <a herf={`/bread/${index}`}>
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
