import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { usePosts } from "../api/get-posts";
import { PostCard } from "./post-card";
import { TopBar } from "./top-bar";
import { breakpoints } from "@/styles/themes";
import { useState } from "react";
import { NewPostModal } from "./new-post-modal";
import EmptyListImage from "@/assets/empty-list-illustration.png";

export const Posts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  const postsQuery = usePosts({
    params: {
      sort: activeFilter ? activeFilter : undefined,
      searchTerm: searchTerm ? searchTerm : undefined,
    },
  });

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
        <Typography variant="h4">Posts</Typography>
        <NewPostModal />
      </Box>
      <TopBar
        activeFilter={activeFilter}
        onSearchTermChange={(term) => setSearchTerm(term)}
        onFilterChange={(filter) => setActiveFilter(filter)}
      />

      {postsQuery.isLoading && (
        <Box
          sx={{
            width: "100%",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {postsQuery.data?.length === 0 && !postsQuery.isLoading && (
        <Box
          sx={{
            width: "100%",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{}}>
            <img src={EmptyListImage} width="200px" />
            <Typography variant="h6">Couldn't fined any post.</Typography>
          </Box>
        </Box>
      )}
      {postsQuery.data && !postsQuery.isLoading && (
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            0: 1,
            [breakpoints.md]: 2,
            [breakpoints.lg]: 3,
          }}
          style={{ paddingBottom: "50px" }}
        >
          <Masonry gutter="24px">
            {postsQuery.data?.map((post) => (
              <PostCard post={post} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </Box>
  );
};
