import Digit from "./Digit";
import gameImg from '/One_Away_no_arrow.svg';

const GameBoard = ({ car, fakePrice, handleDigitClick, handleLowerClick, handleHigherClick, handleSubmit, correctNums }) => {
  console.log('GB Car: ', car);
  console.log('GB FP: ', fakePrice);

  return (
    <div className="flex w-full relative">
      <div className="absolute -z-10 border-2 w-[50%] h-[600px] border-red-700 top-0 left-1/2 transform -translate-x-1/2 translate-y-12 ">
        {/* <div className=" -z-10 w-[300px] md:w-[50vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-10 border-2 "> */}
        <img src={gameImg} className="w-[100%] border-2" alt="" />

      {/* <h1>GameBoard</h1> */}
      {fakePrice && (
        <div className=" flex absolute w-full shrink-0 justify-center left-0 top-20 border-4 border-black  ">
        {/* <div className="flex absolute border-4 border-green-400 z-10 top-[450%] left-[48%] -translate-x-[50%] -translate-y-[50%] text-center w-screen justify-center "> */}
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
      )}
      {correctNums && <p>{correctNums}</p>}
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default GameBoard;
