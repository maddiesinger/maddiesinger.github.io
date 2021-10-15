const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
   let bomchapter = input.value;
        input.value = '';
   
   const listObject = document.createElement('li');
   const listText = document.createElement('span');
   const listBtn = document.createElement('button');

   listObject.appendChild(listText);
   listText.textContent = bomchapter;
        
   listObject.appendChild(listBtn);
   listBtn.textContent = '❌';
        
   list.appendChild(listObject);

   listBtn.onclick = function(e) {
   list.removeChild(listObject);
   };

   input.focus();
};