import classic350 from '../Assets/classic350.jpeg';
import thunderbird from '../Assets/thunderbird.jpg';
import nexon from '../Assets/nexon.webp';
import altroz from '../Assets/altroz.jpeg';
import i20 from '../Assets/i20.jpg';
import apache from '../Assets/apache.webp';
import splendor from '../Assets/splendor.png';
import creta from '../Assets/creta.webp';
import fronx from '../Assets/fronx.webp';
import pleasure from '../Assets/pleasure.jpg';
import apacherr from '../Assets/apacherr.webp'
const vehicleData = [
  {
    id: 1,
    type: "car",
    name: "Tata Nexon",
    price: 1200000,
    transmission: "Automatic",
    description: "The Tata Nexon is a compact SUV known for its stylish design, spacious cabin, and advanced safety features.",
    image: nexon,
    color: ["Blue", "Red", "White"]
  },
  {
    id: 12,
    type: "car",
    name: "Tata Altroz",
    price: 900000,
    transmission: "Manual",
    description: "The Tata Altroz offers a perfect blend of style, performance, and safety, making it a standout choice in the premium hatchback segment.",
    image: altroz,
    color: ["Black", "Grey", "Silver"]
  },
  {
    id: 3,
    type: "bike",
    name: "Royal Enfield Classic 350",
    price: 180000,
    transmission: "Manual",
    description: "The Royal Enfield Classic 350 is an iconic cruiser bike known for its vintage charm, refined engine, and comfortable ride.",
    image: classic350,
    color: ["Black", "Red", "Blue"]
  },
  {
    id: 4,
    type: "bike",
    name: "Royal Enfield Thunderbird 350X",
    price: 220000,
    transmission: "Manual",
    description: "The Royal Enfield Thunderbird 350X combines modern design elements with classic cruiser styling, offering a relaxed riding experience with a touch of flair.",
    image: thunderbird,
    color: ["Blue", "White", "Grey"]
  },
  {
    id: 6,
    type: "car",
    name: "Hyundai i20",
    price: 700000,
    transmission: "Manual",
    description: "The Hyundai i20 is a premium hatchback known for its stylish design, spacious cabin, and advanced technology features, offering a delightful driving experience.",
    image: i20,
    color: ["Blue", "Red", "Black"]
  },
  {
    id: 7,
    type: "bike",
    name: "TVS Apache RTR 160",
    price: 100000,
    transmission: "Manual",
    description: "The TVS Apache RTR 160 is a popular streetfighter bike known for its aggressive styling, agile handling, and peppy performance.",
    image: apache,
    color: ["Red", "Black", "White"]
  },
  {
    id: 8,
    type: "bike",
    name: "Hero Splendor Plus",
    price: 60000,
    transmission: "Manual",
    description: "The Hero Splendor Plus is a commuter motorcycle known for its fuel efficiency, reliability, and low maintenance costs, making it a preferred choice among daily commuters.",
    image: splendor,
    color: ["Red", "Black", "Blue"]
  },
  {
    id: 9,
    type: "car",
    name: "Hyundai Creta",
    price: 1200000,
    transmission: "Automatic",
    description: "The Hyundai Creta is a compact SUV known for its striking design, premium interiors, and a wide range of advanced features, offering unmatched comfort and convenience.",
    image: creta,
    color: ["White", "Silver", "Black"]
  },
  {
    id: 10,
    type: "car",
    name: "Maruti Fronx",
    price: 900000,
    transmission: "Manual",
    description: "The Maruti Fronx is a compact sedan known for its spacious cabin, fuel-efficient engine, and comfortable ride, making it a perfect choice for city commuting.",
    image: fronx,
    color: ["Red", "Silver", "Blue"]
  },
  {
    id: 11,
    type: "bike",
    name: "TVS Apache RR 310",
    price: 200000,
    transmission: "Manual",
    description: "The TVS Apache RR 310 is a premium sportbike known for its aerodynamic design, powerful engine, and advanced technology features, offering an exhilarating riding experience on the track and the road.",
    image: apacherr,
    color: ["Black", "Red", "White"]
  },
  {
    id: 2,
    type: "bike",
    name: "Hero Pleasure Plus",
    price: 70000,
    transmission: "Automatic",
    description: "The Hero Pleasure Plus is a stylish and lightweight scooter designed for urban commuting, offering convenience, comfort, and ease of handling for riders of all ages.",
    image: pleasure,
    color: ["Red", "Black", "White"]
  },
];

export default vehicleData;
