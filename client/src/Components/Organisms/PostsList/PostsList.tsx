import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { breakpoint } from "Styles";
import { StyledPostsList, PostsContainer } from "./PostsList.styled";
import { PostCard } from "Components/Molecules";
import { TopBar } from "Components/Organisms";
import { dummyData } from "./Api/dummyData";

export const PostsList: React.FC = () => {
  const [postsData, setPostsData] = useState(dummyData);

  const handleToggleSave = (id?: string) => {
    setPostsData((state) =>
      state.map((item) => {
        if (item.id === id) {
          item.isSaved = !item.isSaved;
        }
        return item;
      })
    );
  };

  const handleLikePost = (id?: string) => {
    setPostsData((state) =>
      state.map((item) => {
        if (item.id === id) {
          item.isLiked = !item.isLiked;
        }
        return item;
      })
    );
  };

  const handleDislikePost = (id?: string) => {
    setPostsData((state) =>
      state.map((item) => {
        if (item.id === id) {
          item.isDisliked = !item.isDisliked;
        }
        return item;
      })
    );
  };

  return (
    <StyledPostsList>
      <TopBar />
      <PostsContainer>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 0: 1, [breakpoint.laptopScreen]: 3 }}
        >
          <Masonry gutter="15px">
            {postsData.map((item) => (
              <PostCard
                key={item.id}
                postData={item}
                onSave={() => handleToggleSave(item.id)}
                onLike={() => handleLikePost(item.id)}
                onDislike={() => handleDislikePost(item.id)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </PostsContainer>
    </StyledPostsList>
  );
};
