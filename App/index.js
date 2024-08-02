const app = require('./app.js');

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
    console.log(`Server init ${PORT}`);
});