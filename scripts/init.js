import { DOM, tasksArr } from "scripts/globals.js";

DOM.taskTextBox.value= "";
DOM.taskTextBox.focus();

if (tasksArr.length > 0) {
    DOM.emptyMsg.classList.add("hidden");

    for (let obj of tasksArr) {
        DOM.taskList.insertAdjacentHTML("beforeend", `
            <div class="task-item flex items-center justify-between gap-1.5 border-t-2 border-slate-700 px-3 py-3 hover:bg-gray-800 active:bg-slate-600">
                <p class="task-title text-lg">
                    ${obj.text}
                </p>
                <div class="task-actions flex flex-wrap items-center justify-center gap-2">
                    <button class="mark-task cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4cd137" viewBox="0 0 24 24">
                            <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8"></path>
                            <path d="M10 16c-.26 0-.51-.1-.71-.29l-3-3L7.7 11.3l2.29 2.29 5.29-5.29 1.41 1.41-6 6c-.2.2-.45.29-.71.29Z"></path>
                        </svg>
                    </button>
                    <button class="delete-task cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ee5253"
                            viewBox="0 0 24 24">
                            <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path>
                            <path d="M9 10h2v8H9zM13 10h2v8h-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `);
    }
}
