const { createApp } = Vue;

createApp({
    data(){
        return {
            done : false,
            newTask : "",
            JSONArr : null,
            optionSelezionata : "",
            labels : ["work", "sport", "free-time", "self-care", "food", "house-chores"],
            tasks : [
                {
                    objTask : "Recruiting blog post",
                    status : true,
                    taskLabel : "work"
                },
                {
                    objTask : "Groceries Store",
                    status : false,
                    taskLabel : "food",
                },
                {
                    objTask : "Interview with John Locke",
                    status : true,
                    taskLabel : "work",
                },
                {
                    objTask : "Football at 9pm",
                    status : false,
                    taskLabel : "sport",
                },
            ],
        }
    },
    created(){
        // Recupero il salvataggio delle tasks da localStorage
        const savedTasks = localStorage.getItem('tasks');
        //Lo assegno all'array di oggetti
        this.tasks = JSON.parse(savedTasks); 
    },
    methods : {
        /**
         * Funzione che aggiunge in maniera dinamia una nuova task al Toboolist, inizializzata false, perché è stata appena aggiunta quindi ancora da elaborare, funzione void, che semplicemente aggiorna l'array in Js e la lista in pagina
         */
        addTask(){
            this.tasks.push({ objTask : this.newTask, status : false, taskLabel : this.optionSelezionata });
            this.newTask = "";
            this.optionSelezionata = "";
        },
        /**
         * funzione che prende in entrata lo stato attuale della task, e l'indice nell'array della task selezionata, per dare lo stato Check/Uncheck inverto il valore che passo dello stato attuale
         * @param {boolean} taskState
         * @param {number} i
         */
        checkUncheck(taskState, i){
            console.log(this.tasks[i].status)
            this.tasks[i].status = !taskState
        },
        /**
         * Servendosi della funzione splice elimina l'elemento all'indice
         *
         * @param {number} i
         */
        removeTask(i){
            console.log("Eliminato!");
            //splice(indice, n elementi da eliminare)
            this.tasks.splice(i, 1);
        },
        /**
         * Funzione che servendosi della variabile d'appoggio JSONArr crea una stringa del contenuto dell'array di oggetti e lo salva nello storage del Browser.
         */
        saveList(){
            console.log("Salvato!")
            this.JSONArr = JSON.stringify(this.tasks);
            console.log(this.JSONArr);
            localStorage.setItem('tasks', this.JSONArr);
        }
    }
}).mount('#app')