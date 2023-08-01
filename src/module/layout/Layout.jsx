import { Link } from "react-router-dom";
import { Box, IconButton, InputBase, Tooltip, Typography, useTheme } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
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
                        width: '300px',
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
                            placeholder="Buscar..."
                            sx={{ ml: 1, flex: 1, color: "white", fontSize: '18px', }}
                        />
                        <IconButton type="button" sx={{ p: 1 }}>
                            <SearchIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </Box>
                </Box>

                <Box width='300px' textAlign="center">
                    <Typography variant="h6" sx={{ color: colors.secondary[500], fontSize: "16px" }}> Redes sociales</Typography>
                    <Box display="flex" alignContent="center" justifyContent="center" >
                        <Link to="https://github.com/Arthur2399/arthurChavez_evaluacion" target="_blank" rel="noopener noreferrer">
                            <Tooltip title="Repositorio de este proyecto">
                                <IconButton sx={{ padding: "10px" }}>
                                    <GitHubIcon sx={{ width: "30px", height: "30px", color: colors.secondary[500] }} />
                                </IconButton>
                            </Tooltip>
                        </Link>
                        <Link to="https://www.linkedin.com/company/actuariaconsultores/" target="_blank" rel="noopener noreferrer">
                            <Tooltip title="LinkedIn">
                                <IconButton sx={{ padding: "10px" }}>
                                    <LinkedInIcon sx={{ width: "30px", height: "30px", color: colors.secondary[500] }} />
                                </IconButton>
                            </Tooltip>
                        </Link>
                        <Link to="https://actuaria.com.ec/es/" target="_blank" rel="noopener noreferrer">
                            <Tooltip title="Sitio web">
                                <IconButton sx={{ padding: "10px" }}>
                                    <LanguageIcon sx={{ width: "30px", height: "30px", color: colors.secondary[500] }} />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </Box>
                </Box>
            </Box>
            {children}
            <Box
                variant="footer"
                height="100px"
                width="100%"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: colors.secondary[500],
                }}>
                <Typography variant="h6" mb="5px" color="white"><strong>Realizado por:</strong> Ing Arthur Chavez Mora</Typography>
                <Typography variant="h6" mb="5px" color="white">© 2023 Actuaria Consultores SA</Typography>
            </Box>
        </Box>
    )
}
    