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
        addTask(){
            this.tasks.push(this.newTask, this.toDoorNot);
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
    }
}).mount('#app')