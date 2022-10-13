import React from "react";
import {
  StyledTextInput,
  InputContainer,
  Input,
  Label,
} from "./TextInput.styled";

export type TextInputProps = {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
} & React.ComponentProps<"input">;

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  onChange = (e) => console.log(e.target.value),
  className,
  fullWidth,
  ref,
  ...props
}) => {
  return (
    <StyledTextInput className={className}>
      <InputContainer hasValue={value !== ""}>
        <Label htmlFor={name}>{label}</Label>
        <Input
          type={
            label === "password" || name === "password" ? "password" : "text"
          }
          name={name}
          value={value}
          onChange={onChange}
          fullWidth={fullWidth}
          {...props}
        />
      </InputContainer>
    </StyledTextInput>
  );
};
