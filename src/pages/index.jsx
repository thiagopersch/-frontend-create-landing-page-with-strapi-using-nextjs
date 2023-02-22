import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.fontColor.primaryColor};
`;

export default function Home() {
  return <Title>My page</Title>
}
