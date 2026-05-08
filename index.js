const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ejs = require('ejs')
const expressSession = require('express-session')
const flash = require('connect-flash')
const path = require('path')

// Routes
const authRoutes = require('./routes/auth')
const expenseRoutes = require('./routes/expense')

// MongoDB Atlas Connection
const mongoURI = 'mongodb+srv://Kla:1234@cluster0.eejfajx.mongodb.net/final?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log('MongoDB connection error:', err))

// Session Configuration
app.use(expressSession({
  secret: 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 // 24 hours
  }
}))

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(flash())
app.use(express.static(path.join(__dirname, 'public')))

// View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/login', (req, res) => {
  res.render('login', { message: req.flash('message') })
})

app.get('/register', (req, res) => {
  res.render('register', { message: req.flash('message') })
})

app.use('/auth', authRoutes)
app.use('/expense', expenseRoutes)

// 404 Handler
app.use((req, res) => {
  res.status(404).render('404', { message: 'หน้าที่ค้นหาไม่พบ' })
})

app.listen(4000, () => {
    console.log('App listening on port 4000')
    console.log('Visit http://localhost:4000')
})