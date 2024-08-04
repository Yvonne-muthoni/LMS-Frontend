import React from 'react';

function PasswordStrengthIndicator({ strength }) {
  return (
    <div className="mb-6">
      <p className="text-sm text-gray-600">Password Strength: {strength}</p>
      <p className="text-sm text-gray-600">Cannot contain your name or email address</p>
      <p className="text-sm text-gray-600">At least 8 characters</p>
      <p className="text-sm text-gray-600">Contains a number or symbol</p>
    </div>
  );
}

export default PasswordStrengthIndicator;