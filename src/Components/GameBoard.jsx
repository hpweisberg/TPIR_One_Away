import Digit from "./Digit";

const GameBoard = ({ car, fakePrice, handleDigitClick, handleLowerClick, handleHigherClick, handleSubmit }) => {
  console.log('GB Car: ', car)
  console.log('GB FP: ', fakePrice)
  return (
    <div>
      <h1>GameBoard</h1>
      {fakePrice &&
        <div>
          <div className="flex">
            {fakePrice.map((digit, index) => (
              <Digit
                key={index}
                value={digit}
                index={index}
                onClick={() => handleDigitClick(index)} // Pass the index to the click handler
                handleLowerClick={handleLowerClick}
                handleHigherClick={handleHigherClick}
              />
            ))}
          </div>
        </div>
      }
      <button onClick={handleSubmit}>Submit</button>
    </div>

  );
}

export default GameBoard;