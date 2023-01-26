import { Typography } from "@mui/material";

export default function GoogleLogin() {
  const loginWithGoogle = () => {
    alert("login");
  };

  return (
    <div
      onClick={loginWithGoogle}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.8rem",
        cursor: "pointer",
        border: "1px solid lightgray",
        padding: "0.25rem 1.5rem",
      }}
    >
      <img
        width="50px"
        src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
      />
      <Typography>Login with google</Typography>
    </div>
  );
}
