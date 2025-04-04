const products = [
    // Apparel Products
    {
        id: 1,
        name: "Monkey D. Luffy Tee",
        price: 35.00,
        description: "A One Piece t-shirt featuring Monkey D. Luffy.",
        images: [
            require("./products/Apparel/luffy-tee.jpg"),
            require("./products/Apparel/luffy-tee2.jpg"),
        ],
        keywords: ["Luffy", "One Piece", "Straw Hat"],
        category: "Apparel",
    },
    {
        id: 2,
        name: "Attack on Titan Tee",
        price: 35.00,
        description: "An Attack on Titan-themed t-shirt.",
        images: [
            require("./products/Apparel/aot-tee.jpg"),
            require("./products/Apparel/aot-tee2.jpg")
        ],
        keywords: ["Attack on Titan", "AOT", "Eren", "Eren Yeager"],
        category: "Apparel"
    },
    {
        id: 3,
        name: "Goku Silhouette Tee",
        price: 35.00,
        description: "A t-shirt featuring Goku from Dragon Ball Series.",
        images: [
            require("./products/Apparel/goku-tee.jpg"),
            require("./products/Apparel/goku-tee2.jpg")
        ],
        keywords: ["Goku", "Dragon Ball", "Saiyan"],
        category: "Apparel"
    },
    {
        id: 4,
        name: "Takakura Ken (Okarun) Tee",
        price: 35.00,
        description: "A t-shirt featuring Okarun from Dandadan.",
        images: [
            require("./products/Apparel/okarun-tee.jpg"),
            require("./products/Apparel/okarun-tee2.jpg")
        ],
        keywords: ["Okarun", "Dandadan"],
        category: "Apparel"
    },
    {
        id: 5,
        name: "Sakamoto Days Tee",
        price: 35.00,
        description: "A tee from Sakamoto Days",
        images: [
            require("./products/Apparel/sakamoto-tee.jpg"),
            require("./products/Apparel/sakamoto-tee2.jpg")
        ],
        keywords: ["Sakamoto Days", "Sakamoto"],
        category: "Apparel"
    },
    {
        id: 6,
        name: "Dandadan Turbo Granny Tee",
        price: 35.00,
        description: "A Turbo Granny t-shirt from Dandadan.",
        images: [
            require("./products/Apparel/tg-tee.jpg"),
            require("./products/Apparel/tg-tee2.jpg")
        ],
        keywords: ["Turbo Granny", "Dandadan"],
        category: "Apparel"
    },
    {
        id: 7,
        name: "Saitama Tee",
        price: 35.00,
        description: "A Saitama t-shirt from One Punch Man.",
        images: [
            require("./products/Apparel/saitama-tee.jpg"),
            require("./products/Apparel/saitama-tee2.jpg")
        ],
        keywords: ["Saitama", "One Punch Man", "OPM"],
        category: "Apparel"
    },
    {
        id: 8,
        name: "Neko D. Mewffy Tee",
        price: 35.00,
        description: "A Neko Luffy t-shirt.",
        images: [
            require("./products/Apparel/neko-luffy-tee.jpg"),
            require("./products/Apparel/neko-luffy-tee2.jpg")
        ],
        keywords: ["Luffy", "Neko Luffy", "One Piece", "Straw Hat"],
        category: "Apparel"
    },
    {
        id: 9,
        name: "Scouting Legion Tee",
        price: 35.00,
        description: "An Attack on Titan-themed t-shirt.",
        images: [
            require("./products/Apparel/scouting-legion-tee.jpg"),
            require("./products/Apparel/scouting-legion-tee2.jpg")
        ],
        keywords: ["Attack on Titan", "AOT", "Scouting Legion"],
        category: "Apparel"
    },
    {
        id: 10,
        name: "Pikachu Tee",
        price: 35.00,
        description: "A Pikachu-themed t-shirt.",
        images: [
            require("./products/Apparel/pikachu-tee.jpg"),
            require("./products/Apparel/pikachu-tee2.jpg")
        ],
        keywords: ["Pikachu", "Pokemon"],
        category: "Apparel"

    },
    {
        id: 11,
        name: "Hunter x Hunter Tee",
        price: 35.00,
        description: "A Hunter x Hunter-themed t-shirt.",
        images: [
            require("./products/Apparel/hxh-tee.jpg"),
            require("./products/Apparel/hxh-tee2.jpg")
        ],
        keywords: ["Hunter x Hunter", "HxH", "Gon", "Killua", "Kurapika"],
        category: "Apparel"
    },
    {
        id: 12,
        name: "My Life Story Tee",
        price: 35.00,
        description: "My Life Story t-shirt.",
        images: [
            require("./products/Apparel/myLifeStory-tee.jpg"),
            require("./products/Apparel/myLifeStory-tee2.jpg")
        ],
        keywords: ["My Life Story"],
        category: "Apparel"
    },
    {
        id: 13,
        name: "Neko Ramen Tee",
        price: 35.00,
        description: "A Neko Ramen-themed t-shirt.",
        images: [
            require("./products/Apparel/neko-ramen-tee.jpg"),
            require("./products/Apparel/neko-ramen-tee2.jpg")
        ],
        keywords: ["Neko Ramen"],
        category: "Apparel"
    },
    {
        id: 14,
        name: "Brook Tee",
        price: 35.00,
        description: "A One Piece t-shirt featuring Brook.",
        images: [
            require("./products/Apparel/brook-tee.jpg"),
            require("./products/Apparel/brook-tee2.jpg"),
            require("./products/Apparel/brook-tee3.jpg")
        ],
        keywords: ["Brook", "One Piece", "Straw Hat"],
        category: "Apparel"
    },
    
    // Dry Fit Tees
    {
        id: 15,
        name: "Ichigo (Mugetsu) Dry Fit Tee",
        price: 50.00,
        description: "A Bleach-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/ichigo-dryfit.jpg")
        ],
        keywords: ["Ichigo", "Bleach", "Mugetsu"],
        category: "Dry Fit"
    },
    {
        id: 16,
        name: "Death Note Dry Fit Tee",
        price: 50.00,
        description: "A Death Note-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/death-note-dryfit.jpg")
        ],
        keywords: ["Death Note", "Light Yagami", "Ryuk", "Light"],
        category: "Dry Fit"
    },
    {
        id: 17,
        name: "Eren Yeager Dry Fit Tee",
        price: 50.00,
        description: "An Attack on Titan-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/eren-dryfit.jpg")
        ],
        keywords: ["Eren Yeager", "Attack on Titan", "AOT"],
        category: "Dry Fit"
    },
    {
        id: 18,
        name: "Goku & Vegeta Dry Fit Tee",
        price: 50.00,
        description: "A Dragon Ball-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/goku-dryfit.jpg")
        ],
        keywords: ["Goku", "Vegeta", "Dragon Ball", "DBZ", "Saiyan"],
        category: "Dry Fit"
    },
    {
        id: 19,
        name: "Jin Kazuma Dry Fit Tee",
        price: 50.00,
        description: "A Tekken-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/jin-dryfit.jpg")
        ],
        keywords: ["Jin Kazuma", "Tekken"],
        category: "Dry Fit"
    },
    {
        id: 20,
        name: "Ikkaku Dry Fit Tee",
        price: 50.00,
        description: "A Bleach-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/ikkaku-dryfit.jpg")
        ],
        keywords: ["Ikkaku", "Bleach", "Soul Reaper"],
        category: "Dry Fit"
    },
    {
        id: 21,
        name: "Arcane LoL Dry Fit Tee",
        price: 50.00,
        description: "An Arcane-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/arcane-dryfit.jpg")
        ],
        keywords: ["Arcane", "League of Legends", "LoL", "Jinx"],
        category: "Dry Fit"
    },
    {
        id: 22,
        name: "Arcane Jinx Dry Fit Tee",
        price: 50.00,
        description: "An Arcane Jinx-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/jinx-dryfit.jpg")
        ],
        keywords: ["Arcane", "League of Legends", "LoL", "Jinx"],
        category: "Dry Fit"
    },
    {
        id: 23,
        name: "Kratos Dry Fit Tee",
        price: 50.00,
        description: "A God of War-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/kratos-dryfit.jpg")
        ],
        keywords: ["Kratos", "God of War", "Boy"],
        category: "Dry Fit"
    },{
        id: 24,
        name: "Akuma Dry Fit Tee",
        price: 50.00,
        description: "A Street Fighter-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/akuma-dryfit.jpg")
        ],
        keywords: ["Akuma", "Street Fighter"],
        category: "Dry Fit"
    },
    {
        id: 25,
        name: "Mitsuri Dry Fit Tee",
        price: 50.00,
        description: "A Demon Slayer-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/mitsuri-dryfit.jpg")
        ],
        keywords: ["Mitsuri", "Demon Slayer", "Hashira"],
        category: "Dry Fit"
    },
    {
        id: 26,
        name: "Ayase Momo Dry Fit Tee",
        price: 50.00,
        description: "A Dandadan-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/momo-dryfit.jpg")
        ],
        keywords: ["Ayase Momo", "Dandadan", "Momo"],
        category: "Dry Fit"
    },
    {
        id: 27,
        name: "Yujiro Hanma Dry Fit Tee",
        price: 50.00,
        description: "A Baki-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/yujiro-dryfit.jpg")
        ],
        keywords: ["Yujiro Hanma", "Baki", "Yujiro"],
        category: "Dry Fit"
    },
    {
        id: 28,
        name: "Natsu Dry Fit Tee",
        price: 50.00,
        description: "A Fairy Tail-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/natsu-dryfit.jpg")
        ],
        keywords: ["Natsu", "Fairy Tail"],
        category: "Dry Fit"
    },
    {
        id: 29,
        name: "Nezuko Dry Fit Tee",
        price: 50.00,
        description: "A Demon Slayer dry fit t-shirt.",
        images: [
            require("./products/DryFit/nezuko-dryfit.jpg")
        ],
        keywords: ["Nezuko", "Demon Slayer", "Demon"],
        category: "Dry Fit"
    },
    {
        id: 30,
        name: "Takakura Ken (Okarun) Dry Fit Tee",
        price: 50.00,
        description: "A Dandadan-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/okarun-dryfit.jpg")
        ],
        keywords: ["Takakura Ken", "Okarun", "Dandadan"],
        category: "Dry Fit"
    },
    {
        id: 31,
        name: "Vegeta Dry Fit Tee",
        price: 50.00,
        description: "A Dragon Ball-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/vegeta-dryfit.jpg")
        ],
        keywords: ["Vegeta", "Dragon Ball", "Saiyan", "DBZ"],
        category: "Dry Fit"
    },
    {
        id: 32,
        name: "Rias Gremory Dry Fit Tee",
        price: 50.00,
        description: "A High School DxD-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/rias-dryfit.jpg")
        ],
        keywords: ["Rias Gremory", "High School DxD", "Rias"],
        category: "Dry Fit"
    },
    {
        id: 33,
        name: "One Piece Dry Fit Tee",
        price: 50.00,
        description: "A One Piece-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/one-piece-dryfit.jpg")
        ],
        keywords: ["One Piece", "Luffy", "Straw Hat"],
        category: "Dry Fit"
    },
    {
        id: 34,
        name: "Black/White One Piece Dry Fit Tee",
        price: 50.00,
        description: "An alternate One Piece-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/one-piece-dryfit2.jpg")
        ],
        keywords: ["One Piece", "Luffy", "Straw Hat", "Zoro"],
        category: "Dry Fit"
    },
    {
        id: 35,
        name: "Sasuke Dry Fit Tee",
        price: 50.00,
        description: "A Naruto-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/sasuke-dryfit.jpg")
        ],
        keywords: ["Sasuke", "Naruto"],
        category: "Dry Fit"
    },
    {
        id: 36,
        name: "Alternate Sasuke Dry Fit Tee",
        price: 50.00,
        description: "An alternate Naruto-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/sasuke-dryfit2.jpg")
        ],
        keywords: ["Sasuke", "Naruto"],
        category: "Dry Fit"
    },
    {
        id: 37,
        name: "Naruto Dry Fit Tee",
        price: 50.00,
        description: "A Naruto-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/naruto-dryfit.jpg")
        ],
        keywords: ["Naruto"],
        category: "Dry Fit"
    },
    {
        id: 38,
        name: "Zoro Dry Fit Tee",
        price: 50.00,
        description: "A One Piece-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/zoro-dryfit.jpg")
        ],
        keywords: ["Zoro", "One Piece", "Straw Hat", "Pirate Hunter", "Roronoa Zoro"],
        category: "Dry Fit"
    },
    {
        id: 39,
        name: "Levi Ackerman Dry Fit Tee",
        price: 50.00,
        description: "An Attack on Titan-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/levi-dryfit.jpg")
        ],
        keywords: ["Levi Ackerman", "Attack on Titan", "AOT", "Levi"],
        category: "Dry Fit"
    },
    {
        id: 40,
        name: "Hellsing Dry Fit Tee",
        price: 50.00,
        description: "A Hellsing-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/hellsing-dryfit.jpg")
        ],
        keywords: ["Hellsing"],
        category: "Dry Fit"
    },
    {
        id: 41,
        name: "Crash Bandicoot Dry Fit Tee",
        price: 50.00,
        description: "A Crash Bandicoot-themed dry fit t-shirt.",
        images: [
            require("./products/DryFit/crash-dryfit.jpg")
        ],
        keywords: ["Crash Bandicoot", "Crash"],
        category: "Dry Fit"
    },
    
    // Figures Products
    {
        id: 42,
        name: "Luffy Funko Pop",
        price: 55.00,
        description: "A Funko Pop figure of Luffy from One Piece.",
        images: [
            require("./products/Figures/luffy-funko.jpg"),
            require("./products/Figures/luffy-funko2.jpg"),
            require("./products/Figures/luffy-funko3.jpg")
        ],
        keywords: ["Luffy", "One Piece", "Funko Pop"],
        category: "Figures"
    },
    {
        id: 43,
        name: "Aipom Funko Pop",
        price: 55.00,
        description: "A Funko Pop figure of Aipom from Pokémon.",
        images: [
            require("./products/Figures/aipom-funko.jpg"),
            require("./products/Figures/aipom-funko2.jpg"),
            require("./products/Figures/aipom-funko3.jpg")
        ],
        keywords: ["Aipom", "Pokemon", "Funko Pop"],
        category: "Figures"
    },
    {
        id: 44,
        name: "Gambit Funko Pop",
        price: 65.00,
        description: "A Funko Pop of Gambit from X-Men.",
        images: [
            require("./products/Figures/gambit-funko.jpg"),
            require("./products/Figures/gambit-funko2.jpg"),
            require("./products/Figures/gambit-funko3.jpg")
        ],
        keywords: ["Gambit", "X men", "Funko Pop"],
        category: "Figures"
    },
    {
        id: 45,
        name: "Goku Funko Pop",
        price: 65.00,
        description: "A Funko Pop of Goku.",
        images: [
            require("./products/Figures/goku-funko.jpg"),
            require("./products/Figures/goku-funko2.jpg"),
            require("./products/Figures/goku-funko3.jpg")
        ],
        keywords: ["Goku", "Dragon Ball", "Funko Pop", "DBZ"],
        category: "Figures"
    },
    {
        id: 46,
        name: "Meliodas Funko Pop",
        price: 65.00,
        description: "A Funko Pop figure of Meliodas from Seven Deadly Sins.",
        images: [
            require("./products/Figures/melodias-funko.jpg"),
            require("./products/Figures/melodias-funko2.jpg"),
            require("./products/Figures/melodias-funko3.jpg")
        ],
        keywords: ["Meliodas", "Seven Deadly Sins", "Funko Pop"],
        category: "Figures"
    },
    {
        id: 47,
        name: "Mina Ashido Funko Pop",
        price: 25.00,
        description: "A Funko Pop figure of Mina from My Hero Academia.",
        images: [
            require("./products/Figures/mina-funko.jpg"),
            require("./products/Figures/mina-funko2.jpg"),
            require("./products/Figures/mina-funko3.jpg")
        ],
        keywords: ["Mina", "My Hero Academia", "Funko Pop"],
        category: "Figures"
    },
    {
        id: 48,
        name: "Tengen Uzui Funko Pop",
        price: 65.00,
        description: "A Funko Pop figure of Tengen Uzui from Demon Slayer.",
        images: [
            require("./products/Figures/tengen-funko.jpg"),
            require("./products/Figures/tengen-funko2.jpg"),
            require("./products/Figures/tengen-funko3.jpg")
        ],
        keywords: ["Tengen Uzui", "Demon Slayer", "Funko Pop", "Tengen", "Hashira"],
        category: "Figures"
    },
    {
        id: 49,
        name: "Venom Funko Pop",
        price: 55.00,
        description: "A Funko Pop figure of Venom.",
        images: [
            require("./products/Figures/venom-funko.jpg"),
            require("./products/Figures/venom-funko2.jpg"),
            require("./products/Figures/venom-funko3.jpg")
        ],
        keywords: ["Venom", "Marvel", "Funko Pop"],
        category: "Figures"
    },
    {
        id: 50,
        name: "Wonder Woman Funko Pop",
        price: 35.00,
        description: "A Funko Pop figure of Wonder Woman.",
        images: [
            require("./products/Figures/ww-funko.jpg"),
            require("./products/Figures/ww-funko2.jpg"),
            require("./products/Figures/ww-funko3.jpg")
        ],
        keywords: ["Wonder Woman", "DC", "Funko Pop"],
        category: "Figures"
    },
    {
        id: 51,
        name: "Boruto Uzumaki Funko Pop",
        price: 50.00,
        description: "A Funko Pop figure of Boruto.",
        images: [
            require("./products/Figures/boruto-funko.jpg"),
            require("./products/Figures/boruto-funko2.jpg"),
            require("./products/Figures/boruto-funko3.jpg")
        ],
        keywords: ["Boruto", "Naruto", "Funko Pop", "Boruto Uzumaki"],
        category: "Figures"
    },
    
    // Accessories - Keychains
    {
        id: 52,
        name: "Chopper Hat Keychain",
        price: 18.00,
        description: "A keychain of Chopper's hat",
        images: [
            require("./products/Keychains/chopper-hat-keychain.jpg")
        ],
        keywords: ["Chopper", "One Piece", "Keychain"],
        category: "Keychains"
    },
    {
        id: 53,
        name: "Freiza Keychain",
        price: 18.00,
        description: "A keychain of Frieza from the Dragon Ball series",
        images: [
            require("./products/Keychains/frieza-keychain.jpg")
        ],
        keywords: ["Frieza", "Dragon Ball", "Keychain"],
        category: "Keychains"
    },
    {
        id: 54,
        name: "Goku Black Keychain",
        price: 18.00,
        description: "A keychain of Chopper's hat",
        images: [
            require("./products/Keychains/goku-black-keychain.jpg")
        ],
        keywords: ["Goku Black", "Dragon Ball", "Keychain", "Goku"],
        category: "Keychains"
    },
    {
        id: 55,
        name: "Goku Keychain",
        price: 18.00,
        description: "A keychain of Goku from the Dragon Ball Series",
        images: [
            require("./products/Keychains/goku-keychain.jpg")
        ],
        keywords: ["Goku", "Dragon Ball", "Keychain"],
        category: "Keychains"
    },
    {
        id: 56,
        name: "Luffy Jolly Roger Keychain",
        price: 20.00,
        description: "A keychain of Luffy's Jolly Roger",
        images: [
            require("./products/Keychains/luffy-jolly-roger-keychain.jpg")
        ],
        keywords: ["Luffy", "One Piece", "Keychain"],
        category: "Keychains"
    },
    {
        id: 57,
        name: "Luffy Jolly Roger Keychain",
        price: 20.00,
        description: "A keychain of Luffy's Jolly Roger",
        images: [
            require("./products/Keychains/luffy-jolly-roger-keychain2.jpg")
        ],
        keywords: ["Luffy", "One Piece", "Keychain"],
        category: "Keychains"
    },
    {
        id: 58,
        name: "One Piece Keychain",
        price: 18.00,
        description: "A keychain featuring the One Piece logo.",
        images: [
            require("./products/Keychains/one-piece-keychain.jpg")
        ],
        keywords: ["Luffy", "One Piece", "Keychain"],
        category: "Keychains"
    },
    {
        id: 59,
        name: "Mihawk's Yoru Keychain",
        price: 20.00,
        description: "A keychain of Mihawk's Yoru sword from One Piece.",
        images: [
            require("./products/Keychains/op-yoru-keychain.jpg")
        ],
        keywords: ["Mihawk", "One Piece", "Keychain", "Yoru"],
        category: "Keychains"
    },
    {
        id: 60,
        name: "Son Goku Keychain",
        price: 18.00,
        description: "A keychain of Son Goku in his iconic pose.",
        images: [
            require("./products/Keychains/son-goku-keychain.jpg")
        ],
        keywords: ["Son Goku", "Dragon Ball", "Keychain"],
        category: "Keychains"
    },{
        id: 61,
        name: "Thousand Sunny Keychain",
        price: 20.00,
        description: "A keychain of the Thousand Sunny ship from One Piece.",
        images: [
            require("./products/Keychains/thousand-sunny-keychain.jpg")
        ],
        keywords: ["Thousand Sunny", "One Piece", "Keychain"],
        category: "Keychains"
    },
    {
        id: 62,
        name: "Vegeta Keychain",
        price: 18.00,
        description: "A keychain of Vegeta in his Saiyan armor.",
        images: [
            require("./products/Keychains/vegeta-keychain.jpg")
        ],
        keywords: ["Vegeta", "Dragon Ball", "Keychain"],
        category: "Keychains"
    },
    {
        id: 63,
        name: "Zoro Keychain",
        price: 18.00,
        description: "A keychain of Roronoa Zoro with his swords.",
        images: [
            require("./products/Keychains/zoro-keychain.jpg")
        ],
        keywords: ["Zoro", "One Piece", "Keychain", "Roronoa Zoro"],
        category: "Keychains"
    },
    // Mugs
    {
        id: 64,
        name: "7 Deadly Sins Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/7-deadly-sins-mug.jpg")
        ],
        keywords: ["7 Deadly Sins", "Meliodas", "Mug"],
        category: "Mugs"
    },
    {
        id: 65,
        name: "AOT Mikasa & Eren Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/aot-mug.jpg")
        ],
        keywords: ["AOT", "Mikasa", "Eren", "Mug", "Attack on Titan"],
        category: "Mugs"
    },
    {
        id: 66,
        name: "Attack On Titan Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/aot-mug2.jpg")
        ],
        keywords: ["AOT", "Titan", "Eren", "Mug", "Attack on Titan"],
        category: "Mugs"
    },
    {
        id: 67,
        name: "Asta Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/asta-mug.jpg")
        ],
        keywords: ["Asta", "Black Clover", "Mug"],
        category: "Mugs"
    },
    {
        id: 68,
        name: "Death Note Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/death-note-mug.jpg")
        ],
        keywords: ["Death Note", "Light Yagami", "Ryuk", "Mug"],
        category: "Mugs"
    },
    {
        id: 69,
        name: "Demon Slayer Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/demon-slayer-mug.jpg")
        ],
        keywords: ["Demon Slayer", "Tanjiro", "Nezuko", "Mug", "Zenitsu", "Inosuke", "Hashira"],
        category: "Mugs"
    },
    {
        id: 70,
        name: "Dorohedoro Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/dorohedoro-mug.jpg")
        ],
        keywords: ["Dorohedoro", "Kaiman", "Mug"],
        category: "Mugs"
    },
    {
        id: 71,
        name: "Genshin Impact Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/genshin-impact-mug.jpg")
        ],
        keywords: ["Genshin Impact", "Mug", "Paimon"],
        category: "Mugs"
    },
    {
        id: 72,
        name: "Hashira Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/hashira-mug.jpg")
        ],
        keywords: ["Hashira", "Demon Slayer", "Mug"],
        category: "Mugs"
    },
    {
        id: 73,
        name: "Levi Ackerman Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/levi-mug.jpg")
        ],
        keywords: ["Levi", "AOT", "Mug", "Levi Ackerman"],
        category: "Mugs"
    },
    {
        id: 74,
        name: "Kaguya-Sama Love is War Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/love-is-war-mug.jpg")
        ],
        keywords: ["Kaguya-Sama", "Love is War", "Mug", "Kaguya", "Shirogane"],
        category: "Mugs"
    },
    {
        id: 75,
        name: "Monkey D. Luffy Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/luffy-mug.jpg")
        ],
        keywords: ["Luffy", "One Piece", "Mug", "Straw Hat", "Monkey D. Luffy"],
        category: "Mugs"
    },
    {
        id: 76,
        name: "Mashle Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/mashle-mug.jpg")
        ],
        keywords: ["Mashle", "Mug", "Mash Burnedead", "Mashle Magic and Muscles"],
        category: "Mugs"
    },
    {
        id: 77,
        name: "My Neighbor Totoro Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/my-neighbor-totoro-mug.jpg")
        ],
        keywords: ["My Neighbor Totoro", "Totoro", "Mug"],
        category: "Mugs"
    },
    {
        id: 78,
        name: "Naruto Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/naruto-mug.jpg")
        ],
        keywords: ["Naruto", "Sasuke", "Mug", "Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Sakura"],
        category: "Mugs"
    },
    {
        id: 79,
        name: "Nezuko Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/nezuko-mug.jpg")
        ],
        keywords: ["Nezuko", "Demon Slayer", "Mug", "Nezuko Kamado"],
        category: "Mugs"
    },
    {
        id: 80,
        name: "One Piece Wanted Poster Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/op-wanted-poster-mug.jpg")
        ],
        keywords: ["One Piece", "Wanted Poster", "Mug", "Straw Hat", "Luffy", "Zoro", "Nami", "Usopp", "Sanji", "Chopper", "Robin", "Franky", "Brook"],
        category: "Mugs"
    },
    {
        id: 81,
        name: "Sailor Moon Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/sailor-moon-mug.jpg")
        ],
        keywords: ["Sailor Moon", "Mug"],
        category: "Mugs"
    },
    {
        id: 82,
        name: "Solo Leveling Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/solo-leveling-mug.jpg")
        ],
        keywords: ["Solo Leveling", "Sung Jin-Woo", "Mug"],
        category: "Mugs"
    },
    {
        id: 83,
        name: "Naruto Team 7 Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/team-7-mug.jpg")
        ],
        keywords: ["Naruto", "Team 7", "Mug", "Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Sakura"],
        category: "Mugs"
    },
    {
        id: 84,
        name: "Tokyo Ghoul Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/tokyo-ghoul-mug.jpg")
        ],
        keywords: ["Tokyo Ghoul", "Kaneki Ken", "Mug", "Kaneki"],
        category: "Mugs"
    },
    {
        id: 85,
        name: "Tokyo Revengers Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/tokyo-revengers-mug.jpg")
        ],
        keywords: ["Tokyo Revengers", "Mikey", "Draken", "Mug"],
        category: "Mugs"
    },
    {
        id: 86,
        name: "Undead Unluck Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/undead-unluck-mug.jpg")
        ],
        keywords: ["Undead Unluck", "Mug", "Andy", "Fuuko"],
        category: "Mugs"
    },
    {
        id: 87,
        name: "Dragon Ball Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/vegeta-mug.jpg")
        ],
        keywords: ["Vegeta", "Dragon Ball", "Mug", "DBZ", "Goku"],
        category: "Mugs"
    },
    {
        id: 88,
        name: "Zom 100 Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/zom-100-mug.jpg")
        ],
        keywords: ["Zom 100", "Akira", "Mug", "Kenichiro", "Shizuka", "Beatrix"],
        category: "Mugs"
    },
    {
        id: 89,
        name: "Zoro Mug",
        price: 18.00,
        images: [
            require("./products/Mugs/zoro-mug.jpg")
        ],
        keywords: ["Zoro", "One Piece", "Mug", "Roronoa Zoro"],
        category: "Mugs"
    },
    {
        id: 90,
        name: "Crocodile Hook Necklace",
        price: 15.00,
        description: "A necklace featuring Crocodile's hook hand.",
        images: [
            require("./products/Necklaces/crocodile-hook-necklace.jpg")
        ],
        keywords: ["Crocodile", "One Piece", "Necklace"],
        category: "Necklaces"
    },
    {
        id: 91,
        name: "King Kai Kanji Necklace",
        price: 20.00,
        description: "King Kai's Kanji.",
        images: [
            require("./products/Necklaces/king-kai-necklace.jpg")
        ],
        keywords: ["King Kai", "Dragon Ball", "Necklace"],
        category: "Necklaces"
    },
    {
        id: 92,
        name: "Thousand Sunny Necklace",
        price: 15.00,
        description: "A One Piece mug featuring the Thousand Sunny.",
        images: [
            require("./products/Necklaces/thousand-sunny-necklace.jpg")
        ],
        keywords: ["Thousand Sunny", "One Piece", "Necklace"],
        category: "Necklaces"
    },
];

export default products;