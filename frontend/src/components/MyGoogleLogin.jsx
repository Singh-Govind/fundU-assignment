import { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useContext } from "react";
import { AuthConext } from "../context/AuthConext";

export default function MyGoogleLogin() {
  const { login } = useContext(AuthConext);

  const clientId =
    "654884078364-sc94cmriknac9ti49g8q3cp068u0nl2o.apps.googleusercontent.com";

  const onSuccess = (res) => {
    console.log(res.profileObj);
    login(res.profileObj);
  };
  const onFailure = (res) => {
    console.log(res);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.8rem",
        cursor: "pointer",
        border: "1px solid lightgray",
        padding: "0.25rem 1.5rem",
      }}
    >
      {/* <img
        width="50px"
        src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
      />
      <Typography>Login with google</Typography> */}
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
