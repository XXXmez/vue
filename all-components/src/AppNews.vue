<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <button class="btn" @click='open'>
          {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}
      </button>
      <p v-if='isNewsOpen'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eligendi aliquam numquam cum perferendis, dolorum amet delectus voluptate. Autem, accusamus.</p>
    </div>
</template>

<script>
export default {
    //props: ['title'],
    props: {
        title: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        isOpen: {
            type: Boolean,
            required: false,
            default: false,
            validator(value) {
                return value === true || value === false
            }
        }
    },
    data() {
        return {
            isNewsOpen: this.isOpen
        }
    },
    methods: {
        open() {
            this.isNewsOpen = !this.isNewsOpen
            if(this.isNewsOpen) {
                this.$emit('open-news')
            }
        }
    }
}
</script>