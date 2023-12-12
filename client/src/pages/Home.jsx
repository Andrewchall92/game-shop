import React from "react";
import{ ProductCard } from "../components/Card";
import "../App.css";
import { Navbar } from "../components/Navbar";
import { Rightbar } from "../components/Rightbar";
import { Sidebar } from "../components/Sidebar";
import { Box, Stack } from "@mui/material";

const products = [
  {
    name: "Galactic Conquest",
    price: "$49.99",
    category: "Strategy",
    description: "Embark on an epic journey across the cosmos as you lead a faction of Odyssey Warriors. Battle for control of distant planets, forge alliances, and unleash futuristic technologies in this immersive strategy game set in the far reaches of space.",
    image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/g/galaxy-shooter-switch/hero"
  },
  {
    name: "Mystical Realms",
    price: "$44.99",
    category: "Adventure",
    description: "Dive into a world of magic and mystery in Enchanted Quest. Solve ancient puzzles, battle mythical creatures, and uncover the secrets of an enchanted realm. The fate of the land rests in your hands in this captivating adventure game.",
    image: "https://frontier-drupal.s3-eu-west-1.amazonaws.com/production/frontier-corp/s3fs-public/press-releases/mastheads/AoS-RoR-keyart-1920x1080.jpg"
  },
  {
    name: "Future Racer",
    price: "$39.99",
    category: "Racing",
    description: "Strap into the fastest hovercrafts in Velocity Thunder. Race through futuristic cityscapes, dodge obstacles, and compete against rival pilots. Upgrade your vehicles with cutting-edge technology and become the ultimate Future Racer.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1952590/capsule_616x353.jpg?t=1698778803"
  },
  {
    name: "Chrono Clash",
    price: "$54.99",
    category: "Strategy",
    description: "Command an army across time in Temporal Battlegrounds. Rewrite history by strategically deploying units from different eras. Explore diverse landscapes and engage in intense battles where the past, present, and future collide.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosaWwZiucEvEI6VPLxGueHwmHxeZm_BCimQdD3eNYiU1ZYQhEtm18UsnSJVYvSr3jkJk&usqp=CAU"
  },
  {
    name: "Neon Noir",
    price: "$49.99",
    category: "Stealth",
    description: "Navigate the neon-lit streets of a cyberpunk city in Cyber Infiltration. As an elite hacker, infiltrate high-security facilities, bypass advanced AI defenses, and uncover a conspiracy that could reshape the future. Your skills are the key to unlocking the city's darkest secrets.",
    image: "data:image/jpeg;base64,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"
  },
  {
    name: "Space Explorer VR",
    price: "$59.99",
    category: "VR Adventure",
    description: "Immerse yourself in the cosmos with Space Explorer VR. Explore distant galaxies, discover alien civilizations, and uncover the mysteries of the universe. This virtual reality adventure takes you to places beyond imagination.",
    image: "https://i.ytimg.com/vi/KfH_ZGdm-T8/maxresdefault.jpg"
  },
  {
    name: "Fantasy Quest: Kingdoms Collide",
    price: "$49.99",
    category: "RPG",
    description: "Embark on a quest through magical realms in Kingdoms Collide. As a hero chosen by prophecy, gather allies, face mythical beasts, and confront the forces of darkness threatening the fantasy world. Your decisions shape the destiny of the kingdom.",
    image: "https://cache-eu.finalfantasy.com/uploads/content/file/2018/11/16/611/logo_ff14_5.0.jpg"
  },
  {
    name: "Aqua Rumble: Deep Sea Battles",
    price: "$34.99",
    category: "Underwater Combat",
    description: "Plunge into the depths of the ocean in Aqua Rumble. Engage in intense underwater battles, discover hidden treasures, and navigate through coral reefs. Upgrade your submersible vehicles to become the undisputed ruler of the deep sea.",
    image: "https://i.pinimg.com/originals/fe/8b/95/fe8b95900db09030ec54b5fe3eb29c81.png"
  },
  {
    name: "Cybernetic Arena: Robot Wars",
    price: "$49.99",
    category: "Fighting",
    description: "Enter the Cybernetic Arena and engage in epic Robot Wars. Customize your combat mechs, challenge other players, and rise through the ranks in this futuristic fighting game. Master the art of mechanical combat to become the ultimate champion.",
    image: "https://images5.alphacoders.com/112/1127260.jpg"
  },
  {
    name: "Epic Skies: Aerial Combat",
    price: "$44.99",
    category: "Flight Simulation",
    description: "Take to the skies in Epic Skies. Pilot advanced fighter jets, engage in dogfights, and participate in thrilling aerial combat missions. Experience the rush of air superiority as you navigate through realistic environments.",
    image: "https://s1.cdn.autoevolution.com/images/news/fly-modern-fighter-jets-in-air-combat-game-sky-warriors-out-now-on-ios-and-android-171107_1.jpg"
  },
  {
    name: "Steampunk Inventor: Contraption Conquest",
    price: "$39.99",
    category: "Puzzle",
    description: "Become a Steampunk Inventor in Contraption Conquest. Solve intricate puzzles, build fantastical machines, and navigate through a world of gears and steam. Your inventive skills will be put to the test in this unique steampunk puzzle adventure.",
    image: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWt6TXpRelpqUmxNaTFoTWpCa0xUUm1aakl0WWpsaVlpMDRaVGxpTkdSak1EaGtNRGtHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--d21491f53394840303403964abe550e2388649de/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--935666d13f63ed5aca9daa2416340e3a90b6014e/prompthero-prompt-8119c7dc1a2.png"
  },
  {
    name: "Wild West Outlaws: Frontier Justice",
    price: "$49.99",
    category: "Open World",
    description: "Saddle up and ride into the sunset in Wild West Outlaws. Experience the untamed frontier, engage in duels, and build your outlaw legacy. Choose between law and chaos as you navigate the challenges of the Wild West.",
    image: "https://download.cocos.com/CocosWww/2020/11/FrontierJustice.png"
  }
];




const Home = () => {

  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />

        <Box flex={4} p={2} className="main-display">
        
        {products.map((product) => ( 
            <ProductCard
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              category={product.category}/>
        ))}
        </Box>

       <Rightbar />
      </Stack>
    </Box>
  );
};

export default Home;

