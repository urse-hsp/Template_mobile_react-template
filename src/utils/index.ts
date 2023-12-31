const STORAGE_PREFIX = 'WEB_';

export function storage(key: string, value?: any) {
  if (value !== undefined) {
    window.localStorage.setItem(STORAGE_PREFIX + key, value);
    return;
  }
  return window.localStorage.getItem(STORAGE_PREFIX + key);
}
