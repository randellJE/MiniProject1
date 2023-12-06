const express = require('MiniProject1')
const app = express()
const port = 3000

app.use(express.json())

// const testRoutes = require('./routes/myTestRoutes')

// const calculatorRoutes = require('./routes/calculatorRoutes')

// const userRoutes = require('./routes/userRoutes')

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocumnet = require('./swaggerConfig.js')

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


// app.get('/test', (req, res) => {
//     res.send('This is a test')
// })

// app.use('/testroutes', testRoutes)

// app.use('/calculator', calculatorRoutes)

// app.use('/users', userRoutes)

// app.use(
//     '/api-docs',
//     swaggerUi.serve,
//     swaggerUi.setup(swaggerDocumnet)
// )

app.use('/', express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.listen(3001, () => {
    console.log(`Example app listening at http://localhost:3001`)
})
