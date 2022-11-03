import React, { useState } from "react";
import { useTheme } from "styled-components";
import {
  StyledSearchBar,
  InputContainer,
  SearchIcon,
  StyledInput,
  SubmitButton,
  ArrowIcon,
} from "./SearchBar.styled";

type Props = {
  className?: string;
  onSubmit?: (searchTerm: string) => void;
};

export const SearchBar: React.FC<Props> = ({
  className,
  onSubmit = () => {},
}) => {
  const [inputValue, setInputValue] = useState("");
  const theme: any = useTheme();

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <StyledSearchBar
      className={className}
      aria-label="search-bar"
      onSubmit={handleSubmit}
    >
      <InputContainer>
        <SearchIcon />
        <StyledInput
          type="text"
          id="search-bar"
          name="search-bar"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputValue}
        />
      </InputContainer>

      <SubmitButton type="submit" onClick={() => handleSubmit}>
        <ArrowIcon color={theme.color.secondary} />
      </SubmitButton>
    </StyledSearchBar>
  );
};
