import React from "react";
import QuestionForm from "@/components/forms/QuestionForm";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AskQuestion = async () => {
  // const { userId } = auth();

  // if (!userId) {
  //   redirect("/sign-in");
  // }

  const user = await getUserById({ userId: "1234567890" });

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div>
        <QuestionForm type="Ask" mongoUserId={JSON.stringify(user._id)} />
      </div>
    </div>
  );
};

export default AskQuestion;
