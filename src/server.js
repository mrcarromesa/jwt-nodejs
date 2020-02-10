import express from 'express';
import jwt from 'jsonwebtoken';

const app = express()
const port = 3000;
const TOKEN_G = 'numeroqualqueraqui';


app.get('/gerartoken', (req, res) => {
    //gerar token
    const id = 12;
    const token = jwt.sign({ id }, TOKEN_G, {
        expiresIn: '7d',
    });

    res.send(token);
});

app.get('/decode',(req, res) => {
    const tk = req.query.tk;
    //console.log(a);
    try {
        var decoded = jwt.verify(tk, TOKEN_G);
        console.log(decoded.id);
        //return res.send(decoded.id);
      } catch(err) {
        // err
      }

     return res.send('OK');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))