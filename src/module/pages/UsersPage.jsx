import { useEffect } from "react";
import { Box, Pagination, useMediaQuery } from "@mui/material"
import { CardUser } from "../components"
import { useUserStore } from "../../store";

export const UsersPage = () => {

  const { users, startLoadUsers} = useUserStore()
  const isNonMobile = useMediaQuery("(min-width:1005px)");



  useEffect(() => {
    startLoadUsers();
  }, [])
  
  return (
  <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{mt:"125px"}}>
    <Box
      padding="30px"
      display="grid"
      gap="30px"
      gridTemplateColumns="repeat(2, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <CardUser />
    </Box>
    <Pagination count={5} showFirstButton showLastButton sx={{mb:"20px"}}/>
  </Box>
  )
}
