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
    },
    // --- POP-UP TENTS ---
    {
        id: 'tent001',
        category: 'Tent',
        name: 'Blue Pop-Up Gazebo Tent',
        price: "Enquire",
        image: 'images/tent 10x10.jpg', // Default primary image
        
        // --- Detail Fields ---
        description: 'Heavy-duty, water-resistant blue pop-up canopy tent. Ideal for outdoor events, market stalls, parties, and weddings. Features an easy-to-assemble folding steel frame with adjustable height settings.',
        dimensions: 'Available in 10x10 ft and 10x20 ft variants',
        extra_images: ['images/tent 20x10.jpg'], // Alternate size view
        
        // --- Size Variants Logic ---
        extra_charges: {
            item: 'Select Tent Size',
            cost: "Call for rates",
            options: ['10x10 ft Canopy', '10x20 ft Canopy'],
        },
        rental_type: 'Per Piece',
    },
    // --- TRADITIONAL WICK LAMPS ---
    {
        id: 'lamp001',
        category: 'Lamp',
        name: 'Silver Peacock Traditional Wick Lamp',
        price: "Enquire",
        image: 'images/wick lamp small.png',
        
        // --- Detail Fields ---
        description: 'Stunning traditional South Indian floor lamp featuring an intricate peacock motif on the crown. Cast in high-grade aluminum alloy with a polished silver finish, it offers a grand look with a lighter, easier-to-move construction.',
        dimensions: 'Base Diameter: 8.5 inches | Height: 36 inches (3 Feet)',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Piece',
    },
    {
        id: 'lamp002',
        category: 'Lamp',
        name: 'Classic Brass Kuthu Vilakku Floor Lamp',
        price: "Enquire",
        image: 'images/wick lamp.png',
        
        // --- Detail Fields ---
        description: 'Authentic heavy-duty ceremonial oil lamp handcrafted from pure solid brass metal with a polished antique gold finish. Features a traditional 5-slot wick tray and pinnacle crown, ideal for grand openings, weddings, festivals, and puja altars.',
        dimensions: 'Base Diameter: 10 inches | Height: 48 inches (4 Feet)',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Piece',
    },
    // --- STAGE & PRESENTATION EQUIPMENT ---
    {
        id: 'stage001',
        category: 'Event Supplies',
        name: 'Premium Stainless Steel & Acrylic Podium',
        price: "Enquire",
        image: 'images/podium.jpg',
        
        // --- Detail Fields ---
        description: 'Modern, high-end lecture podium/lectern constructed with a durable stainless steel curved frame and sleek black acrylic center panels. Includes a slanted reading surface with a document lip, decorative finial accents at the base, and a flexible gooseneck microphone mount clip built right into the top tray. Perfect for corporate conferences, weddings, award ceremonies, and political events.',
        dimensions: 'Top Surface: 23" W x 18" D | Height: 44 inches (Front lip) | Base: 24" W x 16" D',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Day',
    },
    // --- EVENT FURNITURE ---
    {
        id: 'furn001',
        category: 'Event Supplies',
        name: 'Stainless Steel Glass-Top Teapoy Coffee Table',
        price: "Enquire",
        image: 'images/teapoy.png',
        
        // --- Detail Fields ---
        description: 'Premium event coffee table / teapoy featuring a heavy-duty, curved stainless steel X-frame base and decorative metal accents. Equipped with a sleek frosted design glass top panel set into a protective dark border frame. Includes a practical under-table wire storage rack for magazines or materials. Excellent choice for VIP lounges, stage setups, exhibition booths, and reception areas.',
        dimensions: 'Length: 30 inches | Width: 18 inches | Height: 18 inches',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Piece',
    },
    // --- OFFICE FURNITURE ---
    {
        id: 'chair005',
        category: 'Chairs',
        name: 'Ergonomic Mid-Back Office Desk Chair (Red)',
        price: "Enquire",
        image: 'images/office chair 1.jpg', // Main front view
        
        // --- Detail Fields ---
        description: 'Comfortable mid-back ergonomic office chair upholstered in durable red fabric. Features contoured armrests, full 360-degree swivel, a smooth pneumatic seat-height adjustment lever, and a sturdy 5-star nylon base with easy-rolling caster wheels. Perfect for temporary event offices, registration desks, examination centers, or corporate conferences.',
        dimensions: 'Seat Width: 19 inches | Adjustable Seat Height: 16" to 21" | Total Height: 34" - 39"',
        extra_images: ['images/office chair 2.jpg', 'images/office chair 3.jpg'], // Side and Back views
        extra_charges: null, 
        rental_type: 'Per Piece',
    },
    // --- BAR & COCKTAIL FURNITURE ---
    {
        id: 'furn002',
        category: 'Event Supplies',
        name: 'Round Stainless Steel Cocktail Highboy Table',
        price: "Enquire",
        image: 'images/cocktail table.png',
        
        // --- Detail Fields ---
        description: 'Sleek and modern bar-height cocktail table featuring a polished round top panel, a durable central support pillar, and a heavy-duty 4-star cross base for maximum stability. Perfect for standing networking areas, pre-function wedding cocktail hours, corporate exhibitions, or bars. Can be used as-is for a modern industrial look or dressed up with standard event linens.',
        dimensions: 'Tabletop Diameter: 24 inches | Height: 42 inches (Bar Height)',
        extra_images: [],
        extra_charges: {
            item: 'Spandex Table Cloth Cover',
            cost: "Call for rate",
            options: ['No, Table Only', 'Yes, with Black Cover', 'Yes, with White Cover'],
        },
        rental_type: 'Per Piece',
    },
    // --- COMMERCIAL CATERING KITCHENWARE ---
    {
        id: 'kit001',
        category: 'Kitchenware',
        name: 'Single Burner Commercial Gas Bhatti Stove',
        price: "Enquire",
        image: 'images/gas stove.jpg',
        
        // --- Detail Fields ---
        description: 'Heavy-duty single burner commercial gas bhatti featuring a premium, easy-to-clean square stainless steel body frame, a high-pressure cast iron burner core, and reinforced top pan support prongs. Engineered specifically for large-scale event catering, massive cooking pots, and high-heat outdoor culinary operations.',
        dimensions: 'Width: 14 inches | Length: 14 inches | Height: 12 inches',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Day',
    },
    {
        id: 'kit002',
        category: 'Kitchenware',
        name: 'Double Attached Commercial Gas Bhatti Stove',
        price: "Enquire",
        image: 'images/gas stove 2 attached.png',
        
        // --- Detail Fields ---
        description: 'High-capacity heavy commercial cooking rig featuring two powerful circular bhatti units structurally joined together with a single integrated connecting gas pipe manifold. Built from ultra-durable cast iron and heavy gauge steel with convenient side lifting handles, this dual-burner setup allows for intense, simultaneous high-pressure cooking at large weddings, outdoor banquets, and festivals.',
        dimensions: 'Total Length: ~36 inches | Individual Unit Diameter: 13 inches | Height: 14 inches',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Day',
    },
    // --- CATERING DISPLAY & WARMERS ---
    {
        id: 'kit003',
        category: 'Kitchenware',
        name: 'Hammered Stainless Steel Snack Warmer Sigree',
        price: "Enquire",
        image: 'images/snack warmer.jpg',
        
        // --- Detail Fields ---
        description: 'Premium tabletop snack warmer / mini sigree crafted with an elegant hammered stainless steel finish. Designed with a ventilated heat-source base for tea lights or gel fuel cans and topped with a curved heat-distribution plate. Perfect for live counters to keep appetizers, kebabs, tikkas, and finger foods perfectly warm right at the guest table. Note: Rental is for the standalone snack warmer heating unit only; peripheral serving trays, card holders, and bowls are not included.',
        dimensions: 'Length: 8 inches | Width: 6 inches | Height: 5.5 inches',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Piece',
    },
    // --- CATERING STORAGE & SERVING TRAY ---
    {
        id: 'kit004',
        category: 'Kitchenware',
        name: 'Commercial Stainless Steel Rectangle Halwai Tray',
        price: "Enquire",
        image: 'images/tray.jpeg',
        
        // --- Detail Fields ---
        description: 'Heavy gauge, food-grade stainless steel rectangular presentation and storage tray. Featuring clean, straight raised edges and a smooth brushed finish, this highly durable tray is perfect for catering prep work, serving sweets (Halwai display), transporting snacks, or setting up buffet back-counters. Built to withstand commercial kitchen use and easy to stack.',
        dimensions: 'Available in multiple industry-standard catering sizes',
        extra_images: [],
        
        // --- Size Variants Logic ---
        extra_charges: {
            item: 'Select Tray Size',
            cost: "Call for rates",
            options: ['Small (12" x 18")', 'Medium (16" x 24")', 'Large (18" x 30")'],
        },
        rental_type: 'Per Piece',
    },
    // --- BUFFET DISPLAY & DISPENSERS ---
    {
        id: 'kit005',
        category: 'Kitchenware',
        name: 'Double Canister Stainless Steel Cereal Dispenser',
        price: "Enquire",
        image: 'images/cereal dispenser.jpg',
        
        // --- Detail Fields ---
        description: 'Premium commercial buffet double cereal dispenser featuring a polished stainless steel stand frame and base tray. Equipped with two high-clearance, shatterproof transparent polycarbonate canisters, tight-sealing steel lids, and paddle wheel dispensing turn-knobs designed to portion dry foods smoothly without crushing. An excellent addition to premium hotel breakfast spreads, corporate morning events, wedding buffets, and brunch layouts for serving cereals, muesli, nuts, or candy.',
        dimensions: 'Width: 13.5 inches | Depth: 9.5 inches | Height: 25 inches | Capacity: ~3.5 Liters per canister',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Piece',
    },
    // --- STAGE & VIP LOUNGE FURNITURE ---
    {
        id: 'furn003',
        category: 'Event Supplies',
        name: 'Stainless Steel 3-Seater VIP Event Sofa',
        price: "Enquire",
        image: 'images/sofa.jpg',
        
        // --- Detail Fields ---
        description: 'Premium 3-seater event stage sofa featuring a heavy-duty, polished stainless steel structural frame with modern slatted accents on the backrest and sturdy tubular armrests. Outfitted with comfortable, dense foam cushions wrapped in sleek white faux-leather tufted upholstery featuring elegant button-back detailing. Excellent for VIP stage seating, wedding couple lounges, corporate award ceremonies, and high-profile guest reception areas.',
        dimensions: 'Length: 72 inches (6 Feet) | Depth: 30 inches | Total Height: 36 inches',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Piece / Day',
    },
    // --- VIP LOUNGE CHAIRS ---
    {
        id: 'furn004',
        category: 'Event Supplies',
        name: 'Single-Seater VIP Leatherette Sofa Chair',
        price: "Enquire",
        image: 'images/single seater sofa.png',
        
        // --- Detail Fields ---
        description: 'Premium single-seater box sofa chair wrapped in sleek, premium white leatherette (faux leather) upholstery. Designed with high-density foam cushions, wide block armrests, and sturdy low-profile legs to maximize guest comfort and stability. Its clean, modern silhouette makes it the perfect choice for high-profile panel discussions, VIP stage seating, corporate exhibition lounges, or alongside a matching 3-seater setup.',
        dimensions: 'Width: 34 inches | Depth: 30 inches | Height: 32 inches',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Piece / Day',
    },
    // --- VIP LOUNGE SOFAS ---
    {
        id: 'furn005',
        category: 'Event Supplies',
        name: '2-Seater VIP Leatherette Sofa with Cup Holders',
        price: "Enquire",
        image: 'images/two seater sofa.png',
        
        // --- Detail Fields ---
        description: 'Premium 2-seater twin box sofa couch upholstered in crisp, high-quality white leatherette (faux leather). Features deep, supportive high-density foam cushioning, a high block backrest, and extra-wide structural armrests equipped with integrated black cup holder inserts on both sides. A highly functional, stylish choice for VIP panel discussions, luxury event lounge configurations, green rooms, or corporate seminar stages.',
        dimensions: 'Width: 58 inches | Depth: 30 inches | Height: 32 inches',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Piece / Day',
    },
    // --- COMMERCIAL STEAMERS ---
    {
        id: 'kit006',
        category: 'Kitchenware',
        name: 'Commercial Aluminum Idli Steamer Box (Multi-Tier)',
        price: "Enquire",
        image: 'images/idli steamer.jpeg',
        
        // --- Detail Fields ---
        description: 'Heavy-duty commercial idli cooker box constructed from food-grade aluminum, complete with a secure top lid and riveted side lifting handles. Designed with a multi-tier sliding rack mechanism containing multiple high-capacity idli plates with perforated molds for rapid, even steam circulation. Engineered to easily handle bulk breakfast catering orders for weddings, large family functions, and outdoor corporate gatherings.',
        dimensions: 'Width: 15 inches | Depth: 20 inches | Height: 26 inches | Plates: 9 Tier capacity',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Day',
    },
    // --- TRADITIONAL & CEREMONIAL SUPPLIES ---
    {
        id: 'furn006',
        category: 'Event Supplies',
        name: 'Traditional Oxidized Silver Pooja Chowki Bajot',
        price: "Enquire",
        image: 'images/pooja chowki.png',
        
        // --- Detail Fields ---
        description: 'Exquisite low-profile traditional wooden pedestal table / bajot featuring an ornate, embossed oxidized silver metal sheet covering. Handcrafted with beautiful geometric panel layouts, traditional floral motifs, and detailed border borders. Essential for Indian wedding rituals, housewarming ceremonies (Griha Pravesh), festivals, deity placement in temple setups, or as upscale low-seating arrangements for VIP guests during religious events.',
        dimensions: 'Length: 24 inches | Width: 18 inches | Height: 6 inches',
        extra_images: [],
        extra_charges: null, 
        rental_type: 'Per Piece',
    },
    

];

// Dynamically generate the categories list for the sidebar
const categories = ['View All', ...new Set(rentalProducts.map(p => p.category))];