const express = require('express');
const server = express();

const PORT = 3000;

server.use(express.json());


// Routes
server.get('/', (req, res) => {
  return res.send("The server is running successfully");
})


server.post('/login', (req, res) => {
  const {userName, password} = req.body;

  if (userName === 'james' && password === '4404') {
    res.send("Thank you for submitting the form");
  }else {
      res.send("user name and password does not match");
  }
})

// 404 page
server.use((req, res, next) =>{
  res.status(404);
  res.type('txt').send('Error 404 - Not found');
  
});

// Listening to the port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

