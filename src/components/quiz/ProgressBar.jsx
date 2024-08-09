function ProgressBar({ current, total }) {
  // Clamp progress to a maximum of 100%
  const progress = Math.min((current / total) * 100, 100);

  return (
    <div className="mt-6">
      <div className="bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-green-600 h-2.5 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center mt-2 text-gray-600">{current}/{total}</p>
    </div>
  );
}

export default ProgressBar;
