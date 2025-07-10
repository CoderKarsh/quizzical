export default function questions(data) {
  return data.map((item) => ({
    question: item.question,
    options: [...item.incorrect_answers, item.correct_answer].sort(
      () => 0.5 - Math.random()
    ),
    correct_ans: item.correct_answer,
  }));
}
