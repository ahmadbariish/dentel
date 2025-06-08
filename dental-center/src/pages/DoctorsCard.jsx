/** @format */

//icons
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

export default function DoctorsCard({ title, description, srcImage }) {
  return (
    <div className="content-doctor">
      <img src={srcImage} alt='' className='doctor-img' />
      <h2 className="title-doctor">{title}</h2>
      <div>
        <p className="description-doctor">{description}</p>
      </div>
    </div>
  );
}
