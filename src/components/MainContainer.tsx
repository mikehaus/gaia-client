import { createSignal, For } from "solid-js";
import { ChangeEvent } from "@suid/types";
import { styled } from "@suid/material";
import { Box, Button, TextField } from "@suid/material";

import axios from "axios";

import { COLORS } from "../utils/colors";

const SpaContainer = styled("div")({
  backgroundColor: COLORS.BG_MAIN,
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

const ConversationBox = styled(Box)({
  height: "calc(100% - 100px)",
  borderRadius: 8,
  backgroundColor: COLORS.BG_CONVERSATION_BOX,
  margin: "16px 32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const ConversationItem = styled(Box)({
  margin: "20px",
  width: "95%",
  padding: "10px",
  fontSize: "14px",
  backgroundColor: COLORS.BG_CONVERSATION_ITEM,
  color: COLORS.TEXT_COLOR_CONVERSATION_ITEM,
  borderRadius: "8px",
});

const SearchContainer = styled("div")({
  margin: "16px 32px",
  display: "flex",
  alignItems: "center",
});

const SearchInput = styled(TextField)({
  flex: 1,
  height: "48px",
  marginRight: "8px",
});

const SubmitButton = styled(Button)({
  height: "48px",
});

type ConversationAnswer = {
  question: string;
  answer: string;
};

export default function MainContainer() {
  const [question, setQuestion] = createSignal("");
  const [answers, setAnswers] = createSignal<ConversationAnswer[]>([]);

  const URL = `/openai/completions`;

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-requested-With, Content-Type, Authorization",
      "Content-Type": "application/json",
    },
  };

  const instance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 4000,
    headers: config.headers,
  });

  const handleQuestionChange = (event: Event): void => {
    const newValue = (event.target as HTMLInputElement).value;
    setQuestion(newValue);
  };

  const addAnswer = (newAnswer: string): void => {
    const conversationAnswer: ConversationAnswer = {
      question: question(),
      answer: newAnswer,
    };
    setAnswers([...answers(), conversationAnswer]);
  };

  const makeTestCall = async (e: Event) => {
    e.preventDefault();

    // TODO: Create response type, imply error type
    // TODO: Add error toast if can't get response
    // TODO: add catch based on res status

    const res = await instance.post(URL, question());

    const data = res.data;

    if (data) {
      addAnswer(data);
      setQuestion("");
      console.log(answers());
    } else {
      console.log(res);
    }
  };

  return (
    <SpaContainer>
      <ConversationBox>
        <For each={answers()}>
          {(answer, i) => (
            <ConversationItem>
              <p>Question: {answer.question}</p>
              <p>Answer: {answer.answer}</p>
            </ConversationItem>
          )}
        </For>
      </ConversationBox>
      <SearchContainer>
        <SearchInput
          id="question-textfield"
          placeholder="Type your question here!"
          variant="filled"
          value={question()}
          onChange={handleQuestionChange}
        />
        <SubmitButton
          sx={{ marginRight: "14px" }}
          variant="contained"
          onClick={(e) => makeTestCall(e)}
        >
          Submit
        </SubmitButton>
      </SearchContainer>
    </SpaContainer>
  );
}
