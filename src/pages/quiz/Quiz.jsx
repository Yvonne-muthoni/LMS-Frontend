import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Spinner, useToast } from '@chakra-ui/react';
import QuizQuestion from '../../components/quiz/QuizQuestion';
import ProgressBar from '../../components/quiz/ProgressBar';
import QuizNavigation from '../../components/quiz/QuizNavigation';
import QuizResults from '../../components/quiz/QuizResults';


const dummyQuizData = {
  html: [
    {
      question: 'What does HTML stand for?',
      options: [
        'Hyper Text Markup Language',
        'Home Tool Markup Language',
        'Hyperlinks and Text Markup Language',
        'Hyperlinking Text Mark Language'
      ],
    },
    {
      question: 'Who is making the Web standards?',
      options: [
        'Google',
        'Microsoft',
        'Mozilla',
        'The World Wide Web Consortium'
      ],
    },
    {
      question: 'Choose the correct HTML element for the largest heading:',
      options: [
        '<heading>',
        '<h1>',
        '<h6>',
        '<head>'
      ],
    }
  ],
  javascript: [
    // Add JavaScript questions here
  ],
  react: [
    // Add React questions here
  ],
  python: [
    // Add Python questions here
  ],
};

function Quiz() {
    const { category } = useParams();
    const [quizData, setQuizData] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const toast = useToast();
  
    useEffect(() => {
      const fetchQuizData = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const data = dummyQuizData[category.toLowerCase()];
          if (data) {
            setQuizData(data);
            setAnswers(new Array(data.length).fill(null));
  
            const savedProgress = localStorage.getItem(`quizProgress_${category}`);
            if (savedProgress) {
              const { currentQuestion, answers } = JSON.parse(savedProgress);
              setCurrentQuestion(currentQuestion);
              setAnswers(answers);
            }
          } else {
            setError(`No quiz data found for category: ${category}`);
            toast({
              title: "Error",
              description: `No quiz data found for category: ${category}`,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        } catch (error) {
          setError(`Error fetching quiz data: ${error.message}`);
          toast({
            title: "Error",
            description: `Error fetching quiz data: ${error.message}`,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } finally {
          setIsLoading(false);
        }
      };
      fetchQuizData();
    }, [category, toast]);
  
    useEffect(() => {
      if (quizData) {
        localStorage.setItem(`quizProgress_${category}`, JSON.stringify({ currentQuestion, answers }));
      }
    }, [quizData, currentQuestion, answers, category]);
  
    const handleAnswerSelect = (index) => {
      setAnswers(prev => {
        const newAnswers = [...prev];
        newAnswers[currentQuestion] = index;
        return newAnswers;
      });
    };
  
    const handleNavigation = (index) => {
      setCurrentQuestion(index);
    };
  
    const handleComplete = useCallback(() => {
      setQuizCompleted(true);
      localStorage.removeItem(`quizProgress_${category}`);
    }, [category]);
  
    const handleRestart = () => {
      setCurrentQuestion(0);
      setAnswers(new Array(quizData.length).fill(null));
      setQuizCompleted(false);
      localStorage.removeItem(`quizProgress_${category}`);
    };
  
    if (isLoading) {
      return (
        <div className="min-h-screen bg-[#f7a08f] flex flex-col items-center justify-center p-4">
          <Spinner size="xl" />
          <p className="mt-4 text-white">Loading quiz...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="min-h-screen bg-[#f7a08f] flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-bold text-white mb-4">Error</h2>
          <p className="text-white text-center">{error}</p>
          <button 
            onClick={() => window.history.back()} 
            className="mt-6 bg-white text-[#f7a08f] py-2 px-6 rounded-lg font-semibold hover:bg-gray-100"
          >
            Go Back
          </button>
        </div>
      );
    }
  
    if (quizCompleted) {
      return (
        <QuizResults 
          quizData={quizData} 
          answers={answers}
          onRestart={handleRestart}
        />
      );
    }
  
    return (
      <div className="min-h-screen bg-[#f7a08f] flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <button className="text-coral-500 px-4 py-2 rounded-full" onClick={() => window.history.back()}>&lt; Back</button>
            <h1 className="text-3xl font-bold text-center">{category.toUpperCase()} QUIZ</h1>
            <div className="w-20"></div>
          </div>
          {quizData && quizData[currentQuestion] && (
            <QuizQuestion 
              question={quizData[currentQuestion].question} 
              options={quizData[currentQuestion].options}
              selectedAnswer={answers[currentQuestion]}
              onSelectAnswer={handleAnswerSelect}
            />
          )}
          <div className="mt-8">
            <ProgressBar current={currentQuestion + 1} total={quizData ? quizData.length : 0} />
            <QuizNavigation 
              currentQuestion={currentQuestion}
              totalQuestions={quizData ? quizData.length : 0}
              onNavigate={handleNavigation}
              onComplete={handleComplete}
              isAnswered={answers[currentQuestion] !== null}
            />
          </div>
        </div>
      </div>
    );
}

export default Quiz;