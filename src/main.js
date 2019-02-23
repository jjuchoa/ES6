class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
     }

     registerHandlers () {
         this.formEl.onsubmit = event => this.addRepository(event);
     }

     addRepository (event) {
         event.preventDefault();

         this.repositories.push({
             name:'junior',
             description:'Teste Junior',
             avatar_url:'https://avatars2.githubusercontent.com/u/47598124?s=400',
             html_url:'https://github.com/jjuchoa/ES6',
         });

         console.log(this.repositories);
     }
}

new App();