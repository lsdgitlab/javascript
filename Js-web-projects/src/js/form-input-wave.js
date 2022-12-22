labels = document.querySelectorAll('.form-control label');

// console.log(labels);

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letters, indx) =>`<span style="transition-delay:${indx *50}ms">${letters}</span>`)
    .join('') 
})