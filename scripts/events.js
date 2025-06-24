import { DOM, tasksArr, _clearTasksArr } from "./globals.js";
import { togglePromptScreen, closeAddTaskPrompt, addNewTask, clearAllTasks, closeClearAllPrompt } from "./utils.js";

DOM.addTaskBtn.addEventListener("click", () => {    
    togglePromptScreen();
    DOM.addTaskPrompt.classList.replace("hidden", "block");
    DOM.taskTextBox.focus();
});

DOM.clearAllBtn.addEventListener("click", () => {
    togglePromptScreen();
    DOM.clearAllPrompt.classList.replace("hidden", "block");
});

DOM.promptScreen.addEventListener("click", (event) => {
    if (event.target === DOM.promptScreen && !DOM.addTaskPrompt.classList.contains("hidden")) {
        closeAddTaskPrompt();
    } else if (event.target === DOM.promptScreen && !DOM.clearAllPrompt.classList.contains("hidden")) {
        closeClearAllPrompt();
    }
});

DOM.closeAddTaskPromptBtn.addEventListener("click", closeAddTaskPrompt);

DOM.saveTaskBtn.addEventListener("click", () => {
    if (addNewTask()) {
        closeAddTaskPrompt();
    }

    DOM.taskTextBox.value = "";
});

DOM.cancelClearAllBtn.addEventListener("click", () => {
    togglePromptScreen();
    DOM.clearAllPrompt.classList.replace("block", "hidden");
})

DOM.proceedClearAllBtn.addEventListener("click", () => {
    clearAllTasks();
    closeClearAllPrompt();
});
