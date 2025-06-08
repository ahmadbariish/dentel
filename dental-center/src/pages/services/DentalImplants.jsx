/** @format */

import img1 from "./images_services/زراعة4.jpg";
import { Link } from "react-router";
const DentalImplants = () => {
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
            زراعة الأسنان
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
          <div style={{ width: "50%", margin: "0px 30px" }}>
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
              <img src={require('./images_services/زراعة الاسنان.jpg')} style={{width:'500px',height:'400px',borderRadius:'10px'}} alt='img3'/>
            </div>
          </div>

          <div style={{ width: "50%", marginTop: "50px" }}>
            <img src={require('./images_services/زراعة الاسنان.webp')} style={{width:'600px',height:'400px',borderRadius:'50px'}} alt='image2'/>
            <h1 style={{ color: "rgb(243, 86, 86)" }}>زراعة الأسنان</h1>
            <p style={{ color: "#4e94b3" }}>
              {" "}
              هي عبارة عن تقنية لتعويض فقدان الأسنان وتتم استعادة الوظيفة
              الأساسية للأسنان و هي المضغ مع الحفاظ على شكل الأبتسامة الطبيعية .{" "}
              <br />
              يعانى الكثير من الأشخاص من فقدان الأسنان سواء بسبب التسوس أو بسبب
              أمراض اللثه أو
              <br />
              بعض الأمراض المزمنة و لذلك تعد الزراعه الحل الأمثل لتعويض ذلك
              الفقدان.
              <br />
              وتعتبر الزراعه تقنيه لغرس جذور اصطناعية من مادة التيتانيوم لتعويض
              فقدان الأسنان و توضع لتلتحم بشكل مباشر مع عظام الفك <br />
              يتوقف وقت الزراعه على جودة العظام لدى المريض و يحتاج وقت من ساعة
              إلى ساعتين يوم
              <br />
              الزراعه و يحتاج إلى زيارتين فى مدة يفصل بينهم من شهرين إلى 3 أشهر.
              <br />
              وتتم الزراعه عن طريق التخدير الموضعى و الذى يقوم بتخدير الأعصاب
              المحيطة بمنطقة الزراعه
              <br />
              و بالتالى لايتم الشعور بأى ألم اثناء الأجراء. و لكن يجب أن تتوافر
              بعض الشروط عند مريض زراعه الأسنان وهي:
              <br />
              لا يفضل زراعه الأسنان لمرضى أقل من 18 عام.
              <br />
              وجود عظام كافى فى الفك للجزء المراد للزراعة.
              <br />
              التأكد من الحالة الصحية للمريض.
              <br />.
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              وعلى ذلك يتم التحضير للزراعه عن طريق:
            </h3>
            <p style={{ color: "#4e94b3" }}>
              فحص الأسنان داخل العيادة و التأكد من أن الزراعه هي الحل الأنسب
              للمريض.
              <br />
              ثم يتم عمل أشعه سينيه لفحص أسنان الفكين وعظام الفك.
              <br />
              أخذ المقاسات المطلوبة لعمل إجراءات الزراعه . <br />
              و تتم الزراعه داخل مركز حياة للأسنان عن طريق (الدليل الجراحى) وهو
              نظام تخطيط ثلاثى الأبعاد
              <br />
              يتم أخده عن طريق مسح بالكمبيوتر لفم المريض و هو ما يعطى للطبيب
              الجراح الوضع الأفضل للزراعات داخل العظام.
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              وبعد الأنتهاء من عملية الزراعة بيتم الألتزام من قبل المريض بعض من
              التعليمات وهي:{" "}
            </h3>
            <p style={{ color: "#4e94b3" }}>
              الأكل بعد ساعتين من إجراء الزراعة.
              <br />
              الأبتعاد عن أكل أو شرب اى شئ ساخن.
              <br />
              عدم العبث باللسان عند موضع الزراعة. <br />
              عمل كمادات باردة على الوجه من الخارج أول يوم للزراعة . <br />
              الألتزام بالعلاج المقرر من الطبيب المعالج.
              <br />
              اما الأيام التالية للزراعه يمكن الأكل والشرب بصورة طبيعية.
              <br />
              يقوم المريض بالبدء بالمضمضة بالماء الدافئ و الملح ثم تنظيف الأسنان
              بشكل جيد و المتابعه
              <br />
              الدورية مع الطبيب المعالج إذا حدث ألم شديد أو تورم.
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              وتتوقف تكلفة الزراعه على عدة عوامل :
            </h3>
            <p style={{ color: "#4e94b3" }}>
              عدد الأسنان المفقودة لدى المريض.
              <br />
              جودة عظام الفك.
              <br />
              جودة التقنيات المستخدمة فى زراعه الأسنان.
              <br />
              عدد الجلسات التى يحتاجها المريض للزراعة.
              <br />
              تتم الزراعه داخل مركز حياة للأسنان فى أقصر وقت بأحدث التقنيات و
              الأجهزة.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DentalImplants;
