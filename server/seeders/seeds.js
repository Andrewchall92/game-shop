const db = require('../config/connection');
const { Category, Product, User } = require('../models');

const cleanDB = require('./cleanDB');

db.once('open', async () => {

  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'RPG' }, // 0
    { name: 'FPS' }, // 1
    { name: 'MMO' }, // 2
    { name: 'RTS' }, // 3
    { name: 'Sports' }, // 4
    { name: 'Survival' }, // 5
    { name: 'Action' }, // 6
    { name: 'Adventure' }, // 7
    { name: 'Simulation' }, // 8
  ]);

  const products = await Product.insertMany([
    {
      name: "Fallout 4",
      description: "Fallout 4 is a post-apocalyptic action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth major installment in the Fallout series and was released worldwide on November 10, 2015, for Microsoft Windows, PlayStation 4 and Xbox One.",
      image: "https://upload.wikimedia.org/wikipedia/en/7/70/Fallout_4_cover_art.jpg",
      price: 59.99,
      category: categories[2]._id,
    },
    {
      name: "The Elder Scrolls IV: Oblivion",
      description: "The Elder Scrolls IV: Oblivion is an open world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks and the Take-Two Interactive division 2K Games. It is the fourth installment in The Elder Scrolls action fantasy series, following The Elder Scrolls III: Morrowind and preceding The Elder Scrolls V: Skyrim. The game was released for Microsoft Windows and Xbox 360 in March 2006, and on PlayStation 3 in March 2007, with a mobile version of the game released on May 2, 2006. Taking place within the fictional province of Cyrodiil, Oblivion's main story revolves around the player character's efforts to thwart a fanatical cult known as the \"Mythic Dawn\" that plans to open portal gates to a demonic realm known as \"Oblivion\".",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/The_Elder_Scrolls_IV_Oblivion_cover.png/220px-The_Elder_Scrolls_IV_Oblivion_cover.png",
      price: 19.99,
      category: categories[2]._id,
    },
    {
      name: "The Elder Scrolls Online",
      description: "The Elder Scrolls Online is a massively multiplayer online role-playing game (MMORPG) developed by ZeniMax Online Studios and published by Bethesda Softworks. It was released for Microsoft Windows and OS X in April 2014. It is a part of The Elder Scrolls series. The game is set in the continent of Tamriel and features a storyline indirectly connected with the other games in the Elder Scrolls franchise. It had been in development for seven years before its release in 2014. It initially received mixed reviews, but these improved significantly with the re-release and rebranding as The Elder Scrolls Online: Tamriel Unlimited, with critics praising the changes that were made.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Elder_Scrolls_Online_cover.png/220px-Elder_Scrolls_Online_cover.png",
      price: 59.99,
      category: categories[2]._id
    },
    {
      name: "Fornite",
      description: "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative hybrid-tower defense-shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with traps and fortifications they can build; Fortnite Battle Royale, a free-to-play battle royale game where up to 100 players fight to be the last person standing; and Fortnite Creative, where players are given complete freedom to create worlds and battle arenas. The first two game modes were released in 2017 as early access titles and Creative was released on December 6, 2018. Save the World is available only for Windows, macOS, PlayStation 4, and Xbox One, while Battle Royale and Creative released for all those platforms, and also for Nintendo Switch, iOS, and Android devices.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/FortniteLogo.svg/250px-FortniteLogo.svg.png",
      price: 10.00,
      category: categories[2]._id
    },
    {
      name: "Call of Duty: Modern Warfare",
      description: "Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision. Serving as the sixteenth overall installment in the Call of Duty series, as well as a reboot of the Modern Warfare sub-series, it was released on October 25, 2019, for Microsoft Windows, PlayStation 4, and Xbox One. The game takes place in a realistic and modern setting. The campaign follows a CIA officer and British SAS forces as they team up with rebels from the fictional country of Urzikstan, combating together against Russian forces who have invaded the country. The game's Special Ops mode features cooperative play missions that follow up the campaign's story. The multiplayer mode supports cross-platform multiplayer and cross-platform progression for the first time in the series. It has been re-released on the PlayStation 5 and Xbox Series X/S.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Call_of_Duty_Modern_Warfare_%282019%29_cover.jpg/220px-Call_of_Duty_Modern_Warfare_%282019%29_cover.jpg",
      price: 59.99,
      category: categories[2]._id
    },
    {
      name: "Call of Duty: Black Ops Cold War",
      description: "Call of Duty: Black Ops Cold War is a 2020 first-person shooter video game developed by Treyarch and Raven Software and published by Activision. It was released worldwide on November 13, 2020, for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X and S. It serves as the sixth installment in the Black Ops series, and the seventeenth installment in the overall Call of Duty series. It is the direct sequel to Call of Duty: Black Ops, the first game in the series to be set during the Cold War, and the fifth to be set overall. A narrative sequel, Call of Duty: Black Ops III, was released in 2015. Black Ops Cold War is set during the early 1980s of the Cold War. Its campaign follows CIA officer Russell Adler as he pursues an alleged Soviet spy, Perseus, whose stated goal is to subvert the United States and tilt the balance of power toward the Soviet Union.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/BOCW_Cover_Art.jpg/220px-BOCW_Cover_Art.jpg",
      price: 59.99,
      category: categories[2]._id
    },
    {
      name: "Call of Duty: Black Ops 4",
      description: "Call of Duty: Black Ops 4 (stylized as Call of Duty: Black Ops IIII) is a 2018 multiplayer first-person shooter developed by Treyarch and published by Activision. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on October 12, 2018. It is a sequel to the 2015 game Call of Duty: Black Ops III, the fifth entry in the Black Ops sub-series, and the 15th installment in the Call of Duty series overall.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Call_of_Duty_Black_Ops_4_official_box_art.jpg/220px-Call_of_Duty_Black_Ops_4_official_box_art.jpg",
      price: 59.99,
      category: categories[2]._id
    },
    {
      name: "Call of Duty: Black Ops III",
      description: "Call of Duty: Black Ops III is a 2015 first-person shooter video game, developed by Treyarch and published by Activision. It is the twelfth entry in the Call of Duty series and the sequel to the 2012 video game Call of Duty: Black Ops II. It was released on Microsoft Windows, PlayStation 4, and Xbox One on November 6, 2015. A feature-limited version developed by Beenox and Mercenary Technology that only supports multiplayer modes was released on PlayStation 3 and Xbox 360 and was also the final Call of Duty title released on those platforms.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Black_Ops_3.jpg/220px-Black_Ops_3.jpg",
      price: 59.99,
      category: categories[2]._id
    },
    {
      name: "Call of Duty: Black Ops II",
      description: "Call of Duty: Black Ops II is a 2012 first-person shooter developed by Treyarch and published by Activision. It was released for Microsoft Windows, PlayStation 3, and the Xbox 360 on November 13, 2012, and for the Wii U on November 18 in North America and November 30 in PAL regions. Black Ops II is the ninth game in the Call of Duty franchise of video games, a sequel to the 2010 game Call of Duty: Black Ops and the first Call of Duty game for the Wii U. A corresponding game for the PlayStation Vita, Call of Duty: Black Ops: Declassified, was developed by nStigate Games and also released on November 13.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Call_of_Duty_Black_Ops_II_box_artwork.png/220px-Call_of_Duty_Black_Ops_II_box_artwork.png",
      price: 59.99,
      category: categories[2]._id
    },
    {
      name: "Call of Duty: Black Ops",
      description: "Call of Duty: Black Ops is a 2010 first-person shooter video game developed by Treyarch and published by Activision. It was released worldwide in November 2010 for Microsoft Windows, the PlayStation 3, Xbox 360, and Wii, with a separate version for Nintendo DS developed by n-Space. Aspyr later released the game for OS X in September 2012. It is the seventh title in the Call of Duty series and the third to be developed by Treyarch. It serves as the sequel to Call of Duty: World at War.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/CoD_Black_Ops_cover.png/220px-CoD_Black_Ops_cover.png",
      price: 59.99,
      category: categories[1]._id
    },
    {
      name: "Call of Duty: Modern Warfare 2",
      description: "Call of Duty: Modern Warfare 2 is a 2009 first-person shooter game developed by Infinity Ward and published by Activision. It is the sixth installment in the Call of Duty series and the direct sequel to Call of Duty 4: Modern Warfare, continuing the storyline. It was released worldwide on November 10, 2009, for Microsoft Windows, the PlayStation 3, and Xbox 360. A separate version for the Nintendo DS, titled Modern Warfare: Mobilized, was also released on the same day. A version for macOS was developed by Aspyr and released in May 2014, and the Xbox 360 version was made backward compatible for the Xbox One in 2018.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png/220px-Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png",
      price: 59.99,
      category: categories[1]._id
    },
    {
      name: "Dishonored 2",
      description: "Dishonored 2 is an action-adventure video game developed by Arkane Studios and published by Bethesda Softworks. The sequel to 2012's Dishonored, the game was released for Microsoft Windows, PlayStation 4, and Xbox One on 11 November 2016.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Dishonored_2_cover_art.jpg/220px-Dishonored_2_cover_art.jpg",
      price: 59.99,
      category: categories[0]._id
    },
    {
      name: "Football Manager 2021",
      description: "Football Manager 2021 is a football management simulation video game developed by Sports Interactive and published by Sega. It was released worldwide on 24 November 2020 for iOS, Android, macOS and Windows.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Football-Manager-2021.jpg/220px-Football-Manager-2021.jpg",
      price: 59.99,
      category: categories[4]._id
    },
    {
      name: "RoboCop: Rogue City",
      description: "RoboCop: Rogue City is an upcoming first-person shooter video game developed by Teyon and published by Nacon. It is based on the RoboCop franchise, and is set to be released for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S in 2023.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/RoboCop_Rogue_City_cover_art.jpg/220px-RoboCop_Rogue_City_cover_art.jpg",
      price: 59.99,
      category: categories[2]._id
    },
    {
      name: "Starcraft 2",
      description: "StarCraft II: Wings of Liberty is a science fiction real-time strategy video game developed and published by Blizzard Entertainment. It was released worldwide in July 2010 for Microsoft Windows and Mac OS X. A sequel to the 1998 video game StarCraft and the Brood War expansion pack, the game is split into three installments: the base game, subtitled Wings of Liberty, an expansion pack, Heart of the Swarm, and a stand-alone expansion pack, Legacy of the Void.",
      image: "https://images3.alphacoders.com/553/thumb-1920-553597.jpg",
      price: 59.99,
      category: categories[3]._id
    },
    {
      name: "MADDEN NFL 21",
      description: "Madden NFL 21 is an American football video game based on the National Football League (NFL), developed by EA Tiburon and published by Electronic Arts. It is an installment of the long-running Madden NFL series. It was released for Microsoft Windows, PlayStation 4 and Xbox One on August 28, 2020, and will be available for PlayStation 5 and Xbox Series X/S upon those consoles' releases in November 2020. It features Baltimore Ravens quarterback Lamar Jackson as the cover athlete.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Madden21cover.jpeg/220px-Madden21cover.jpeg",
      price: 59.99,
      category: categories[4]._id
    },
    {
      name: "Fifa 21",
      description: "FIFA 21 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 28th installment in the FIFA series, and was released 9 October 2020 for Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One. Enhanced versions for the PlayStation 5 and Xbox Series X and Series S were released on 3 December 2020, in addition to a version for Stadia.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/FIFA_21_Standard_Edition_Cover.jpg/220px-FIFA_21_Standard_Edition_Cover.jpg",
      price: 59.99,
      category: categories[4]._id
    },
    {
      name: "NBA 2K21",
      description: "NBA 2K21 is a basketball simulation video game that was developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA). It is the 22nd installment in the NBA 2K franchise and the successor to NBA 2K20. The game was released on September 4, 2020 for Microsoft Windows, Nintendo Switch, PlayStation 4, Xbox One, and Stadia, and will be released in November 2020 for PlayStation 5 and Xbox Series X and Series S.",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a2/NBA_2K21_-_Damian_Lilliard_cover_art.jpg",
      price: 59.99,
      category: categories[4]._id
    },
    {
      name: "Frostpunk",
      description: "Frostpunk is a city-building survival game developed and published by 11 bit studios. It was released for Microsoft Windows in April 2018, and was released for PlayStation 4 and Xbox One in October 2019. The game received generally positive reviews upon release and sold over 1.4 million copies within a year of release.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Frostpunk_cover_art.jpg/220px-Frostpunk_cover_art.jpg",
      price: 59.99,
      category: categories[5]._id
    },
    {
      name: "Hogwarts Legacy",
      description: "Hogwarts Legacy is an upcoming action role-playing video game set in the late 1800s in the Wizarding World being developed by Avalanche Software and published by Warner Bros. Interactive Entertainment under its Portkey Games label. The game will be released for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S in 2022.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Hogwarts-Legacy-cover.jpg/220px-Hogwarts-Legacy-cover.jpg",
      price: 59.99,
      category: categories[7]._id
    },
    {
      name: "Flight Simulator",
      description: "Microsoft Flight Simulator is a series of amateur flight simulator programs for Microsoft Windows operating systems, and earlier for MS-DOS and Classic Mac OS. It is one of the longest-running, best-known, and most comprehensive home flight simulator programs on the market. It was an early product in the Microsoft application portfolio and differed significantly from Microsoft's other software, which was largely business-oriented. At 25 years it is the longest-running software product line for Microsoft, predating Windows by three years. Microsoft Flight Simulator may be the longest-running PC game series of all time.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/980310-N-7355H-003_Simulator_Training.jpg/220px-980310-N-7355H-003_Simulator_Training.jpg",
      price: 59.99,
      category: categories[8]._id
    },
    {
      name: "Metal Gear Solid V: The Phantom Pain",
      description: "Metal Gear Solid V: The Phantom Pain is a stealth game developed by Kojima Productions and published by Konami Digital Entertainment. It was released worldwide for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One on September 1, 2015. It is the ninth installment in the Metal Gear series that was directed, written and designed by Hideo Kojima following Metal Gear Solid V: Ground Zeroes, a stand-alone prologue released the previous year, as well as his final work at Konami.",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Metal_Gear_Solid_V_The_Phantom_Pain_cover.png/220px-Metal_Gear_Solid_V_The_Phantom_Pain_cover.png",
      price: 59.99,
      category: categories[6]._id
    }
  ]);

  const users = await User.insertMany([
    {
      firstName: "Brian",
      lastName: "Kernighan",
      email: "bkernighan@techfriends.dev",
      password: "password01",
      address: "123 Main",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      isAdmin: true
    },
    {
      firstName: "Dennis",
      lastName: "Ritchie",
      email: "dennis@gmail.com",
      password: "password02",
      address: "123 Main",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    {
      firstName: "Ken",
      lastName: "Thompson",
      email: "kthompson@gmail.com",
      password: "password03",
      address: "123 Main",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    }
  ]);

  await User.create(users);


  console.log(users);
  console.log(categories);
  console.log(products);

  console.log('users seeded');
  console.log('categories seeded');
  console.log('products seeded');


  console.log('all done!');
  process.exit(0);
});
