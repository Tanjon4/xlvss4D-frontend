import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const initialSeconds = 2 * 24 * 3600 + 20 * 3600 + 56 * 60 + 8;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const days = Math.floor(secondsLeft / (24 * 3600));
  const hours = Math.floor((secondsLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="flex items-center justify-between bg-white-50 min-h-screen px-12">
      {/* Partie gauche : l'image */}
      <div className="flex-1">
        <img
          src="https://i.pinimg.com/1200x/be/6b/6f/be6b6f7a4bfd87dfb1db94a8dd1e15f0.jpg"
          alt="Model"
          className="object-contain max-h-[600px]"
        />
      </div>

      {/* Partie droite : le texte et le timer */}
      <div className="flex-1 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Deal Of The Week</h1>
        <div className="w-20 h-1 bg-red-500 mx-auto my-3"></div>

        {/* Timer */}
        <div className="flex justify-center gap-6 mt-6">
          {[
            { label: 'Day', value: days },
            { label: 'Hours', value: hours },
            { label: 'Mins', value: minutes },
            { label: 'Sec', value: seconds },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="w-24 h-24 rounded-full bg-white shadow-md flex flex-col items-center justify-center"
            >
              <div className="text-3xl font-bold text-red-500">{value}</div>
              <div className="text-gray-500 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Bouton */}
        <button className="mt-8 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default CountdownTimer;
