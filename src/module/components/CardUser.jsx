import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

export const CardUser = () => {
    return (
        <Card sx={{ maxWidth: 450 }}>
            <CardActionArea>
                <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
                <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" 
                    alt="user" 
                    style={{ width: '180px', height: '220px', objectFit:'cover' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" mb={2} textAlign="center" >
                        Mishel Solis
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                    <strong>Email:</strong> mishelsolis@gmail.com
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                    <strong>Celular:</strong> 0997106357
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                    <strong>Fech Nacimiento:</strong> 23 de junio de 1999
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                       <strong>Cargo:</strong> Asesor comercial
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                       <strong>Dirección:</strong> Quitumbe Ñan
                    </Typography>
                    <Typography variant="body2" sx={{fontSize:"14px", mb:"4px"}} color="text.secondary">
                       <strong>Suscripción:</strong> Gold
                    </Typography>
                </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    )
}
