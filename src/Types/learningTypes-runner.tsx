import { CheckStatusRunner } from "./learningTypes";

export default function LearningTypescript_Runner() {
  const response: string = CheckStatusRunner();

  return <div>{response}</div>;
}
