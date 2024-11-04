// const express = require('express');

// const router = require('./routes/index')

// const cors = require('cors')

// const mongoose = require('mongoose')

// const app = express()

// app.use(express.urlencoded({ extended:true }))

// app.use(express.json())

// app.use(cors())

// app.use(router)

// app.listen(5000 ,()=>{
//    console.log('listening on http://localhost:5000')
// })
// mongoose.connect('mongodb://localhost:27017/Ticket_management', { useNewUrlParser: true, useUnifiedTopology: true })

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
