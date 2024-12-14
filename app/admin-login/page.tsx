import LoginForm from "@/components/login/Form";
import NavbarImage from "@/components/util/navbar-image/NavbarImage";

const AdminLogin = () => {
  return (
    <main>
      <NavbarImage wrapperClassName="header-wrapper">
        <div className="header-hero">
          <h1>Login</h1>
        </div>
      </NavbarImage>
      <LoginForm />;
    </main>
  );
};

export default AdminLogin;
