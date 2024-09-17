const toysList = document.querySelector('.right-section-toys');
const toysItem = document.querySelector('.toys-item');

for (let i = 0; i < 14; i++) {
    let toysDiv = document.createElement('div');
    toysDiv.className = "toys-item";
    toysDiv.innerHTML = toysItem.innerHTML;
    toysList.appendChild(toysDiv);
}