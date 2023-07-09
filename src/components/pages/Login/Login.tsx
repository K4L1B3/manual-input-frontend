import { useTranslation } from "react-i18next";

const Login = (): JSX.Element => {
  const { t } = useTranslation();
  return <h1>{t("welcome_message")}</h1>;
};

export default Login;
