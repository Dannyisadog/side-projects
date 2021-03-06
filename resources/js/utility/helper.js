export const lockScrollBody = (lock) => {
  const body = document.querySelector('body');

  if (lock) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
}

export const scrollTo = (id) => {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth"
  });
}