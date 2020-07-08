<template>
    <div>
        <!-- 轮播组件 -->
    <el-collapse-item title="图片路径">
        <el-input
                size="mini"
                v-for="(item,i) in inContent"
                :key="i"
                 
                v-model="item.imgurl"
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
   import { Request } from "src/until/request"

  import { getTopics } from "src/request/http"
    export default {
        mixins: [BaseComponent],
        name: "myswiper",
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
            console.log(this.content)
            console.log(this.inContent);
            let obj = {
                page:1,
                pageSize:10
            }
            // axios.post('/api/getTopics',{obj}).then(res=>{
            //     console.log(res+"111111111111")
            // })
            getTopics(obj).then(res=>{
                console.log(res+"222222222")
            })
        },
        methods: {
   
        }
    };
</script>

