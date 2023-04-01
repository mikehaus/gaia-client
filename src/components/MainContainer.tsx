import { createSignal } from "solid-js";
import { ChangeEvent } from "@suid/types";
import { styled } from "@suid/material";
import { Box, Button, TextField } from "@suid/material";

import axios from 'axios';

import { COLORS } from '../utils/colors';

const SpaContainer = styled("div")({
  backgroundColor: COLORS.BG_MAIN,
  position: "fixed",
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
})

const ConversationBox = styled(Box)({
  height: "calc(100% - 100px)",
  borderRadius: 8,
  backgroundColor: COLORS.BG_CONVERSATION_BOX,
  margin: '16px 32px'
})

const SearchContainer = styled("div")({
  margin: '16px 32px',
  display: "flex",
  alignItems: 'center',
})

const SearchInput = styled(TextField)({
  flex: 1,
  height: "48px",
  marginRight: '8px'
})

const SubmitButton = styled(Button)({
  height: '48px',
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
    <SpaContainer>
      <ConversationBox>
      </ConversationBox>
      <SearchContainer>
        <SearchInput
          id="question-textfield"
          placeholder="Type your question here!"
          variant="filled"
          onChange={handleQuestionChange} />
        <SubmitButton sx={{ "marginRight": "14px" }} variant="contained" onClick={(e) => makeTestCall(e)}>Submit</SubmitButton>
      </SearchContainer>
    </SpaContainer>
  );
}
