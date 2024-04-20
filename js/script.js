const { createApp } = Vue;

createApp({
    data(){
        return {
            text : "",
            done : false,
            checked : false,
            newTask : "",
            toDoorNot : false, //Da fare False
            tasks : [
                {
                    objTask : "Recruiting blog post",
                    status : true,
                },
                {
                    objTask : "Mobile app launch",
                    status : false,
                },
                {
                    objTask : "Interview with John Locke",
                    status : true,
                },
                {
                    objTask : "Summit update to mobile storefronts",
                    status : false,
                },
            ],
        }
    },
    created(){

    },
    methods : {
        /**
         * Funzione che aggiunge in maniera dinamia una nuova task al Toboolist, inizializzata false, perché è stata appena aggiunta quindi ancora da elaborare, funzione void, che semplicemente aggiorna l'array in Js e la lista in pagina
         */
        addTask(){
            this.tasks.push({ objTask : this.newTask, status : false });
            this.newTask = "";
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
        removeTask(i){
            console.log("ELIMINATO");
            //splice(indice, n elementi da eliminare)
            this.tasks.splice(i, 1);
        }
    }
}).mount('#app')