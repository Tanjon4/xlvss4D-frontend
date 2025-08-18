import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const initialSeconds = 2 * 24 * 3600 + 23 * 3600 + 59 * 60 + 60;
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

  const format = (num) => num.toString().padStart(2, '0');

  return (
    <div
      className="bg-cover bg-center min-h-screen p-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Titre */}
      <h1 className="mb-6 text-3xl font-extrabold text-black text-right">
        Deal Of The Week
      </h1>

      {/* Ligne contenant les cercles + bouton */}
      <div className="flex justify-end items-center gap-6 flex-nowrap overflow-x-auto">
        {/* Cercles */}
        {[
          { label: 'Jours', value: days },
          { label: 'Heures', value: format(hours) },
          { label: 'Minutes', value: format(minutes) },
          { label: 'Secondes', value: format(seconds) },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="w-28 h-28 rounded-full bg-blue-700 bg-opacity-80 text-white flex flex-col justify-center items-center shadow-xl"
          >
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-sm mt-2">{label}</div>
          </div>
        ))}

        {/* Bouton à droite */}
        <button className="px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition shrink-0">
          Shop Now
        </button>
      </div>

      {/* Message de fin */}
      {secondsLeft === 0 && (
        <p className="mt-6 text-red-400 font-bold text-lg drop-shadow-lg text-right">
          Temps écoulé !
        </p>
      )}
    </div>
  );
}

export default CountdownTimer;
