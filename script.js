/*let todo = document.getElementById("todo-img");
let input = document.getElementById("input");
let listItmes = document.getElementById("list-itmes");
let alertBtn = document.getElementById("alert");
let 

function newElement(){
    if (input.value){
        let newItem = document.createElement("li");
        newItem.textContent = input.value;
        listItmes.appendChild(newItem);
        alertBtn.textContent = "item successfully added"
        input.value = ""
    }
    else{
        alertBtn.textContent = "please add an item"
    }
}*/
/*function editing(){
    let ForEdit = this.parentElement;
    let input = document.createElement("input")
    input.type = "text"
    input.value = newItemText 
    input.style.width = "100%"
    input.style.outline = "none"
    input.style.border = "none"
    input.style.borderRadius = "40px"
    input.style.backgroundColor = "#edeef0"
    
    input.style.marginLeft = "-20px"
    
    

    let saveBtn = document.createElement("i");
    saveBtn.className = "fa fa-floppy-o";
    input.appendChild(saveBtn);
    ForEdit.replaceWith(input);
    
}*/


document.getElementById("todo-img").addEventListener("click", function(){
    let input = document.getElementById("input");
    let listItmes = document.getElementById("list-itmes");
    let alertBtn = document.getElementById("alert");
    let newItemText = input.value.trim();
    let  = document.getElementById("saveText")
    let duplicate = false;

    console.log(newItemText);

    if (newItemText === ''){
        alertBtn.innerHTML = "please add an item";
        return
    }
    else{
        let newItem = listItmes.getElementsByTagName("li");
        for (let item of newItem){
            if (item.textContent === newItemText){
                duplicate= true;
                break;
            }
        }

    }

    if (duplicate){
        alertBtn.innerHTML = "item already exist";
    }

    else{
        const upadatedList = document.createElement("li");
        upadatedList.textContent = newItemText;
        const editButton = document.createElement('i'); 
        editButton.className = 'fa fa-edit'; 
        upadatedList.appendChild(editButton);
        editButton.addEventListener('click', function(){
            editItem(this);
        });
        listItmes.appendChild(upadatedList);
        console.log(upadatedList);
        alertBtn.textContent = "item added successfully";
        input.value = ""
    }
    function editItem(button){
        let ForEdit = button.parentElement;
        let currentText = ForEdit.className.replace("fa fa-edit", "").trim()
        let input = document.createElement("input")
        input.type = "text"
        input.value = currentText;
        input.value = newItemText 
        input.style.width = "100%"
        input.style.outline = "none"
        input.style.border = "none"
        input.style.borderRadius = "40px"
        input.style.backgroundColor = "#edeef0"
        input.style.marginLeft = "-20px"
        input.style.padding = "10px 0"
    

        const saveButton = document.createElement('i'); 
        saveButton.className = 'fa fa-floppy-o';

        input.appendChild(saveButton);
       // listItmes.appendChild(input);
         saveButton.addEventListener('click', function() {
             saveItem(this)
        });
        const editContainer = document.createElement('div'); 
        editContainer.style.width = "100%";
        editContainer.style.padding = "5px 10px";
        editContainer.appendChild(input); 
        editContainer.appendChild(saveButton); 
        editContainer.style.display = "flex";
        editContainer.style.justifyContent = "spaceBetween";
        ForEdit.replaceWith(editContainer); 


        function saveItem(button) { 
            let forSave = button.parentElement; 
            const input = forSave.querySelector('input'); 
             const updatedText = input.value.trim();
             if (updatedText === '') {
                alertBtn.textContent = 'Item text cannot be empty!'; 
                return; 
            } 
             const newItem = document.createElement('li'); 
             newItem.textContent = updatedText; 
             const editButton = document.createElement('i'); 
             editButton.className = 'fa fa-edit';
             editButton.addEventListener('click', function() { 
             editItem(this);
  })
  newItem.appendChild(editButton); 
  forSave.replaceWith(newItem);
}
    }  
});

