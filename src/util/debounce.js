export default function debounce(f, ms) {
  let timeoutId = false;

  const debouncedFunc = function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = false;
      f.apply(this, arguments);
    }, ms);
  };

  const cancel = function() {
    clearTimeout(timeoutId);
    timeoutId = false;
  }

  return { cancel, debouncedFunc };
}