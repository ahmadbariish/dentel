/** @format */
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SunnyIcon from "@mui/icons-material/Sunny";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Button,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";

export default function Contact() {
  const validation = Yup.object({
    name: Yup.string().required("the name is required"),
    email: Yup.string()
      .email("not valid email")
      .required("the email is required"),
    subject: Yup.string().required("the subject is required"),
  });
  return (
    <>
      <div
        style={{
          padding: "100px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#80808014",
          gap: "2rem",
          flexWrap: "wrap",
        }}>
        {/* Contact Information Box */}
        <Paper
          sx={{
            padding: "20px",
            width: "500px",
            borderRadius: "10px",
            backgroundColor: "#80808000",
          }}>
          <h2>اتصل بنا </h2>
          <div style={{ color: "#777", fontSize: "20px", padding: "10px 0px" }}>
            يرجى ترك بريدك الإلكتروني وسنقوم بالتواصل معك خلال 24 ساعة
          </div>

          <div style={{ marginTop: "1rem", lineHeight: "1.8" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "25px",
                }}>
                <AlternateEmailIcon /> <strong>الايميل</strong>
              </div>
              <div style={{ color: "#777", cursor: "pointer" }}>
                DentalClinic@gmail.com
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "25px",
                }}>
                <LocalPhoneIcon /> <strong>الرقم</strong>{" "}
              </div>
              <div style={{ color: "#777", cursor: "pointer" }}>
                +963 0968 107 915
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "25px",
                }}>
                <AddLocationIcon /> <strong>عنواننا</strong>{" "}
              </div>
              <div
                style={{
                  color: "#777",
                  cursor: "pointer",
                  fontSize: "20px",
                  padding: "10px 0px",
                }}>
                حلب , الفرقان , جانب جامع العباس
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <SunnyIcon
                  sx={{
                    color: "#ef6c00",
                    marginRight: "2px",
                  }}
                />
                <strong style={{ fontSize: "25px" }}>أوقات تواجدنا</strong>
              </div>
              <div
                style={{
                  color: "#777",
                  fontSize: "20px",
                  padding: "10px 0px",
                }}>
                {" "}
                يوميًا من الساعة 9 صباحًا حتى 2 ظهرًا{" "}
              </div>
            </div>
          </div>
        </Paper>

        {/* Contact Form Box */}
        <Paper
          sx={{
            width: "400px",
            padding: "24px",
            borderRadius: "10px",
            backgroundColor: "#fff",
            textAlign: "center",
          }}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={validation}
            onSubmit={(values) => {
              console.log(values);
            }}>
            {({
              values,
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <Text fz='lg' fw={700} mb='sm'>
                  نحن هنا لخدمتك
                </Text>

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing='md'>
                  <TextInput
                    name='name'
                    label='الاسم'
                    placeholder='Your name'
                    required
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                        textAlign: "left",
                      }}>
                      {errors.name}
                    </div>
                  )}
                  <TextInput
                    name='email'
                    label='الايميل'
                    placeholder='hello@mantine.dev'
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email}
                  />
                  {errors.email && touched.email && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                        textAlign: "left",
                      }}>
                      {errors.email}
                    </div>
                  )}
                </SimpleGrid>

                <TextInput
                  name='subject'
                  mt='md'
                  label='استفسارك'
                  placeholder='Subject'
                  required
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.subject && touched.subject && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "0.8rem",
                      textAlign: "left",
                    }}>
                    {errors.subject}
                  </div>
                )}
                <Textarea
                  name='message'
                  mt='md'
                  label='رأيك ؟'
                  placeholder='Please include all relevant information'
                  minRows={4}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />

                <Group justify='flex-end' mt='md'>
                  <Button
                    type='submit'
                    sx={{ margin: "0px auto", backgroundColor: "#5c6bc0" }}
                    disabled={isSubmitting}>
                    ارسال
                  </Button>
                </Group>
              </form>
            )}
          </Formik>
        </Paper>
      </div>
    </>
  );
}
