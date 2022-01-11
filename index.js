function main() {
  const bolita = document.querySelector(".bolita");

  document.addEventListener("keydown", function (event) {
    const marginLeftText = bolita.style.marginLeft.replace("px", "");
    const marginLeft = parseInt(marginLeftText || "0");
    let newMarginLeft = marginLeft;

    if (event.code == "ArrowLeft") {
      newMarginLeft--;
    } else if (event.code == "ArrowRight") {
      newMarginLeft++;
    }
    bolita.style.marginLeft = newMarginLeft + "px";
  });
}
main();
