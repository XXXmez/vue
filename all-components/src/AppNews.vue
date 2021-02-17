<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <button class="btn" @click='open'>Открыть</button>
      <p v-if='isOpen'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eligendi aliquam numquam cum perferendis, dolorum amet delectus voluptate. Autem, accusamus.</p>
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
            //item: 'Item string',
            //isOpen: false
        }
    },
    methods: {
        open() {
            this.isOpen = !this.isOpen //3.40
        }
    }
}
</script>