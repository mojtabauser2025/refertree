export function setTheme(isDark: boolean) {
  const root = document.documentElement;

  if (isDark) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}