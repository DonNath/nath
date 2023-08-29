
let toastBox = document.getElementById('toastBox')


let successMsg = 'Successfully submitted'; 
let errorMsg = 'Please fix the error!' ;
let invalidMsg = 'Invalid input, check again'; 



function showToast(msg) {
//    let toast = document.createElement('div'); // create a div, assign it to a variable called toast
//    toast.classList.add('toast'); //add a class namse to the created div above
 toastBox.innerHTML = msg;   //   added a message called 'success' into the div 'toast';
   //  toastBox.appendChild(toast);

   setTimeout(()=>{
        toastBox.remove();
   }, 6000);
}


