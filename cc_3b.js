let inventory = [
    {
        sku: "123",
        name: "Lipstick",
        price: 9.99,
        stock: 100

    },
    {
        sku: "456",
        name: "Eyeliner",
        price: 14.99,
        stock: 50
    },
    {
        sku: "789",
        name: "Mascara",
        price: 12.99,
        stock: 30
    },
    {
        sku: "521",
        name: "Foundation",
        price: 19.99,
        stock: 75
    }

];

inventory.forEach(item => {
    console.log(`SKU: ${item.sku}, Name: ${item.name}, Price: $${item.price}, Stock: ${item.stock}`);
});

inventory.push({
    sku: "652",
    name: "Blush",
    price: 11.99,
    stock: 40
});


