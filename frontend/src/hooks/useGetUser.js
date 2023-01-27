import { useEffect, useState } from "react";

export default function useGetUser(username) {
  const [userData, setUserData] = useState({});

  const fetchUser = async () => {
    let res = await fetch(
      `http://localhost:8080/users/singleuser?username=${username}`
    );
    let d = await res.json();
    setUserData(d[0]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { userData };
}
