import { useEffect, RefObject } from 'react';

const useOnOutsideClick = (ref: RefObject<any>, onClick: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        onClick();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export default useOnOutsideClick;
