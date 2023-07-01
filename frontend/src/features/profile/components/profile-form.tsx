import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProfileFromValues, UpdateUserProfile, UserProfile } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileFormSchema } from "../entities";
import { profileFormDefaultValues } from "../constants";
import { convertImageToBase64 } from "@/utils/helpers";
import { useEffect } from "react";
import { TexInput } from "@/components/text-input";
import Button from "@mui/material/Button";
import { useUpdateUserProfile } from "../api/update-user";
import { toast } from "react-toastify";

export interface ProfileFormProps {
  profile: UserProfile;
}

type NullableFile = File | null;

export const ProfileForm: React.FC<ProfileFormProps> = ({ profile }) => {
  const updateProfileMutation = useUpdateUserProfile({});

  const { formState, control, setValue, handleSubmit, watch, reset } =
    useForm<ProfileFromValues>({
      resolver: zodResolver(profileFormSchema),
      defaultValues: profileFormDefaultValues,
    });

  const profileImageWatcher = watch("profileImage");

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file: NullableFile = event.target.files
      ? event.target.files[0]
      : null;

    if (file && file?.size > 1048576) {
      return;
    }
    if (file) {
      const base64 = await convertImageToBase64(file);
      setValue("profileImage", base64, { shouldDirty: true });
    } else {
      setValue("profileImage", "", { shouldDirty: true });
    }
  };

  const onSubmit: SubmitHandler<ProfileFromValues> = async (values) => {
    const { username, password, profileImage } = values;
    const submitValues: UpdateUserProfile = { username };

    if (password) submitValues.password = password;
    if (profileImage) submitValues.profileImage = profileImage;

    updateProfileMutation.mutateAsync(
      {
        data: submitValues,
        id: profile.id,
      },
      {
        onSuccess: () => {
          toast("Your profile has been created successfully.", {
            type: "success",
          });
        },
        onError: () => {
          toast("Something went wrong.", { type: "error" });
        },
      }
    );
  };

  useEffect(() => {
    if (profile)
      reset({
        ...profileFormDefaultValues,
        email: profile.email,
        username: profile.username,
      });
  }, [profile, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mb: 5, display: "flex", alignItems: "flex-end" }}>
        <Avatar
          src={profileImageWatcher ? profileImageWatcher : profile.profileImage}
          sx={{ width: "130px", height: "130px" }}
        />
        <Box sx={{ ml: 3 }}>
          <Box sx={{ mb: 1 }}>
            <label htmlFor="profile-image">Update your profile image</label>
          </Box>
          <input
            type="file"
            name={"profile-image"}
            accept=".png, .jpg, .jpeg, .gif"
            onChange={handleImageChange}
          />
        </Box>

        {formState.errors.profileImage && (
          <p>{formState.errors.profileImage.message}</p>
        )}
      </Box>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid xs={12} md={6} mb={1}>
          <TexInput
            fullWidth
            autoFocus
            name="email"
            controller={control}
            size="small"
            label="Email"
            error={!!formState.errors.email?.message}
            helperText={formState.errors.email?.message}
            disabled={true}
          />
        </Grid>
        <Grid xs={12} md={6} mb={1}>
          <TexInput
            fullWidth
            autoFocus
            name="username"
            controller={control}
            size="small"
            label="Username"
            error={!!formState.errors.username?.message}
            helperText={formState.errors.username?.message}
          />
        </Grid>
        <Grid xs={12} md={6} mb={1}>
          <TexInput
            fullWidth
            autoFocus
            name="password"
            controller={control}
            size="small"
            label="Password"
            error={!!formState.errors.password?.message}
            helperText={formState.errors.password?.message}
          />
        </Grid>
        <Grid xs={12} md={6} mb={1}>
          <TexInput
            fullWidth
            autoFocus
            name="repeatPassword"
            controller={control}
            size="small"
            label="Confirm Password"
            error={!!formState.errors.repeatPassword?.message}
            helperText={formState.errors.repeatPassword?.message}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button type="submit" variant="contained" disabled={!formState.isDirty}>
          Save
        </Button>
      </Box>
    </form>
  );
};
