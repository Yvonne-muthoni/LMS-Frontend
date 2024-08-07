function QuizNavigation({ currentQuestion, totalQuestions, onNavigate, onComplete }) {
    return (
      <div className="flex justify-end mt-4">
        {currentQuestion === totalQuestions - 1 ? (
          <button
            className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg font-semibold"
            onClick={onComplete}
          >
            CONTINUE
          </button>
        ) : (
          <button
            className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg font-semibold"
            onClick={() => onNavigate(currentQuestion + 1)}
          >
            CONTINUE
          </button>
        )}
      </div>
    );
  }
  
  export default QuizNavigation;