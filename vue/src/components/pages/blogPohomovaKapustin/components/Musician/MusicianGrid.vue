<template>
    <div>
        <div class="title">
            Исполнители
        </div>
        <div class="grid-container">
            <MusicianCell v-for="(musician, index) in musicians" :key="index" :musician="musician" />
        </div>
    </div>
</template>

<script>
import MusicianCell from './MusicianCell.vue'
export default {
    components: {
        MusicianCell
    },
    data() {
        return {
            musicians: [
                { name: "D.K.", age: "27", genre: "rave", listenersPerMonth: "414 314", imageUrl: "https://previews.dropbox.com/p/thumb/ACPrF3SJGolcXh27UgDJQv5Gfqv8V8k4uMAyA2D8UpdoUpKebhwOuhs_LB0A3rf1wQe249RhGmLPza-WPLWaBq7dtQiCXIHfd6RM-uoZxd5bCyFLIhmzkD4KAhBSQOmyqh2_ezspM2zudv-4w9FI0Imb4E-ymIFBny2039gJ1C96d9yWXY9hzJv61iSpacNn2ebWohvmmm7948sEaQ8IRM_-tG1TaD7AlSubQ_qfvyZ63Q-sLOs8ir4jjuo7k2HpukUCKo3JBb2yFgNiWC6aQTDL_Vrl0HrGOl41yxgOmfEM0VgmlnZpOPV3lNC_dl2wH5R7z8n8QvrVEtodKJyYN0H-/p.jpeg" },
                { name: "Boulevard Depo", age: "32", genre: "rap", listenersPerMonth: "1 604 753", imageUrl: "https://previews.dropbox.com/p/thumb/ACPoErkHaxeLGAMnagpfzDz_ay38kSsdV5MrXXaHWYpRZ4cgVaG7K7KiC7kX_xT_KLv-i1V-aBJDNAWJTrOzttUkfWSXLdgqk8Td8-Os8a3PQHAdugkOjg7V5qj5mXwuz_SLzarabGWpdalxLXOOYoUuHN8tlqoHOcyX-MFmqkEaOfn-3pFsw9RvkEOn-0fchTty_s_pYsX09OuprB_BiVZlryMDlbrrfZwsw2obKyI2LhaARHLeA5BpKFlUr1vEuT7a06ndkmx7XoUldoWT0Uo_6nOBcMOFW5nCYB7CyTxBFCD9zLunsKbqs5tlD54X2cWhBZbJd2EoUfp_zY1MmxHj/p.jpeg" },
                { name: "Джизус", age: "26", genre: "rock", listenersPerMonth: "708 069", imageUrl: "https://previews.dropbox.com/p/thumb/ACPz7zlMJd9u3xBXj8GmmGmORNOJ1lavt1MdomhvS3yXmPGgXAVSf9DyCUbzgCmnM37Vd-aZ9JFOlM3eWlizcGB9A_NXDTWe8QROKWbotN3y4Dol04nR9Wy913zCkHTFVPmHVomwmjQR7b60QIo4hG2HSfZzv93M-cvvWBixILtkJEAHt3kxxaQZhD2t1qEGcYh-MO4nS3EgNL55-4XyQbuoFFrf4L7TZ2diJ0OPZworaoCP_cDwa0ASc8EuKaqZUEgLlvoUDpo7OyMxVsX8a1aRKfpwAYzfnHQifFCOT6wCKOplR0gcPEYCHyRxuzu3aaQFoTLOH8ha2w74CMCkliqr/p.jpeg" },
                { name: "Кишлак", age: "25", genre: "rap", listenersPerMonth: "977 873", imageUrl: "https://previews.dropbox.com/p/thumb/ACMExU9uJjyB5crgen4yt8j1D_54gpACVQQLsGw6FS6SVq0wwnbZMpU5JGu4htBjrKYl-mL7EJpe37uQ1tuQbqSE4WsMpO_P3oj6JLl8AEqVeSvNPC2UhjY8VUGUZmfj6qwmDxXV_tZD3S1HgAoyVnEYche6MDncZLYL2CtbLrmzBd6Q1g2-k7FSup9IuoF8L6rcdNEe4HoNZVwVKol2HLCsZ-RXyf_mm2MU3xZ8n3mC7p74e7Pm-MvGUAl1BIrnhOSl2SmrGuXNK-Yfcv24RqBnUwmdIceWR6QPcZhN5UNFrXLOFLYSRVhjJm2dXga2buor0uMNDaKQhSHLRJ-uu_k2Oi4Q0LBiYiOOupw99O2xzg/p.jpeg" },
                { name: "Saluki", age: "26", genre: "hip-hop", listenersPerMonth: "2 269 649", imageUrl: "https://previews.dropbox.com/p/thumb/ACOyV-lLCwsm9o0LPdJcT6LT6veY1QWa5SZV-20tVz4P1xnWE4dfzHejSqdWcQJ_cPbjgljPAfX1Tgi_fpst-vNLnKw5ta9AuSbjFT79pwoBlbbQ-H__CReEPdW-Cn40mU79Vuzxwl4qz3OxMh5russpTY1d7HGZyBbu8gA_BY_wfnn6yKfEN0VWJ6N_AzIhX9HemYQVsN9NOKQPU1i0IamhtNOVZEKFUthGxK6rDPaTAaYsa-gjv3NRAy1EtvXr-mVgv_DLL5smInglB92UfE0K-fqhBQUnpf3Z3nX2fvAryxh5tdhQt2WhOS2kAE0panEhnmjYv3cJlu_oUd3SC4OK/p.jpeg" },
                { name: "TSB X OPT", age: "???", genre: "drill", listenersPerMonth: "263 622", imageUrl: "https://previews.dropbox.com/p/thumb/ACORNy48goSiarrE-g2PcgdoKv1oWdFf1eiTt3v4FXuM-cseHixnvfILXSUZBY3ivhDm1_snVGv3ifgdNqxHsMs-Pew4cWaWd67nf3b0_PCpN3GdDCHfENs6s28JlhTmIjcg1KGZb5Z1-tcbOXtE1BKN3yZegbhGwnM44J-PnrXtkfU66rBh3_o6HFLsQUR826mY604SV4Hflvlw7zTAyc6WuiZ2v3HpMwaj8h9fDhpa0ppbqM9thcM89mDsEaI1htXAGFPGzOHJ224RgUpMhJl4gwm7_kUvG3W0xaRzsRX6taouULgTEYC0vTAGIIPDeocN9C3ilcksNRqkFTVfEFZj/p.jpeg" },
                { name: "FRIENDLY THUG 52 NGG", age: "23", genre: "rap", listenersPerMonth: "1 427 323", imageUrl: "https://previews.dropbox.com/p/thumb/ACPASM2cuIiAlk-1JUE32cWGjEV6KfTqPR9H9lEhwCdSRGqoVTSGQdvY4eymxQeeF1mvJ8hhZ-UEAjHvIWqFVkZ6JHb1VYPAjuZRvFdHIDlHEBfEBRG9GlJSKNKPs43D3Eh2Hr-iNnHB4LtImrjfVCEnvlnHuMJsHM2JmoLQ3O57uya55ZwvJLrGKpHTAUloIpoPomBCc-sgxcNROTvctQ9OHZ7bUfyzYaFmVYj60Cf7nG2o4wNf1fMvB621mOMQtQ0LzqSKohXzzPVvr_hQbUiiwBJahzXqtSgyCKmWy_6a5O9czFhABf6y7aC14f7LxaIA8GwAJhAD9lKEkDwJpfajwJ--Kbqae0_6Z56UILfX5g/p.jpeg" },
                { name: "Alblak 52", age: "24", genre: "rap", listenersPerMonth: "1 816 111", imageUrl: "https://previews.dropbox.com/p/thumb/ACMziB__LU4g6uWqDwBWpy40zWRAataXhcthfZ0gHOHT7vaAYd14GzBHv0D13E8VoCFl2fyKnEfA-6OF4RqeBmGxFenWWJRsAYB1CG-pRNvH33VsY2FP2OI8SdvurMwcHQoOIKZ4CySKA0usAOdDZRqqOm8HzMaSypGJ0lJMm3LmIGKACJZjxYkRoNmuGUWEBi6T_FHu9D3KHS8T5Uy-hHQfe9LrWE3Vxm057gDH4I7_Y7NRO5QJSXEsaHUkYW5SAsr2O8nzuE-cBWiVxDYWz1fVxuE0vSxRoyh0Y7fozHkz6v_vYJK9J_u1_SX_IGMOHabSVDBncLDHTAfrEXiN-XqX/p.jpeg" },
                { name: "Aarne", age: "23", genre: "rap / UK garage", listenersPerMonth: "2 749 751", imageUrl: "https://previews.dropbox.com/p/thumb/ACP9yjWF1oz7G2VfsaZei5QE8IeVVgfznFST3l-rys_94XMqtbAIokjQt8Kpv4eY43yzEnqfVSYvij-OjG2L3aH-7okPEqhNE-onE_8Ot72nEDIpXEI0sLJ3RdjySvXjtyMCyCtb6pZ9dQsyAGEvRUNuY6pRUztEcBUlFdLMSEx7kgRHc_UZxgLWhKgfQrI78vn0H92YRXGZ0FanyQv63W23X44uC_FORHUCMGAsbOEbG-4202f85OIYZfeBKhX6cmYfOqIAkEdXMy_MCJoQ6D6KL2nV3sPn9S_vnEXY6B3Qz4CpJJwRPuYqMawUVf7bHuyy7vWxC0nkkEakcdNtRL79/p.jpeg" },
                { name: "ANIKV", age: "28", genre: "pop", listenersPerMonth: "2 481 745", imageUrl: "https://previews.dropbox.com/p/thumb/ACNCMyfy_eZ-TvMVhbr9AVKiDKSzWOm1lXHgnI63tWIqR9yLzBOcRuzLu-e-gV134TvlCIrANZBok0Ut52Q21LU8D5LwRQdc_0pUEpKXAvY06xhD6VUbNnsYt8855tT_p-lqBwI5d4rzy8Wk9bpZ_10NnC0Tuh6qB-hzBdEXZ2IUpi6iWQRJliRwVm59oK8CSg0FGbyDIh-YEr01J06CH0l3sPni2ZCn8qd3ko1f-SJ3NxJx7XQrSWk5fO5b7SRVCrEdOKHs-5sY7jaGy9vaUUuOcDLJHuz0qYMP4Kpua9x8rIX6IMtjfz8wPagT-z0fnqcqRM3DnnMjWz7Yw-F6VCFN/p.png" },
                { name: "Петар Мартич", age: "30", genre: "rock / hip-hop", listenersPerMonth: "134 402", imageUrl: "https://previews.dropbox.com/p/thumb/ACNDVVYrbIdzm-lnmSem5PJIWC21qrWGhxU653_vyp14YJVSvMYzdS4T9SPOH3W8M7xymU6-OoZc-ku-u75S1Hurh1rpRLfTbj6fTbQohGGsY62gGCbOpyd6IQzegAXRpPCDvpUnt_K21Tz9vx8wpMBMvmcg9XAZx6zZ_GG9tX3mWgvWvokbHiDFtdA9hhnXwTA4GXDhffaN_ibnQSYvY9xqDGEBpa0gpBU3ZJJdW6eTqSsePrnXZQqOicVj2lbeFOOk4AougXJKnyyQ0zjXmdt9alMdWP1rzYOvzNaWe7DwmVeeyiPY8RrNFUsR0KHd8hhNYOuAYGE2l5-cqpFYI0HG/p.jpeg" },
                { name: "i61", age: "29", genre: "???", listenersPerMonth: "354 804", imageUrl: "https://previews.dropbox.com/p/thumb/ACO8vk4phEHz9YTVEtPPRs_gnNRWauUBzK5Al6Y8jrjUxe-CyQAGtaOEWafy9JgUsizrsZR6oK21O4qU17OG2DdnW3FycKrFlhknJGTlF_B8u9cKOGQeCAxG5UT8aVImFtTWTQ8KQhp4eGlvK_w3hZWZqqHuD0uNxHGQ-1d84BC6gvLEsx3EpRImTYMXeUrfcFgVSE2hwrMBbtwHM6O6WlscqHUzpBpky6SIlezeoANrwNcBcaV0LDlwGb-WQDGIZ8zIhyThtpwTIoN-6_tOZPwyv3NUqFN5dcJpaCaSJ9OMOJl8dFXTvfwq90XwMzu32e-gGBXonOrpE5DFYyaVXLNq/p.jpeg" },
                { name: "ЛСП", age: "34", genre: "electropop", listenersPerMonth: "2 821 600", imageUrl: "https://previews.dropbox.com/p/thumb/ACPTvnKOCAsRoCJU1C5zn4yf4wxgpaxtqQoZYXAdAKAimRJz-f-gwsBPsq4U3QgvnFabqdNa00ZkPPd9NX119U5CpxNoqJ0AejtmPfo_QdrmLhZQTyVzxtde0E-NH5QPfJu4AFbbO81m4WrY_O2pVT3ODkA-HUqaSwMLvPGOW9BIl4y8Qd34g73HkHAdmhTqGYI1XOeCXNiu_rezZuRmHwuydOs78b3Q_iuU_bTjcd3dpoyeml_npwuYCOA4F3oWEAaOUyA0iE5IOlu7cZ8XoKPhxw4D665FmcIjbJ7u7oLRi-e8pyTQiwtr12k2cS0_2ZFO_BmglgisnCtysQs-GSaO/p.jpeg" },
                { name: "ROCKET", age: "26", genre: "rap", listenersPerMonth: "977 986", imageUrl: "https://previews.dropbox.com/p/thumb/ACPGklvkMfPKFvOEbuTMoAqQAGAabaAMe2faKwq1GMuA-jn-JrF2WV7-mNjN_cFIb1XCFvH9SDrXu7zi9E8eLwI8eM8SYlMjW2b-ZmcwgnM-Qy2lx-1S6oSHVWrajv11ANzp7AwZZWE8zQ3fb-IL3e2wCImh8Pq2GUNK8mzbyg42rzOSgAG6ZzEMilYaH8yTRjKgfokKUFGzG64IcNrWRvUVpAwni5tALeWMqx2-3IoNHAosrj0fQ8S0eMM6MtrYnQzUDSHBV2QK5vo4jnGwjaBW5571xjRHoBZ67mjXpKFNBaxSAHm4Yl5KJtLlBsn8WGuZ_G8tC0DlBNJcujJipP-p/p.jpeg" },
                { name: "Heronwater", age: "21", genre: "rap", listenersPerMonth: "1 255 146", imageUrl: "https://previews.dropbox.com/p/thumb/ACNAadNXi0aynvH6BTa7JGosjmHghz6nzDNz3YkSfkh9ogz8lMZi3S5JDscROdbX2Bu14TVL6T2e6SM25ZITzOyi3bzNfHJH9AXI7wY6dfP7gNqk3nXozPzjixEDmpB3ZqFw08P319LJproxpItWKqmUQbJc165b1OCzAM7lXa5HyfBtv6iQKQIwASSPGKYYCFZTdOboDNnvzTt-ZRU4rDZvolvYofKHnTFX1sih7QXZHIjUItcWfHuTK1ZhtlZ96E1-oJ64dM0pH6CFoepq92p8YzjmW0oqylzjdwH-B8-peEElWKcNRlvnh0ZWYfLo3z_VW7QAAoIhfjcrJTc-R49TEa1bQQ3n2yn_8i-MATV_BQ/p.jpeg" },
                { name: "Kai Angel", age: "27", genre: "opium", listenersPerMonth: "379 951", imageUrl: "https://previews.dropbox.com/p/thumb/ACOmp8uQLbZYkPqg5By_t5ssjVG6-A9LvvuqBZfCNH_vSV-s0b386utmuMTtygdqxNMk_1vpiEKzs73EWNnV_aLFYUtVu6lYJ-LPahITV_Z8BWX3NEbmNVrgCPPo24DWSmRjPq595_BHvimIYs9B_lc8I7dWEQYyq-9fa1zsehB6eCUSwfkI206fqG6uPqo5y75jL-UJWOx5ItT4qgR9yAO0iS-3HKDJb3r7g6W3HRwBuZ-BrVc4Q28h1fTiLwYCsbK9_voT7Cae6iS-HEEdSiT-9GI1I3OxRn8ZWGPEytEmHUGk9-SeFWgMUr3s2uM2MnZRJgXh_PHhv2fiz3vHsVhJ/p.jpeg" },
                { name: "9mice", age: "23", genre: "opium", listenersPerMonth: "397 641", imageUrl: "https://previews.dropbox.com/p/thumb/ACP9ib_MzKerlPOZf00H-9BNpemc2b2sCCz_OZIh5-unhX3cE73QsbEz_eHAQjSaMDeLehBaVMvOcW0il4Y_gW2zc14sfkoHfkaRb-so9oVI6SRElViVoB8bFV-yuVVTF-5tmgh0F-9dK6oSQHW5pZ7JP9YE4F_-lMurFRHi-PVG7iSL7DmxPkmL8hELH9rsMTPGahtaIhlTYBh6TKlViiBaOUZcuLHLmh1uVLRNCvTGaH5vw9eEE_Anwm_aQWnpKLQsMjpSpcbc2fJOoC2Yh3K6lkemP1P3kfnb_sRYq8_jkYeHiweIXLNpvH3rzKUYoF1f0xYUFkLs4NZtKvoFJTr3/p.jpeg" },
                { name: "Платина", age: "28", genre: "goblin rap", listenersPerMonth: "1 357 339", imageUrl: "https://previews.dropbox.com/p/thumb/ACOGtfa7-zc2IXd3f_0tsBUHCoU9ikL-dABjXTjPMzlhmIJIYOe9mMCqsKBUKNKgsAjhJp6x8LZuLSyhst34sKEEQ33vgkFDPmZt7kmARDvTL2o_Y0dyWz8-AzeV-flxmEywv-I6CKD53azQEKebf6BwdhICe2s1iSljFYh8gh1O3bNfwYUu1GUYhx1dAXprQZPDLHTiYz0QE2irF7E7N-2QgS8EkO3UV42TmI2BmfQ9S7i7MZtsNF4Mq545pkWFqwr-7Qa8SUYBVntK9uwI9M1UyFkvJ5dLK_Gjae_fLtxriDpOqMCWny92XGrLHyOGiPXKKoFF7aifZ7Qe6bPjKw7M/p.jpeg" },
                { name: "Booker", age: "30", genre: "rap", listenersPerMonth: "483 118", imageUrl: "https://previews.dropbox.com/p/thumb/ACO9csb3jFOLhwLTAOs1708lsDyWoffKpejY74ymgtQ9v9fWlKw5EkmFPqI5GDiep8GNpslAy2m-t6gVfQRuqxkoxCl26hYJ1rEBTvCssE7XCTWZ4Fo6ZKSBH9b8Q4wIP85LaFi15e0mBrHXmdt3fL5S4bYuPJTxcBIquSqOxC8bXvt5qzaWOFQtuqkWO9peXjfTry4tbKrviutLhsvZxjjlZnF17_7PzddCcjzF6-L0tpWUOjuaNxiQJ08hQLZCZvcdd9IfDkzuyVYJKsY6o7uEu9tOx4OCX5XxSeWsVYMSRmVZBInPwJCa9U--PvJJHltDiEkAM0Xij6jX7wuKjG3p/p.jpeg" },
                { name: "Toxi$", age: "20", genre: "rap", listenersPerMonth: "3 109 945", imageUrl: "https://previews.dropbox.com/p/thumb/ACMC1wmz7LyKLPomnpLEodOnR4UKvq7sgcCfm84xx1iWqM1aY1jSmLIwRyGHpEcXknMU2-Wra9AxkJ_7u65DUu-8Nj1v8_0Janbqpdn4y6YD9SWdKCEVrmsFUh6cHrLbOhntwRMSSrNOgTAj9KIjKyXNL8kOywhdrxR4jktlWRFULPeqQp20k1jEFc_-_Q5j7vhEYp4pVOfUhGLZX_EJRPI8LENJi9a_RUIJt26bTtiRZKYbswtDX4diIfMUpEjpiYjspg4g5lbxNPgxsqjK4EetzMXPNZT4oIBgKQGV-FZ_VDgnwAY4pqFz5waQrzf45QOuaUt8YYT1R0UENYpLuSey/p.jpeg" },
                { name: "Молодой Платон", age: "19", genre: "rap", listenersPerMonth: "2 891 854", imageUrl: "https://previews.dropbox.com/p/thumb/ACO0GS4mQ_7fXfOFmOpDJIOLP8pBqBTs10Li6cZQcps1MosuHxuKaLFruEfRL7dyDNzFdhP7xoBSTwl8_0ImxGNC60JAc_nDGbVkhxkBrEVx0HhUNQDrhCVRA1Ai6s31vdvs6Q5tHrwA2SQ89UVJ6euEjxXg6QXVpN2Z5THR6-dPFyAyyrP0SjX00EibWW4o676txwn1sW4HcomUIK67ekmYmoRK0zNCKUjcoYyu37YTgoQ3iJ7eab_yltfrHSB9UL2dBD7L9vGBLOt3HJOSfj44T9VXvhrT7qvcteEAhrhZJG2sHdiTLexH2YdqI9olqvSyNiQ1LZtX_2pUPS3zv7Qz/p.jpeg" },
            ]
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
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
</style>
