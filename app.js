const App = {
    data() {
        return {
            placeholderStr: 'Название заметки',
            title: 'Заметки',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {
        inputChangeHandler(e) {
            console.log()
            this.inputValue = e.target.value;
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        /*inputKeyPress(e) {
            if (e.key === 'Enter') {
                this.addNewNote()
            }
        }*/
        removeNote(idx) {
            this.notes.splice(idx, 1);
        }
    },
}



Vue.createApp(App).mount('#app');