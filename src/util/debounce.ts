export default function debounce(f: Function, ms: number) {
  let timeoutId: number = -1;

  const debouncedFunc = function(...args: any[]): void {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      timeoutId = -1;
      f.apply(this, args);
    }, ms);
  };

  const cancel = function(): void {
    clearTimeout(timeoutId);
    timeoutId = -1;
  }

  return { cancel, debouncedFunc };
}