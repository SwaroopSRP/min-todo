import { DOM, tasksArr, _clearTasksArr } from "./globals.js";
import { renderTask, togglePromptScreen, closeAddTaskPrompt, addNewTask, clearCompletedTasks, closeClearCompletedPrompt, clearAllTasks, closeClearAllPrompt } from "./utils.js";

export function initContent() {
    DOM.taskTextBox.value = "";

    if (tasksArr.length > 0) {
        DOM.emptyMsg.classList.add("hidden");

        tasksArr.forEach((taskObj) => renderTask(taskObj));
    }
}

export function initEvents() {
    DOM.addTaskBtn.addEventListener("click", () => {
        togglePromptScreen();
        DOM.addTaskPrompt.classList.replace("hidden", "block");
        DOM.taskTextBox.focus();
    });

    DOM.clearCompletedBtn.addEventListener("click", () => {
        togglePromptScreen();
        DOM.clearCompletedPrompt.classList.replace("hidden", "block");
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
        } else if (event.target === DOM.promptScreen && !DOM.clearCompletedPrompt.classList.contains("hidden")) {
            closeClearCompletedPrompt();
        }
    });

    DOM.closeAddTaskPromptBtn.addEventListener("click", closeAddTaskPrompt);

    DOM.saveTaskBtn.addEventListener("click", () => {
        if (addNewTask()) {
            closeAddTaskPrompt();
        }

        DOM.taskTextBox.value = "";
    });

    DOM.cancelClearCompletedBtn.addEventListener("click", closeClearCompletedPrompt);

    DOM.proceedClearCompletedBtn.addEventListener("click", () => {
        clearCompletedTasks();
        closeClearCompletedPrompt();
    });

    DOM.cancelClearAllBtn.addEventListener("click", closeClearAllPrompt);

    DOM.proceedClearAllBtn.addEventListener("click", () => {
        clearAllTasks();
        closeClearAllPrompt();
    });
}
