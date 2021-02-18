<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: <strong>{{ openRate }}</strong> | Прочитанно: <strong>{{ readRate }}</strong></span>
    </div>
    <app-news
      v-for='item in news'
      :key='item.id'
      v-bind:title='item.title'
      :id='item.id'
      :is-open='item.isOpen'
      :was-read='item.wasRead'
      @open-news='openNews'
      @read-news='readNews'
      @unmark='unreadNews'
    ></app-news>
  </div>
</template>

<script>
import AppNews from './AppNews.vue'
export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Мы наконец-то запустили Vue',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Vue 3 успешно работает',
          id: 2,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'В данный момент проблем не обнаруженно!',
          id: 3,
          isOpen: false,
          wasRead: false
        }
      ]
    }
  },
  methods: {
    openNews () {
      this.openRate++
    },
    readNews (id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unreadNews(id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
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
