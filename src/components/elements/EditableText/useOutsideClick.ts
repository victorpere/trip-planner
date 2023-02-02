import { useEffect } from "react";

const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  action: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        action();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, action]);
};

export default useClickOutside;
