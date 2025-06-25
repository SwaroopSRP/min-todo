export const LOCAL_STORAGE_KEY = "MIN_TODO_tasksArr"
export let tasksArr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
export let isPromptScreenOpened = false;

export const DOM = {
    addTaskBtn: document.getElementById("add-task-btn"),
    clearCompletedBtn: document.getElementById("clear-completed-btn"),
    clearAllBtn: document.getElementById("clear-all-btn"),
    taskList: document.getElementById("task-list"),
    emptyMsg: document.getElementById("empty-msg"),
    promptScreen: document.getElementById("prompt-screen"),
    addTaskPrompt: document.getElementById("add-task-prompt"),
    closeAddTaskPromptBtn: document.getElementById("close-add-task-prompt"),
    addTaskPromptGuideText: document.getElementById("guide-text"),
    taskTextBox: document.getElementById("task-textbox"),
    saveTaskBtn: document.getElementById("save-task-btn"),
    clearCompletedPrompt: document.getElementById("clear-completed-prompt"),
    cancelClearCompletedBtn: document.getElementById("cancel-clear-completed-btn"),
    proceedClearCompletedBtn: document.getElementById("proceed-clear-completed-btn"),
    clearAllPrompt: document.getElementById("clear-all-prompt"),
    cancelClearAllBtn: document.getElementById("cancel-clear-all-btn"),
    proceedClearAllBtn: document.getElementById("proceed-clear-all-btn"),
};

export function _togglePromptStateBool() {
    isPromptScreenOpened = !isPromptScreenOpened;
}

export function _clearTasksArr() {
    tasksArr = [];
}

export function _setTasksArr(newArr) {
    tasksArr = newArr;
}
