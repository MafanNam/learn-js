import {useQuiz} from "../context/QuizContext";

export default function Progress() {
  const {index, numQuestions, points, maxPossiblePoints, answer} = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + +(answer !== null)}/>

      <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
      <p><strong>{points}</strong> / {maxPossiblePoints}</p>
    </header>
  );
}
