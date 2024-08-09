function QuizOption({ label, text }) {
    return (
      <button className="w-full text-left bg-gray-100 hover:bg-gray-200 p-3 rounded mb-2 flex items-center">
        <span className="font-bold mr-2">{label}</span> {text}
      </button>
    );
  }
  
  export default QuizOption;