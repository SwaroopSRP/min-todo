import { DOM, tasksArr, _clearTasksArr } from "./globals.js";
import { togglePromptScreen, closeAddTaskPrompt, addNewTask, saveToLocal } from "./utils.js";

DOM.addTaskBtn.addEventListener("click", () => {    
    togglePromptScreen();
    DOM.addTaskPrompt.classList.replace("hidden", "block");
    DOM.taskTextBox.focus();
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
