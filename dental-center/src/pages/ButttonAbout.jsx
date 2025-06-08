/** @format */

// /** @format */
// import { useState } from "react";
// import ContentAbout from "./ContentAbout";

// const ButtonAbout = () => {
//   const [activeComponent, setActiveComponent] = useState(null); // null, "what", "mission", "goal"

//   function handleClick(componentName) {
//     setActiveComponent((prev) =>
//       prev === componentName ? null : componentName
//     );
//   }

//   function Content(name) {
//     if (name === "what") {
//       return (
//         <ContentAbout
//           title={"نقدم خدمات طب أسنان عالية الجودة"}
//           description={`
//      في مركزنا نلتزم بتقديم رعاية صحية شاملة ومتميزة في مجال طب الأسنان، مع
//      التركيز على جودة العلاج وراحة المريض. نسعى جاهدين لتعزيز صحة الفم
//      والابتسامة من خلال فريق متخصص، وتقنيات متقدمة، وتجربة علاجية تُبنى على
//      الثقة والاهتمام الشخصي`}
//         />
//       );
//     } else if (name === "mission") {
//       return (
//         <ContentAbout
//           title={"نصائحنا للحفاظ على صحة فمك وأسنانك"}
//           description={`
//           نظف أسنانك مرتين يوميًا بمعجون يحتوي على الفلورايد. استخدم خيط الأسنان
//           يوميًا لإزالة البقايا بين الأسنان. زر طبيب الأسنان بانتظام للكشف
//           المبكر والعلاج. قلل من السكريات والمشروبات الغازية، وتجنب التدخين.
//           تناول طعامًا صحيًا غنيًا بالفيتامينات والمعادن`}
//         />
//       );
//     } else {
//       return (
//         <ContentAbout
//           title={"هدفنا الاساسي"}
//           description={`
//           تقديم أعلى مستويات الرعاية الصحية في جميع تخصصات طب الأسنان. استخدام
//           أحدث التقنيات والمعدات لضمان أفضل نتائج علاجية. توفير بيئة علاجية
//           مريحة وآمنة للمرضى. تعزيز التوعية الصحية حول أهمية العناية بالفم
//           والأسنان.`}
//         />
//       );
//     }
//   }
//   return (
//     <>
//       <div>
//         <button className='btn-about' onClick={() => handleClick("what")}>
//           ماذا نفعل؟
//         </button>
//        {activeComponent === "what" && Content("what")}
//       </div>

//       <div>
//         <button className='btn-about' onClick={() => handleClick("mission")}>
//           توصياتنا
//         </button>
//         {activeComponent === "mission" && Content("mission")}
//       </div>

//       <div>
//         <button className='btn-about' onClick={() => handleClick("goal")}>
//           أهدافنا
//         </button>
//         {activeComponent === "goal" && Content("goal")}
//       </div>
//     </>
//   );
// };

// export default ButtonAbout;

/** @format */
import { useState } from "react";
import ContentAbout from "./ContentAbout";

const ButtonAbout = () => {
  const [activeComponent, setActiveComponent] = useState(null); // null, "what", "mission", "goal"

  const handleClick = (componentName) => {
    setActiveComponent((prev) =>
      prev === componentName ? null : componentName
    );
  };

  const renderContent = (name) => {
    if (name === "what") {
      return (
        <ContentAbout
          title='نقدم خدمات طب أسنان عالية الجودة'
          description={`
            نلتزم بتقديم رعاية صحية شاملة ومتميزة في مجال طب الأسنان، مع
     التركيز على جودة العلاج . نسعى جاهدين لتعزيز صحة الفم
    من خلال فريق متخصص
    `}
        />
      );
    } else if (name === "mission") {
      return (
        <ContentAbout
          title='نصائحنا للحفاظ على صحة فمك وأسنانك'
          description={`نظف أسنانك مرتين يوميًا بمعجون يحتوي على الفلورايد. استخدم خيط الأسنان
          يوميًا لإزالة البقايا بين الأسنان. زر طبيب الأسنان بانتظام للكشف
          المبكر والعلاج. قلل من السكريات والمشروبات الغازية، وتجنب التدخين.
          تناول طعامًا صحيًا غنيًا بالفيتامينات والمعادن}`}
        />
      );
    } else if (name === "goal") {
      return (
        <ContentAbout
          title='هدفنا الأساسي'
          description={`
          تقديم أعلى مستويات الرعاية الصحية في جميع تخصصات طب الأسنان. استخدام
          أحدث التقنيات والمعدات لضمان أفضل نتائج علاجية. توفير بيئة علاجية
          مريحة وآمنة للمرضى. تعزيز التوعية الصحية حول أهمية العناية بالفم
          والأسنان.`}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className='about-container'>
      <div className='button-group'>
        <button className='btn-about' onClick={() => handleClick("what")}>
          ماذا نفعل؟
        </button>
        <button className='btn-about' onClick={() => handleClick("mission")}>
          توصياتنا
        </button>
        <button className='btn-about' onClick={() => handleClick("goal")}>
          أهدافنا
        </button>
      </div>

      <div className='content-display'>{renderContent(activeComponent)}</div>
    </div>
  );
};

export default ButtonAbout;
