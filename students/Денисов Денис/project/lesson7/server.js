const express = require('express');
const app = express();
const cors = require('cors');
const actionDataArr = []

const fs = require('fs');

app.use(express.static('.'));

app.use(cors());

app.use(express.json());

app.get('/catalog', (request, response) => {
    fs.readFile('./catalog.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.status(500).json({ message: 'Ошибка!' });
            return;
        }
        response.send(data);
    });
});

app.get('/cart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.status(500).json({ message: 'Ошибка!' });
            return;
        }
        response.send(data);
    });
});


app.post('/addToCart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.json({ result: 0 });
            return;
        }

        const cart = JSON.parse(data);

        const item = cart.find(({ id_product }) => id_product === request.body.item.id_product);
        if (item !== undefined) {
            item.quantity += 1;
        } else {
            cart.push({...request.body.item, quantity: 1 });
        }

        log('add', request.body.item.product_name);

        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                response.json({ result: 0 });
                return;
            }

            response.json({ result: 1 });
        });
    });
});

app.post('/addItem', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.json({ result: 0 });
            return;
        }
        const increment = JSON.parse(data);
        const item = increment.find(elem => {
            return elem.id_product == request.body.item.id_product
        })
        if (item !== undefined) {
            item.quantity = item.quantity + 1;
        }
        fs.writeFile('./cart.json', JSON.stringify(increment), (err) => {
            if (err) {
                response.json({ result: 0 });
                return;
            }
        });
    })
});
app.post('/reduceItem', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.json({ result: 0 });
            return;
        }
        const increment = JSON.parse(data);
        const item = increment.find(elem => {
            return elem.id_product == request.body.item.id_product
        })
        if (item !== undefined) {
            item.quantity = item.quantity - 1;
        }
        fs.writeFile('./cart.json', JSON.stringify(increment), (err) => {
            if (err) {
                response.json({ result: 0 });
                return;
            }
        });
    })
});

app.delete('/removeToCart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.json({ result: 0 });
            return;
        }
        const cart = JSON.parse(data);
        const index = cart.findIndex(({ id_product }) => {
            return request.body.item.id_product === id_product
        });
        console.log(index)
        if (index !== -1) {
            log('remove', cart[index].product_name)
            cart.splice(index, 1)
        }


        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                response.json({ result: 0 });
                return;
            }
            response.json({ result: 1 });
        })
    });
});

function log(action, itemName) {
    fs.readFile('./static.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            return;
        }
        const date = new Date()
        const time = `В ${date.getHours()} часов ${date.getMinutes()} минут`
        const stats = JSON.parse(data);
        stats.push({
            action,
            itemName,
            time
        });
        fs.writeFile('./static.json', JSON.stringify(stats), (err) => {
            if (err) {
                console.log('Error!', err);
                return;
            }
        });
    })
}

app.listen(3000, () => {
    console.log('Server is running at localhost:3000');
});