import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  //add an event listener
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function setOnline() {
      setIsOnline(true);
    }

    function setOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);

  return isOnline;

  //return some state
}
