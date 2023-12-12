const db = require('../config/connection');
const { User, Product, Category } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');


const cleanDB = require('./cleanDB');

db.once('open', async () => {

  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'RPG' },
    { name: 'FPS' },
    { name: 'MMO' },
    { name: 'RTS' },
    { name: 'MOBA' },
    { name: 'Sports' },
    { name: 'Racing' },
    { name: 'Fighting' },
    { name: 'Survival' },
    { name: 'Horror' },
    { name: 'Action' },
    { name: 'Adventure' },
    { name: 'Simulation' },
    { name: 'Strategy' },
    { name: 'Puzzle' },
    { name: 'Idle' },
    { name: 'Platformer' },
    { name: 'Educational' },
    { name: 'Other' },
  ]);

 
  
  await User.create(userSeeds);
  await Product.create(productSeeds);
  await Category.create(categories);

  console.log('users seeded');
  console.log('categories seeded');
  console.log('products seeded');

  for (let i = 0; i < thoughtSeeds.length; i++) {
    const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    const user = await User.findOneAndUpdate(
      { username: thoughtAuthor },
      {
        $addToSet: {
          thoughts: _id,
        },
      }
    );
  }

  console.log('all done!');
  process.exit(0);
});
