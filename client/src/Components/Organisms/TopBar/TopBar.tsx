import React, { useState } from "react";
import { StyledTopBar } from "./TopBar.styled";
import { NavProfile, SearchBar } from "Components/Molecules";
import { dummyData } from "./Api/dummyData";

type Props = {
  handleSearch?: (i: string) => void;
};

export const TopBar: React.FC<Props> = ({
  handleSearch = (i) => console.log(i),
}) => {
  const [profileData] = useState(dummyData);

  return (
    <StyledTopBar>
      <SearchBar className="search-bar" onSubmit={handleSearch} />

      <NavProfile
        className="nav-profile"
        userName={profileData.userName}
        numberOfPosts={profileData.numberOfPosts}
        profileImage={profileData.profileImage}
      />
    </StyledTopBar>
  );
};
