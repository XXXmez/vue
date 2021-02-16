<template>
    <div class="card">
      <h3>{{ item }}</h3>
      <button class="btn" @click='isOpen = !isOpen'>Открыть</button>
      <p v-if='isOpen'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eligendi aliquam numquam cum perferendis, dolorum amet delectus voluptate. Autem, accusamus.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: 'Item string',
            isOpen: false
        }
    },
}
</script>