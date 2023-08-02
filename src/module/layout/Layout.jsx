import { useState } from "react";
import { Link } from "react-router-dom";

import { Box, IconButton, InputBase, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

import { tokens } from "../../theme";
import { useUserStore } from "../../store";

export const Layout = ({ children }) => {
    const [search, setSearch] = useState('');
    const { startSearchUsers } = useUserStore();

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery("(min-width:980px)");

    const onSubmitUserSearch = (event) => {
        event.preventDefault();
        startSearchUsers(search)
    }

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
                height="130px"
                width="100%"
                sx={{
                    position: 'fixed',
                    zIndex: 100,
                    display: 'flex',
                    justifyContent: isNonMobile ? 'space-between' : 'center',
                    alignItems: 'center',
                    background: "white",
                }}>
                <img src="/logo.png" alt="logo"
                    style={{
                        width: '300px',
                        marginTop: '-15px',
                        display: isNonMobile ? '' : 'none',
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
                    <Typography variant="h1" color={colors.secondary[500]}> <strong>Buscador de usuarios</strong></Typography>
                    <form onSubmit={onSubmitUserSearch}>
                        <Box
                            width="500px"
                            display="flex"
                            backgroundColor={colors.grey[500]}
                            borderRadius="50px"
                            padding="5px"
                            sx={{ cursor: 'pointer', userSelect: 'none', }}
                        >
                            <InputBase
                                placeholder="Buscar..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                sx={{ ml: 1, flex: 1, fontSize: '18px', }}
                                />
                            <IconButton type="submit" sx={{ p: 1 }}>
                                <SearchIcon  />
                            </IconButton>
                        </Box>
                    </form>
                </Box>

                <Box width='300px' textAlign="center" sx={{ display: isNonMobile ? '' : 'none' }}>
                    <Typography variant="h6" sx={{ color: colors.secondary[500], fontSize: "16px" }}> Redes sociales</Typography>
                    <Box display="flex" alignContent="center" justifyContent="center" >
                        <Link to="https://github.com/Arthur2399/arthurChavez_evaluacion" target="_blank" rel="noopener noreferrer">
                            <Tooltip title="Repositorio de este proyecto">
                                <IconButton sx={{ padding: "10px",color: colors.secondary[500] , "&:hover": { color:"white", background: colors.primary[400] } }}>
                                    <GitHubIcon sx={{ width: "30px", height: "30px", }} />
                                </IconButton>
                            </Tooltip>
                        </Link>
                        <Link to="https://www.linkedin.com/company/actuariaconsultores/" target="_blank" rel="noopener noreferrer">
                            <Tooltip title="LinkedIn">
                                <IconButton sx={{ padding: "10px",color: colors.secondary[500], "&:hover": { color:"white", background: colors.primary[400] } }}>
                                    <LinkedInIcon sx={{ width: "30px", height: "30px" }} />
                                </IconButton>
                            </Tooltip>
                        </Link>
                        <Link to="https://actuaria.com.ec/es/" target="_blank" rel="noopener noreferrer">
                            <Tooltip title="Sitio web">
                                <IconButton sx={{ padding: "10px", color: colors.secondary[500], "&:hover": { color:"white", background: colors.primary[400] } }}>
                                    <LanguageIcon sx={{ width: "30px", height: "30px" }} />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </Box>
                </Box>
            </Box>
            {children}
            <Box
                variant="footer"
                height="150px"
                width="100%"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: colors.secondary[500],
                }}>
                <Typography variant="h6" mb="5px" color="white" mt={2}><strong>Realizado por:</strong> Ing Arthur Chavez Mora</Typography>
                <Typography variant="h6" mb="5px" color="white">© 2023 Actuaria Consultores SA</Typography>
            </Box>
        </Box>
    )
}
