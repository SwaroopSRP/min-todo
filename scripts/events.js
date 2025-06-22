import { DOM, tasksArr, _clearTasksArr } from "./globals.js";
import { togglePromptScreen, closeAddTaskPrompt, addNewTask, saveToLocal } from "./utils.js";

prompt("events");

DOM.addTaskBtn.addEventListener("click", () => {
    prompt("AddTask");    
    togglePromptScreen();
    DOM.addTaskPrompt.classList.replace("hidden", "block");
});

DOM.promptScreen.addEventListener("click", (event) => {
    if (event.target === DOM.promptScreen) {
        closeAddTaskPrompt();
    }
});

DOM.closeAddTaskPromptBtn.addEventListener("click", closeAddTaskPrompt);

DOM.saveTaskBtn.addEventListener("click", () => {
    if (addNewTask()) {
        closeAddTaskPrompt();
    }
    DOM.taskTextBox.value = "";
});

DOM.clearAllBtn.addEventListener("click", () => {
    DOM.taskList.replaceChildren();
    DOM.emptyMsg.classList.remove("hidden");
    _clearTasksArr();
    saveToLocal();
})
