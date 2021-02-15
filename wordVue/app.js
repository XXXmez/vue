const h = Vue.h
const app = Vue.createApp({
    data() {
        return {
            title: 'Это свойство из template'
        }
    },
    methods: {
        changeTitle() {
            console.log(this);
            this.title = 'Изменили!'
        }
    },
    /*template: `
        <div class = "card center">
            <h1>{{ title }}</h1>
            <button class="btn" @click="title = 'Изменил!'">Изменить</button>
        </div>
    `*/
    render() {
        return h('div', {
            class: 'card center'
        }, [
            h('h1', {}, this.title),
            h('buttom', {
                class:'btn',
                onClick: this.changeTitle
            }, 'Изменить')
        ])
    },
})

app.mount('#app')


const date = {
    title: 'Vue 3',
    message: 'Заголовок это: Vue 3'
}
const proxy = new Proxy(date, {
    set(target, key, value) {
        if (key === 'title') {
            target.message = 'Заголовок это: ' + value
        }
        target[key] = value
    }
})

proxy.title = 'React'
console.log(proxy);