const userSeeds = require("./userSeed.json");
const shoeSeeds = require("./shoeSeeds.json");
const db = require("../config/connection");
const { Shoe, User } = require("../models");

db.once("open", async () => {
  try {
    await Shoe.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Shoe.create(shoeSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done seeding!");
  process.exit(0);
});
