Vue.component('showcomment',{
    props:['commentpost'],
    template: '<h4>{{commentpost}}</h4>'
})

new Vue({
    el:"#vue-app",
    data:{
        newComment:"",
        comments:[
            "สวัสดีตอนเช้า", "ทักทาย", "ยินดีด้วย", "สบายดี"
        ]
    },
    methods: {
        addComment:function(){
            this.comments.push(this.newComment)
            this.newComment = ''
        }
    },

})