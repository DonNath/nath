
let toastBox = document.getElementById('toastBox')




function showToast() {
   let toast = document.createElement('div');
   toast.classList.add('toast');
 
if(button.innerHTML=='success'){
    toast.innerHTML = 'success';
    toastBox.appendChild(toast)
}
}

console.log()