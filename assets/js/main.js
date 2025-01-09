//Table 1
  function statusList(evt, Status) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Status).style.display = "block";
  evt.currentTarget.className += " active";
}
  document.getElementById("defaultOpen").click();

//Table 2
function statusNoList(evt, StatusNo) {
  var i, tabcontent2, tablinks2;
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(StatusNo).style.display = "block";
  evt.currentTarget.className += " active";
} 
  document.getElementById("defaultOpen2").click();

//Table 3
function statusTempList(evt, statusTemp) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent3");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks3");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(statusTemp).style.display = "block";
  evt.currentTarget.className += " active";
}
  document.getElementById("defaultOpen3").click();


// Scroll for 1, 2 and 3
const scrollableArea = document.getElementById("center");
const scrollableArea2 = document.getElementById("center2");
const scrollableArea3 = document.getElementById("center3");

function ScrollLeft() {
	scrollableArea.scrollBy(-400, 0)
}
function ScrollRight() {
	scrollableArea.scrollBy(400, 0)
}

function ScrollLeft2() {
	scrollableArea2.scrollBy(-400, 0)
}
function ScrollRight2() {
	scrollableArea2.scrollBy(400, 0)
}

function ScrollLeft3() {
	scrollableArea3.scrollBy(-400, 0)
}
function ScrollRight3() {
	scrollableArea3.scrollBy(400, 0)
}
