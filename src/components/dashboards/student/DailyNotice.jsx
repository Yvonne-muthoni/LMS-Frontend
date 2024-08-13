



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaAngleRight } from 'react-icons/fa';

const DailyNotice = () => {
  const [message, setMessage] = useState('No recent changes in courses');
  const [messageHistory, setMessageHistory] = useState([]);


  const generateFakeMessage = (index) => {
    const messages = [
      'Your subscription to the Advanced JavaScript course has been renewed.',
      'Reminder: Group meeting scheduled for today at 3 PM.',
      'New subscription plans are now available! Check them out in your portal.',
      'The Python study group will meet tomorrow at 10 AM.',
      'New courses have been added to your subscription. Explore them now!',
      'Weekly group discussion on React will be held on Friday at 4 PM.',
      'Your subscription to the Full-Stack Developer package has been upgraded.',
      'Don\'t miss the group meeting on Web Security today at 2 PM.',
    ];
    return messages[index % messages.length];
  };

  useEffect(() => {
    const generateMessages = () => {
      const index = messageHistory.length;
      const newMessage = generateFakeMessage(index);
      setMessage(newMessage);
      setMessageHistory(prevHistory => [newMessage, ...prevHistory]);
    };

    const messageIntervalId = setInterval(generateMessages, 9000);
    return () => clearInterval(messageIntervalId);
  }, [messageHistory]);

  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Daily Notice</h2>
      <p className="text-gray-600 mb-4">{message}</p>
      <p className="text-gray-600 mb-6">Always stay updated in your student portal</p>

      <ul className="text-gray-600 mb-6">
        {messageHistory.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>

      <a href="#" className="text-primary hover:text-primary-dark font-medium flex items-center">
        See all notices <FaAngleRight className="ml-2" />
      </a>
    </section>
  );
};

export default DailyNotice;
