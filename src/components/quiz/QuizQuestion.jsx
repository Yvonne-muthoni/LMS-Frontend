function QuizQuestion({ question, options, selectedAnswer, onSelectAnswer }) {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">{question}</h2>
        <div className="space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              className={`w-full text-left bg-white hover:bg-gray-100 p-4 rounded-lg shadow-md flex items-center ${
                selectedAnswer === index ? 'border-2 border-[#f7a08f]' : ''
              }`}
              onClick={() => onSelectAnswer(index)}
            >
              <span className="font-bold mr-4">{String.fromCharCode(65 + index)}</span> {option}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default QuizQuestion;