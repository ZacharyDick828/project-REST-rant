const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel='stylesheet' href='/css/styles.css'/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def