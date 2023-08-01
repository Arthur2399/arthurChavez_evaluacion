import { Box, Pagination, useMediaQuery } from "@mui/material"
import { CardUser } from "../components"

export const UsersPage = () => {
  const isNonMobile = useMediaQuery("(min-width:1005px)");
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
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />

    </Box>
    <Pagination count={5} showFirstButton showLastButton sx={{mb:"20px"}}/>
  </Box>
  )
}
