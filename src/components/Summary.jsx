import quizCompleteImg from "../assets/quiz-complete.png";

export default function Summary({ userAnswers }) {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="quiz completed" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">Answered correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">Answered incorrectly</span>
        </p>
      </div>
      <ol>
        <li>
          <h3>2</h3>
          <p className="question">Question text</p>
          <p className="user-answer">user answer</p>
        </li>
      </ol>
    </div>
  );
}
