const instancia = {
    data(){
        return{
            newTask: '',  
            tasks: [],
            completedTasks:[],  
            cantidad: 0,

        }
    },
    methods:{
        addTask: function() {
            if (this.newTask.trim() !== '') {
              this.tasks.push(this.newTask);
              this.newTask = '';
            }
        },
        eliminar: function(index){
            this.tasks.splice(index,1);
        },
        lineDecoration: function(index){
            const completedIndex = this.completedTasks.indexOf(index);
            if (completedIndex === -1) {
                this.completedTasks.push(index);
            } else {
                this.completedTasks.splice(completedIndex, 1);
            }
        },
        plus: function(){
            if(this.cantidad <= 100)
                this.cantidad += 5;
        },
        minus: function(){
            if(this.cantidad > 0)
                this.cantidad -= 5;
        }



    },
    computed:{  
        progressColor() {
            if (this.cantidad < 50) return 'green' ;
            else if (this.cantidad < 80) return 'yellow';
            else return'red';
        },
        completedCount() {
            return this.completedTasks.length;
        }
    }
};
const app = Vue.createApp(instancia).mount('#section');


