const DEBOUNCE_DELAY = 500;
export function useDebounce<T extends (...args: string[]) => void>(
  func: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>): ReturnType<T> | undefined => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, DEBOUNCE_DELAY);
    return undefined;
  };
}

export function convertImageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
