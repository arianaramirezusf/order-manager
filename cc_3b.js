let inventory = [
    {
        sku: "SKU-123",
        name: "Lipstick",
        price: 9.99,
        stock: 100

    },
    {
        sku: "SKU-456",
        name: "Eyeliner",
        price: 14.99,
        stock: 50
    },
    {
        sku: "SKU-789",
        name: "Mascara",
        price: 12.99,
        stock: 30
    },
    {
        sku: "SKU-521",
        name: "Foundation",
        price: 19.99,
        stock: 75
    }

];


inventory.push(
    {
        sku: "SKU-578",
        name: "Blush",
        price: 11.99,
        stock: 40
    }
);

inventory.forEach(item => {
    console.log(`${item.sku} | ${item.name} | $${item.price} | ${item.stock}`);
});


inventory.pop(); 

inventory[2].price -= 5;

inventory[0].stock += 20;


let orders = [
    {
        orderId: "ORDER-001",
        items: [
            { sku: "SKU-123", quantity: 2 },
            { sku: "SKU-456", quantity: 1 }     
        ]
    }
];



