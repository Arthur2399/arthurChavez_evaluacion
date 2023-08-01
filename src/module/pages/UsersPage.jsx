import { useEffect } from "react";
import { Box, Pagination, useMediaQuery } from "@mui/material"
import { CardUser, LoadingSpinner } from "../components"
import { useUserStore } from "../../store";

export const UsersPage = () => {

  const { users,isLoading, startLoadUsers} = useUserStore()
  const isNonMobile = useMediaQuery("(min-width:1005px)");


  useEffect(() => {
    startLoadUsers();
  }, [])
  
  return (
  <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{mt:"125px"}}>
    <LoadingSpinner isSaving={isLoading} message={"Cargando usuarios..."}/>
    <Box
      padding="30px"
      display="grid"
      gap="30px"
      gridTemplateColumns="repeat(2, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      {
        users.map(user => (
          <CardUser key={user.id} {...user}/>
        ))
      }
    </Box>
    <Pagination count={5} showFirstButton showLastButton sx={{mb:"20px"}}/>
  </Box>
  )
}
