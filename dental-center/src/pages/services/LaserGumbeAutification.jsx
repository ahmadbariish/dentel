/** @format */

import img1 from "./images_services/lazer.jpg"
import { Link } from "react-router";
const LaserGumbeAutification = () => {
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
            تجميل اللثة بالليزر
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
            <div style={{ marginTop: "60px" }}>
              <img
                src={require("./images_services/lazzer4.webp")}
                style={{
                  width: "400px",
                  height: "400px",
                  borderRadius: "10px",
                }}
                alt='img3'
              />
            </div>
          </div>

          <div style={{ width: "50%", marginTop: "50px" }}>
            <img
              src={require("./images_services/lazzer.jpg")}
              style={{ width: "600px", height: "400px", borderRadius: "50px" }}
              alt='image2'
            />
            <h1 style={{ color: "rgb(243, 86, 86)" }}>تجميل اللثة بالليزر</h1>
            <p style={{ color: "#4e94b3" }}>
              {" "}
              هو تجميل اللثه بدون تدخل جراحى و ذلك لظهورها بشكل متناسق ومتساوي
              مع شكل و حجم الأسنان. <br />
              ان تجميل اللثه بالليزر يجعلها تظهر بشكل متناسق و متساوى .<br />
              فيعتمد تجميل اللثه بالليزر على تسليط أشعة الليزرعلى اللثه لنحت
              زوائد اللثه او لمعالجة لونها المختلف عن اللون
              <br />
              الطبيعى حتى تظهر بشكل متناسق مع شكل و حجم الأسنان . <br />
              ويتم ذلك عن طريق الليزر بدلا من تجميل اللثه الجراحى و ذلك للوصول
              لنتيجة أكثردقة و فعالية . <br />
              تتم عملية تجميل اللثه بالليزر عن طريق البنج الموضوعى داخل العيادة
              و بذلك لا يشعر المريض بالألم و فيما بعد
              <br />
              الأنتهاء من الجلسة بيتم وصف بعض من الأدوية التى يجب الإلتزام بها
              من قبل المريض لسرعة التعافى . و تتم عملية تجميل اللثه فى جلسة
              واحدة فقط .<br />
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              الحالات المناسبة لتجميل اللثه بالليزر :
            </h3>
            <p style={{ color: "#4e94b3" }}>
              وجود الإبتسامة اللثوية . <br />
              وجود لثه غير متساوية . <br />
              عدم العناية الكافية بنظافة الفم و تكرار إلتهاب اللثه . <br />
              مشاكل اللثه الداكنة أو السوداء التى تحدث بسبب التدخين أو بعض
              الحالات المرضية .<br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LaserGumbeAutification;
