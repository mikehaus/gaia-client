import { styled } from "@suid/material";
import { Box, Button } from "@suid/material";
import { COLORS } from '../utils/colors';

const OuterContainer = styled("div")({
  color: COLORS.WHITE,
  backgroundColor: COLORS.BG_MAIN,
  padding: 10,
  width: '100%',
  height: '100vh',
})

const MainFlex = styled("div")({
  display: "flex",
  width: "100%",
})

const ConversationBox = styled(Box)({
  margin: 10,
  borderRadius: 8,
})

const MessageFlex = styled(Box)({
  display: 'flex',
  width: "100%",
  height: 52,
})

const MessageBox = styled("input")({
  marginRight: 10,
  width: "calc(100% - 74px)"
})

export default function MainContainer() {

  return (
    <OuterContainer>
      <MainFlex>
        <ConversationBox />
        <MessageFlex>
          <MessageBox />
          <Button variant="contained">Ask</Button>
        </MessageFlex>
      </MainFlex>
    </OuterContainer>
  );
}
