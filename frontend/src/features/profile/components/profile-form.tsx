import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProfileFromValues, UserProfile } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileFormSchema } from "../entities";
import { profileFormDefaultValues } from "../constants";
import { convertImageToBase64 } from "@/utils/helpers";
import { useState } from "react";

export interface ProfileFormProps {
  profile: UserProfile;
}

type NullableFile = File | null;

export const ProfileForm: React.FC<ProfileFormProps> = ({ profile }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { setValue, handleSubmit, watch, formState } =
    useForm<ProfileFromValues>({
      resolver: zodResolver(profileFormSchema),
      defaultValues: profileFormDefaultValues,
    });

  const profileImageWatcher = watch("profileImage");

  const onSubmit: SubmitHandler<ProfileFromValues> = async (data) => {
    console.log(data.profileImage);
    // here you can send the data.image to the server
  };

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
      setValue("profileImage", base64);
    } else {
      setValue("profileImage", "");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
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
      <input type="submit" />
    </form>
  );
};
