<template>
    <div class="container">
        <div class="album-wrapper">
            <button class="scroll-btn left" @click="scrollLeft">&#10094;</button>
            <div class="album-row" ref="albumRow">
                <AlbumCell :albums="albums" />
            </div>
            <button class="scroll-btn right" @click="scrollRight">&#10095;</button>
        </div>
    </div>
</template>
  
<script>
import AlbumCell from './AlbumCell.vue'

export default {
    components: {
        AlbumCell
    },
    data() {
        return {
            albums: [
                { title: "WILD EA$T", artist: "SALUKI", imageUrl: "https://previews.dropbox.com/p/thumb/ACPBPt6dpWda0W-rdSjPYu_WfUtCIpZ1azugGM8ORnjwBdj3_E3Z4GGy0ZzRkbn7hiRIl8xVmI3NE7hzTMBDBrLjuzJeCjELEPoD9yILt0N5EksxUClNnEmUMuNZBJR1H5dHucE0CESvxw-Nx990LaCm__-EFtjojMGh2Sm06SDJz11wlOASQyyie8_XSs6BoO-ht8wdmYe7-cKOLjcP8vZK44m2ZAw8y0zyaWf7-aY_M0vz8TQxbpbfdyiNZrw7rvQTPKc1S1VDJ0maNezQXiyDzHHWcVp3kPOvCWeIBqTWQQZQ04ze8e5AHSk2pu7dFRY4m6D148g-i92Ea7MisH40/p.jpeg" },
                { title: "Shinra Tensei", artist: "tsb, opt", imageUrl: "https://previews.dropbox.com/p/thumb/ACPZIH4-_yQEFPyZDK9--OGEnGg8R8j_XPLMzpXGMi7XW2W8HWqgS3o3qezO7-Y0lWWYjuUgiu-cYM5DIercN0K9LxCCAGNLATzMCYFhW-Cu_HrvbX95ku8kPWVteMrK0aCmg0MsAUFlofuxPcl5GxNpKHDYxR-9eQULF1LbcXzte_SA9BzN1ddLSogWs6J6z5rbjlNR7nvje5USOfE5zxWiMKd5HcBfNpDjwaiPQT1V00klruINNfoNB_zzxT9ns50xWKHX1PnWELZ0H_RG-NtB8sOlIrkWTuxo8ZmfjrgTDTfdRS1o23qeRA8N8nPT-DxWmRc8R1fMQX4zvUuwnNga/p.png" },
                { title: "Cristoforo Colombo", artist: "FRIENDLY THUG 52 NGG", imageUrl: "https://previews.dropbox.com/p/thumb/ACOlsWiJ36jFetaO9EmDf2ggYeO5QBkTHy_6TzaBLKArkH6NaMwLoAuosV6V-u-biHJIXyNG3OZjS8B-XdApNyapzrjpw6k8RwxhoQSiqQa1Y3iQc7tAjPBZKmLIZbo_hmORSHPUr80sEvNb4-R-Wa-XxrK4vqfkhfysaDwgBQWFCHFM44riqmZl7fqmHj3ETlxSSmzKLzvw4jHyHgs-5ZRT0413gC0NIQHmoGzrpAURMFa5OvUlxbIItqDpw48V1JDEeAu-dC8J3MZYVRDghQc4_eAn75238qtzXnWftcFAV-HBUUneYCgKk8PYaeyk7PplFZl0n_UtT_H3vNiyIR59/p.jpeg" },
                { title: "Близнецы: Thanatos", artist: "Джизус", imageUrl: "https://previews.dropbox.com/p/thumb/ACOtFBVG6TtqA8l6gnslaZDZwMVv8zDUlKtjzLlatwHY6LgzM-T5URbL5uxXK-rTHt4IvvmrEI0n5EWZxs4IIudmeN4rb2jcvGoEND1oJf4dNqxRJH-gFGhOhCiA_CTQwIpswIlQd-bNnKvGE43_9sqSj9pe4z2eK-mwTNg1x506chFfy-2QSMxkdOuQgC3Ae6URrgXzZsOYGx_68x7B86P900hNSbPkDLPJbpO6yascxFTMy9X5uOAjmGtn68XOisTyITTOMHjbdlwrRKeiVnnBWtegKc0eERRHYq7RH0D0EWMiz7weumC43-oFeFCj0rL5dsjGAykl7WsPICmxvJDd/p.png" },
                { title: "Близнецы: Eros", artist: "Джизус", imageUrl: "https://previews.dropbox.com/p/thumb/ACNYloSqlNFPqu3USXJGV9zm3q3KT_iGHY_qCVxy3f2estAAbvTELrpPdibxzyomT2hZEBsZMMlXHyfN9ueE54uHJBm7llGEQnF1wI40aZ0y-AvEU1AgCQEvoXA8lfB8wzlL_powHdRsnHU--WbwwqVwK31U73AzhIc6jyY34p3xe5BO2JV00BSbta-69NJlRvz6JCy6R3j5QmEkWTCaxK9aCqUYTn6leEiXLvky9esFnI3qlJkn0-toGjNcstkvLGgGQmtZzZgqSzz-pFZH7CfIjXoHoJ9ny3Savu42X1dRytqPs1aVustHftZDHSun9LEtqRcSOcxY0cmuIolOLNgE/p.jpeg" },
                { title: "Название альбома 6", artist: "Исполнитель 6", imageUrl: "https://previews.dropbox.com/p/thumb/ACPZIH4-_yQEFPyZDK9--OGEnGg8R8j_XPLMzpXGMi7XW2W8HWqgS3o3qezO7-Y0lWWYjuUgiu-cYM5DIercN0K9LxCCAGNLATzMCYFhW-Cu_HrvbX95ku8kPWVteMrK0aCmg0MsAUFlofuxPcl5GxNpKHDYxR-9eQULF1LbcXzte_SA9BzN1ddLSogWs6J6z5rbjlNR7nvje5USOfE5zxWiMKd5HcBfNpDjwaiPQT1V00klruINNfoNB_zzxT9ns50xWKHX1PnWELZ0H_RG-NtB8sOlIrkWTuxo8ZmfjrgTDTfdRS1o23qeRA8N8nPT-DxWmRc8R1fMQX4zvUuwnNga/p.png" },
                { title: "Название альбома 7", artist: "Исполнитель 7", imageUrl: "https://previews.dropbox.com/p/thumb/ACPZIH4-_yQEFPyZDK9--OGEnGg8R8j_XPLMzpXGMi7XW2W8HWqgS3o3qezO7-Y0lWWYjuUgiu-cYM5DIercN0K9LxCCAGNLATzMCYFhW-Cu_HrvbX95ku8kPWVteMrK0aCmg0MsAUFlofuxPcl5GxNpKHDYxR-9eQULF1LbcXzte_SA9BzN1ddLSogWs6J6z5rbjlNR7nvje5USOfE5zxWiMKd5HcBfNpDjwaiPQT1V00klruINNfoNB_zzxT9ns50xWKHX1PnWELZ0H_RG-NtB8sOlIrkWTuxo8ZmfjrgTDTfdRS1o23qeRA8N8nPT-DxWmRc8R1fMQX4zvUuwnNga/p.png" },
                { title: "Название альбома 8", artist: "Исполнитель 8", imageUrl: "https://previews.dropbox.com/p/thumb/ACPZIH4-_yQEFPyZDK9--OGEnGg8R8j_XPLMzpXGMi7XW2W8HWqgS3o3qezO7-Y0lWWYjuUgiu-cYM5DIercN0K9LxCCAGNLATzMCYFhW-Cu_HrvbX95ku8kPWVteMrK0aCmg0MsAUFlofuxPcl5GxNpKHDYxR-9eQULF1LbcXzte_SA9BzN1ddLSogWs6J6z5rbjlNR7nvje5USOfE5zxWiMKd5HcBfNpDjwaiPQT1V00klruINNfoNB_zzxT9ns50xWKHX1PnWELZ0H_RG-NtB8sOlIrkWTuxo8ZmfjrgTDTfdRS1o23qeRA8N8nPT-DxWmRc8R1fMQX4zvUuwnNga/p.png" },
                { title: "Название альбома 9", artist: "Исполнитель 9", imageUrl: "https://previews.dropbox.com/p/thumb/ACPZIH4-_yQEFPyZDK9--OGEnGg8R8j_XPLMzpXGMi7XW2W8HWqgS3o3qezO7-Y0lWWYjuUgiu-cYM5DIercN0K9LxCCAGNLATzMCYFhW-Cu_HrvbX95ku8kPWVteMrK0aCmg0MsAUFlofuxPcl5GxNpKHDYxR-9eQULF1LbcXzte_SA9BzN1ddLSogWs6J6z5rbjlNR7nvje5USOfE5zxWiMKd5HcBfNpDjwaiPQT1V00klruINNfoNB_zzxT9ns50xWKHX1PnWELZ0H_RG-NtB8sOlIrkWTuxo8ZmfjrgTDTfdRS1o23qeRA8N8nPT-DxWmRc8R1fMQX4zvUuwnNga/p.png" },
                { title: "Название альбома 10", artist: "Исполнитель 10", imageUrl: "https://previews.dropbox.com/p/thumb/ACPZIH4-_yQEFPyZDK9--OGEnGg8R8j_XPLMzpXGMi7XW2W8HWqgS3o3qezO7-Y0lWWYjuUgiu-cYM5DIercN0K9LxCCAGNLATzMCYFhW-Cu_HrvbX95ku8kPWVteMrK0aCmg0MsAUFlofuxPcl5GxNpKHDYxR-9eQULF1LbcXzte_SA9BzN1ddLSogWs6J6z5rbjlNR7nvje5USOfE5zxWiMKd5HcBfNpDjwaiPQT1V00klruINNfoNB_zzxT9ns50xWKHX1PnWELZ0H_RG-NtB8sOlIrkWTuxo8ZmfjrgTDTfdRS1o23qeRA8N8nPT-DxWmRc8R1fMQX4zvUuwnNga/p.png" },
            ],
            scrollAmount: 100
        };
    },
    methods: {
        scrollLeft() {
            const albumRow = this.$refs.albumRow;
            albumRow.scrollLeft -= this.scrollAmount;
        },
        scrollRight() {
            const albumRow = this.$refs.albumRow;
            albumRow.scrollLeft += this.scrollAmount;
        }
    }
};
</script>
  
<style lang="less">
.album-wrapper {
    display: inline-flex;
    align-items: center; 
    margin-top: 30px;
}

.album-row {
    display: inline-flex;
    gap: 20px;
    width: calc(300px * 5 + 20px * 4);
    overflow: hidden;
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
}

.right {
    margin-left:  10px; 
}

</style>
