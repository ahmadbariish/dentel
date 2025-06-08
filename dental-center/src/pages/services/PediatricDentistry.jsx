/** @format */

import img1 from "./images_services/أسنان الاطفال.jpg";
import { Link } from "react-router";
const PediatricDentistry = () => {
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
            أسنان الاطفال
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
                src={require("./images_services/اسنان الاطفال.jpg")}
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
              src={require("./images_services/أسنان الاطفال3jpg.jpg")}
              style={{ width: "600px", height: "400px", borderRadius: "50px" }}
              alt='image2'
            />
            <h1 style={{ color: "rgb(243, 86, 86)" }}>أسنان الاطفال</h1>
            <p style={{ color: "#4e94b3" }}>
              {" "}
              علاج أسنان الأطفال هام حتى يتم استبدال الأسنان اللبنية بالأسنان
              الدائمة لأن حدوث اى ألم بها يؤثر على الطفل <br />و يزعجه مما يؤدى
              إلى عدم رعبة الطفل فى الأكل مما يؤثر على صحته . <br />
              ان من الضرورى الحفاظ على الأسنان اللبنيه لدى الأطفال حتى تستبدل
              بالأسنان الدائمة لأن
              <br />
              حدوث أى ألم بها يزعج الطفل مما يؤدى إلى عدم رغبه الطفل للأكل مما
              يؤدى إلى تأثر صحة الطفل بذلك .<br />
            </p>
            <h2 style={{ color: "rgb(243, 86, 86)" }}>
              و يوجد عدة أسباب لحدوث الألم عند الأطفال مثل :{" "}
            </h2>
            <p style={{ color: "#4e94b3" }}>
              <h3 style={{ color: "rgb(243, 86, 86)" }}> تسوس الرضاعة : </h3>
              و هو الذى يصيب الأطفال فى سن الرضاعة و يحدث بسبب الرضاعة و يمكن
              تجنبه عن طريق
              <br />
              المتابعه مع الطبيب و تنظيف أسنات الأطفال بعد الرضاعة مباشرة .{" "}
              <br />
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              تسوس الجذور لدى الأطفال :{" "}
            </h3>
            <p style={{ color: "#4e94b3" }}>
              و فى ذلك الوقت يحتاج الطفل لعمل حشو عصب لبنى لإزالة التسوس و إن
              كان من الصعب
              <br />
              الحفاظ على الضرس و لجأنا إلى خلع الضرس بيتم عمل حافظ مسافة و هو
              عبارة عن جهاز بيتم
              <br />
              تركيبة فى فم الطفل عند خلع ضرس لبنى قبل موعده و ذلك للحفاظ على
              مكان الضرس الدائم . <br />
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}> تأكل الأسنان : </h3>
            <p style={{ color: "#4e94b3" }}>
              و هو بيتم عند حدوث تأكل فى سطح السنه اللبنيه بيتم الحفاظ عليها
              بعمل حشو عادى أو حشو
              <br />
              عصب لبنى حسب حالة السن و إذا كان التأكل حدث لهيكل السن من الخارج
              بيتم تعويض ذلك
              <br />
              عمل طربوش للأطفال لتعويض شكل الضرس ووظيفته .<br />
              و لذلك فإن مركز حياة للأسنان بيقدم العديد من الخدمات فى علاج
              الأسنان لدى الأطفال بفريق
              <br />
              طبى متكامل متخصص فى علاج أسنان الأطفال بجانب ذلك وجود غرفة مجهزة
              للأطفال يوجد
              <br />
              بها ألعاب خاصة بهم مع ألوان و رسومات لكسر فوبيا و خوف الأطفال من
              طبيب الأسنان .<br />
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              📌 و من اهم النصائح للحفاظ على الأسنان لدى الأطفال :{" "}
            </h3>
            <p style={{ color: "#4e94b3" }}>
              غسل جميع الأسنان و ليست الأمامية فقط بفرشاة ناعمة على
              <br />
              الأقل مرتين يوميا و يفضل بإستخدام معجون بيه فلوريد . <br />
              و لعلاج تسوس الرضاعة يجب تنظيف الأسنان للأطفال بعد الرضاعه مباشرة
              و يمكن عمل
              <br />
              جلسة فلوريد فارنش لأسنان الأطفال و تكون بأطعام مختلفة و ذلك لسهولة
              تقبل الأطفال لها
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PediatricDentistry;
