const books = [
    { 
        id: "1", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    },

    { 
        id: "2", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    },
    { 
        id: "3", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    },
    { 
        id: "4", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    },
    { 
        id: "5", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    },
    { 
        id: "6", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    },
    { 
        id: "7", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    },
    { 
        id: "8", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    },
    { 
        id: "9", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    },
    { 
        id: "1", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    },
    { 
        id: "10", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    },
    { 
        id: "11", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    },
    { 
        id: "12", 
        img: "https://m.media-amazon.com/images/I/51ibfs0eF8L._SX498_BO1,204,203,200_.jpg", 
        title: "Harry Potter and the Philosopher\'s Stone", 
        author: "J.K Rowling", 
        series: "#1 of Harry Potter series", 
        year: "1991",
        rating: 4.5,
        numRating: 1.8,
        reviews: 3.6,
        about: "HARRY POTTER has never even heard of Hogwarts when the LETTERS start dropping on the doormat at number four, Privet Drive. Addressed in GREEN INK on yellowish parchment with a PURPLE SEAL, they are swiftly confiscated by his GRISLY aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed GIANT of a man called RUBEUS HAGRID bursts in with some ASTONISHING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. An incredible adventure is about to begin!"
    }
]

//export {books};