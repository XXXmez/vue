<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>
    <app-news
      v-for='item in news'
      :key='item.id'
      v-bind:title='item.title'
      :id='item.id'
      :is-open='item.isOpen'
    ></app-news>
  </div>
</template>

<script>
import AppNews from './AppNews.vue'
export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      isOpen: false,
      news: [
        {
          title: 'Мы наконец-то запустили Vue',
          id: 1,
          isOpen: false
        },
        {
          title: 'Vue 3 успешно работает',
          id: 2,
          isOpen: false
        },
        {
          title: 'В данный момент проблем не обнаруженно!',
          id: 3,
          isOpen: false
        }
      ]
    }
  },
  components: {
    //'app-news': AppNews
    //AppNews: AppNews
    AppNews
  }
}
</script>

<style>

</style>
