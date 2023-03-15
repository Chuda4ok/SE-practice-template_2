function showGroup(group){
    document.querySelector('.inputBoxList').value = group;
}

let dropdown = document.querySelector('.groupList1');
let dropactive = document.querySelector('.dropBlockList1');
dropdown.onclick = function(){
    dropactive.classList.toggle('active');
}

let dropdown2 = document.querySelector('.groupList2');
let dropactive2 = document.querySelector('.dropBlockList2');
dropdown2.onclick = function(){
    dropactive2.classList.toggle('active');
}

let settingsIcon = document.querySelector('.settingsIcon');
let settings = document.querySelector('.settings');
let containerSettings = document.querySelector('.containerSetting');
settingsIcon.onclick = function(){
    settings.classList.toggle('activeMenu');
    containerSettings.classList.toggle('active');
}

const inputBoxList = document.querySelector(".inputBoxList");
inputBoxList.addEventListener('click', () => {
    inputBoxList.classList.toggle("inputClick")
})

