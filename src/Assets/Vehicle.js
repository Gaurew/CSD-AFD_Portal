import harrier from '../Assets/harrier.jpg'
import elevate from '../Assets/Elevate.jpg'
import re_gt from '../Assets/RE_GT.png'
import re_350 from '../Assets/RE_350.jpg'

const vehicleData = [
  {
    id: 1,
    type: "car",
    name: "Tata Harrier",
    price: 1500000,
    transmission: "Automatic",
    description: "The Tata Harrier is a premium SUV known for its bold design, luxurious interiors, and powerful performance.",
    image: harrier,
    color: ["Black", "White", "Silver"]
  },
  {
    id: 2,
    type: "car",
    name: "Hyundai Elevate",
    price: 800000,
    transmission: "Automatic",
    description: "The Hyundai Elevate offers a perfect combination of style, comfort, and advanced features, making it a top choice in the mid-size sedan segment.",
    image: elevate,
    color: ["Blue", "Red", "Black"]
  },
  {
    id: 3,
    type: "bike",
    name: "Royal Enfield Meteor 350",
    price: 200000,
    transmission: "Manual",
    description: "The Royal Enfield Meteor 350 redefines the classic cruiser experience with its modern features, refined performance, and timeless design.",
    image: re_350,
    color: ["Blue", "Black", "Red"]
  },
  {
    id: 4,
    type: "bike",
    name: "Royal Enfield  GT",
    price: 250000,
    transmission: "Manual",
    description: "The Royal Enfield Continental GT is a cafe racer-inspired motorcycle that combines retro styling with modern performance, offering an exhilarating riding experience.",
    image: re_gt,
    color: ["Yellow", "Black"]
  },
];

export default vehicleData;
