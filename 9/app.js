Vue.component('todo-item',{
    template: '<li>This is a todo component</li>'
});

Vue.component('click-counter',{
    template: '#click-counter-template',
    data(){
        return {
            count: 0
        }
    }
});

let PlanComponent = {
    template: '#plan-template',
    props: ['name']
}

Vue.component('plan-picker',{
    template: '#plan-picker-template',
    components: {
        plan: PlanComponent
    },
    data(){
        return {
            plans: ['The single','The curious','The curious','The addict']
        }
    }
})

var app = new Vue ({
    el: '#app',
            
});