<template>
    <div class="album-wrapper">
        <button class="scroll-btn left" @click="prev">&#10094;</button>
        <div class="album-row" ref="albumRow" :style="rowStyles">
            <AlbumCell v-for="(album, index) in albums" :key="index" :album="album" />
        </div>
        <button class="scroll-btn right" @click="next">&#10095;</button>
    </div>
</template>

<script>
import AlbumCell from './AlbumCell.vue'
import { mapGetters } from 'vuex';

export default {

    components: {
        AlbumCell
    },
    data() {
        return {
            scrollAmount: 220,
            currentIndex: 0
        };
    },
    computed: {
        ...mapGetters('StorePohomovaKapustin', [
            'getAlbums'
        ]),
        albums() {
            return this.getAlbums;
        },
        rowStyles() {
            return {
                transform: `translateX(-${this.currentIndex * this.scrollAmount}px)`
            };
        }
    },
    methods: {
        next() {
            if (this.currentIndex < this.albums.length - 5) {
                this.currentIndex++;
            }
        },
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        }
    }
};
</script>

<style lang="less">
.album-wrapper {
    display: inline-flex;
    align-items: center;
    margin-top: 30px;
    overflow: hidden;
}

.album-row {
    display: inline-flex;
    width: calc(200px * 5 + 20px * 4);
    gap: 20px;
    z-index: 1;
}

.scroll-btn {
    background-color: transparent;
    color: white;
    border: none;
    font-size: 40px;
    cursor: pointer;
}

.left {
    margin-right: 10px;
    z-index: 2;
}

.right {
    margin-left: 10px;
    z-index: 2;
}
</style>
