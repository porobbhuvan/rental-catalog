// products.js
const rentalProducts = [
    // --- 1. Chiavari Chair (Golden) ---
    {
        id: 'chair001',
        category: 'Chairs',
        name: 'Golden Chiavari Chair',
        price: "Enquire", // Base price per day
        image: 'images/chiavari chair-golden.jpeg', 
        
        // --- Detail Fields ---
        description: 'Elegant golden finish Chiavari chair, perfect for weddings, banquets, and upscale events. Lightweight and stackable.',
        dimensions: '40cm W x 92cm H x 46cm D',
        extra_images: [], // Using the white one as an alternate view
        extra_charges: {
            item: 'Padded Seat Cushion',
            cost: "Enquire", // Extra $2 per day for cushion
            options: ['Ivory', 'White', 'Black'],
        },
        rental_type: '',
    },
    
    // --- 2. Chiavari Chair (White) ---
    {
        id: 'chair002',
        category: 'Chairs',
        name: 'White Chiavari Chair',
        price: "Enquire",
        image: 'images/chiavari chair-white.jpeg',
        
        // --- Detail Fields ---
        description: 'Classic white Chiavari chair, ideal for outdoor ceremonies and formal gatherings. Easy to clean plastic resin construction.',
        dimensions: '40cm W x 92cm H x 46cm D',
        extra_images: [], // Using the golden one as an alternate view
        extra_charges: {
            item: 'Padded Seat Cushion',
            cost: "Enquire",
            options: ['Ivory', 'White', 'Black'],
        },
        rental_type: '',
    },

    // --- 3. Traditional Banquet Chair ---
    {
        id: 'chair003',
        category: 'Chairs',
        name: 'Red Padded Banquet Chair',
        price: "Enquire",
        image: 'images/banquet chair.jpeg',
        
        // --- Detail Fields ---
        description: 'Standard stacking banquet chair with durable golden frame and comfortable red padded cushion. Suitable for conferences and indoor dining.',
        dimensions: '45cm W x 94cm H x 50cm D',
        extra_images: [],
        extra_charges: {
            item: 'White Cover',
            cost: "Enquire", // The cost to add the cover
            options: ['Yes, with Cover', 'No, Chair Only'], // User selection options
        }, // Price includes the padding
        rental_type: '',
    },
    
    // --- 4. Standard Plastic Chair ---
    {
        id: 'chair004',
        category: 'Chairs',
        name: 'Standard Plastic Chair (Brown)',
        price: "Enquire",
        image: 'images/plastic chair.jpeg',

        // --- Detail Fields ---
        description: 'Simple, heavy-duty plastic chair for casual use, large crowds, or outdoor seating. Very durable and highly stackable.',
        dimensions: '45cm W x 85cm H x 50cm D',
        extra_images: [],
        extra_charges: {
            item: 'White Cover',
            cost: "Enquire", // The cost to add the cover
            options: ['White', 'Black'], // User selection options
        },
        rental_type: '',
    },
    // --- GLASSWARE CATEGORY ---
    {
        id: 'glass001',
        category: 'Glasses',
        name: 'Pilsner Glass',
        price: "Enquire",
        image: 'images/pilsner glass.jpg',
        description: 'A tall, slender glass that tapers at the bottom. Designed to showcase the color and carbonation of light beers and pilsners.',
        dimensions: 'approx. 12oz - 16oz capacity',
        extra_images: ['images/pilsner glass 2.jpg'],
        extra_charges: null,
        rental_type: 'Per Piece',
    },
    {
        id: 'glass002',
        category: 'Glasses',
        name: 'Classic Margarita Glass',
        price: "Enquire",
        image: 'images/classic margarita glass.jpg',
        description: 'The iconic wide-rimmed glass perfect for serving margaritas. The broad rim is ideal for salt or sugar coating.',
        dimensions: 'approx. 10oz - 12oz capacity',
        extra_images: [],
        extra_charges: null,
        rental_type: 'Per Piece',
    },
    {
        id: 'glass003',
        category: 'Glasses',
        name: 'Cocktail / Martini Glass',
        price: "Enquire",
        image: 'images/cocktail glass.jpg',
        description: 'A classic V-shaped stemmed glass. Essential for serving martinis, cosmopolitans, and other chilled cocktails without ice.',
        dimensions: 'approx. 6oz - 8oz capacity',
        extra_images: [],
        extra_charges: null,
        rental_type: 'Per Piece',
    },
    {
        id: 'glass004',
        category: 'Glasses',
        name: 'Classic Flute Champagne Glass',
        price: "Enquire",
        image: 'images/classic flute champagne glass.jpg',
        description: 'A tall, narrow flute designed to keep the bubbles in champagne and sparkling wine active for longer.',
        dimensions: 'approx. 6oz capacity',
        extra_images: [],
        extra_charges: null,
        rental_type: 'Per Piece',
    },
    {
        id: 'glass005',
        category: 'Glasses',
        name: 'Champagne Coupe Glass',
        price: "Enquire",
        image: 'images/champagne coupe glass.jpg',
        description: 'A sophisticated, vintage-style broad glass. Perfect for champagne towers, cocktails, or elegant dessert servings.',
        dimensions: 'approx. 5oz - 7oz capacity',
        extra_images: [],
        extra_charges: null,
        rental_type: 'Per Piece',
    },
    {
        id: 'glass006',
        category: 'Glasses',
        name: 'Ocean Whisky / Rocks Glass',
        price: "Enquire",
        image: 'images/whisky glass.jpg',
        description: 'Short, sturdy "Old Fashioned" glasses with a thick base. Ideal for serving spirits neat or on the rocks.',
        dimensions: 'approx. 8oz - 10oz capacity',
        extra_images: [],
        extra_charges: null,
        rental_type: 'Per Piece',
    },
    {
        id: 'glass007',
        category: 'Glasses',
        name: 'Hi-Ball Glass',
        price: "Enquire",
        image: 'images/hi ball glass.jpg',
        description: 'The versatile "everything" glass. Perfectly suited for mixed drinks, water, juice, and iced tea at any event.',
        dimensions: '10oz - 13oz capacity',
        extra_images: ['images/hi ball glass 2.jpg'],
        extra_charges: null,
        rental_type: 'Per Piece',
    }
];

// Dynamically generate the categories list for the sidebar
const categories = ['View All', ...new Set(rentalProducts.map(p => p.category))];