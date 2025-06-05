javascript
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", e => {
        e.preventDefault();
        document.body.style.opacity = 0;
        setTimeout(() => {
          window.location = link.href;
        }, 300);
      });
    }
  });
});
```