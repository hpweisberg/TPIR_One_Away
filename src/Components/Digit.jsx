const Digit = ({ value, index, onClick, handleHigherClick, handleLowerClick }) => {
  const getColor = () => {
    //! Add color change here
    return 'black';
  };

  return (
    <div className="flex flex-col">
      <button onClick={() => handleHigherClick(index)} className="border-2 w-10 h-10">
        Higher
      </button>
      <button onClick={onClick} className="border-2 w-10 h-10" style={{ color: getColor() }}>
        {value}
      </button>
      <button onClick={() => handleLowerClick(index)} className="border-2 w-10 h-10">
        Lower
      </button>
    </div>
  );
};



export default Digit;