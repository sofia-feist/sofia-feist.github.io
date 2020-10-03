function readMore(btn, section) {
  var moreText = document.getElementById(section);
  var btnText = document.getElementById(btn);

  if (btnText.innerHTML == "Read Abstract")
  {
    btnText.innerHTML = "Hide Abstract";
    moreText.style.display = "inline";
  } 
  else 
  {
    btnText.innerHTML = "Read Abstract";
    moreText.style.display = "none";
  }
}