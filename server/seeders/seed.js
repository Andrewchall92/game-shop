const db = require('../config/connection');
const { User, Product, Category } = require('../models');
const userSeeds = require('./userSeeds.json');


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

  console.log('categories seeded');
  
  
  await User.create(userSeeds);

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
