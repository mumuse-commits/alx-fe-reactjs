import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log("Formik Submitted:", values);
          actions.resetForm();
        }}
      >
        <Form>
          <div style={{ marginBottom: "12px" }}>
            <label>Username:</label>
            <Field
              type="text"
              name="username"
              placeholder="Enter username"
              style={{ width: "100%", padding: "8px" }}
            />
            <ErrorMessage
              name="username"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label>Email:</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter email"
              style={{ width: "100%", padding: "8px" }}
            />
            <ErrorMessage
              name="email"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label>Password:</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
              style={{ width: "100%", padding: "8px" }}
            />
            <ErrorMessage
              name="password"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit" style={{ padding: "10px 15px" }}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
