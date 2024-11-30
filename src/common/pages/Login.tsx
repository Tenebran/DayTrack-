import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid2 } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useTranslation } from "react-i18next";

export type LoginData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const Login = () => {
  const { formik, isLoggedIn } = useLogin();
  const { t } = useTranslation();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Grid2 container justifyContent={"center"} component="div">
      <Grid2 justifyContent="center" component="div">
        <FormControl>
          <FormLabel>
            <p>{t("login.email")}: free@samuraijs.com</p>
            <p>{t("login.password")}: free</p>
          </FormLabel>
          <form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <TextField
                label={t("login.emailInput")}
                margin="normal"
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
                {...formik.getFieldProps("email")}
              />

              <TextField
                type="password"
                label={t("login.passwordInput")}
                margin="normal"
                error={formik.touched.password && !!formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
                {...formik.getFieldProps("password")}
              />

              <FormControlLabel
                label={t("login.rememberME")}
                control={
                  <Checkbox
                    name="rememberMe"
                    checked={formik.values.rememberMe}
                    onChange={formik.handleChange}
                  />
                }
              />
              <Button type={"submit"} variant={"contained"} color={"primary"}>
                {t("login.loginButton")}
              </Button>
            </FormGroup>
          </form>
        </FormControl>
      </Grid2>
    </Grid2>
  );
};
