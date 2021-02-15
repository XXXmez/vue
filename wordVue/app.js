const app = Vue.createApp({
    data() {
        return {
            title: 'Это свойство из template'
        }
    },
    template: `
        <div class = "card center">
            <h1>{{ title }}</h1>
            <button class="btn" @click="title = 'Изменил!'">Изменить</button>
        </div>
    `
})

app.mount('#app')