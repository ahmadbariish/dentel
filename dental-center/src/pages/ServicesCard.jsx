

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Link} from "react-router"
export default function ServicesCard({ title, description, srcImage,url }) {
  return (
    <Card
      elevation={0}
      sx={{
        marginBottom:'30px',
        textAlign: "center",
        // padding: 2,
        border: "1px solid #eee",
        borderRadius: 2,
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          transform: "translateY(-5px)",
        },
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 1,
        }}>
        <img
          src={srcImage}
          alt={title}
          style={{
            width: "100%",
            height: "200px",
            
          }}
        />
      </Box>
      <CardContent>
        <Typography
          variant='h6'
          component='div'
          sx={{ fontWeight: "bold", mb: 1 }}>
          {title}
        </Typography>
        <Typography variant='body2' sx={{ color: "#666", lineHeight: 1.6,mb:2 }}>
          {description}
        </Typography>
        <Link className="button-card" to={url}>المزيد</Link>
      </CardContent>
      
    </Card>
  );
}
