
const Button = ({ category, setCategory }) => {
  return (
    <button
      className="'text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-5 py-3 mr-3 mx-auto rounded "
      onClick={() => setCategory(category)}
    >
      {category}
    </button>
  );
};

export default Button;
