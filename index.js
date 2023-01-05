const express = require('express')
const app = express()
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello from node! i am excited');
});

const users = [
  {id: 1, name: 'Arman', email: 'armanh522@gmail.com', phone: '01991033899' },
  {id: 2, name: 'Mim', email: 'mim@gmail.com', phone: '0199354789' },
  {id: 3, name: 'Maruf', email: 'armanh522@gmail.com', phone: '01991033899' },
  {id: 4, name: 'sujon', email: 'armanh522@gmail.com', phone: '01991033899' },
  {id: 5, name: 'santo', email: 'armanh522@gmail.com', phone: '01991033899' },
  {id: 6, name: 'johurul', email: 'armanh522@gmail.com', phone: '01991033899' },
  {id: 7, name: 'jahangir', email: 'armanh522@gmail.com', phone: '01991033899' }
]

app.get('/users', (req, res) =>{
  const search = req.query.search;
  if(search){
    const searchResult = users.filter( user=> user.name.toLocaleLowerCase().includes(search) );
    res.send(searchResult);
  }else{
    res.send(users);
  }
  
});

app.get('/users/:id', (req, res) =>{
  const id = req.params.id;
  const user = users[id]
  res.send(user);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
  res.send('Yummy Yummy tok marka fazli');
});

app.get('/fruits', (req, res) => {
  res.send([ 'mango', 'oranges', 'banana' ]);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});