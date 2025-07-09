document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const text = input.value.trim();
        if (text !== '') {
            addTodo(text);
            input.value = '';
        }
    });

    function addTodo(text) {
        const li = document.createElement('li');
        li.textContent = text;
        const btn = document.createElement('button');
        btn.textContent = 'Eliminar';
        btn.className = 'delete-btn';
        btn.onclick = function() {
            list.removeChild(li);
        };
        li.appendChild(btn);
        list.appendChild(li);
    }
});