'use client'

import React, { useState } from 'react';
import './styles.css'

interface Field {
  id: number;
  label: string;
  color: string;
}

const SpinningWheel: React.FC = () => {
  const [fields] = useState<Field[]>([
    { id: 1, label: 'Field 1', color: '#FF69B4' },
    { id: 2, label: 'Field 2', color: '#34A85A' },
    { id: 3, label: 'Field 3', color: '#FFC107' },
    { id: 4, label: 'Field 4', color: '#8E24AA' },
    { id: 5, label: 'Field 5', color: '#4CAF50' },
    { id: 6, label: 'Field 6', color: '#03A9F4' },
    { id: 7, label: 'Field 7', color: '#FF9800' },
    { id: 8, label: 'Field 8', color: '#3F51B5' },
  ]);

  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<Field | null>(null);

  const handleSpin = () => {
    setSpinning(true);
    const winnerIndex = Math.floor(Math.random() * fields.length);
    const winner = fields[winnerIndex];
    setWinner(winner);
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };

  return (
    <div className="spinning-wheel">
      {fields.map((field) => (
        <div
          key={field.id}
          className={`field ${field.color} ${
            spinning && winner === field ? 'winner' : ''
          }`}
        >
          {field.label}
        </div>
      ))}
      <button onClick={handleSpin}>Spin</button>
      {winner && (
        <p className="winner-text">
          Congratulations, you won: <strong>{winner.label}</strong>!
        </p>
      )}
    </div>
  );
};

export default SpinningWheel;