let places =[
    {
        id: "1",
        name: "Bangkok",
        country_name: "Thailand",
        description: "Bangkok: Vibrant capital of Thailand, known for its rich culture, delicious cuisine, and bustling streets.",
        image: "./images/Bangkok.jpg"
    },
    {
        id: "2",
        name: "Phuket Island",
        country_name: "Thailand",
        description: "Phuket Island: Famous Thai destination offering stunning beaches, vibrant nightlife, and adventurous water activities.",
        image: "./images/Phuket Island.jpg"
    },
    {
        id: "3",
        name: "Krabi",
        country_name: "Thailand",
        description: "Krabi: Coastal paradise in Thailand, boasting limestone cliffs, pristine beaches, and opportunities for adventure and relaxation.",
        image: "./images/Krabi.webp"
    },
    {
        id: "4",
        name: "Phi-Phi Island",
        country_name: "Thailand",
        description: "Phi Phi Island: Iconic Thai destination with turquoise waters, limestone formations, vibrant nightlife, and breathtaking scenery.",
        image: "./images/Phi-Phi-Island.jpg"
    },
    {
        id: "5",
        name: "Uluwatu Temple Bali",
        country_name: "Indonesia",
        description: "Uluwatu Temple: Majestic sea temple in Bali perched on cliffs, offering stunning sunset views and cultural performances.",
        image: "./images/Uluwatu-Temple-Bali.jpg"
    },
    {
        id: "6",
        name: "Bali",
        country_name: "Indonesia",
        description: "Bali: Indonesian island renowned for its lush landscapes, vibrant culture, stunning beaches, and spiritual atmosphere.",
        image: "./images/Bali.jpg"
    },
    {
        id: "7",
        name: "Nusa Penida",
        country_name: "Indonesia",
        description: "Nusa Penida: Picturesque Indonesian island with rugged cliffs, crystal-clear waters, pristine beaches, and diverse marine life.",
        image: "./images/nusa-penida-beach.jpg"
    },
    {
        id: "8",
        name: "Seminyak Beach",
        country_name: "Indonesia",
        description: "Seminyak Beach: Trendy Balinese destination with golden sands, world-class surfing, upscale resorts, and vibrant nightlife scene.",
        image: "./images/Seminyak Beach.avif"
    },
    {
        id: "9",
        name: "Canggu",
        country_name: "Indonesia",
        description: "Canggu: Bali's trendy coastal village with surf breaks, beach clubs, rice fields, and bohemian atmosphere.",
        image: "./images/Canggu.jpg"
    },
    {
        id: "10",
        name: "Ubud",
        country_name: "Indonesia",
        description: "Ubud: Cultural heart of Bali, surrounded by lush rice paddies, art galleries, temples, and serene landscapes.",
        image: "./images/Ubud.jpg"
    },
    {
        id: "11",
        name: "Rishikesh",
        country_name: "India",
        state_name: "UttaraUttarakhand",
        description: "Rishikesh: Spiritual hub in India, nestled in the Himalayas, renowned for yoga, meditation, and adventure sports.",
        image: "./images/Rishikesh.webp"
    },
    {
        id: "12",
        name: "Haridwar",
        country_name: "India",
        state_name: "UttaraUttarakhand",
        description: "Haridwar: Sacred city in India along the Ganges River, famous for temples, ghats, and religious ceremonies.",
        image: "./images/Haridwar.jpg"
    },
    {
        id: "13",
        name: "Dehradun",
        country_name: "India",
        state_name: "UttaraUttarakhand",
        description: "Dehradun: Capital of Uttarakhand, nestled in the Himalayan foothills, known for its scenic beauty and educational institutions.",
        image: "./images/Dehradun.jpg"
    },
    {
        id: "14",
        name: "Mussoorie",
        country_name: "India",
        state_name: "UttaraUttarakhand",
        description: "Mussoorie: Hill station in Uttarakhand, known for scenic beauty, colonial charm, waterfalls, and outdoor adventures.",
        image: "./images/Mussoorie.jpg"
    },
    {
        id: "15",
        name: "Devprayag",
        country_name: "India",
        state_name: "UttaraUttarakhand",
        description: "Devprayag: Sacred town in Uttarakhand, where the Alaknanda and Bhagirathi rivers merge, forming the Ganges River.",
        image: "./images/Devprayag.jpg"
    },
    {
        id: "16",
        name: "Rudraprayag",
        country_name: "India",
        state_name: "UttaraUttarakhand",
        description: "Rudraprayag: Spiritual town in Uttarakhand, situated at the confluence of the Alaknanda and Mandakini rivers.",
        image: "./images/Rudraprayag.jpg"
    },
    {
        id: "17",
        name: "Manikaran",
        country_name: "India",
        state_name: "Himachal",
        description: "Manikaran: Pilgrimage town in Himachal Pradesh, famous for hot springs, temples, and picturesque surroundings in Parvati Valley.",
        image: "./images/Manikaran.avif"
    },
    {
        id: "18",
        name: "Tosh",
        country_name: "India",
        state_name: "Himachal",
        description: "Tosh: Quaint village in Himachal Pradesh's Parvati Valley, known for its scenic beauty, tranquility, and cannabis culture.",
        image: "./images/Tosh.jpg"
    },
    {
        id: "19",
        name: "Darcha",
        country_name: "India",
        state_name: "Himachal",
        description: "Darcha: Remote village in Himachal Pradesh, serves as a gateway to Leh, known for trekking and camping.",
        image: "./images/Darcha.jpg"
    },
    {
        id: "20",
        name: "Manali",
        country_name: "India",
        state_name: "Himachal",
        description: "Manali: Picturesque hill station in HP, offering adventure sports, scenic landscapes, vibrant markets, and cultural experiences.",
        image: "./images/Manali.jpg"
    },
    {
        id: "21",
        name: "Koksar",
        country_name: "India",
        state_name: "Himachal",
        description: "Koksar: Small village in Himachal Pradesh, serves as an entry point to Lahaul Valley and Ladakh.",
        image: "./images/Koksar.webp"
    },
    {
        id: "22",
        name: "Dharamshala",
        country_name: "India",
        state_name: "Himachal",
        description: "Dharamshala: Tibetan settlement in Himachal Pradesh, home to the Dalai Lama, known for spirituality and scenic beauty.",
        image: "./images/Dharamshala.jpg"
    },
    {
        id: "23",
        name: "Srinagar",
        country_name: "India",
        state_name: "Jammu & Kashmir",
        description: "Srinagar: Capital of Jammu & Kashmir, renowned for Dal Lake, Mughal gardens, houseboats, and scenic vistas.",
        image: "./images/Srinagar.jpg"
    },
    {
        id: "24",
        name: "Leh",
        country_name: "India",
        state_name: "Ladakh",
        description: "Leh: High-altitude desert town in Ladakh, known for monasteries, rugged landscapes, trekking, and vibrant culture.",
        image: "./images/Leh.jpg"
    },
    {
        id: "25",
        name: "Zanskar valley",
        country_name: "India",
        state_name: "Ladakh",
        description: "Zanskar Valley: Remote Himalayan valley in Ladakh, famous for its rugged terrain, Buddhist monasteries, and adventurous trekking routes.",
        image: "./images/Zanskar valley.jpg"
    },
    {
        id: "26",
        name: "Rameshwaram",
        country_name: "India",
        state_name: "Tamilnadu",
        description: "Rameshwaram: Sacred pilgrimage town in Tamil Nadu, renowned for its temples, beaches, and cultural significance in Hinduism.",
        image: "./images/Rameshwaram.webp"
    },
    {
        id: "27",
        name: "Coimbatore",
        country_name: "India",
        state_name: "Tamilnadu",
        description: "Coimbatore: Major city in Tamil Nadu, known for its textile industry, educational institutions, and pleasant climate.",
        image: "./images/Coimbatore.jpeg"
    },
    {
        id: "28",
        name: "Ooty",
        country_name: "India",
        state_name: "Tamilnadu",
        description: "Ooty: Hill station in Tamil Nadu, famous for its tea gardens, scenic beauty, botanical gardens, and pleasant weather.",
        image: "./images/Ooty.avif"
    },
    {
        id: "29",
        name: "Chennai",
        country_name: "India",
        state_name: "Tamilnadu",
        description: "Chennai: Capital of Tamil Nadu, coastal city known for its beaches, cultural heritage, vibrant festivals, and cuisine.",
        image: "./images/Chennai.jpg"
    },
    {
        id: "30",
        name: "Madurai",
        country_name: "India",
        state_name: "Tamilnadu",
        description: "Madurai: Ancient city in Tamil Nadu, famous for Meenakshi Amman Temple, cultural heritage, and bustling markets.",
        image: "./images/Madurai.webp"
    },
    {
        id: "31",
        name: "Dhanushkodi",
        country_name: "India",
        state_name: "Tamilnadu",
        description: "Dhanushkodi: Abandoned town in Tamil Nadu, known for its eerie landscapes, historical ruins, and religious significance.",
        image: "./images/Dhanushkodi.webp"
    },
    {
        id: "32",
        name: "Pondicherry",
        country_name: "India",
        state_name: "Tamilnadu",
        description: "Pondicherry: Coastal town in Tamil Nadu, known for its French colonial architecture, serene beaches, and spiritual ambiance.",
        image: "./images/Pondicherry.jpg"
    },
];
export { places };