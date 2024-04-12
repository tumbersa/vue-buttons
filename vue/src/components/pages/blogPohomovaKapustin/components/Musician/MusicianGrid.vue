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
                { name: "D.K.", age: "27", genre: "rave", listenersPerMonth: "414 314", imageUrl: "https://previews.dropbox.com/p/thumb/ACPrF3SJGolcXh27UgDJQv5Gfqv8V8k4uMAyA2D8UpdoUpKebhwOuhs_LB0A3rf1wQe249RhGmLPza-WPLWaBq7dtQiCXIHfd6RM-uoZxd5bCyFLIhmzkD4KAhBSQOmyqh2_ezspM2zudv-4w9FI0Imb4E-ymIFBny2039gJ1C96d9yWXY9hzJv61iSpacNn2ebWohvmmm7948sEaQ8IRM_-tG1TaD7AlSubQ_qfvyZ63Q-sLOs8ir4jjuo7k2HpukUCKo3JBb2yFgNiWC6aQTDL_Vrl0HrGOl41yxgOmfEM0VgmlnZpOPV3lNC_dl2wH5R7z8n8QvrVEtodKJyYN0H-/p.jpeg" },
                { name: "D.K.", age: "27", genre: "rave", listenersPerMonth: "414 314", imageUrl: "https://previews.dropbox.com/p/thumb/ACPrF3SJGolcXh27UgDJQv5Gfqv8V8k4uMAyA2D8UpdoUpKebhwOuhs_LB0A3rf1wQe249RhGmLPza-WPLWaBq7dtQiCXIHfd6RM-uoZxd5bCyFLIhmzkD4KAhBSQOmyqh2_ezspM2zudv-4w9FI0Imb4E-ymIFBny2039gJ1C96d9yWXY9hzJv61iSpacNn2ebWohvmmm7948sEaQ8IRM_-tG1TaD7AlSubQ_qfvyZ63Q-sLOs8ir4jjuo7k2HpukUCKo3JBb2yFgNiWC6aQTDL_Vrl0HrGOl41yxgOmfEM0VgmlnZpOPV3lNC_dl2wH5R7z8n8QvrVEtodKJyYN0H-/p.jpeg" },
                { name: "D.K.", age: "27", genre: "rave", listenersPerMonth: "414 314", imageUrl: "https://previews.dropbox.com/p/thumb/ACPrF3SJGolcXh27UgDJQv5Gfqv8V8k4uMAyA2D8UpdoUpKebhwOuhs_LB0A3rf1wQe249RhGmLPza-WPLWaBq7dtQiCXIHfd6RM-uoZxd5bCyFLIhmzkD4KAhBSQOmyqh2_ezspM2zudv-4w9FI0Imb4E-ymIFBny2039gJ1C96d9yWXY9hzJv61iSpacNn2ebWohvmmm7948sEaQ8IRM_-tG1TaD7AlSubQ_qfvyZ63Q-sLOs8ir4jjuo7k2HpukUCKo3JBb2yFgNiWC6aQTDL_Vrl0HrGOl41yxgOmfEM0VgmlnZpOPV3lNC_dl2wH5R7z8n8QvrVEtodKJyYN0H-/p.jpeg" },
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
    letter-spacing: 5px;
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
