/*
* Author Jakob Grätz
* Version 07-03-2024 (DD-MM-YYYY)
* (C) Jakob Grätz - 2024
*/

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
    // This is temporary. Maybe in the future I'd like to,
    // for example, save the mind map in localstorage or
    // even on a server.
    window.reload();
});