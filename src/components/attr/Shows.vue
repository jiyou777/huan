<template>
    <el-collapse-item title="是否隐藏文字">
        <el-switch  v-model="shows"></el-switch>
    </el-collapse-item>
</template>

<script>
    import BaseComponent from "src/extend/BaseComponent";
    export default {
        mixins: [BaseComponent],
        name: "Shows",
        components: {},
        props: {
            content: {
                type: Boolean,
            }
        },
        watch: {
            content: {
                immediate: true,
                handler: function (params) {
                    this.inContent = params;
                }
            },
            inContent: function (newVal) {
                this.$emit("update:content", newVal);
            }
        },
        data: function () {
            return {
                inContent: this.content
            };
        },
        computed: {},
        mounted: function () {
            console.log(this.inContent);
        },
        methods: {}
    }
</script>

<style scoped>

</style>