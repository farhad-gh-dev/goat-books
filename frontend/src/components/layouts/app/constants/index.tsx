import WhatshotIcon from "@mui/icons-material/Whatshot";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const sidebarLinks = [
  {
    icon: <WhatshotIcon sx={{ color: "accent.main" }} />,
    title: "Posts",
    link: "/posts",
  },
  {
    icon: <AccountCircleIcon sx={{ color: "info.main" }} />,
    title: "Profile",
    link: "/profile",
  },
  {
    icon: <BookmarkIcon sx={{ color: "primary.main" }} />,
    title: "Bookmarks",
    link: "/bookmarks",
  },
];
