/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";


import Game from "./Components/Game";

import audiA5 from '/Cars/AudiA5.png';
import chevyColbaltXFE from '/Cars/ChevyColbaltXFE.png';
import chevyEquinox from '/Cars/ChevyEquinox.png';
import chevyHHR from '/Cars/ChevyHHR.png';
import FordEscapeXLT from '/Cars/FordEscapeXLT.png';
import FordFocusS from '/Cars/FordFocusS.png';
import hondaAccordLX from '/Cars/HondaAccordLX.png';
import hondaElementEX from '/Cars/HondaElementEX.png';
import HyundaiGenesis20 from '/Cars/HyundaiGenesis20.png';
import landRoverLR4 from '/Cars/LandRoverLR4.png';
import lexusGS350 from '/Cars/LexusGS350.png';
// import MercedesBenzCLS550 from '/Cars/MercedesBenzCLS550.png';
import miniCooperConvertible from '/Cars/MiniCooperConvertible.png';
import subaruForrester from '/Cars/SubaruForrester.png';
import toyotaTacoma from '/Cars/ToyotaTacoma.png';
import GameBoard from "./Components/GameBoard";


const prizes = [
  {
    name: "Lexus GS350",
    price: 47513,
    image: lexusGS350
  },
  // {
  //   name: "Mercedes-Benz CLS550",
  //   price: 85863,
  //   image: MercedesBenzCLS550
  // },
  {
    name: "Land Rover LR4",
    price: 48500,
    image: landRoverLR4
  },
  {
    name: "Mini Cooper Convertible",
    price: 26530,
    image: miniCooperConvertible
  },
  {
    name: "Ford Escape XLT",
    price: 27319,
    image: FordEscapeXLT
  },
  {
    name: "Hyundai Genesis 2.0",
    price: 22750,
    image: HyundaiGenesis20
  },
  {
    name: "Chevy Colbalt XFE",
    price: 17379,
    image: chevyColbaltXFE
  },
  {
    name: "Toyota Tacoma",
    price: 19378,
    image: toyotaTacoma
  },
  {
    name: "Chevy Equinox",
    price: 21785,
    image: chevyEquinox
  },
  {
    name: "Audi A5",
    price: 48576,
    image: audiA5
  },
  {
    name: "Ford Focus S",
    price: 17354,
    image: FordFocusS
  },
  {
    name: "Chevy HHR",
    price: 20584,
    image: chevyHHR
  },
  {
    name: "Honda Accord LX",
    price: 21055,
    image: hondaAccordLX
  },
  {
    name: "Honda Element EX",
    price: 23641,
    image: hondaElementEX
  },
  {
    name: "Subaru Forrester",
    price: 21864,
    image: subaruForrester
  },

]


function App() {
  const [car, setCar] = useState(null);
  const [fakePrice, setFakePrice] = useState([]);
  const [digitModification, setDigitModification] = useState([0, 0, 0, 0, 0]);
  console.log('digitaMod: ', digitModification);
  const [bestAttempt, setBestAttempt] = useState(0);
  console.log('bestAttempt: ', bestAttempt);


  const transformPrice = (price) => {
    const priceStr = price.toString();
    let newPriceStr = "";

    for (let i = 0; i < priceStr.length; i++) {
      const digit = parseInt(priceStr.charAt(i), 10);
      const random = Math.random() < 0.5 ? -1 : 1;
      let newDigit;

      if (i === 0 && digit === 1) {
        newDigit = Math.random() < 0.5 ? 0 : 2;
      } else {
        newDigit = (digit + random + 10) % 10;
      }

      newPriceStr += newDigit.toString();
    }

    return newPriceStr.split("").map(Number);
  };

  const handleSelectRandomCar = () => {
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const selectedCar = prizes[randomIndex];
    const transformedPrice = transformPrice(selectedCar.price);

    setCar(selectedCar);
    setFakePrice(transformedPrice);
    setDigitModification([0, 0, 0, 0, 0]);
  };

  useEffect(() => {
    handleSelectRandomCar();
  }, []);

  const handleDigitClick = (index) => {
    console.log(`Clicked on digit at index ${index}`);
  };

  const handleHigherClick = (index) => {
    if (digitModification[index] !== 1) {
      const newDigits = [...fakePrice];
      newDigits[index] = (newDigits[index] + 1) % 10;

      setFakePrice(newDigits);

      const newModifications = [...digitModification];
      newModifications[index] = digitModification[index] + 1;
      setDigitModification(newModifications);
    }
  };

  const handleLowerClick = (index) => {
    if (digitModification[index] !== -1) {
      const newDigits = [...fakePrice];
      newDigits[index] = (newDigits[index] + 9) % 10;

      setFakePrice(newDigits);

      const newModifications = [...digitModification];
      newModifications[index] = digitModification[index] - 1;
      setDigitModification(newModifications);
    }
  };

  const handleSubmit = () => {
    console.log('Submit');
    if (digitModification.includes(0)) {
      console.log('Please modify the price');
    }

    const originalPriceString = car.price.toString();
    const currentPriceString = fakePrice.join("");

    let hasAtLeastOneSpotCorrect = false;
    for (let i = 0; i < originalPriceString.length; i++) {
      if (originalPriceString.charAt(i) === currentPriceString.charAt(i)) {
        hasAtLeastOneSpotCorrect = true;
        break;
      }
    }

    if (hasAtLeastOneSpotCorrect) {
      console.log('You have at least one spot correct! You can choose again.');
    } else {
      console.log('You lost. No spots are correct.');
    }
  };




  return (
    <main className="flex flex-col items-center gap-1 md:gap-4 h-screen">
      <GameBoard
        car={car}
        fakePrice={fakePrice}
        handleDigitClick={handleDigitClick}
        handleHigherClick={handleHigherClick}
        handleLowerClick={handleLowerClick}
        handleSubmit={handleSubmit}
      />
      <h1>Prizes</h1>
      {car && (
        <div>
          <img src={car.image} className="w-[300px]" alt="" />
          <p>Original Price: {car.price}</p>
          <p>Transformed Price: {fakePrice.join("")}</p>
        </div>
      )}
    </main>
  );
}



export default App
