/** @format */

import Container from "@mui/material/Container";
import DoctorsCard from "./DoctorsCard";
import "../Css fills/style.css";

export default function Doctors() {
  return (
    <div style={{ padding: "70px 0px" }}>
      <Container fixed>
        <h1 className={"card-title"}>نخبة من الأطباء المتخصصين</h1>
        <div className='container-doctors'>
          <DoctorsCard
            title={"د.أحمد "}
            description={
              " الدكتور أحمدأخصائي تقويم الأسنان، يختص بتصحيح مشاكل اصطفاف الأسنان والفكين باستخدام أحدث تقنيات التقويم التقليدي والشفاف."
            }
            srcImage={require("../images/person_8.jpg")}
          />
          <DoctorsCard
            title={"د.محمد"}
            description={
              " الدكتور محمد أخصائي في جراحة الفكين، يتمتع بخبرة متميزة في تشخيص وعلاج الحالات المعقدة المتعلقة بالفكين والوجه. "
            }
            srcImage={require("../images/person_6.jpg")}
          />
          {/* <DoctorsCard
            title={"Dr.Mohammed Saad"}
            description={
              "Dr.Ahmed Mohammed is a specialist in teeth whitening, offering the latest techniques to brighten smiles and restore natural tooth brilliance "
            }
            srcImage={require("../images/person_5.jpg")}
          /> */}
          <DoctorsCard
            title={"د.نور"}
            description={
              "الدكتورة نور أخصائية في طب تجميل الاسنان تتمتع بخبرة واسعة في تجميل الاسنان باستخدام أحدث التقنيات"
            }
            srcImage={require("../images/person_7.jpg")}
          />
        </div>
      </Container>
    </div>
  );
}
