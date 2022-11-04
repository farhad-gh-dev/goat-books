import React, { useState } from "react";
import { StyledTopBar } from "./TopBar.styled";
import { NavProfile, SearchBar } from "Components/Molecules";
import { dummyData } from "./Api/dummyData";

export const TopBar: React.FC = () => {
  const [profileData] = useState(dummyData);

  const handleSearch = (searchTerm?: string) => {
    // To be implemented...
  };

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
