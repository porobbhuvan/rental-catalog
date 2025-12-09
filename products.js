// products.js
const rentalProducts = [
    // --- 1. Chiavari Chair (Golden) ---
    {
        id: 'chair001',
        category: 'Chairs',
        name: 'Golden Chiavari Chair',
        price: 7, // Base price per day
        image: 'images/chiavari chair-golden.jpeg', 
        
        // --- Detail Fields ---
        description: 'Elegant golden finish Chiavari chair, perfect for weddings, banquets, and upscale events. Lightweight and stackable.',
        dimensions: '40cm W x 92cm H x 46cm D',
        extra_images: ['images/chiavari chair-white.jpeg'], // Using the white one as an alternate view
        extra_charges: {
            item: 'Padded Seat Cushion',
            cost: 2, // Extra $2 per day for cushion
            options: ['Ivory', 'White', 'Black'],
        },
        rental_type: 'Per Piece / Day',
    },
    
    // --- 2. Chiavari Chair (White) ---
    {
        id: 'chair002',
        category: 'Chairs',
        name: 'White Chiavari Chair',
        price: 7,
        image: 'images/chiavari chair-white.jpeg',
        
        // --- Detail Fields ---
        description: 'Classic white Chiavari chair, ideal for outdoor ceremonies and formal gatherings. Easy to clean plastic resin construction.',
        dimensions: '40cm W x 92cm H x 46cm D',
        extra_images: ['images/chiavari chair-golden.jpeg'], // Using the golden one as an alternate view
        extra_charges: {
            item: 'Padded Seat Cushion',
            cost: 2,
            options: ['Ivory', 'White', 'Black'],
        },
        rental_type: 'Per Piece / Day',
    },

    // --- 3. Traditional Banquet Chair ---
    {
        id: 'chair003',
        category: 'Chairs',
        name: 'Red Padded Banquet Chair',
        price: 4,
        image: 'images/banquet chair.jpeg',
        
        // --- Detail Fields ---
        description: 'Standard stacking banquet chair with durable golden frame and comfortable red padded cushion. Suitable for conferences and indoor dining.',
        dimensions: '45cm W x 94cm H x 50cm D',
        extra_images: [],
        extra_charges: null, // Price includes the padding
        rental_type: 'Per Piece / Day',
    },
    
    // --- 4. Standard Plastic Chair ---
    {
        id: 'chair004',
        category: 'Chairs',
        name: 'Standard Plastic Chair (Brown)',
        price: 1,
        image: 'images/plastic chair.jpeg',

        // --- Detail Fields ---
        description: 'Simple, heavy-duty plastic chair for casual use, large crowds, or outdoor seating. Very durable and highly stackable.',
        dimensions: '45cm W x 85cm H x 50cm D',
        extra_images: [],
        extra_charges: {
            item: 'Disposable White Cover',
            cost: 0.50, // Extra $0.50 for a cover
            options: ['White'],
        },
        rental_type: 'Per Piece / Day',
    },
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