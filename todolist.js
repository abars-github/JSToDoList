// Create to do list archive button show archive button. 
// delete button save button complete button
// edit button
// when complete the background must change
// when delete the list must be deleted
// when edit the list we can edit
// when archive the list will be not visible but will not be deletd
// archive button makes all available lists to archive 
// when show archive we must see the lists in archive


const deleteAllBtn = document.getElementById("delete");
const showArchiveBtn = document.getElementById("showarchive");
const archiveBtn = document.getElementById("archive");
const addBtn = document.getElementById("add");
deleteAllBtn.addEventListener("click", () => deleteAll());
showArchiveBtn.addEventListener("click", () => showArchive());
archiveBtn.addEventListener("click", () => archiveItems());
addBtn.addEventListener("click", () => addItem());
document.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add").click();
  }
});
function deleteAll(){
  document.getElementById('list').innerHTML = "";
}
function showArchive(){
  const list = document.querySelectorAll("LI");
  for (let i = 0; i < list.length; i++) {
      const computers = list[i].innerHTML;
      let all = computers.toString();
      document.getElementById("list").innerHTML = all;
  }
}
function archiveItems(){
  document.getElementById('list').innerHTML = '<i class="fa fa-archive" aria-hidden="true"></i>';
}
function addItem(){
  let li= document.createElement('li');
  let newItem= document.getElementById('todolist').value;
  let x = document.createTextNode(newItem);
  li.appendChild(x);

  if(newItem == ''){
      alert('You have to write something');
  }else{
      document.getElementById('list').appendChild(li)
  }

let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  if(myNodelist[i].querySelector('.close') == null) {
    let para = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    para.className = "close";
    para.appendChild(txt);
    myNodelist[i].appendChild(para);
  }
}
let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


