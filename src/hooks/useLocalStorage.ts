import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useLocalStorage<T>(key: string, initialValue: T, parse = true): [T, (value: T | ((val: T) => T)) => void] {
  const router = useRouter();
  const [storage, setStorage] = useState<T>(initialValue);

  useEffect(() => {
    // Function to retrieve value from localStorage
    const localStorageAction = () => {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      try {
        const item = window.localStorage.getItem(key);
        return item ? (parse ? JSON.parse(item) : item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    };

    // Set storage state after component mounts
    setStorage(localStorageAction());
  }, [router.query, key, parse, initialValue]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storage) : value;
      setStorage(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, parse ? JSON.stringify(valueToStore) : String(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storage, setValue];
}
