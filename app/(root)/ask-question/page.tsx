import React from "react";
import QuestionForm from "@/components/forms/QuestionForm";

const AskQuestion = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div>
        <QuestionForm />
      </div>
    </div>
  );
};

export default AskQuestion;
