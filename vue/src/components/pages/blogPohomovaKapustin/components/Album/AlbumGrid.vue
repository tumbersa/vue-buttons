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

export default {
    components: {
        AlbumCell
    },
    data() {
        return {
            albums: [
                { title: "WILD EA$T", artist: "SALUKI", imageUrl: "https://previews.dropbox.com/p/thumb/ACPBPt6dpWda0W-rdSjPYu_WfUtCIpZ1azugGM8ORnjwBdj3_E3Z4GGy0ZzRkbn7hiRIl8xVmI3NE7hzTMBDBrLjuzJeCjELEPoD9yILt0N5EksxUClNnEmUMuNZBJR1H5dHucE0CESvxw-Nx990LaCm__-EFtjojMGh2Sm06SDJz11wlOASQyyie8_XSs6BoO-ht8wdmYe7-cKOLjcP8vZK44m2ZAw8y0zyaWf7-aY_M0vz8TQxbpbfdyiNZrw7rvQTPKc1S1VDJ0maNezQXiyDzHHWcVp3kPOvCWeIBqTWQQZQ04ze8e5AHSk2pu7dFRY4m6D148g-i92Ea7MisH40/p.jpeg" },
                { title: "Shinra Tensei", artist: "tsb, opt", imageUrl: "https://previews.dropbox.com/p/thumb/ACPZIH4-_yQEFPyZDK9--OGEnGg8R8j_XPLMzpXGMi7XW2W8HWqgS3o3qezO7-Y0lWWYjuUgiu-cYM5DIercN0K9LxCCAGNLATzMCYFhW-Cu_HrvbX95ku8kPWVteMrK0aCmg0MsAUFlofuxPcl5GxNpKHDYxR-9eQULF1LbcXzte_SA9BzN1ddLSogWs6J6z5rbjlNR7nvje5USOfE5zxWiMKd5HcBfNpDjwaiPQT1V00klruINNfoNB_zzxT9ns50xWKHX1PnWELZ0H_RG-NtB8sOlIrkWTuxo8ZmfjrgTDTfdRS1o23qeRA8N8nPT-DxWmRc8R1fMQX4zvUuwnNga/p.png" },
                { title: "СХИК2", artist: "Кишлак", imageUrl: "https://previews.dropbox.com/p/thumb/ACPDlQWZv76RQGARnvd36Z64ijrvYtSK4g_gZGIbMXf_bxu6J-33YWwP6iDzeFyKpLAWQ7WnIoasJLNRB6lbHFsEbl90_PDhWYzQXxxX2VboutikjL_SEkOANzcITcgivzEzS-H46r4r95lEUS_MMKMw2GQyrcJzTZSNYo3LRC8PQqNfA8VfR18liFFEZcfu1vg9xUPPdzTfCTC12pJDUrTMtCcrNOqFIMHtAQuFkyIdgKzi3wblSNq4OF4-wOMsNxuN3aoiB7bInOBsDElEszWroeiXuUQE_75nMAKWFeflNTekshs5P_m9OaRFAICmDMa8pYDbpLrF-QjgmJe_f6mc/p.jpeg" },
                { title: "Близнецы: Thanatos", artist: "Джизус", imageUrl: "https://previews.dropbox.com/p/thumb/ACOtFBVG6TtqA8l6gnslaZDZwMVv8zDUlKtjzLlatwHY6LgzM-T5URbL5uxXK-rTHt4IvvmrEI0n5EWZxs4IIudmeN4rb2jcvGoEND1oJf4dNqxRJH-gFGhOhCiA_CTQwIpswIlQd-bNnKvGE43_9sqSj9pe4z2eK-mwTNg1x506chFfy-2QSMxkdOuQgC3Ae6URrgXzZsOYGx_68x7B86P900hNSbPkDLPJbpO6yascxFTMy9X5uOAjmGtn68XOisTyITTOMHjbdlwrRKeiVnnBWtegKc0eERRHYq7RH0D0EWMiz7weumC43-oFeFCj0rL5dsjGAykl7WsPICmxvJDd/p.png" },
                { title: "Близнецы: Eros", artist: "Джизус", imageUrl: "https://previews.dropbox.com/p/thumb/ACNYloSqlNFPqu3USXJGV9zm3q3KT_iGHY_qCVxy3f2estAAbvTELrpPdibxzyomT2hZEBsZMMlXHyfN9ueE54uHJBm7llGEQnF1wI40aZ0y-AvEU1AgCQEvoXA8lfB8wzlL_powHdRsnHU--WbwwqVwK31U73AzhIc6jyY34p3xe5BO2JV00BSbta-69NJlRvz6JCy6R3j5QmEkWTCaxK9aCqUYTn6leEiXLvky9esFnI3qlJkn0-toGjNcstkvLGgGQmtZzZgqSzz-pFZH7CfIjXoHoJ9ny3Savu42X1dRytqPs1aVustHftZDHSun9LEtqRcSOcxY0cmuIolOLNgE/p.jpeg" },
                { title: "Cristoforo Colombo", artist: "FRIENDLY THUG 52 NGG", imageUrl: "https://previews.dropbox.com/p/thumb/ACOlsWiJ36jFetaO9EmDf2ggYeO5QBkTHy_6TzaBLKArkH6NaMwLoAuosV6V-u-biHJIXyNG3OZjS8B-XdApNyapzrjpw6k8RwxhoQSiqQa1Y3iQc7tAjPBZKmLIZbo_hmORSHPUr80sEvNb4-R-Wa-XxrK4vqfkhfysaDwgBQWFCHFM44riqmZl7fqmHj3ETlxSSmzKLzvw4jHyHgs-5ZRT0413gC0NIQHmoGzrpAURMFa5OvUlxbIItqDpw48V1JDEeAu-dC8J3MZYVRDghQc4_eAn75238qtzXnWftcFAV-HBUUneYCgKk8PYaeyk7PplFZl0n_UtT_H3vNiyIR59/p.jpeg" },
                { title: "LONG LIVE 812", artist: "ALBLAK 52", imageUrl: "https://previews.dropbox.com/p/thumb/ACMyZ-LjV_m5alOOpvrgxH9wf8hMN1gsn9E9N9TVNuxfMfV6tMLExTTH3KwtYx_05JBO5UgWQM7XJLW-hZvPBwGBF09Y3tGjLog_LcgEGhN1gkuG7ZxSXnf94G2WzzmQo1BkgvD0RblnS74vJs3-qivG2stnKKeCJ407r3WgJBXFT6-ObHDmLIkSegIV1BWX_KpGrDgdIZrVgbM2vrCMo4X0UaBI4V7tPe4PVbSIJ4gMnwvjskThwRPHoeETqGBE38OcZ65f1LYB3sDVJqqlRDg3LKEIgP9O8kfvwwboDhvT_YZkG9UI1yDbm8rl0uHTYk7po1BymENQJbH_v_DXKLT1/p.png" },
                { title: "AA LANGUAGE 2", artist: "Aarne", imageUrl: "https://previews.dropbox.com/p/thumb/ACMUuh0R4znBNtGNSdhuYmqu2B-4zBsNyAhEsUOhGRwnUClKowDJSJpnKpB8ElVETmdSCS6dPXmMDb0M6ovyQ9rh8StOPQ2BBtDMhbrqCTImGue6O3awiG0N8HDPyT18-6006RhQ9L0_OfhpeoO8A45mw3kG-JgW5plMeOjcKv20cBn18_hymuHA55eq7Ne852NaUucFoo3N-b_ax5_rf9g9l-U3OCXrLwHuv5_vT4DXhKi5Il5aFSz_Npwbd0QSkV_GIQWnaaqwY4NLzEAOjRN2Vj7E3Fkpeq1MtJa8yDmULnpjb-kCudyaHHXmEynsW7Y9Y_NMsOdCZrYZqXqA2_6x/p.jpeg" },
                { title: "BROKEN SEASON", artist: "ANIKV", imageUrl: "https://previews.dropbox.com/p/thumb/ACOdC5wIJZcITnMrMJYCYwIH0vIa5EfpGy24XOjvCoHYX6L1MBirNHrJkJ6bviyeeY8ORfwHDsi-SBAtlLjhR6rFro64RuwKd6Jr6ZdJAhRlVwOrH_EkW4Q4ljoMyCclTNF6qrdLmU9WTRWHHWWAofWtZEF0r3ywfVlfDYRxV0ZbIo-Wzj50yImqyTuapBg-AVuLOQMPuMi2plJGFup_fNN1VB-XiqYM22u85n-46G4ci7GvzLKOHcbQ8mIonEZha4RABnPPqVnPeGNMAOhIKluCAhiojMEbBogIE6TBM8ah9afBK2qkLR3HSuSmvaAzcMXfdw7zlHNhlAKoo_QRGWQq/p.png" },
                { title: "СЕРТОЛОВСКИЙ ТОКСИК", artist: "Boulevard Depo", imageUrl: "https://previews.dropbox.com/p/thumb/ACNZE9dIXxmEJN1c_nvNZCctzdFzIHr6oA8YE0LFqwjwQytFwSHPW_NEVSndpCBVroPNh7a3aud5KVGOSeIQzgEDcOR-ZhGYdfsgngmcNs45q7ynPZvksVJvjL9B-DxZEHDAK0VxcVgnetgvyPehdgms15ODVFl0_opyVKe5hxs0643xeL4JdIAbUMVmq3Ty5qLMtBHfPG9cetf8sHM1XV_wtd6DZU7yTFOesM1oUxXm6mrrGbozeh0HSj8XMx2nrZjHHptoKBLMLtk4bSLrQRkSNtowXMf_nwsdDxCOOIGoH8D7hzW_YLy1isnZcKwkCCUaWnnyYDos-r8Nq6ZkrNpL/p.jpeg" },
                { title: "ИКОНА", artist: "прыгай киска", imageUrl: "https://previews.dropbox.com/p/thumb/ACOsujvO4hC_RzePtGiEQAug_bNk2LXUbMkW-FoPIpHDC84ZZC8pHscmWCA5ZlS3N7kMnZ1x-xxoYaSfeaoie_PuFA1hlAJw2GTLt191mLautgGrZBN2E9_iK6NAozeZL0gJWLY2l-AWU0kdF0Gdm1Ca1-Aiqvbx3M6OkepU6drwBNLID5Pa-btG2m1Z4Atr-05DmbA7F17ckay7qgYhQk8QzJZZHa5Y4xtFcGF89EdwysU9qHYov-NFVnRkntffLNRLcEkKPN5Htd4-b6y4HOMq6dpMOyE_F_N0uM1o0EUBp01_hnyge_SFqijrU6oYSSmrn_u-Ul1GRCJdkBapIvs0/p.jpeg" },
                { title: "SHELBY IIII", artist: "i61", imageUrl: "https://previews.dropbox.com/p/thumb/ACNhWx-mBuEpENag0UlBlnBAnQia_eKYLh3yKPIpjrSfrvyLVSL1djszk1H-5emXn6Sag-Gm0dkq8X-ytC61t_iuS7tv207lL9l5t3qIPagzFqU7MCJchwhbwLlYv9corX7MkqY5Aa8zjOtrhBQeWEThL1IGZyNTMiM9lC3z6uJZqUfFFcGZg_s3uA63nx-rUhjEFty8K8F1mJYvsCogXziKcLhe40lREyJ8CxsBVNPiG8JzjCHxn_GOzg1VmuHXg30Wr6nwU3bQqqt4a_2yT8n5aydH6utJ4ssnJbAER5RCnYXNXrD0QOujfu8AWN1yV7IZ-RbPr72ZpZN4A15UL-Ez/p.png" },
                { title: "Несчастные люди", artist: "ЛСП", imageUrl: "https://previews.dropbox.com/p/thumb/ACPyMD7NaYSWAQvW5J61lJ-vn83H1C6guGlnuI0i3N5deKJukoRIT4NQ5rlPOydEOCbg4ZPGiBmh9gesN2M_UAJuk6s6bV-ctiNtzNKSXJDj8XRphynZmBuIZcvdVl37xztJ1fvta9p6vs7ssh43lHzTXb969t2Y2ktPcIX67eaCxqjCZP7q1S7azpuRNYPyFtI8q-nmOHJ2cpO9aX8xfDFRBD3NYtuuibMnOFbdSsIT292Kd6D6CUiV32ZRk4Uftpq8XEYSQu021DjrcOpHqal2reHQC6cskoeIrEaAQ4gIHxi0Kf5ldTI7BvC1nygFZraTK887X0IERsmyfcQqiMWH/p.png" },
                { title: "SKYWALKER", artist: "ROCKET", imageUrl: "https://previews.dropbox.com/p/thumb/ACOrWKV-MS2AbYeA37DWTcVpqI-2UEZAxgC44Q_ffrbqHuJcsy-Re2zkSk_8dJ-siRhzaJs5kmWF9IvpS1Pz7I7iRO86IYpGW__hOldI6tEwiAOT0VAt6kVgVXvsQnVp3LHnK17toOCrK-InDn_6ImiFW3jC1fODGHbhcxGq5L3IPhlaJ8l6r0ZMr8-1CfOIpOUgteOhdKyZffbLQw9GtyexC-Y50qYP7EzDmNIf3u_blZOuny8UYFuYWunHbmWaQ1bUv1TLD-BfA8eCsOOqvMVdJ0iII0pBtnXKCcXShO3msDYuqdZgm5JYkmnrm6Z77-KohhcS010khRI83hWggfxi/p.png" },
                { title: "DREAMS MONEY CAN BUY", artist: "Heronwater", imageUrl: "https://previews.dropbox.com/p/thumb/ACPs6UIHHQrG4VgOuy2yrfSggSgFGJ6rBPEQ5m2usIGnZ88EsPth9NnCSSk_i4911U0I9W9-W0Iy9CuUXVROIESV5beyUWgOtxoTAvDM615JK9iWsMLrGiNC3MyQyoxLUHgV1c5W7kY5ydz1fv22y83ntUHAf5BJSJYJIQMhdRI3DNvdISwT1LbAho3mzedtWihBIlOmoRP6dS02f_quHPpcKK4J8LAKPRp8Xp0youHkGKuKpUXDzdyYepupKclfeQu6ebwEq6K-jFxBd5k3-yJXrTmFMToCSQZem-orbU4lZeT8uHLSbpNXWco4M6OP2xXWzX_m0cLQg_TWqz2ISOeh/p.png" },
                { title: "HEAVY METAL", artist: "Kai Angel, 9mice", imageUrl: "https://previews.dropbox.com/p/thumb/ACP_jkTRUNEnMPfrhNpWhIC3_Tx2rP5NXGhV6Vcdi9wBRRF-TZmSefIZTGtuul3Dmk-gB5rf17vx9o1ID13wjjsK_abqtsauuTJYHZjs45furX7Zpp_i2dbX-yYTNOo-lrrVzZf5OFC92nW1fes9LGHhGXBwWLpHDya3OAZyEOyjSkci1tIZl4nbVoxJc4PSHPkBKpDDGKCL1IrQQggafyYcnQmgym03n2CQXgPe6Ev4FU_4tLwtUw_wfQ-kEf-vPH6XXmIxuX8dCXrG8dvSI2ddj1vSaS_14pLQfSUoz7eMO2q1Q6EwzAtySOBMV3sYHQz-2b-4KDbOYlEUZCq5yWQ_/p.png" },
                { title: "Платина", artist: "Платина", imageUrl: "https://previews.dropbox.com/p/thumb/ACMvdcvjRHM-er5mQCnTAVxWQfOjxzRxwH7mg2J9e_pAR31VyUBv1mxNIyHx-Zrs65Um7SCVqZR43nd7uyrzNircFeGjU3c3rwcxzl_1a1FvG6aufLgaVlsXMrJgHz1IIwcNsOqQXeyRZUoKQYhFOPvAW87dTnUt45p-_QLqgiIuzoi3HIS53FrKsPAqgcyb1akK-P8m9lVY8vKmKrjKW4XuFVRk8sQP-YEvI_t4TwY5ZaQ8NNJqKzXe3131YHVrITR1zCZZ59kajnKR-G9PcLcInjTufe8XjokFlVOm_wcoe4zEcsgBOe0xRSGXIlNV0vON-1CKq2C6a5ZydswwnXma/p.png" },
                { title: "Злачное Место", artist: "BOOKER", imageUrl: "https://previews.dropbox.com/p/thumb/ACNeW9ZdW9FpbEeewe4SJk6_l351IiJqqKgQjcZYjqj7_l7B8xfDEwAk7DMLuYestorJXKnbwRCRfYP4pPSoepE1fK37ThQmpNvJ2HYeTXQCMD9fAWaqqJ1kEZqPrOuVVHF3Mtzjusd4Zh-69K1EwPfs4LvhWFZwe80OVwc5cvTSDLUolELt7tD62CmVCfxPeLX1Lrugp1y3UfEoD6zCpZE7eLr1chTrqTWHswZo-Hc-xViyNh91TOGfnKR2SJKvoFdclDKWqZ5tIGuFiWaSjxK0DER3pODrtE40-jBUK-rvj30ZUDWbAJJqrPhSqk1CX-iIzBKF0kwhygit9_6G71B1/p.png" }
            ],
            scrollAmount: 320, // Adjust as needed
            currentIndex: 0
        };
    },
    computed: {
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
    width: calc(300px * 5 + 20px * 4);
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

