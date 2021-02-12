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
        /*inputChangeHandler(e) {
            this.inputValue = e.target.value;
        },*/
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        /*doubleCount() {
            console.log('doubleCount');
            return this.notes.length * 2
        },*/
        /*inputKeyPress(e) {
            if (e.key === 'Enter') {
                this.addNewNote()
            }
        }*/
        removeNote(idx) {
            this.notes.splice(idx, 1);
        }
    },
    computed: {
        doubleCountComputed() {
            console.log('doubleCountComputed');
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {
            if(value.length > 10) {
                this.inputValue = ''
            }
            console.log("value", value);
        }
    }
}



Vue.createApp(App).mount('#app');