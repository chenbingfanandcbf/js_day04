<template>
    <div>
        <ul>
            <router-link to="/nv" tag="li">女装</router-link>
            <router-link to="/sex" tag="li">男装</router-link>
            <router-link to="/ertong" tag="li">童装</router-link>
            <router-link to="/yr" tag="li">婴幼儿</router-link>
            <router-link to="/yd" tag="li">运动</router-link>
            <router-link to="/tirm" tag="li">限时特惠</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {

    },
};
</script>

<style scoped lang="scss">
ul{
    width: 100%;
    height: 80px;
    display: flex;
    li{
        flex: 1;
        height: 80px;
        line-height: 80px;
    }
}
</style>
