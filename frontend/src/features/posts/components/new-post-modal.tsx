import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Divider from "@mui/material/Divider";
import { TexInput } from "@/components/text-input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPostSchema } from "../entities";
import { NewPost } from "../types";
import { useCreatePost } from "../api/create-post";
import { toast } from "react-toastify";
import { newPostFormDefaultValues } from "../constants";

export const NewPostModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const createPostMutation = useCreatePost({});

  const { formState, control, reset, handleSubmit } = useForm<NewPost>({
    resolver: zodResolver(newPostSchema),
    defaultValues: newPostFormDefaultValues,
  });

  const clickOpenHandler = () => {
    setOpen(true);
  };

  const closeHandler = () => {
    reset();
    setOpen(false);
  };

  const formSubmitHandler: SubmitHandler<NewPost> = async (values) => {
    createPostMutation.mutate(
      {
        data: values,
      },
      {
        onSuccess: () => {
          toast("Post has been created successfully.", { type: "success" });
          closeHandler();
        },
        onError: (error) =>
          toast(
            (error.response?.data as any).message || "Something went wrong.",
            { type: "error" }
          ),
      }
    );
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          py: { xs: 1, sm: 1.5 },
          px: { xs: 1.5, sm: 3 },
          borderRadius: "12px",
        }}
        onClick={clickOpenHandler}
      >
        + create a new post
      </Button>
      <Dialog open={open} onClose={closeHandler} fullWidth>
        <DialogTitle>New Post</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid xs={6} mb={1}>
              <TexInput
                required
                fullWidth
                autoFocus
                name="title"
                controller={control}
                size="small"
                label="Title"
                error={!!formState.errors.title?.message}
                helperText={formState.errors.title?.message}
              />
            </Grid>
            <Grid xs={6} mb={1}>
              <TexInput
                required
                fullWidth
                autoFocus
                name="author"
                controller={control}
                size="small"
                label="Author"
                error={!!formState.errors.author?.message}
                helperText={formState.errors.author?.message}
              />
            </Grid>
            <Grid xs={12} mb={1}>
              <TexInput
                required
                fullWidth
                autoFocus
                multiline
                rows={3}
                name="quote"
                controller={control}
                size="small"
                label="Quote"
                error={!!formState.errors.quote?.message}
                helperText={formState.errors.quote?.message}
              />
            </Grid>
            <Grid xs={12} mb={1}>
              <TexInput
                required
                fullWidth
                autoFocus
                multiline
                rows={3}
                name="review"
                controller={control}
                size="small"
                label="Description"
                error={!!formState.errors.review?.message}
                helperText={formState.errors.review?.message}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ padding: "8px 24px" }}>
          {!createPostMutation.isLoading && (
            <Button onClick={closeHandler}>Cancel</Button>
          )}
          <Button
            disabled={createPostMutation.isLoading}
            onClick={handleSubmit(formSubmitHandler)}
          >
            {createPostMutation.isLoading ? "Loading ..." : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
