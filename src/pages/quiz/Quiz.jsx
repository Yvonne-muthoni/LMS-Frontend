import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
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
    const toast = useToast();
  
    useEffect(() => {
      const fetchQuizData = async () => {
        try {
          const data = dummyQuizData[category.toLowerCase()];
          if (data) {
            setQuizData(data);
            setAnswers(new Array(data.length).fill(null));
  
            // Load saved progress
            const savedProgress = localStorage.getItem('quizProgress');
            if (savedProgress) {
              const { currentQuestion, answers } = JSON.parse(savedProgress);
              setCurrentQuestion(currentQuestion);
              setAnswers(answers);
            }
          } else {
            toast({
              title: "Error",
              description: `No quiz data found for category: ${category}`,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        } catch (error) {
          toast({
            title: "Error",
            description: `Error fetching quiz data: ${error.message}`,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      };
      fetchQuizData();
    }, [category, toast]);
  
    useEffect(() => {
      if (quizData) {
        // Save progress
        localStorage.setItem('quizProgress', JSON.stringify({ currentQuestion, answers }));
      }
    }, [quizData, currentQuestion, answers]);
  
    const handleAnswerSelect = (index) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = index;
      setAnswers(newAnswers);
    };
  
    const handleNavigation = (index) => {
      setCurrentQuestion(index);
    };
  
    const handleComplete = useCallback(() => {
      setQuizCompleted(true);
    }, []);
  
    const handleRestart = () => {
      setCurrentQuestion(0);
      setAnswers(new Array(quizData.length).fill(null));
      setQuizCompleted(false);
      localStorage.removeItem('quizProgress');
    };
  
    if (!quizData) {
      return (
        <div className="min-h-screen bg-[#f7a08f] flex flex-col items-center justify-center p-4">
          <Spinner size="xl" />
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
          {quizData[currentQuestion] && (
            <QuizQuestion 
              question={quizData[currentQuestion].question} 
              options={quizData[currentQuestion].options}
              selectedAnswer={answers[currentQuestion]}
              onSelectAnswer={handleAnswerSelect}
            />
          )}
          <div className="mt-8">
            <ProgressBar current={currentQuestion + 1} total={quizData.length} />
            <QuizNavigation 
              currentQuestion={currentQuestion}
              totalQuestions={quizData.length}
              onNavigate={handleNavigation}
              onComplete={handleComplete}
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Quiz;