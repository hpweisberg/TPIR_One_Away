const Digit = ({ value, index, onClick, handleHigherClick, handleLowerClick }) => {
  const getColor = () => {
    //! Add color change here
    return 'black';
  };

  return (
    <div className="flex flex-col  mx-1 border-4 border-green-600">
      <button onClick={() => handleHigherClick(index)} className="border-2 w-10 h-10">
        
      </button>
      <button onClick={onClick} className="border-2 w-10 h-10 text-[300%]" style={{ color: getColor() }}>
        {value}
      </button>
      <button onClick={() => handleLowerClick(index)} className="border-2 w-10 h-10">
        
      </button>
    </div>
  );
};



export default Digit;