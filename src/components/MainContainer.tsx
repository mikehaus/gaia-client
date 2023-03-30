import { createSignal } from "solid-js";
import { styled } from "@suid/material";
import { Box, Button, TextField } from "@suid/material";
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

  return (
    <OuterContainer>
      <ConversationBox>
      </ConversationBox>
      <MessageFlex component="form" novalidate autocomplete="off">
        <QuestionTextField id="question-textfield" placeholder="Type your question here!" variant="filled" />
        <Button sx={{ "marginRight": "14px" }} variant="contained">Submit</Button>
      </MessageFlex>
    </OuterContainer>
  );
}
