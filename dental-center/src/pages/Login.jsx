/** @format */

import "../Css fills/style.css";

import {
  Anchor,
  Button,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { upperFirst, useToggle } from "@mantine/hooks";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Login() {
  const [type, toggle] = useToggle(["login", "register"]);
  const validationSchema = (type) =>
    Yup.object({
      name:
        type === "register" ? Yup.string().required("Required") : Yup.string(),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password should include at least 6 characters")
        .required("Please Enter Password"),
    });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema(type),
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });
  return (
    <div className='login-container'>
      <Paper className='login-paper'>
        <Text size='lg' fw={500}>
          Welcome to Dental Clinic, {type} with
        </Text>
        <Divider
          label='Or continue with email'
          labelPosition='center'
          my='lg'
        />
        <form onSubmit={formik.handleSubmit}>
          <Stack>
            {type === "register" && (
              <TextInput
                label='Name'
                placeholder='Your name'
                {...formik.getFieldProps("name")}
                error={formik.touched.name && Boolean(formik.errors.name)}
                radius='md'
              />
            )}
            {type === "register" ? (
              <div>
                {formik.touched.name && formik.errors.name ? (
                  <div
                    style={{
                      color: "red",
                      fontSize: "15px",
                      margin: "0px",
                      padding: "0px",
                    }}>
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
            ) : null}
            <TextInput
              label='Email'
              required
              placeholder='hello@mantine.dev'
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              radius='md'
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
            <PasswordInput
              label='Password'
              required
              placeholder='Your password'
              {...formik.getFieldProps("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              radius='md'
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </Stack>
          <Group justify='space-between' mt='xl'>
            <Anchor
              component='button'
              type='button'
              c='dimmed'
              onClick={() => toggle()}
              size='xs'>
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type='submit' radius='xl'>
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
