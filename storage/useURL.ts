import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const key = 'webViewURL';
const initialValue = 'https://www.naver.com';

const useAsyncStorage = () => {
  const [url, setURL] = useState(initialValue);
  const [retrievedFromStorage, setRetrievedFromStorage] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        setURL(value || initialValue);
        setRetrievedFromStorage(true);
      } catch (error) {
        console.error('useAsyncStorage getItem error:', error);
      }
    })();
  }, []);

  const storeNewURL = async (value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
      setURL(value);
    } catch (error) {
      console.error('useAsyncStorage setItem error:', error);
    }
  };

  return {
    url,
    setURL: storeNewURL,
    retrievedFromStorage,
  };
};

export default useAsyncStorage;
