import { Box, useTheme } from "@mui/material"
import { tokens } from "../../theme";

export const Layout = ({ children }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            variant="header"
            height="100vh"
            width="100%"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: colors.primary[500],
                /* background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' */
            }}>
            {children}
        </Box>
    )
}
