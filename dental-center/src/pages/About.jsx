/** @format */

import ButtonAbout from "./ButttonAbout";
import { Outlet } from "react-router";

export default function About() {
  return (
    <div style={{ padding: "0px 20px", margin: "0 auto", maxWidth: "1200px" }}>
      <h1
        style={{
          paddingTop: "80px",
          textAlign: "center",
          fontSize: "50px",
          color: "#4a90e2",
        }}>
        من نحن؟
      </h1>
      <div className='about'>
        <div
          style={{
            fontSize: "24px",
            lineHeight: "1.8",
            color: "#777",
            textAlign: "center",
          }}>
          <p style={{ marginBottom: "0px" }}>
            مركز متخصص يقدم جميع خدمات طب الأسنان من خلال فريق متكامل من أطباء
            الأسنان في مختلف التخصصات. كما يضم مركزنا أحدث التقنيات والمعدات
            الطبية في مجال طب الأسنان، لضمان تحقيق أفضل النتائج في جميع خطط
            العلاج.
          </p>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <ButtonAbout />
          </div>
          <div style={{ width: "500px" }}>
            <Outlet />
          </div>
        </div>
        <img
          src={require("../images/istockphoto.jpg")}
          alt='Newsletter'
          className='image-about'
        />
      </div>
    </div>
  );
}
