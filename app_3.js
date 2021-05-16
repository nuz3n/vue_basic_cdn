new Vue({
    el: "#vue-app",
    data:{
        newData:{
            empNmae:'',
            salary:0
        },
        empGroup:[
            {
                empNmae: 'zen',
                salary: 500000
            },
            {
                empNmae: 'art',
                salary: 810000
            }
        ]
    },
    methods: {
        addEmp:function(){
            this.empGroup.push({
                empNmae: this.newData.empNmae,
                salary: this.newData.salary
            })
            this.newData.empName = ''
            this.newData.salary = 0
        },
        showMessage:function(){
            console.log("save success")
        }
    },
    computed:{
        //auto calculate
        summation: function(){
            var sum = this.empGroup.reduce(function(value, data){
                console.log(data.salary)
                return value += Number(data.salary)
            }, 0);
            return sum
        },
        avg: function(){
            var sum = this.empGroup.reduce(function(value, data){
                return value += Number(data.salary)
            }, 0);
            return sum / this.empGroup.length
        }
    },
    watch:{
        //after computed
        summation: function(){
            this.showMessage()
        }
    }
})