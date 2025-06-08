/** @format */

import img1 from "./images_services/Veener2.jpg"
import { Link } from "react-router";
const Veneers = () => {
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
       alt="Teeth Whitening"
       style={{
         height: '100%',
         objectFit: 'cover',
         width:'100%'
       }}
     />
          <h1
            style={{
              position: "absolute",
              color: "#fff",
              textShadow: "0 0 5px #000",
              fontSize: "100px",
            }}>
            فينير الأسنان
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
          <div style={{ width: "50%", margin: "30px" }}>
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
            <div style={{ marginTop: "60px" }}>
              <img
                src={require("./images_services/veener4.webp")}
                style={{
                  width: "600px",
                  height: "400px",
                  borderRadius: "10px",
                }}
                alt='img3'
              />
            </div>
          </div>

          <div style={{ width: "50%", marginTop: "50px" }}>
            <img
              src={require("./images_services/veener3.jpg")}
              style={{ width: "600px", height: "400px", borderRadius: "50px" }}
              alt='image2'
            />
            <h1 style={{ color: "rgb(243, 86, 86)" }}>فينير الأسنان</h1>
            <p style={{ color: "#4e94b3" }}>
              هو عبارة عن قشور تجميلية تغطى الطبقة الخارجية للأسنان فيساعد على
              إصلاح معظم مشاكل الأسنان من تصبغات الأسنان أو من فرغات و كسور
              الأسنان . <br />
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              يساعد الفينير على إصلاح معظم مشاكل الأسنان مثل :{" "}
            </h3>
            <p style={{ color: "#4e94b3" }}>
              وجود تصبغ فى الأسنان و لا يمكن إزالته بتبيض الأسنان بالليزر .
              <br />
              وجود كسر فى الأسنان بنسبة كبيرة من حجم السن .<br />
              وجود فراغات أو فجوات كبيرة بين الأسنان . <br />
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              خطوات البدء لعمل الفينير داخل مركز حياة للأسنان :{" "}
            </h3>
            <p style={{ color: "#4e94b3" }}>
              يتم الكشف على المريض داخل العيادة ثم تصوير اشعه لتوضيح شكل الفكين
              و العظام .<br />
              التأكد من ان الفينير هو الحل الأمثل للمريض . <br />
              التأكد من عدم وجود اى تسوس بالأسنان و ان وجد يتم معالجته . <br />
              التأكد من الحفاظ على صحة اللثه و خلوها من اى امراض . <br />
              يتم أخد صور و مقاسات لشكل الأبتسامة لدى المريض و على ذلك يتم تصميم
              شكل الأبتسامة بالكمبيوتر للشكب
              <br />
              النهائى بعد الانتهاء من تركيب الفينير و يتم عرضها للمريض لتوضيح
              الشكل النهائى لشكل الأسنان .<br />
              وبعد ذلك يتم البدء فى تحضير الأسنان و صولا لتركيب الفينير . <br />
              وننصح المريض فى مركز حياة للأسنان بالمتابعة الدورية للحفاظ على صحة
              الأسنان و اللثه .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Veneers;
