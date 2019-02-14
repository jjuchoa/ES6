class List {
    constructor(){
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Junior';
    }

    mostrausuario() {
        console.log(this.usuario);
    }
 
}

const MinhaList = new TodoList();

document.getElementById("novotodo").onclick = function() {
    MinhaList.add("Novo todo");
}

MinhaList.mostrausuario();