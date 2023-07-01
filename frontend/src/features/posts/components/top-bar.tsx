import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "@/utils/helpers";

export interface TopBarProps {
  activeFilter: string;
  onSearchTermChange: (term: string) => void;
  onFilterChange: (term: string) => void;
}

interface FilterBtnProps {
  filterKey: string;
  isActive?: boolean;
  children: React.ReactNode;
  onClick: (filter: string) => void;
}

const FilterBtn: React.FC<FilterBtnProps> = ({
  filterKey,
  isActive,
  children,
  onClick = () => null,
}) => {
  return (
    <Button
      variant={isActive ? "contained" : "outlined"}
      sx={{ fontWeight: "normal", textTransform: "capitalize" }}
      onClick={() => onClick(filterKey)}
    >
      {children}
    </Button>
  );
};

export const TopBar: React.FC<TopBarProps> = ({
  activeFilter,
  onSearchTermChange = () => null,
  onFilterChange = () => null,
}) => {
  const debouncedSearch = useDebounce(onSearchTermChange);

  return (
    <Box
      sx={{
        mb: 2.5,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "16px", lg: "0" },
      }}
    >
      <TextField
        id="search"
        type="search"
        placeholder="Search"
        onChange={(e) => debouncedSearch(e.target.value)}
        sx={{
          width: { xs: "100%", md: "340px" },
          "& .MuiInputBase-input": {
            paddingTop: "12px",
            paddingBottom: "12px",
          },
        }}
        InputProps={{
          style: {
            borderRadius: "16px",
          },
          endAdornment: (
            <InputAdornment position="end" sx={{ border: "none" }}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "unset", md: "center" },
          flexDirection: { xs: "column", md: "row" },
          gap: "8px",
        }}
      >
        <Typography variant="body2" sx={{ marginRight: "8px" }}>
          Filter By:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <FilterBtn
            filterKey="likes"
            isActive={activeFilter === "likes"}
            onClick={() => onFilterChange("likes")}
          >
            Popular
          </FilterBtn>
          <FilterBtn filterKey="" onClick={onFilterChange}>
            Remove Filters
          </FilterBtn>
        </Box>
      </Box>
    </Box>
  );
};
