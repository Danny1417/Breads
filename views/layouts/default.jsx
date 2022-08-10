const React = require('react')

function Default(html) {
  return (
    <html>
      <head>
        <title>Default</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <h1>Bread Choices</h1>
                    
                          {html.children}
        
      </body>
    </html>
  )
}

module.exports = Default
