import React, { useState } from 'react';

function SecondComponent() {
  const [inputText, setInputText] = useState('');
  const [reversedText, setReversedText] = useState('');

  const reverseText = () => {
    const sentences = inputText.split(/\.|\?|!/); // Split the input into sentences
    const reversedSentences = sentences.map((sentence, index) => {
      if (index % 2 === 0) {
        return sentence; // Keep even-indexed sentences as they are
      } else {
        // Reverse odd-indexed sentences
        const words = sentence.split(' ');
        return words.reverse().join(' ');
      }
    });

    // Join the reversed and unaltered sentences back together
    const result = reversedSentences.join('. ') + '.';
    setReversedText(result);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <h1>Reverse Paragraph After Two Sentences</h1>
      <textarea
        rows="10"
        cols="50"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter a paragraph..."
      ></textarea>
      <br />
      <button className="btn btn-primary" onClick={reverseText}>Reverse Every 2nd Sentence</button>
      <h2>Reversed Text:</h2>
      <p>{reversedText}</p>
    </div>
  );
}

export default SecondComponent;
