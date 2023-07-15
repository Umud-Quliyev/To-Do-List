document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span class="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <div>
                    <button class="delete">
                        <i class="far fa-trash-alt"></i>
                    </button>
                    <button class="complete">
                        <i class="fa-solid fa-square-check"></i>
                    </button>
                </div>
            </div>
        `;
        document.querySelector('#newtask input').value = "";

        let currentTasks = document.querySelectorAll(".delete");
        for (let i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentNode.parentNode.remove();
            };
        }

        let completeButtons = document.querySelectorAll(".complete");
        for (let i = 0; i < completeButtons.length; i++) {
            completeButtons[i].onclick = function() {
                let task = this.parentNode.parentNode;
                let taskName = task.querySelector(".taskname").textContent;
                task.remove();
                addCompletedTask(taskName);
            };
        }
    }
};

function addCompletedTask(taskName) {
    let completedTasksContainer = document.querySelector("#completed-tasks");

    let listItem = document.createElement("li");
    listItem.textContent = taskName;

    completedTasksContainer.appendChild(listItem);
}
