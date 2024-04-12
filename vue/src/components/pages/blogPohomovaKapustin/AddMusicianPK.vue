<template>
    <div class="container">
        <div class="title">+</div>
        <input v-model="name" placeholder="Имя" class="nameTextField">
        <input v-model="age" placeholder="Возраст" class="ageTextField">
        <input v-model="genre" placeholder="Жанр" class="genreTextField">
        <input v-model="listenersPerMonth" placeholder="Количество слушателей в месяц"
            class="listenersPerMonthTextField">
        <input v-model="imageUrl" placeholder="URL изображения" class="imageUrlTextField">
        <input v-model="description" placeholder="Описание" class="descriptionTextField">
        <button @click="submitForm" class="btnPrimary">Готово</button>
    </div>
</template>

<script>
import { RouteNames } from '@/router/routes';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "AddMusicianPK",
    data() {
        return {
            name: "",
            age: "",
            genre: "",
            listenersPerMonth: "",
            imageUrl: "",
            description: ""
        };
    },
    computed: {
        ...mapGetters('StorePohomovaKapustin', [
            'getLastIndex'
        ])
    },
    methods: {
        ...mapActions('StorePohomovaKapustin', [
            'addMusician'
        ]),
        submitForm() {
            const newMusician = {
                id: this.getLastIndex,
                name: this.name,
                age: this.age,
                genre: this.genre,
                listenersPerMonth: this.listenersPerMonth,
                imageUrl: this.imageUrl,
                description: this.description
            };
            this.addMusician(newMusician);
            this.name = '';
            this.age = '';
            this.genre = '';
            this.listenersPerMonth = '';
            this.imageUrl = '';
            this.description = '';
            this.$router.push({ name: RouteNames.BLOG_POHOMOVA_KAPUSTIN_HOME });
        }
    }
};
</script>

<style scoped lang="less">
.container {
    background-color: black;
    color: white;
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;

}

.title {
    margin-top: 100px;
    font-size: 100px;
    text-align: left;
}

.nameTextField {
    border-color: green;
    border-width: 4px;
    border-radius: 10px;
    width: 400px;
    height: 40px;
    font-size: 30px;
    font-family: "Verdana";
}

.ageTextField {
    margin-top: 30px;
    border-color: green;
    border-width: 4px;
    border-radius: 10px;
    width: 400px;
    height: 40px;
    font-size: 30px;
    font-family: "Verdana";
}

.genreTextField {
    margin-top: 30px;
    border-color: green;
    border-width: 4px;
    border-radius: 10px;
    width: 400px;
    height: 40px;
    font-size: 30px;
    font-family: "Verdana";
}

.listenersPerMonthTextField {
    margin-top: 30px;
    border-color: green;
    border-width: 4px;
    border-radius: 10px;
    width: 400px;
    height: 40px;
    font-size: 20px;
    font-family: "Verdana";
}

.imageUrlTextField {
    margin-top: 30px;
    border-color: green;
    border-width: 4px;
    border-radius: 10px;
    width: 400px;
    height: 40px;
    font-size: 30px;
    font-family: "Verdana";
}

.descriptionTextField {
    margin-top: 30px;
    border-color: green;
    border-width: 4px;
    border-radius: 10px;
    width: 400px;
    height: 40px;
    font-size: 20px;
    font-family: "Verdana";
}

.btnPrimary {
    margin-top: 30px;
    width: 200px;
    height: 80px;
    border-radius: 10px;
    border-color: rgb(5, 20, 106);
    border-width: 4px;
    font-size: 40px;
    font-family: "Verdana";
    cursor: pointer;
}
</style>
