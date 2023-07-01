import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { toast } from "react-toastify";

import { useDeletePost } from "../api/delete-post";

export interface PostCardOptionsProps {
  postId: string;
}

export const PostCardOptions: React.FC<PostCardOptionsProps> = ({ postId }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const deletePostMutation = useDeletePost({});

  const openMenuHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  const deletePostHandler = () => {
    deletePostMutation.mutateAsync(
      {
        postId,
      },
      {
        onSuccess: () =>
          toast("Post has been deleted successfully.", { type: "success" }),
        onError: () => {
          toast("Something went wrong.", { type: "error" });
        },
      }
    ),
      closeMenuHandler();
  };

  return (
    <>
      <IconButton sx={{ p: 0.5 }} onClick={openMenuHandler}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenuHandler}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.25)",
            borderRadius: "12px",
            minWidth: "120px",
          },
          "& .MuiList-root": {
            padding: "4px 0",
          },
        }}
      >
        <MenuItem
          onClick={deletePostHandler}
          sx={{ display: "flex", color: "accent.main" }}
        >
          <ListItemIcon>
            <DeleteIcon fontSize="small" sx={{ color: "accent.main" }} />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};
