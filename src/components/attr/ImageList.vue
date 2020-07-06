<template>
    <el-collapse-item title="图片地址">
        <el-input
                placeholder="填写每项名称"
                size="mini"
                v-for="(item,i) in inContent"
                :key="i"
                v-model="item.label"
        ></el-input>
    </el-collapse-item>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
    .resourceEditor {
        padding: 0 10px;

        .preview {
            width: 100%;
            height: 150px;
            margin-top: 10px;
            background-color: #dddddd;
            background-image: url('../../assets/image/bgblank.svg');

            .in {
                width: 100%;
                height: 100%;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    import BaseComponent from "src/extend/BaseComponent";
    export default {
        mixins: [BaseComponent],
        name: "ImageList",
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

