function openForm() {
    document.getElementById("clickform").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("clickform").style.display = "none";
  }
  function openPend(){
    document.getElementById("section1").style.display = "block";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
  }
  function openComp(){
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    document.getElementById("section3").style.display = "none";
  }
  function openHist(){
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "block";
  }