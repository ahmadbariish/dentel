/** @format */

import React from "react";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import dayjs from "dayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useFormik } from "formik";
import * as Yup from "yup";


function ModelAppointment() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      selectValue: "",
      phoneNumber: "",
      time: "",
      data: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("الاسم مطلوب"),
      email: Yup.string().email("الايميل غير صحيح").required("الايميل مطلوب"),
      selectValue: Yup.string().required("الإجراء مطلوب"),
      phoneNumber: Yup.string().required("رقم الهاتف مطلوب"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <form className='modelBackground' onSubmit={formik.handleSubmit}>
      <div className='inputs'>
        {/* row one */}
        <div className='row-one'>
          {/* name */}
          <div className='input'>
            <PersonIcon className='icon' />
            <TextField
              label='الاسم'
              name='name'
              variant='standard'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>

          {/* email */}
          <div className='input'>
            <EmailIcon className='icon' />
            <TextField
              label='الايميل'
              name='email'
              variant='standard'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
        </div>

        {/* row three */}
        <div className='row-three'>
          {/* phone */}
          <div className='input'>
            <LocalPhoneIcon className='icon' />
            <TextField
              label='رقم الهاتف'
              name='phoneNumber'
              variant='standard'
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
          </div>

          {/* select */}
          <div className='input'>
            <ControlPointIcon className='icon' />
            <select
              name='selectValue'
              value={formik.values.selectValue}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}>
              <option value=''>اختر الإجراء</option>
              <option value='تبيض الاسنان'>تبيض الاسنان</option>
              <option value='جراحة الفكين'>جراحة الفكين</option>
              <option value='تقويم أسنان'>تقويم أسنان</option>
            </select>
            {formik.touched.selectValue && formik.errors.selectValue && (
              <div className='error' style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.selectValue}
              </div>
            )}
          </div>
        </div>

        {/* row two */}
        <div className='row-tow'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem label='الوقت:' sx={{ width: "230px" }}>
              <TimeField defaultValue={dayjs("2022-04-17T15:30")} />
            </DemoItem>
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem label='التاريخ:' sx={{ width: "230px" }}>
              <DateField defaultValue={dayjs("2022-04-17")} />
            </DemoItem>
          </LocalizationProvider>
        </div>
      </div>

      <div className='btn-model'>
        <button type='submit'>ارسال</button>
      </div>
    </form>
  );
}

export default ModelAppointment;
