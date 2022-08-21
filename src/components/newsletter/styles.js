import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme || "#eee"};
  margin-top: 40px;
`;

export const NewsletterContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
