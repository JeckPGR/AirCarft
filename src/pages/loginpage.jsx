import AuthLayout from "../components/Layouts/AuthLayouts";
import Formlogin from "../components/fragments/FormLogin";

const LoginPage = () => {
  return (
    <>
      <AuthLayout title="Login" type="login">
        <Formlogin />
      </AuthLayout>
    </>
  );
};

export default LoginPage;
