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
