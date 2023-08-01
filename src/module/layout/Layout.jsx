import { Box, IconButton, InputBase, Typography, useTheme } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../theme";

export const Layout = ({ children }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            height="100vh"
            width="100%"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
            <Box
                variant="header"
                height="150px"
                width="100%"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: colors.primary[500],
                }}>
                <img src="/logo.png" alt="logo"
                    style={{
                        width: '280px',
                        marginTop: '-15px',
                        filter: 'grayscale(100%) brightness(0%)',
                    }}
                />
                <Box
                    height="100%"
                    width="auto"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                    <Typography variant="h1" color="white">Buscador de usuarios</Typography>
                    <Box
                        width="100%"
                        display="flex"
                        backgroundColor={colors.primary[400]}
                        borderRadius="3px"
                        padding="5px"
                        sx={{ cursor: 'pointer', userSelect: 'none', }}
                    >
                        <InputBase
                            placeholder="Buscar usuarios..."
                            sx={{ ml: 1, flex: 1, color: "white", fontSize: '18px', }}
                        />
                        <IconButton type="button" sx={{ p: 1 }}>
                            <SearchIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </Box>


                </Box>

                {/* TODO RESPOSITORIO DEL GITHUB */}
                <Box width='280px'>
                </Box>
            </Box>
            {children}
            <Box
                variant="footer"
                height="100px"
                width="100%"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: colors.secondary[500],
                }}>
            </Box>
        </Box>
    )
}
