import Digit from "./Digit";
import gameImg from '/One_Away_no_arrow.svg';

const GameBoard = ({ car, fakePrice, handleDigitClick, handleLowerClick, handleHigherClick, handleSubmit, correctNums }) => {
  console.log('GB Car: ', car);
  console.log('GB FP: ', fakePrice);

  return (
    <div className="h-screen grid place-items-center [grid-template-areas:'stack']">
        <img src={gameImg} className="h-screen w-full [grid-area:stack]" alt="" />
        <h1 className="text-6xl font-bold text-white [grid-area:stack] w-full text-center">1 2 3 4 5</h1>

      {/* {fakePrice && (
        <div className="flex text-1xl font-bold text-white [grid-area:stack]  ">
          {fakePrice.map((digit, index) => (
            <Digit
            key={index}
            value={digit}
            index={index}
            onClick={() => handleDigitClick(index)}
            handleLowerClick={handleLowerClick}
            handleHigherClick={handleHigherClick}
            />
            ))}
        </div>
      )} */}
      {/* {correctNums && <p>{correctNums}</p>}
      <button onClick={handleSubmit}>Submit</button> */}
      </div>
    // </div>
  );
};

export default GameBoard;
