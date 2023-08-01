import { Box, Pagination, useMediaQuery } from "@mui/material";
import { CardUser, LoadingSpinner } from "../components";
import { useUserPage } from "../hooks";

export const UsersPage = () => {

  const isNonMobile = useMediaQuery("(min-width:1005px)");
  const { 
    isLoading,
    currentItems,
    userFilter,
    itemsPerPage,
    currentPage,
    handlePageChange } = useUserPage();

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ mt: "125px" }}>
      <LoadingSpinner isSaving={isLoading} message={"Cargando usuarios..."} />
      <Box
        padding="30px"
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        {currentItems.map((user) => (
          <CardUser key={user.id} {...user} />
        ))}
      </Box>
      <Pagination
        count={Math.ceil(userFilter.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        sx={{ mb: "20px" }}
      />
    </Box>
  );
};
