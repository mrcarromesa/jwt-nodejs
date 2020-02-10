<h1>JWT</h1>

<strong>Referências</strong>

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

<strong>Instruções</strong>

- Executar comando:

```bash
yarn add jsonwebtoken
```

- Gerar token:

```js
    const id = 12; //pode ser uma string, um array...
    const token = jwt.sign({ id }, TOKEN_G, {
        expiresIn: '7d',
    });
```

- Decodar token:

```js
    const tk = req.query.tk;
    //console.log(a);
    try {
        var decoded = jwt.verify(tk, TOKEN_G);
        console.log(decoded.id);
        //return res.send(decoded.id);
    } catch(err) {
        // err
    }
```

