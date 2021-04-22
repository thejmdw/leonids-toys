// const unicylce = {
//   id: 1,
//   wheels: 1,
//   size: 20,
//   gears: null,
//   color: "chrome"
// }

// const roadBike = {
//   id: 2,
//   wheels: 2, 
//   size: 58,
//   gears: 22,
//   color: "titanium and natural carbon fiber"
// }

// const tricycle = {
//   id: 3,
//   wheels: 3,
//   size: 16,
//   gears: null,
//   color: "red"
// }

const bikes = [
  {
    id: 1,
    name: "unicycle",
    color: "chrome",
    material: "steel",
    size: 20,
    gears: null,
    wheels: 1,
    price: 150,
    brand: "Sunn",
    weight: 15
  },
  {
    id: 2,
    name: "Helix OS",
    color: "polished titanium",
    material: "titanium",
    size: 58,
    gears: 22,
    wheels: 2,
    price: 7500,
    brand: "Lynskey",
    weight: 16
  },
  {
    id: 3,
    name:"tricycle",
    color: "red",
    material: "chromoly",
    size: 16,
    gears: null,
    wheels: 3,
    price: 75,
    brand: "Radio Flyer",
    weight: 10
  }
]

// for (const bike of bikes) {
//   console.log bike.name)
// }

// for (const bike of bikes) {
//   console.log(`The $ bike.name} costs $$ bike.price}!`)
// }

// for (const bike of bikes) {
//   bike.price = bike.price + 50;
//   console.log(`The $ bike.name} now costs $$ bike.price}!`)
// }

// for (const bike of bikes) {
//   bike.price = bike.price +  bike.price * .05)
//   console.log(`The $ bike.name} had a price increase. It is now $ bike.price}`)
// }


// const bikeToFind = 2

// for (const bike of bikes) {
//   if  bike.id === bikeToFind) {
//     bike.price = bike.price  bike.price*.05
//     console.log(`The $ bike.brand} $ bike.name} has $ bike.wheels} wheels, is made of $ bike.material}, weighs $ bike.weight} lbs, and costs $$ bike.price}`)
//   }
// }

const atheos = {
  name: "S-Works Aethos",
  color: "Carbon/Red Gold Chameleon/Bronze Foil",
  material: "carbon fiber",
  size: 58,
  gears: 22,
  wheels: 2,
  price: 13500,
  brand: "Specialized",
  weight: 13
}


const addBikeToInventory = (bikeObject) => {
  const lastIndex = bikes.length - 1;
  const currentLastBike = bikes[lastIndex];
  const maxId = currentLastBike.id;
  const idForNewBike = maxId + 1;

  bikeObject.id = idForNewBike;
  bikes.push(bikeObject)
}

addBikeToInventory(atheos)

for (bike of bikes) {
  console.log(`The ${bike.brand} ${bike.name} costs$ $${bike.price}. It weighs ${bike.weight} lbs!`)
}
