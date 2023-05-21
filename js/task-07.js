const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text"); 

const updateTextSize = () => {
 text.style.fontSize = fontSizeControl.value + "px";
};

fontSizeControl.addEventListener("input", updateTextSize);

