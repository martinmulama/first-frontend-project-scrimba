
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLead()
})
function renderLead() {
    let listItems = ""
    for (i = 0; i < myLeads.length; i++) {
        listItems += `
 <li>
 <a target = '_blank' href = '${myLeads[i]}' >${myLeads[i]}</a>
 </li>
  `
    }
    ulEL.innerHTML = listItems
}













