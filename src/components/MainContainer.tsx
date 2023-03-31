import { createSignal } from "solid-js";
import { ChangeEvent } from "@suid/types";
import { styled } from "@suid/material";
import { Box, Button, TextField } from "@suid/material";

import axios from 'axios';

import { COLORS } from '../utils/colors';

const OuterContainer = styled("div")({
  backgroundColor: COLORS.BG_MAIN,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
})

const MainFlex = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "90%",
  height: "95%"
})

const ConversationBox = styled(Box)({
  marginBottom: 8,
  height: "85%",
  width: "90%",
  borderRadius: 8,
})

const MessageFlex = styled(Box)({
  display: 'flex',
  width: "90%",
  height: 48,
  justifyContent: 'space-between',
})

const QuestionTextField = styled(TextField)({
  height: "48px",
  width: '90%',
})

export default function MainContainer() {
  const [question, setQuestion] = createSignal("");

  const URL = `/openai/completions`;

  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'X-requested-With, Content-Type, Authorization',
    },
  };

  const instance = axios.create({ baseURL: 'http://localhost:8080', timeout: 4000, headers: config.headers });

  const handleQuestionChange = (event: Event): void => {
    const newValue = (event.target as HTMLInputElement).value;
    setQuestion(newValue);
  }

  const makeTestCall = (e: Event) => {
    e.preventDefault();

    instance.post(URL)
      .then((res) => console.log(res))
      .catch(err => console.error(err));
  }

  return (
    <OuterContainer>
      <ConversationBox>
      </ConversationBox>
      <MessageFlex component="form" novalidate autocomplete="off">
        <QuestionTextField
          id="question-textfield"
          placeholder="Type your question here!"
          variant="filled"
          onChange={handleQuestionChange} />
        <Button sx={{ "marginRight": "14px" }} variant="contained" onClick={(e) => makeTestCall(e)}>Submit</Button>
      </MessageFlex>
    </OuterContainer>
  );
}
