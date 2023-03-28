import { Box } from "@suid/material";
import { styled } from "@suid/material";

import { COLORS } from '../utils/colors';

const Container = styled("div")({
  color: COLORS.WHITE,
  backgroundColor: COLORS.BG_MAIN,
  padding: 10,
  width: '100%',
  height: '100vh',
})

interface MainContainerProps {
  children: string;
}

export default function MainContainer(props: MainContainerProps) {
  const { children } = props;

  return <Container>{children}</Container>
}
