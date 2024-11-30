import { useFormik } from "formik";
import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import { LoginData } from "../pages/Login";
import { authThunks } from "../../features/auth/auth-reducer";
import { useAppSelector } from "../../common/hooks/useAppSelector";
import { useTranslation } from "react-i18next";

type FormikErrorType = Partial<Omit<LoginData, "rememberMe">>;

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = t("login.error.email");
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 3) {
        errors.password = t("login.error.password");
      }
      return errors;
    },

    onSubmit: (values: LoginData) => {
      dispatch(authThunks.login(values));
    },
  });
  return { formik, isLoggedIn };
};
