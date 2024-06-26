window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const task_list = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task_name = input.value;

		const task_element = document.createElement('div');
		task_element.classList.add('task');

		const task_content_element = document.createElement('div');
		task_content_element.classList.add('content');

		task_element.appendChild(task_content_element);

		const saved_task_title_input_element = document.createElement('input');
		saved_task_title_input_element.classList.add('text');
		saved_task_title_input_element.type = 'text';
		saved_task_title_input_element.value = task_name;
		saved_task_title_input_element.setAttribute('readonly', 'readonly');

		task_content_element.appendChild(saved_task_title_input_element);

		const task_actions_element = document.createElement('div');
		task_actions_element.classList.add('actions');
		
		const task_edit_element = document.createElement('button');
		task_edit_element.classList.add('edit');
		task_edit_element.innerText = 'Edit';

		const task_delete_element = document.createElement('button');
		task_delete_element.classList.add('delete');
		task_delete_element.innerText = 'Delete';

		task_actions_element.appendChild(task_edit_element);
		task_actions_element.appendChild(task_delete_element);

		task_element.appendChild(task_actions_element);

		task_list.appendChild(task_element);

		input.value = '';

		task_edit_element.addEventListener('click', (e) => {
			if (task_edit_element.innerText.toLowerCase() === "edit") {
				task_edit_element.innerText = "Save";
				saved_task_title_input_element.removeAttribute("readonly");
				saved_task_title_input_element.focus();
			} else {
				task_edit_element.innerText = "Edit";
				saved_task_title_input_element.setAttribute("readonly", "readonly");
			}
		});

		task_delete_element.addEventListener('click', (e) => {
			task_list.removeChild(task_element);
		});
	});
});