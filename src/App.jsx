import Navbar from './navbar/Navbar'
import { Main, Oreder } from './Header/index'
import { Card, CardShow, Email, Feature, Nots } from './Components/index'
import Footer from './Footer/Footer';

export default function App() {

  const shop = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/60/f0/d3/60f0d327829d14634ebc08854eb28587.jpg",
      name: "Wireless EarBuds",
      money: "$89.99"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/20/29/d5/2029d51d3f51b028d6f0d4b7bab3c44d.jpg",
      name: "Smartwatch Pro",
      money: "$199.00"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/236x/74/f1/3b/74f13b8705ddf22f9dee9848004491d4.jpg",
      name: "Bluetooth Speaker",
      money: "$129.12"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/bb/31/c2/bb31c26fcffdf72b62c5895e96d42b7a.jpg",
      name: "Gaming Mouse",
      money: "$42.26"
    },
    
  ];
 
  const market = [{
    id : 1,
    image : "https://i.pinimg.com/736x/3d/7a/6a/3d7a6a8fcdf53c3f321a3f8106173ba8.jpg",
    name : "Airpods"

  },{
    id : 2,
    image : "https://i.pinimg.com/736x/a6/99/65/a69965bfac8cb100a29769669ca5383e.jpg",
    name: "HeadSets"
  },{
    id : 3,
    image: "https://i.pinimg.com/736x/8c/17/a4/8c17a46f777c5b61f208e97415481684.jpg",
    name: "microphone"
  },{
    id: 4,
    image: "https://i.pinimg.com/736x/7d/39/39/7d3939a449d49568723455058462e0c3.jpg",
    name: "Keyboard"
  }]

  return (
    <div>
      <Navbar />
      <Main />
      <Oreder />
      <Feature />
      <div className='flex items-center justify-between w-full gap-4 md:gap-3'>
        {shop.map(function (shops) {
          return <Card key={shops.id} shop={shops} />
        })}
      </div>
        <Nots/>
      <div className='flex items-center justify-between md: gap-2 w-full'>
        {market.map(function(mark){
          return <CardShow key={mark.id} market={mark}/>
        })}
      </div>
      <Email/>
      <Footer/>
    </div>
  )
}
