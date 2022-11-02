import { useRef, useEffect, MutableRefObject } from 'react';

export default function useIsMounted(): boolean {
  const ref: MutableRefObject<boolean> = useRef<boolean>(true);
  useEffect(() => {
    ref.current = false;
  }, []);
  return ref.current;
}
