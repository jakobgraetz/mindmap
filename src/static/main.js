/*
* Author Jakob Grätz
* Version 07-03-2024 (DD-MM-YYYY)
* (C) Jakob Grätz - 2024
*/

if (document.getElementById("idea-submit")) {
    document.getElementById("idea-submit").addEventListener("click", () => {
        let idea = document.getElementById("idea-input").value;
        if (idea != "") {
            alert("clicked - value: " + idea);
        };
    });
};