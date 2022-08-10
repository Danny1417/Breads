const React = require('react')

function Default(html) {
  return (
    <html>
      <head>
        <title>Home</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <h1>HOME</h1>
        <a href="/places">
  <button className="btn-primary">Places Page</button>
        </a>
        
        <img src="images/drew-coffman-Azli_kcxRNE-unsplash.jpg" alt="home bread" />
        Photo by Photo by <a href="https://unsplash.com/@drewcoffman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Drew Coffman</a> on <a href="https://unsplash.com/s/photos/bread-bakery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  "

                    
                          {html.children}
        
      </body>
    </html>
  )
}

module.exports = Default
