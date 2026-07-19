document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[action*="web3forms"]');
  if (form) {
    let keyInput = form.querySelector('input[name="access_key"]');
    if (!keyInput) {
      keyInput = document.createElement('input');
      keyInput.type = 'hidden';
      keyInput.name = 'access_key';
      form.appendChild(keyInput);
    }
    keyInput.value = '4219339e-1819-435c-942c-99eb79d2ad82';
  }
});
