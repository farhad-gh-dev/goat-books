import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

export interface ReactionBtnProps {
  type: "like" | "dislike";
  isActive: boolean;
  reactionCount: number;
  onClick: () => void;
}

export const ReactionBtn: React.FC<ReactionBtnProps> = ({
  type,
  isActive,
  reactionCount,
  onClick,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton disableRipple sx={{ p: 0.5 }} onClick={onClick}>
        {isActive ? (
          type === "like" ? (
            <ThumbUpIcon sx={{ color: "accent.main" }} />
          ) : (
            <ThumbDownAltIcon />
          )
        ) : type === "like" ? (
          <ThumbUpOffAltIcon />
        ) : (
          <ThumbDownOffAltIcon />
        )}
      </IconButton>
      <Typography variant="subtitle2" sx={{ fontWeight: "normal" }}>
        {reactionCount}
      </Typography>
    </Box>
  );
};
