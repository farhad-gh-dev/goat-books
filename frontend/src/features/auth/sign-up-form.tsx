import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { TexInput } from "@/components/text-input";

import { signUpFormSchema } from "./entities";
import type { SignUpFormValues } from "./types";
import { signUpFormDefaultValues } from "./constants";
import { useSignUp } from "./api/sing-up";

export const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const signUpMutation = useSignUp({});

  const { formState, control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: signUpFormDefaultValues,
  });

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  const handleFromSubmit: SubmitHandler<SignUpFormValues> = async (values) => {
    signUpMutation.mutateAsync(
      { data: values },
      {
        onSuccess: () =>
          toast("You singed up successfully.", { type: "success" }),
        onError: (error) => {
          toast(
            (error.response?.data as any).message || "Something went wrong.",
            { type: "error" }
          );
        },
      }
    );
  };

  return (
    <Box
      sx={{
        width: "400px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textTransform: "capitalize", fontWeight: "medium", mb: 1 }}
      >
        Hello there
      </Typography>
      <Typography sx={{ textTransform: "capitalize", mb: 4 }}>
        already have an account?{" "}
        <Link
          component={RouterLink}
          to="/auth/sign-in"
          sx={{
            textTransform: "capitalize",
            fontWeight: "medium",
            textDecoration: "none",
          }}
        >
          sign in here.
        </Link>
      </Typography>

      <form>
        <TexInput
          name="email"
          controller={control}
          required
          label="Email"
          sx={{
            width: "100%",
            mb: 4,
          }}
          error={!!formState.errors.email?.message}
          helperText={formState.errors.email?.message}
        />

        <TexInput
          name="username"
          controller={control}
          required
          label="Username"
          sx={{
            width: "100%",
            mb: 4,
          }}
          error={!!formState.errors.username?.message}
          helperText={formState.errors.username?.message}
        />

        <TexInput
          name="password"
          controller={control}
          required
          type={showPassword ? "text" : "password"}
          label="password"
          sx={{
            width: "100%",
            mb: 10,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={(e) => handleMouseDownPassword(e)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={!!formState.errors.password?.message}
          helperText={formState.errors.password?.message}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "100%",
            py: 1.5,
            fontSize: "1rem",
          }}
          onClick={handleSubmit(handleFromSubmit)}
          disabled={signUpMutation.isLoading}
        >
          {signUpMutation.isLoading ? "Loading ..." : "Sign Up"}
        </Button>
      </form>
    </Box>
  );
};
