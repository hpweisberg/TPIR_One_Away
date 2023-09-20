import { useState } from "react";

// import HiLoGame from "./Components/HiLoGame";
// import PrizeValues from "./Components/PrizeValues";
// import TopTitle from "./Components/TopTitle";
// import HiLoRules from "./Components/HiLoRules";
// import PunchABunch from "./Components/PunchABunch";
import Game from "./Components/Game";

import cakeStand from '/GamePieces/cakeStand.png';
import hydrationSystem from '/GamePieces/hydrationSystem.png';
import photoScanner from '/GamePieces/photoScanner.png';
import slicerAndWedger from '/GamePieces/slicerAndWedger.png';
import speakers from '/GamePieces/speakers.png';
import thermometer from '/GamePieces/thermometer.png';
import weights from '/GamePieces/weights.png';
import wineSet from '/GamePieces/wineSet.png';


const prizes = [
  {
    name: "Car",
    price: 27385,
    image: hydrationSystem

  },
  // {
  //   name: "Stoneware Cake Stand",
  //   fakePrice: 75,
  //   realPrice: 42,
  //   image: cakeStand
  // },
  // {
  //   name: "Pinapple Slicer and Wedger",
  //   fakePrice: 15,
  //   realPrice: 25,
  //   image: slicerAndWedger
  // },
  // {
  //   name: "Yummly Wireless Meat Thermometer",
  //   fakePrice: 135,
  //   realPrice: 100,
  //   image: thermometer
  // },
  // {
  //   name: "Ivation All in One Wine Set",
  //   fakePrice: 99,
  //   realPrice: 70,
  //   image: wineSet
  // },
  // {
  //   name: "Kodak Mini Digital Photo Scanner",
  //   fakePrice: 230,
  //   realPrice: 195,
  //   image: photoScanner
  // },
  // {
  //   name: "Bala Ankle and Wrist Weights",
  //   fakePrice: 35,
  //   realPrice: 55,
  //   image: weights
  // },
  // {
  //   name: "Surround Sound Bluetooth Speakers",
  //   fakePrice: 79,
  //   realPrice: 100,
  //   image: speakers
  // }
]


function App() {
  // make a function that takes the przie object and returns a number of the price value that is off by 1 number for each digit in the number. so if the number is 134 the returned number can be 225



  return (
    <main className="flex flex-col items-center gap-1 md:gap-4 h-screen">
      {/* <Game /> */}


    </main>
  )
}


export default App
