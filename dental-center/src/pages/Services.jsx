/** @format */

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Components
import ServicesCard from "./ServicesCard";

export default function Services() {
  return (
    <Container fixed sx={{ padding: "100px", direction: "rtl" }}>
      <h1 className={"services-title"}>خدمتنا تبقيك مبتسما</h1>
      <Box className={"service-card"}>
        <ServicesCard
          title={"تبييض الأسنان"}
          description={
            "يستخدم تبيض الأسنان بالليزر لعلاج التصبغات و إصفرار ال...."
          }
          srcImage={require("../images/teeth.jpeg")}
          url='/Teeth-Whitening'
        />
        <ServicesCard
          title={"تقويم الاسنان"}
          description={" هو جهاز مصمم لتحريك الأسنان لتصبح الأسنان بشكل...."}
          srcImage={require("../images/52027.jpeg")}
          url='/Orthodontics'
        />
        <ServicesCard
          title={"أسنان الاطفال"}
          description={
            "علاج أسنان الأطفال هام حتى يتم استبدال الأسنان اللبنية...."
          }
          srcImage={require("../images/82515.jpeg")}
          url='/PediatricDentistry'
        />
        <ServicesCard
          title={"تركيبات الأسنان"}
          description={
            "ان تركيبات الأسنان تنقسم إلى نوعين تركيبات متحركة و...."
          }
          srcImage={require("../images/27308.jpeg")}
          url='/DentalProsthetics'
        />
        <ServicesCard
          title={"فينير الأسنان"}
          description={"هو عبارة عن قشور تجميلية تغطى الطبقة الخارجية للأ...."}
          srcImage={require("../images/22215.jpeg")}
          url='/Veneers'
        />
        <ServicesCard
          title={"زراعة الأسنان"}
          description={
            "هي عبارة عن تقنية لتعويض فقدان الأسنان وتتم استعادة...."
          }
          srcImage={require("../images/88726.jpeg")}
          url='/DentalImplants'
        />
        <ServicesCard
          title={"تجميل اللثة بالليزر "}
          description={"هو تجميل اللثه بدون تدخل جراحى و ذلك لظهورها بشك...."}
          srcImage={require("../images/35985.jpeg")}
          url='/LaserGumbeAutification'
        />
        <ServicesCard
          title={"علاج الجذور"}
          description={
            "يعتبر هو الحل التى يتم اللجوء له  لعلاج مشاكل الأسنان ...."
          }
          srcImage={require("../images/19858.jpeg")}
          url='/RootCanalTreatment'
        />
      </Box>
    </Container>
  );
}
