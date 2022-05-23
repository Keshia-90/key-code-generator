window.addEventListener("keydown", (e) => {
    const key = document.getElementById("key");
    const code = document.getElementById("code");
    const which = document.getElementById("which");

    key.textContent = e.key;
    code.textContent = e.code;
    which.textContent = e.which;
});

