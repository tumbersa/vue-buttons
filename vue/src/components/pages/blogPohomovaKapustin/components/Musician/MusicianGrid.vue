<template>
    <div>
        <div class="title">
            Исполнители
            <input v-model="searchQuery" class="search-input" placeholder="Поиск по имени" />
        </div>
        <div class="grid-container">
            <MusicianCell v-for="(musician, index) in filteredMusicians" :key="index" :musician="musician" />
        </div>
    </div>
</template>

<script>
import MusicianCell from './MusicianCell.vue'
import { mapGetters } from 'vuex';

export default {
    components: {
        MusicianCell
    },
    data() {
        return {
            searchQuery: ''
        }
    },
    computed: {
        ...mapGetters('StorePohomovaKapustin', [
            'getFilteredMusicians'
        ]),
        filteredMusicians() {
            return this.getFilteredMusicians(this.searchQuery);
        }
    }
}
</script>

<style scoped lang="less">
.title {
    color: white;
    font-family: "Lucida Handwriting", cursive;
    font-size: 30px;
    text-align: left;
    white-space: nowrap;
    margin-left: 10%;
    margin-bottom: 20px;
    margin-top: 40px;
}

.grid-container {
    display: grid;
    margin-left: 10%;
    padding-bottom: 40px;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.search-input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: 10px;
    background-color: black;
    color: white;
}


</style>
