import { motion } from 'framer-motion';

function TestimonialCard({ name, comment }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative mb-4">
        <svg
          className="absolute top-0 left-0 w-12 h-12 text-[#FF6247] opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 17h6v-6h-6v6zM3 17h6v-6H3v6z" />
        </svg>
        <p className="text-lg font-light text-gray-700">{comment}</p>
      </div>
      <p className="font-semibold text-lg text-[#FF6247] text-center">{name}</p>
    </motion.div>
  );
}

export default TestimonialCard;