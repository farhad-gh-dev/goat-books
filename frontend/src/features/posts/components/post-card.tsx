import dayjs from "dayjs";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { useBookmarkPost } from "@/features/bookmarks";

import { useLikePost } from "../api/like-post";
import { useDislikePost } from "../api/dislike-post";
import { ReactionBtn } from "./reaction-btn";
import type { Post } from "../types";
import { PostCardOptions } from "./post-card-options";

export interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const likePostMutation = useLikePost({});
  const dislikePostMutation = useDislikePost({});
  const bookmarkPostMutation = useBookmarkPost({});

  const likePostHandler = () => {
    likePostMutation.mutateAsync({
      postId: post.id,
    });
  };

  const dislikePostHandler = () => {
    dislikePostMutation.mutateAsync({
      postId: post.id,
    });
  };

  const bookmarkPostHandler = () => {
    bookmarkPostMutation.mutateAsync({
      postId: post.id,
    });
  };

  return (
    <Card
      sx={{
        padding: { xs: "16px 20px", sm: "18px 24px" },
        boxShadow: "0 0 10px rgba(0,0,0,0.15)",
        borderRadius: "20px",
      }}
    >
      <CardContent sx={{ padding: "0", paddingBottom: "0 !important" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2.5 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "normal" }}>
              {post.title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                textTransform: "capitalize",
                fontWeight: "normal",
                fontSize: "13px",
              }}
            >
              by:{" "}
              <Box sx={{ display: "inline-block", color: "accent.main" }}>
                {post.author}
              </Box>
            </Typography>
          </Box>
          <Box sx={{ padding: "4px 0" }}>
            <IconButton onClick={bookmarkPostHandler} sx={{ p: 0.5 }}>
              {post.isBookmarked ? (
                <BookmarkIcon sx={{ color: "primary.main" }} />
              ) : (
                <BookmarkBorderIcon />
              )}
            </IconButton>
            {post.isPostOwner && <PostCardOptions postId={post.id} />}
          </Box>
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontStyle: "italic",
            textAlign: "center",
            padding: "0 12px",
            mb: 2,
          }}
        >
          "{post.quote}"
        </Typography>

        {post.review && (
          <>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "medium",
                color: "primary.main",
                pt: 1,
                mb: 1,
              }}
            >
              What I love about this book
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
              }}
            >
              {post.review}
            </Typography>
          </>
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="test"
              src={post.user.profileImage}
              sx={{ marginRight: "10px" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  textTransform: "none",
                  fontWeight: "normal",
                  lineHeight: "1",
                }}
              >
                {post.user.username}
              </Typography>
              <Typography variant="caption">
                {dayjs(post.createdAt).format("MM/DD/YYYY")}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ReactionBtn
              type={"like"}
              isActive={post.isLiked}
              reactionCount={post.reactions.likes}
              onClick={likePostHandler}
            />
            <ReactionBtn
              type={"dislike"}
              isActive={post.isDisliked}
              reactionCount={post.reactions.dislikes}
              onClick={dislikePostHandler}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
