import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
export  function useClickOutSide(handle) {
  const nodeRef = useRef()
  useEffect(() => {
    function handleClickOutSide(event) {
      if (nodeRef.current && !nodeRef.current.contains(event.target)) {
        handle()
      }
    }
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return nodeRef
}
export  function useScrollToTopPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}