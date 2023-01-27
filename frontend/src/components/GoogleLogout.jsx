import { gapi } from "gapi-script";
import { GoogleLogout } from "react-google-login";

export default function GoogleLogout() {
  const onSuccess = () => {
    console.log("logout successfull");
  };

  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
}
