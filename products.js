// products.js
const rentalProducts = [
    {
        id: 'cam101',
        category: 'Electronics',
        name: '4K Cinema Projector',
        price: 35, // Base price per day
        image: 'images/projector-main.jpg',
        
        // --- Detail Fields ---
        description: 'Ultra-bright short-throw projector for indoor or outdoor movie nights. Easy setup and high contrast ratio.',
        dimensions: '30cm x 30cm x 10cm',
        extra_images: ['images/projector-angle1.jpg', 'images/projector-setup.jpg'],
        extra_charges: null, 
        rental_type: 'Per Day',
    },
    {
        id: 'event303',
        category: 'Event Supplies',
        name: 'Folding Chair (White)',
        price: 5,
        image: 'images/chair-main.jpg',

        // --- Detail Fields ---
        description: 'Comfortable, durable plastic folding chair. Perfect for large events and easy to stack and transport.',
        dimensions: '45cm W x 80cm H x 40cm D',
        extra_images: ['images/chair-folded.jpg', 'images/chair-covered.jpg'],
        extra_charges: {
            item: 'Chair Cover',
            cost: 2, // Extra $2 per day
            options: ['White', 'Black', 'Red'],
        },
        rental_type: 'Per Piece / Day',
    },
    {
        id: 'camp202',
        category: 'Camping Gear',
        name: '8-Person Family Tent',
        price: 40,
        image: 'images/tent-main.jpg',
        
        // --- Detail Fields ---
        description: 'Spacious, all-weather tent with separate room divider and ventilation mesh. Sets up in under 15 minutes.',
        dimensions: '3m x 4m x 2m',
        extra_images: ['images/tent-packed.jpg', 'images/tent-interior.jpg'],
        extra_charges: null, 
        rental_type: 'Per Day',
    },
    {
        id: 'cam102',
        category: 'Electronics',
        name: 'Portable Bluetooth Speaker',
        price: 15,
        image: 'images/speaker-main.jpg',

        // --- Detail Fields ---
        description: 'Waterproof speaker with 12 hours of battery life and powerful bass. Ideal for beach days or backyard parties.',
        dimensions: '25cm x 10cm x 10cm',
        extra_images: ['images/speaker-close.jpg'],
        extra_charges: null, 
        rental_type: 'Per Day',
    }
];

// Dynamically generate the categories list for the sidebar
const categories = ['View All', ...new Set(rentalProducts.map(p => p.category))];