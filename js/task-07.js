const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text"); 

const updateTextSize = () => {
  const fontSize = fontSizeControl.value + "px";
  text.style.fontSize = fontSize;
};

fontSizeControl.addEventListener("input", updateTextSize);
