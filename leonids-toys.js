const toyToFind = 3
const toys = [
  {
    id: 1,
    name: "Brick builders",
    maker: "Lego",
    price: 50,
    weight: 4,
  },
  {
    id: 2,
    name: "Action figure",
    maker: "Necca",
    price: 30,
    weight: 2,
  },
  {
    id: 3,
    name: "Pop vinyl",
    maker: "Funko",
    price: 13,
    weight: 1,
  },
]

const spinners = {
  id: 4,
  name: "Fidget Spinners",
  maker: "Hasbro",
  price: 12,
  weight: 0.5
}

const Fidget = {
  id: 5,
  name: "Fidget Poppers",
  maker: "Fox mind",
  price: 6,
  weight: 1
}

toys.push(spinners)
toys.push(Fidget)


const cards = {
  name: "Black Jack",
  maker: "Bicycle",
  price: 20,
  weight: 1.2
}

const addToyToInventory = (toyObject) => {
const lastIndex = toys.length - 1
const currentLastToy = toys[lastIndex]
const maxId = currentLastToy.id
const idForNewToy = maxId + 1

toyObject.id = idForNewToy
toys.push(toyObject)
}

addToyToInventory(cards)

for (const toy of toys) { 
   //increase price  to all toys 
   if (toy.id === toyToFind) {
   toys.price = toys.price + 0.5
   toy.price = toy.price * 2
    console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars and weighs ${toy.weight}`)
  }
}

const removeProduct = () => {
  const oldToy = toys.id
  if (toys.indexOf === oldToy) - 1
}
toys.splice(2, 4);

console.log(toys)
