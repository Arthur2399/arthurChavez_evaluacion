import { useEffect, useMemo, useState } from "react";
import { Box, Pagination, useMediaQuery } from "@mui/material";
import { CardUser, LoadingSpinner } from "../components";
import { useUserStore } from "../../store";

export const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { users, isLoading, search, startLoadUsers } = useUserStore();
  const isNonMobile = useMediaQuery("(min-width:1005px)");

  const userFilter = useMemo(() => {
    if (search == null) return users;
    const filters = users.filter(
      (user) =>
        user?.first_name.toLowerCase().includes(search?.toLowerCase()) ||
        user?.last_name.toLowerCase().includes(search?.toLowerCase())
    );
    return filters;
  }, [search, users]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Start loading users
  useEffect(() => {
    startLoadUsers();
  }, []);

  // Reset currentPage to 1 whenever search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userFilter.slice(indexOfFirstItem, indexOfLastItem);

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
