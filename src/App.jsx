import React, { useState, useEffect } from 'react';

const RegistrationForm = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [message, setMessage] = useState('');

  // Load registered numbers from .env
  const registeredNumbers =
  import.meta.env.VITE_REGISTERED_NUMBERS
    ?.split(',')
    .map(num => num.trim().toLowerCase()) || [];


  // Voice feedback
  const speakMessage = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1;
    utterance.rate = 1; // ✅ normal speaking speed
    speechSynthesis.cancel(); // avoid overlapping voices
    speechSynthesis.speak(utterance);
  };

  // Debounced check
  useEffect(() => {
    if (!registrationNumber.trim()) return;

    const delayDebounce = setTimeout(() => {
      const formatted = registrationNumber.trim().toLowerCase();

      if (registeredNumbers.includes(formatted)) {
        setMessage('✅ Registration number is available');
        speakMessage('Entry Allowed');
      } else {
        setMessage('❌ Registration number is NOT available');
        speakMessage('Entry Denied');
      }

      setRegistrationNumber('');
    }, 3000);

    return () => clearTimeout(delayDebounce);
  }, [registrationNumber]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
        <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-2xl shadow-2xl transform transition-all duration-300 hover:shadow-3xl">
          
          {/* Icon */}
          <div className="flex justify-center mb-6 lg:mb-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 lg:p-5 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 lg:mb-3">
            Registration Check
          </h1>
          
          <p className="text-center text-gray-600 text-sm sm:text-base lg:text-lg mb-8 lg:mb-10">
            Verify your registration number instantly
          </p>
          
          <div className="space-y-4 lg:space-y-6">
            <label className="block text-sm sm:text-base lg:text-lg font-semibold text-gray-700">
              Enter Registration Number
            </label>
            
            <div className="relative">
              <input
                type="text"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                className="w-full p-4 pr-12 text-base sm:text-lg lg:text-xl border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all duration-300 shadow-sm"
                placeholder="e.g. 2023bit001"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
            </div>
            
            {message && (
              <div className={`mt-6 p-4 sm:p-5 rounded-xl shadow-lg transform transition-all duration-500 animate-in ${
                message.includes('NOT')
                  ? 'bg-red-50 border-2 border-red-200'
                  : 'bg-green-50 border-2 border-green-200'
              }`}>
                <div className="flex items-center justify-center space-x-3">
                  {message.includes('NOT') ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <p className={`text-center text-base sm:text-lg md:text-xl font-bold ${
                    message.includes('NOT') ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {message}
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-xs sm:text-sm text-gray-500">
              🔒 Secure verification system
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
