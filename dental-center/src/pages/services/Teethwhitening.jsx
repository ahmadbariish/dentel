/** @format */

import img1 from "./images_services/تركيب سنان.jpg";
import { Link } from "react-router";
const Teethwhitening = () => {
  return (
    <div style={{ direction: "rtl" }}>
      <div
        style={{
          height: "350px",
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
          تبييض الأسنان
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
              height: "600px",
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
                  style={{ textDecoration: "none", color: "#cdf082" }}>
                  تركيبات الأسنان
                </Link>
              </li>
              <li>
                <Link
                  to='/Veneers'
                  style={{ textDecoration: "none", color: "#cdf082" }}>
                  فينير الأسنان
                </Link>
              </li>
              <li>
                <Link
                  to='/DentalImplants'
                  style={{ textDecoration: "none", color: "#cdf082" }}>
                  زراعة الأسنان
                </Link>
              </li>
              <li>
                <Link
                  to='/Orthodontics'
                  style={{ textDecoration: "none", color: "#cdf082" }}>
                  تقويم الاسنان
                </Link>
              </li>
              <li>
                <Link
                  to='/Teeth-Whitening'
                  style={{ textDecoration: "none", color: "#cdf082" }}>
                  تبييض الأسنان
                </Link>
              </li>
              <li>
                <Link
                  to='/LaserGumbeAutification'
                  style={{ textDecoration: "none", color: "#cdf082" }}>
                  تجميل اللثة بالليزر
                </Link>
              </li>
              <li>
                <Link
                  to='/CosmeticFillings'
                  style={{ textDecoration: "none", color: "#cdf082" }}>
                  الحشوات التجميلية
                </Link>
              </li>
              <li>
                <Link
                  to='/GeneralAnesthesia'
                  style={{ textDecoration: "none", color: "#cdf082" }}>
                  التخدير الكُلي
                </Link>
              </li>
              <li>
                <Link
                  to='/PediatricDentistry'
                  style={{ textDecoration: "none", color: "#cdf082" }}>
                  أسنان الاطفال
                </Link>
              </li>
              <li>
                <Link
                  to='/RootCanalTreatment'
                  style={{ textDecoration: "none", color: "#cdf082" }}>
                  علاج الجذور
                </Link>
              </li>
            </ul>
          </div>
          <div style={{ marginTop: "30px" }}>
            {/* <img
              src={require("../../images/teeth3.jpg")}
              style={{ width: "600px", height: "400px", borderRadius: "20px" }}
              alt='img3'
            /> */}
          </div>
        </div>

        <div style={{ width: "50%", marginTop: "50px" }}>
          {/* <img
            src={require("../../images/teeth1.jpg")}
            style={{ width: "600px", height: "400px", borderRadius: "30px" }}
            alt='image2'
          /> */}
          <h1 style={{ color: "rgb(243, 86, 86)" }}>تبييض الأسنان</h1>
          <p style={{ color: "#4e94b3" }}>
            يستخدم تبيض الأسنان بالليزر لعلاج التصبغات و إصفرار الأسنان و ذلك
            لإستعادة بريق و بياض الأسنان <br />
            الناتج عن التدخين أو تناول القهوة أوغيرها و هو من أكثر عمليات تبيض
            الأسنان انتشارا و سرعة <br />
            و يعتبر تبيض الأسنان بالليزر هيا عملية يتم فيها استخدام مواد تبيض
            يتم
            <br />
            وضعها على سطح الأسنان و يتم تسليط ضوء الليزر عليها لتفعيل المواد و
            ذلك لأستعادة بريق و بياض الأسنان
          </p>
          <h3 style={{ color: "rgb(243, 86, 86)" }}>
            : يتم اللجوء إلى تبيض الأسنان بالليزر فى حالة وجود{" "}
          </h3>
          <p style={{ color: "#4e94b3" }}>
            . اصفرار الأسنان <br />
            .وجود تصبغات فى الأسنان <br />
            .الرغبة فى تفتيح لون الأسنان <br />
            و يكون التبيض حل غير أمثل للأشخاص الذين يعانون من مشاكل فى الأسنان
            الأمامية أو من لثه غير صحية أو من,
            <br />. حساسية من المواد المستخدمة فى اجراءات التبيض
          </p>
          <h3 style={{ color: "rgb(243, 86, 86)" }}>
            :تتم إجراءات تبيض الأسنان بالليزر{" "}
          </h3>
          <p style={{ color: "#4e94b3" }}>
            يقوم الطبيب بالتأكد من عدم وجود رواسب جيرية على الأسنان ثم يبدأ
            الطبيب من بعد ذلك بتحديد لون أسنان المريض و<br />
            فقا لدليل الأسنان المتاح داخل العيادات ثم يبدأ الطبيب بوضع مواد
            التبيض على الأسنان و تسليط ضوء الليزر عليها و<br />
            ذلك فى خلال جلسة واحدة تتراوح مدتها بين الساعه و الساعه و نصف <br />
            . بعد الأنتهاء من جلسة تبيض الأسنان فى بعض الأحيان يشعر المريض بألم
            بسيط فى الأسنان و ذلك يزول فى خلال 24 ساعة على الأكثر
          </p>
          <h3 style={{ color: "rgb(243, 86, 86)" }}>
            {" "}
            :وهناك بعض التعليمات التى يجب ان تتبع من قبل المريض لمدة لا تقل عن
            ثلاث أيام بعد إجراء تبيض الأسنان بالليزر و ذلك للحفاظ على النتيجة ✒️
          </h3>
          <p style={{ color: "#4e94b3" }}>
            .تجنب المأكولات و المشروبات الملونة مثل ( القهوة - الشاى - المشروبات
            الغازية ) <br />
            . الحفاظ على استخدام فرشاة الأسنان و الخيط الطبى <br />
            .وللحفاظ على اللون و استمراره ينبغى التقليل من التدخين لانه من اكثر
            مسببات للأصفرار
          </p>
        </div>
      </div>
    </div>
  );
};
export default Teethwhitening;
