import { useEffect, useState } from "react";

export default function useGetUser(username) {
  const [userData, setUserData] = useState({});

  const fetchUser = async () => {
    let res = await fetch(
      `https://easy-ruby-seahorse-garb.cyclic.app/users/singleuser?username=${username}`
    );
    let d = await res.json();
    setUserData(d[0]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { userData };
}
