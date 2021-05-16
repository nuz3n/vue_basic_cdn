var post = new Vue({
    el: "#post",
    data: {
        title: 'โปรเจค A',
        message: 'รายละเอียดจ้าาาาาาาา'
    }

})

var comment = new Vue({
    el:"#comment",
    data:{
        text: 'ทดสอบ'
    }
})

var likeSystem = new Vue({
    el:"#likeSystem",
    data:{
        like: false
    },
    methods: {
        changeLike: function(){
            console.log(this.like)
        }
    },
})