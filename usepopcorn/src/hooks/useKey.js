import { useEffect } from "react";
export const useKey = (key, callback) => {
  useEffect(() => {
    const escapeCallback = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        if (callback) callback();
      }
    };
    document.addEventListener("keydown", escapeCallback);
    return () => {
      document.removeEventListener("keydown", escapeCallback);
    };
  }, [key, callback]);
};
