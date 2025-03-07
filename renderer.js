window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#button");
  const txt = document.querySelector("#txt");

  button.addEventListener("click", async () => {
    const username = await window.api.getName("[DEV]Mestick");
    txt.textContent = username;
  });
});
