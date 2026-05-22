/** Height of floating bottom nav + breathing room (mobile-first) */
const SCROLL_OFFSET_PX = 108;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const top =
    el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET_PX;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  el.focus({ preventScroll: true });
}
