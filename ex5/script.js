const inputBox = document.getElementById("inputbox"); 
const listTask = document.getElementById("list-group"); 
    
    function addTask(){
        if(inputBox.value === ''){
            alert("You must write something!"); 
        }
        else{
            let li = document.createElement('li');
            li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('form-check-input', 'me-2');
            li.appendChild(checkbox);

            
            let text = document.createTextNode(inputBox.value);
            li.appendChild(text);
            
            let span = document.createElement('span');
            span.classList.add('delete-btn', 'ms-auto');
            span.innerHTML = "<i class='bi bi-trash'></i>"; 
            li.appendChild(span);

            listTask.appendChild(li);
        }
        inputBox.value = ''; 
    }

    listTask.addEventListener("click", function(e){

        if (e.target.tagName === "INPUT") {
            let listItem = e.target.parentElement;
            listItem.classList.toggle("checked");
    
           
            if (listItem.classList.contains("checked")) {
                listTask.appendChild(listItem);  // Move to bottom
            } else {
                listTask.insertBefore(listItem, listTask.firstChild);  // Move to top
            }
        } else if (e.target.closest('.delete-btn')) {
            e.target.closest('li').remove();
        }
    }, false);

    function saveDate(){
        localStorage.setItem("date", listContainer.innerHTML);

    }
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    inputBox.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    function showTask(){
        listTask.innerHTML = localStorage.getItem("data") || "";
    
        
        let tasks = Array.from(listTask.children);
        tasks.forEach(task => {
            if (task.classList.contains("checked")) {
                listTask.appendChild(task);  
            }
        });
    }