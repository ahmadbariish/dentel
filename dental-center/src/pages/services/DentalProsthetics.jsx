/** @format */

import img1 from "./images_services/تركيب سنان.jpg";
import { Link } from "react-router";
const DentalProsthetics = () => {
  return (
    <>
      <div style={{ direction: "rtl" }}>
        <div
          style={{
            height: "400px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
          }}>
          <img
            src={img1}
            alt='Teeth Whitening'
            style={{
              height: "100%",
              objectFit: "cover",
              width: "100%",
            }}
          />
          <h1
            style={{
              position: "absolute",
              color: "#fff",
              textShadow: "0 0 5px #000",
              fontSize: "100px",
            }}>
            تركيبات الأسنان
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            background: "#e6f4f1",
          }}>
          <div style={{ width: "50%", margin: " 30px" }}>
            <div
              style={{
                width: "60%",
                background: "#7fb6ac",
                height: "700px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "30px",
              }}>
              <h3
                style={{
                  textAlign: "center",
                  color: "#7f4c7e",
                  fontSize: "30px",
                }}>
                الخدمات ذات الصلة
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  gap: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}>
                <li>
                  <Link
                    to='/DentalProsthetics'
                    style={{
                      textDecoration: "none",
                      color: "#cdf082",
                      fontSize: "20px",
                    }}>
                    تركيبات الأسنان
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Veneers'
                    style={{
                      textDecoration: "none",
                      color: "#cdf082",
                      fontSize: "20px",
                    }}>
                    فينير الأسنان
                  </Link>
                </li>
                <li>
                  <Link
                    to='/DentalImplants'
                    style={{
                      textDecoration: "none",
                      color: "#cdf082",
                      fontSize: "20px",
                    }}>
                    زراعة الأسنان
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Orthodontics'
                    style={{
                      textDecoration: "none",
                      color: "#cdf082",
                      fontSize: "20px",
                    }}>
                    تقويم الاسنان
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Teeth-Whitening'
                    style={{
                      textDecoration: "none",
                      color: "#cdf082",
                      fontSize: "20px",
                    }}>
                    تبييض الأسنان
                  </Link>
                </li>
                <li>
                  <Link
                    to='/LaserGumbeAutification'
                    style={{
                      textDecoration: "none",
                      color: "#cdf082",
                      fontSize: "20px",
                    }}>
                    تجميل اللثة بالليزر
                  </Link>
                </li>
                <li>
                  <Link
                    to='/CosmeticFillings'
                    style={{
                      textDecoration: "none",
                      color: "#cdf082",
                      fontSize: "20px",
                    }}>
                    الحشوات التجميلية
                  </Link>
                </li>
                <li>
                  <Link
                    to='/GeneralAnesthesia'
                    style={{
                      textDecoration: "none",
                      color: "#cdf082",
                      fontSize: "20px",
                    }}>
                    التخدير الكُلي
                  </Link>
                </li>
                <li>
                  <Link
                    to='/PediatricDentistry'
                    style={{
                      textDecoration: "none",
                      color: "#cdf082",
                      fontSize: "20px",
                    }}>
                    أسنان الاطفال
                  </Link>
                </li>
                <Link
                  to='/RootCanalTreatment'
                  style={{
                    textDecoration: "none",
                    color: "#cdf082",
                    fontSize: "20px",
                  }}>
                  علاج الجذور
                </Link>
                <li></li>
              </ul>
            </div>
            <div style={{ marginTop: "30px" }}>
              <img
                src={require("./images_services/تركيب سنان.jpg")}
                style={{
                  width: "600px",
                  height: "400px",
                  borderRadius: "10px",
                }}
                alt='img3'
              />
            </div>
          </div>

          <div style={{ width: "50%", margin: "0px" }}>
            <img
              src={require("./images_services/dental care2.webp")}
              style={{ width: "600px", height: "500px", borderRadius: "50px" }}
              alt='image2'
            />
            <h1 style={{ color: "rgb(243, 86, 86)" }}>تركيبات الأسنان</h1>
            <p style={{ color: "#4e94b3" }}>
              ان تركيبات الأسنان تنقسم إلى نوعين تركيبات متحركة و تركيبات ثابتة
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>تركيبات الأسنان : </h3>
            <p style={{ color: "#4e94b3" }}>
              تنقسم تركيبات الأسنان إلى نوعين : تركيبات متحركة : ووهيا نادرا
              استخدامها فى الوقت الحالى و لكن يمكن استخدامها و تكون الحل الأمثل
              لبعض الحالات من كبار السن .
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>تركيبات الثابتة : </h3>
            <p style={{ color: "#4e94b3" }}>
              يتم استخدامها لحماية الضروس الذى تم فيها حشو لجزء كبير من السن او
              الذى تعرضت للطسر الجزئى و ذلك
              <br />
              للحفاظ على السن و عدم تعرضه للكسر كما يمكن ان تستخدم لتجميل شكل
              الأسنان خاصة الأسنان الأمامية
              <br />
              المتصبغة لتعطى شكل أكثر جمالا .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DentalProsthetics;
