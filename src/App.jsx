import { useState } from 'react';
import PropTypes from 'prop-types';
import StarIcon from './assets/svg/icon-star.svg';
import IllustrationThanks from './assets/svg/illustration-thank-you.svg';

function Step1({ setRating, onNextStep }) {
  const numbers = [1, 2, 3, 4, 5];
  const [selectedNumber, setSelectedNumber] = useState(0);

  const handleBtnClick = (number) => {
    setSelectedNumber(number);
  };

  const handleSubmit = () => {
    if (selectedNumber > 0) {
      setRating(selectedNumber);
      onNextStep();
    } else {
      alert("Veuillez sélectionner un nombre avant de passer à l'étape suivante.");
    }
  };

  return (
    <div className="App__content__step1">
      <div className="App__content__step1__header">
        <img src={StarIcon} alt="star icon" />
      </div>
      <div className="App__content__step1__main">
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <ul className="App__content__step1__main__list">
          {numbers.map((number, index) => {
            const isSelected = selectedNumber === number;
            return (
              <li key={index}>
                <button
                  onClick={() => handleBtnClick(number)}
                  className={isSelected ? 'selected' : ''}
                >
                  {number}
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

function Step2({ ratedCount }) {
  return (
    <div className="App__content__step2">
      <div className="App__content__step2__header">
        <img src={IllustrationThanks} alt="Thanks You Illustration" />
        <p>You selected <span>{ratedCount}</span> out of 5</p>
      </div>
      <div className="App__content__step2__main">
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don&apos; hesitate to get in touch!</p>
      </div>
    </div>
  );
}

Step1.propTypes = {
  setRating: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired,
};

Step2.propTypes = {
  ratedCount: PropTypes.number.isRequired,
};

function App() {
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState(0);

  const handleRatingSelect = (number) => {
    setRating(number);
  };

  const handleNextStep = () => {
    setStep(2);
  };

  return (
    <div className="App">
      <div className="App__content">
        {step === 1 ? <Step1 setRating={handleRatingSelect} onNextStep={handleNextStep} /> : <Step2 ratedCount={rating} />}
      </div>
    </div>
  );
}

export default App;
