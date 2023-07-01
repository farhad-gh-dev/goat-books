import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useUserProfile } from "../api/get-user";
import { ProfileForm } from "./profile-form";

export const Profile = () => {
  const userProfileQuery = useUserProfile({});

  return (
    <Box sx={{ height: "100%" }}>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Profile</Typography>
      </Box>
      {userProfileQuery.data && <ProfileForm profile={userProfileQuery.data} />}
    </Box>
  );
};
