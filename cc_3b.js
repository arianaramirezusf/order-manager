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
        sku: "SKU-321",
        name: "Foundation",
        price: 19.99,
        stock: 75
    }

];

inventory.forEach(item => {
    console.log(`SKU: ${item.sku}, Name: ${item.name}, Price: $${item.price}, Stock: ${item.stock}`);
});
