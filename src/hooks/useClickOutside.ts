import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseClickOutsideProps {
  onClickOutside: () => void;
}

export default function useClickOutside({
  onClickOutside,
}: UseClickOutsideProps): MutableRefObject<any> {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (onClickOutside) {
          onClickOutside();
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [onClickOutside]);
  return ref;
}
