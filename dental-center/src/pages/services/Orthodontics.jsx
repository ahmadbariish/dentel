/** @format */

// import img1 from "../../images/simle.jpg"
import { Link } from "react-router";
const Orthodontics = () => {
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
          {/* <img
          src={img1}
          alt="Teeth Whitening"
          style={{
            height: '100%',
            objectFit: 'cover',
            width:'100%'
          }}
        /> */}
          <h1
            style={{
              position: "absolute",
              color: "#fff",
              textShadow: "0 0 5px #000",
              fontSize: "100px",
            }}>
            تقويم الاسنان
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
                marginTop: "0px",
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
              {/* <img
                src={require("../../images/oth.jpg")}
                style={{
                  width: "600px",
                  height: "400px",
                  borderRadius: "10px",
                }}
                alt='img3'
              /> */}
            </div>
            <div style={{ marginTop: "60px" }}>
              {/* <img
                src={require("../../images/hh.jpg")}
                style={{
                  width: "600px",
                  height: "400px",
                  borderRadius: "10px",
                }}
                alt='img3'
              /> */}
            </div>
          </div>

          <div style={{ width: "50%", marginTop: "50px" }}>
            {/* <img
              src={require("../../images/pexels-cottonbro-6528908.jpg")}
              style={{ width: "600px", height: "400px", borderRadius: "50px" }}
              alt='image2'
            /> */}
            <h1 style={{ color: "rgb(243, 86, 86)" }}>تقويم الاسنان</h1>
            <p style={{ color: "#4e94b3" }}>
              هو جهاز مصمم لتحريك الأسنان لتصبح الأسنان بشكل متناسق و صحى مما
              يؤدى إلى تصحيح وظيفة المضغ ووالنطق و الكلام . , <br />
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              هناك دواعى لإجراء التقويم و هيا :{" "}
            </h3>
            <p style={{ color: "#4e94b3" }}>
              عدم انتظام الأسنان بشكل سليم مثل وجود أسنان زائدة و ضيق حجم الفك.
              <br />
              تزاحم الأسنان و عدم تناسق حجمها .<br />
              وجود مسافات بين الأسنان . <br />
              وجود أسنان مفقودة أو مدفونة عند المريض . <br />
              بروز الأسنان الأمامية . <br />
              عدم تطابق الفكين .<br />
              وجود تشوهات عظمية بسبب عادات سيئة مثل ( مص الأصبع - عادة دفع
              اللسان ) .<br />
            </p>
            <h3 style={{ color: "rgb(243, 86, 86)" }}>
              و على ذلك فللتقويم عدة فوائد :{" "}
            </h3>
            <p style={{ color: "#4e94b3" }}>
              بالنسبة للجانب الوظيفى فهو صحيح المضغ و النطق بالكلام .<br />
              اما الجانب الجمالى فهو يجعل الأسنان مصطفة بشكل متناسق و صحى لذلك
              لأنه يحافظ عليها من التسوس الذى يتم نتيجة تراكم بقايا الطعام بين
              الأسنان .<br />
              و لذلك فإن التقويم يمكن اجراءه لجميع الفئات العمرية و ليس للأطفال
              فقط و لكن يوجد مرحلة عمرية انسب و هيا
              <br /> تتراوح ما بين 10 و 16 عاما . و ذلك بسبب نمو الجسم و العظام
              فى تلك الفترة . و لكن يمكن اجرائه لجميع الفئات
              <br />
              العمرية و لكن مدة العلاج تكون أطول من الأطفال نسبيا و ذلك يكون
              بناءا عن مشكلة الأسنان و الخطة العلاجية .
            </p>
            <h2 style={{ color: "rgb(243, 86, 86)" }}>انواع التقويم :</h2>
            <p style={{ color: "#4e94b3" }}>
              <h3>التقويم المعدنى :</h3>و هو اكثر الأنواع شيوعا و يستخدم لجميع
              الفئات العمرية و يكون أكثر فاعلية بالنسبة للحالات الصعبة و يكون
              ثابت على الأسنان .<h3>التقويم السيراميك :</h3>
              يشبه التقويم المعدنى و لكن يصنع من مادة السيراميك ليكون لونه لون
              الأسنان.
              <h3>التقويم الشفاف المتحرك :</h3>
              مصنوع من البلاستك الشفاف و يسهل فكه و تركيبه بالنسبة للمريض .
              <h3>إجراءات تركيب التقويم :</h3>
              نبدأ بفحص الأسنان داخل العيادة و معرفة شكوى المريض .<br />
              ثم نقوم بفحص الأسنان بالأشعه الخاصة بالتقويم و التى توجد داخل مركز
              حياة للأسنان .<br />
              و على ذلك يتم اختيار الخطة العلاجية المناسبة للمريض و نوع التقويم
              المناسب . <br />
              ثم يتم تركيب التقويم و إخطار المريض بأهمية المتابعة الدورية و
              الألتزام بالمواعيد المقررة من قبل الطبيب المعالج . <br />
              ثم يتم إبلاغ المريض بكافة التعليمات المتبعة خلال الفترة التقويم و
              من هذه التعليمات
              <br />
              <h3>بالنسبة للتقويم المعدنى :</h3>
              ان بعد تركيب التقويم قد يشعر المريض ببعض الألم و لكن ستزول خلال
              الأيام القليلة الأولى و لا مانع من تناول المسكن و ذلك يكون بسبب
              الضغط المحتمل على الأسنان . <br />
              تجنب الأطعمة القاسية مثل المكسرات .<br />
              تجنب الأطعمة سهلة الألتصاق بالأسنان . <br />
              تجنب المشروبات الغازية . <br />
              الفاكهه و الخضروات القاسية مثل (التفاح - الجزر ) يفضل تقطعهم .{" "}
              <br />
              الأهتمام بأستخدام الفرشاة و المعجون بعد كل وجبه بشكل دقيق على جميع
              الأسنان . <br />
              الأهتمام بأستخدام المضمضة جيدا بعد كل وجبة .<br />
              <h3>اما بالنسبة للتقويم الشفاف : </h3>
              يجب ارتداء التقويم لمدة لا تقل عن 20 ساعه يوميا <br />
              التأكد من ارتداء التقويم الصحيح وفقا للترتيب الصحيح للتقويم و
              معرفة التفرقة بين الفك العلوى و الفك السفلى . <br />
              عند ارتداء التقويم اضغط برفق على منطقة الأسنان الأمامية ثم اضغط
              على الأسنان الخلفية بأطراف الأصابع . <br />
              من الممكن ان يوجد فراغ مبدئى عندما ترتدى جهاز التقويم فى البداية و
              لكن هذا سيختفى فى خلال 48 ساعه كما من
              <br />
              الممكن ان يكون مرفوع من الخلف عند منطقة الضروس الخلفية و هذا ايضا
              سيختفى خلال أيام . <br />
              فى حالة ضياع أو كسر جهاز التقويم يجب تجربة الجهاز التالى فى
              الترتيب و إذا ما كان دخوله صعب يجب مراجعه الطبيب . <br />
              لا يجب التخلص من اى جهاز تم استخدامه سابقا و يجب وضع كل جهاز فى
              غلافه الخاص . <br />
              بعد إجراء التقويم بيتم عمل تثبيت للأسنان و هيا من أهم الخطوات و
              تختلف طريقة التثبيت و فترة التثبيت من شخص إلى أخر . <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Orthodontics;
