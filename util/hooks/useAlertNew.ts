import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { COOKIE_ALERT_NEW_CLOSED, MAX_AGE_NEW_ALERT } from "@/util/constants";

export const useAlertNew = () => {
  const [alertClosed, setAlertClosed] = useState(true);

  const closeAlert = () => {
    setAlertClosed(true);
    setCookie(COOKIE_ALERT_NEW_CLOSED, true, { maxAge: MAX_AGE_NEW_ALERT });
  };

  // set user lang in cookie on open
  useEffect(() => {
    setAlertClosed(getCookie(COOKIE_ALERT_NEW_CLOSED) === "true");
  }, []);

  return {
    closeAlert,
    alertClosed,
  };
};
