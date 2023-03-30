export default class Database {
    constructor() {
        let request = window.indexedDB.open('DBToDos', 1);
        
        request.onupgradeneeded = (e) => {
            this.database =  e.target.result;
            let objectStore = this.database.createObjectStore('todos', {
                keyPath: 'id',
                autoIncrement: true
            });
            objectStore.createIndex('id', 'id', {unique: true});
        };

        request.onsuccess = (e) => {
            this.database = e.target.result;
        };
        
        request.onerror = (e) => {
            alert('Ocorreu um problema no salvamento do item. Confira se o indexedDB está ativado em seu navegador.');
        };
    }

    saveElement(table = 'todos', item = {}) {
        let transaction = this.database.transaction(table, "readwrite");
        let request = transaction.objectStore(table).add(item);

        request.onerror = (e) => {
            console.log("Erro na inserção de elemento na base de dados.");
        };
    }

    deleteElement(table, id) {

    }

    getElements(table) {
        
    }

};