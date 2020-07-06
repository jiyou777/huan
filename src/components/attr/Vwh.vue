<template>
    <el-collapse-item title="设置图片宽高">
        宽度：<el-input
            placeholder="宽"
            size="mini"
            v-for="(item,i) in inContent"
            :key="i"
            v-model="item.w"
    ></el-input>
        高度：<el-input
            placeholder="高"
            size="mini"
            v-for="(item,index) in inContent"
            :key="index"
            v-model="item.h"
    ></el-input>
    </el-collapse-item>
</template>

<script>
    import BaseComponent from "src/extend/BaseComponent";
    export default {
        mixins: [BaseComponent],
        name: "Vwh",
        components: {},
        props: {
            content: {
                type: Array,
            }
        },
        watch: {
            content: {
                immediate: true,
                handler: function(params) {
                    this.inContent = params;
                }
            },
            inContent: function(newVal) {
                this.$emit("update:content", newVal);
            }
        },
        data: function() {
            return {
                inContent: this.content
            };
        },
        computed: {},
        mounted: function() {
            console.log(this.inContent);
        },
        methods: {}
    };
</script>

<style scoped>

</style>