import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material"

export const CardUser = ({first_name,last_name, email,phone_number, avatar, date_of_birth, gender,employment, address, subscription}) => {
    return (
        <Card sx={{ maxWidth: 450 }}>
            <CardActionArea>
                <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
                <img 
                    src={avatar} 
                    alt="user" 
                    style={{ width: '180px', height: '220px', objectFit:'cover' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" mb={2} textAlign="center" >
                        {`${first_name} ${last_name}`}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                    <strong>Email:</strong> {email}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                    <strong>Género:</strong> {gender}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                    <strong>Celular:</strong> {phone_number}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                    <strong>Fech Nacimiento:</strong> {date_of_birth}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                       <strong>Cargo:</strong> {employment.title}	
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                       <strong>Dirección:</strong> {address.street_address}
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                       <strong>Suscripción:</strong> {subscription.plan}
                    </Typography>
                </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    )
}
