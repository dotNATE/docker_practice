const app = require('express')();

app.get('/', (_req, res) => {
    res.json({ message: 'Docker is easy' })
});

const port = process.env.PORT_NUM || 8080;

app.listen(port, () => {
    console.log(`App listening on localhost:${port}`);
})