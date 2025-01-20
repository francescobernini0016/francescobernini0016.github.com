document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const buttons = document.querySelectorAll("button");
    const fonts = ["Apfel Grotesk", "Zara", "Gothique"];
    const defaultFont = "Arial";
    let fontIndex = 0;
    let intervalId;

    function cycleFonts(element) {
        return setInterval(() => {
            element.style.fontFamily = fonts[fontIndex];
            fontIndex = (fontIndex + 1) % fonts.length;
        }, 250);
    }

    header.addEventListener("mouseenter", () => {
        intervalId = cycleFonts(header);
    });

    header.addEventListener("mouseleave", () => {
        clearInterval(intervalId);
        fontIndex = 0;
        header.style.fontFamily = defaultFont; // Reset to default font
    });

    buttons.forEach(button => {
        let buttonIntervalId;
        button.addEventListener("mouseenter", () => {
            buttonIntervalId = cycleFonts(button);
        });

        button.addEventListener("mouseleave", () => {
            clearInterval(buttonIntervalId);
            fontIndex = 0;
            button.style.fontFamily = defaultFont; // Reset to default font
        });
    });
});
