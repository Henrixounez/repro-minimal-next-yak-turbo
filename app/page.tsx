import { styled } from "next-yak";

const Container = styled.div`
  color: red;

  > :global(.text) {
   color: blue;
  }
`

export default function Page() {
  return (
  <Container>
    <p className="text">
      Hello, next-yak in turbo 🐮 🚀
    </p>
    </Container>);
}
