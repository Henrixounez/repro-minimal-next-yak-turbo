import { styled } from "next-yak";

const StyledH1 = styled.h1`
  color: red;
`

export default function Page() {
  return <StyledH1>Hello, Next.js!</StyledH1>;
}
