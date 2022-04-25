// import classes from "classes.json";
// var map = classes.map(x => x.uniqueID);
// const classes = require("./classes.json");




var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
    });
}

function pop_up(name, w, h, scroll) {
    var url = "file:///Users/ktrane/Documents/Spring%202022/classDisplay.html";
    // popupWindow = window.open(url,'popUpWindow','height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
    LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
    TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
    settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
    popupWindow = window.open(url, name, settings);

    // setName();
    // setPre();
    // setInfo();
    // setEntry();
    
}

function pop_up_load() {

    // let names, prereqs, infor, entries = [];
    let names, prereqs, infor, entries;

    fetch('classes.json').then(response => {
        return response.json();
      }).then(data => {
          names = data.cisc_3115.name;
          prereqs = data.cisc_3115.prereq;
          infor = data.cisc_3115.info;
          entries = data.cisc_3115.entry;
        
        console.log(data);
      });
    //   }).catch(err => {
    //     // Do something for an error here
    //   });

    // var cName = window.name;
    // var cPrereq = classes[CISC_3115].prereq;
    // var cInfo = classes[CISC_3115].info;
    // var cEntry = classes[CISC_3115].entry;

    // var ids = classes.className.map(x => x.uniqueID);

    setName(names);
    setPre(prereqs);
    setInfo(infor);
    setEntry(entries);

}

function setName(name) {
    document.getElementById('name_dis').innerHTML = name;

}

function setPre(prereq) {
    document.getElementById('prereq_dis').innerHTML = "Prerequisites: " + prereq;

}

function setInfo(info) {
    document.getElementById('info_dis').innerHTML = "" + info;

}

function setEntry(entry) {
    document.getElementById('entry_dis').innerHTML = "Prerequisite for: " + entry;

}