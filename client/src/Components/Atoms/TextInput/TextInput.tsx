import React from "react";
import {
  StyledTextInput,
  InputContainer,
  Input,
  Label,
} from "./TextInput.styled";

export type TextInputProps = {
  isPassword?: boolean;
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
} & React.ComponentProps<"input">;

export const TextInput: React.FC<TextInputProps> = ({
  isPassword,
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
          type={isPassword ? "password" : "text"}
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
