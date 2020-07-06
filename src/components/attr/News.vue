<template>
    <div>
    <el-collapse-item title="标题文字名称">
        <el-input
                placeholder="填写文字名称"
                size="mini"
                v-for="(item,i) in inContent"
                :key="i"
                v-model="item.label"
        ></el-input>
    </el-collapse-item>
    <el-collapse-item title="图片ID">
        <el-input
                placeholder="填写图片id"
                size="mini"
                v-for="(item,i) in inContent"
                :key="i"
                v-model="item.imgid"
        ></el-input>
    </el-collapse-item>
        <el-collapse-item title="选择文字颜色">
    </el-collapse-item>
 
    </div>
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
    import axios from "axios"
    export default {
        mixins: [BaseComponent],
        name: "News",
        components: {},
        data: function() {
            return {
                inContent: this.content,
                color1:""
            };
        },
        props: {
            content: {
                type: Array,
            },

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
            },

        },

        computed: {},
        mounted: function() {
            console.log(this.inContent);
            axios.post('/api/getTopics?page=1&pageSize=10').then(res=>{
                console.log(res+"111111111111")
            })
        },
        methods: {
   
        }
    };
</script>

