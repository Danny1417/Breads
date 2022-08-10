const React = require('react')
const Default = require('./layouts/default')

function notFoundIndex(){
    return (
      <Default>
        <h1>404 PAGE NOT FOUND</h1>
     <a href="/breads">Go Back Home</a>   
     
        
      </Default>
    )
}

module.exports = notFoundIndex
