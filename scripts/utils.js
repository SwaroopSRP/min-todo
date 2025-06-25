import { LOCAL_STORAGE_KEY, tasksArr, DOM, isPromptScreenOpened, _togglePromptStateBool, _clearTasksArr, _setTasksArr } from "./globals.js";

export function saveToLocal() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasksArr));
}

export function renderTask(taskObj) {
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("data-id", taskObj.id);
    taskDiv.setAttribute("data-isCompleted", taskObj.isCompleted);
    taskDiv.classList = "task-item flex items-center justify-between gap-1.5 border-t-2 border-slate-700 px-3 py-3 hover:bg-gray-800 active:bg-slate-600 transition-colors duration-250";
    taskDiv.innerHTML = `
        <p class=" text-lg ${(taskObj.isCompleted) ? "line-through text-gray-300" : ''}">
            ${taskObj.text}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-2">
            <button class="mark-task cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4cd137"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8">
                    </path>
                    <path
                        d="M10 16c-.26 0-.51-.1-.71-.29l-3-3L7.7 11.3l2.29 2.29 5.29-5.29 1.41 1.41-6 6c-.2.2-.45.29-.71.29Z">
                    </path>
                </svg>
            </button>
            <button class="delete-task cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ee5253"
                    viewBox="0 0 24 24">
                    <path
                        d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z">
                    </path>
                    <path d="M9 10h2v8H9zM13 10h2v8h-2z"></path>
                </svg>
            </button>
        </div>
    `;

    taskDiv.querySelector(".mark-task").addEventListener("click", () => {
        taskObj.isCompleted = !taskObj.isCompleted;
        taskDiv.querySelector("p").classList.toggle("line-through");
        taskDiv.querySelector("p").classList.toggle("text-gray-400");
        saveToLocal();
    });

    taskDiv.querySelector(".delete-task").addEventListener("click", () => {
        const taskIndex = tasksArr.indexOf(taskObj);
        if (taskIndex !== -1) {
            tasksArr.splice(taskIndex, 1);
            saveToLocal();
        }

        taskDiv.remove();
        if (tasksArr.length === 0) {
            DOM.emptyMsg.classList.remove("hidden");
        } else {
            DOM.emptyMsg.classList.add("hidden");
        }
    })

    DOM.taskList.appendChild(taskDiv);
}

export function togglePromptScreen() {
    if (isPromptScreenOpened) {
        DOM.promptScreen.classList.replace("flex", "hidden");
    } else {
        DOM.promptScreen.classList.replace("hidden", "flex");
    }

    _togglePromptStateBool();
}

export function addNewTask() {
    const taskText = DOM.taskTextBox.value.trim();

    if (taskText !== "") {
        if (tasksArr.length === 0) {
            DOM.emptyMsg.classList.add("hidden");
        }

        DOM.addTaskPromptGuideText.classList.remove("text-red-500");
        DOM.addTaskPromptGuideText.textContent = "Write your task below:";

        const newTask = {
            id: Date.now().toString(),
            text: taskText,
            isCompleted: false
        }
        tasksArr.push(newTask);
        saveToLocal();

        renderTask(newTask)

        return true;
    }

    DOM.addTaskPromptGuideText.classList.add("text-red-500");
    DOM.addTaskPromptGuideText.textContent = "Task text can't be empty! Try again:";

    return false;
}

export function closeAddTaskPrompt() {
    togglePromptScreen();
    DOM.addTaskPromptGuideText.textContent = "Write your task below:";
    DOM.addTaskPromptGuideText.classList.remove("text-red-500");
    DOM.addTaskPrompt.classList.replace("block", "hidden");
}

export function clearCompletedTasks() {
    _setTasksArr(tasksArr.filter(taskObj => !taskObj.isCompleted));
    saveToLocal();

    const targetNodes = DOM.taskList.querySelectorAll("[data-isCompleted='true']");
    targetNodes.forEach(taskNode => taskNode.remove());

    if (tasksArr.length === 0) {
        DOM.emptyMsg.classList.remove("hidden");
    }

}

export function closeClearCompletedPrompt() {
    togglePromptScreen();
    DOM.clearCompletedPrompt.classList.replace("block", "hidden");
}

export function clearAllTasks() {
    DOM.taskList.replaceChildren();
    DOM.emptyMsg.classList.replace("hidden", "block");
    _clearTasksArr();
    saveToLocal();
}

export function closeClearAllPrompt() {
    togglePromptScreen();
    DOM.clearAllPrompt.classList.replace("block", "hidden")
}
