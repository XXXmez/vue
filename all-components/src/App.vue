<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>
    <app-news
      v-for='item in news'
      :key='item'
      v-bind:title='item'
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
        'Мы наконец-то запустили Vue',
        'Vue 3 успешно работает',
        'В данный момент проблем не обнаруженно!'
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
