import { CustomIcon } from "Components/Atoms";
import styled from "styled-components";
import { screenSize, typography } from "Styles";

export const StyledSearchBar = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

  ${screenSize.laptop} {
    max-width: 350px;
    padding: 13px;
    border-radius: 30px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(CustomIcon).attrs({
  type: "search",
})`
  &,
  svg {
    width: 16px;
    height: 16px;
    margin-right: 10px;

    ${screenSize.laptop} {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
`;

export const StyledInput = styled.input`
  padding: 0;
  margin: 0;
  font-size: ${typography.size.text_14};

  ${screenSize} {
    font-size: ${typography.size.text_16};
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0.6;
  }
`;

export const SubmitButton = styled.button`
  margin-right: 3px;

  ${screenSize.laptop} {
    margin-right: 7px;
  }
`;

export const ArrowIcon = styled(CustomIcon).attrs({
  type: "arrow",
})`
  &,
  svg {
    width: 21px;
    height: auto;

    ${screenSize.laptop} {
      width: 25px;
    }
  }
`;
