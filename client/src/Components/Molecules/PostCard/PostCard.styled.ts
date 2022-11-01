import styled from "styled-components";

export const StyledPostCard = styled.div`
  width: 390px;
  padding: 24px;
  background-color: ${(props) => props.theme.color.background};
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;
