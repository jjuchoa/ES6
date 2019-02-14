class TodoList extends List{
    constructor(){
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaList = new TodoList();

document.getElementById("novotodo").onclick = function() {
    MinhaList.addTodo();
}