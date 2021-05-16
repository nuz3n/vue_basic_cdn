new Vue({
    el:"#vue-app",
    data:{
        name: "Zen",
        job: "",
        age: 33,
        status: false,
        count: 0,
        website: "https://www.google.com",
        foods: [],
        gender: ""
    },
    methods: {
        getName: function(){
            return this.name
        },
        setName: function(value){
            this.name = value
        },
        addAge: function(){
            this.age++
            console.log(this.age)
        },
        subtractAge: function(){
            this.age--
            console.log(this.age)
        },
        addCount: function(value){
            this.count++
        }
    },
})