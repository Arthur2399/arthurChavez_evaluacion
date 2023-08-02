import { Box, Card, CardActionArea, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material"
import { formattedDate } from "../helpers";
import { tokens } from "../../theme";
import { useMemo } from "react";

export const CardUser = ({ first_name, last_name, email, phone_number, avatar, date_of_birth, gender, employment, address, subscription }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery("(min-width:1026px)"); //Responsive Desing

    const imageWh = useMemo(() => {
        if(isNonMobile) return '180px';
        return '80px';
    })

    return (
        <Card sx={{ maxWidth: 500, height: "220px", color: colors.grey[800], "&:hover": { background: colors.secondary[500], color: "white" } }}>
            <CardActionArea>
                <Box display="flex" alignItems="center" width="100%" height="100%">
                    <img
                        src={avatar}
                        alt="user"
                        style={{ 
                            width: imageWh, 
                            height: imageWh, 
                            objectFit: 'cover' 
                        }}

                    />
                    <CardContent sx={{ padding: "10px", paddingBottom: "10px !important" }}>
                        <Typography gutterBottom variant="h5" mb={1} textAlign="center" >
                            {`${first_name} ${last_name}`}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "14px", mb: "4px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: "270px" }}>
                            <strong>Email:</strong> {email}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "14px", mb: "4px" }}>
                            <strong>Género:</strong> {gender}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "14px", mb: "4px" }}>
                            <strong>Celular:</strong> {phone_number}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "14px", mb: "4px" }}>
                            <strong>Fech nac:</strong> {formattedDate(date_of_birth)}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "14px", mb: "4px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: "270px" }}>
                            <strong>Cargo:</strong> {employment.title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "14px", mb: "4px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: "270px" }}>
                            <strong>Dirección:</strong> {`${address.city}, ${address.street_address}`}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "14px", mb: "4px" }}>
                            <strong>Suscripción:</strong> {subscription.plan}
                        </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    )
}
