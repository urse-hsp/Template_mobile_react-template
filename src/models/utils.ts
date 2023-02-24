import { useState, useCallback } from 'react';
import { createContainer } from 'unstated-next';
import { storage } from '@/utils';

interface defaultStatesType {
  theme: 'light' | 'dark';
  globalLoading: boolean;
}
const defaultStates: defaultStatesType = {
  theme: storage('theme') !== 'dark' ? 'light' : 'dark',
  globalLoading: false,
};

function useUtils(customInitialStates = {}) {
  const initialStates = {
    ...defaultStates,
    ...customInitialStates,
  };
  const [theme, setThemeProp] = useState<string>(initialStates.theme ?? '');
  const [globalLoading, setGlobalLoading] = useState(
    initialStates.globalLoading,
  );

  // Init
  window.document.documentElement.setAttribute('data-theme', theme);

  const setTheme = useCallback(
    (t: string) => {
      t = t ?? theme;
      document.documentElement.setAttribute('data-prefers-color-scheme', t);
      window.document.documentElement.setAttribute('data-theme', t);
      storage('theme', t);
      setThemeProp(t);
    },
    [setThemeProp],
  );

  return {
    theme,
    setTheme,
    globalLoading,
    setGlobalLoading,
  };
}

const Utils = createContainer(useUtils);

export default Utils;
