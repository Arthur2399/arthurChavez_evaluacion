import { Box, Card, CardActionArea, CardContent, Typography, colors, useTheme } from "@mui/material"
import { tokens } from "../../theme";

export const CardUser = ({first_name,last_name, email,phone_number, avatar, date_of_birth, gender,employment, address, subscription}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Card sx={{ maxWidth: 450, color: colors.grey[800], "&:hover": { background: colors.secondary[500], color:"white" }}}>
            <CardActionArea>
                <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
                <img 
                    src={avatar} 
                    alt="user" 
                    style={{ width: '180px', height: '220px', objectFit:'cover' }}
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" mb={2} textAlign="center" >
                        {`${first_name} ${last_name}`}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}}>
                    <strong>Email:</strong> {email}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}}>
                    <strong>Género:</strong> {gender}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}}>
                    <strong>Celular:</strong> {phone_number}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}}>
                    <strong>Fech Nacimiento:</strong> {date_of_birth}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}}>
                       <strong>Cargo:</strong> {employment.title}	
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}}>
                       <strong>Dirección:</strong> {address.street_address}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}}>
                       <strong>Suscripción:</strong> {subscription.plan}
                    </Typography>
                </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    )
}
