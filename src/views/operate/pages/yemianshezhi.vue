<template>
    <div class="yemianshezhi-container">
      <div class="operate-container">
        <el-button type="primary" class="basic-button" @click="addNew">增加</el-button>
        <el-checkbox-group v-model="checkList" @change="changemoduleoperate" class="operate-checkbox">
            <el-checkbox label="resizable">调整大小</el-checkbox>
            <el-checkbox label="draggable">拖拽</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="content-container"> 
        <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="this.draggable"
            :is-resizable="this.resizable"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >
        <grid-item v-for="(item,index) in layout"
                    :key="index"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   class="griditem-main">
           <div class="griditem-content">
               <i class="add-button el-icon-plus" @click="addmoduleContent"></i>
           </div>
        </grid-item>
    </grid-layout>
      </div>
      <add-module ref="addModule" @modulenum="modulenum"></add-module>
    </div>
</template>
<script>
    import addModule from './addmodule'
    export default {
        name: 'yemianshezhi',
        components:{addModule},
        data() {
            return {
                layout: [],
                draggable: false,
                resizable: false,
                checkList: []
            }
        },
        methods: {
            addNew(){
                this.$refs.addModule.openaddModule()
            },
            modulenum(modulenum){
                let k = this.layout.length
                 for(let i = k; i < k + modulenum; i++){
                     let a = {x: i % 10 , y: Math.floor(i/10), w: 1,h: 1,i:i}
                     console.log(a)
                        this.layout.push(a)
                 }
            },
            changemoduleoperate(val){
                if(val.length === 1){
                    if(val[0] == 'draggable'){
                        this.draggable = true
                    }else{
                        this.resizable = true
                    }
                }else if(val.length < 1){
                    this.draggable = false
                    this.resizable = false
                } else if(val.length > 1){
                    this.draggable = true
                    this.resizable = true
                }
            },
            addmoduleContent(){
                
            }
        }

    }
</script>
<style>
    .yemianshezhi-container{
        width: 100%;
        height: 100%;
        /* background: red; */
    }
    .griditem-main{
        background: rgb(49, 137, 236)
    }
    .griditem-content{
        width: 100%;
        height: 100%;
        background: rgba(000,078,101,0.6);
        position: relative;
        overflow: hidden;
    }
    .griditem-content .add-button{
        width: 100%;
        height: 50px;
        position: absolute;
        color: #bbb;
        font-size: 52px;
        display:block;
        text-align:center;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        cursor: pointer;
    }
     .yemianshezhi-container .operate-container{
         width: 100%;
         height: 70px;
         padding-top: 20px;
         padding-left: 50px;
     }
     .operate-container .operate-checkbox{
         display: inline-block;
         margin-left: 20px;
     }
      .yemianshezhi-container .content-container{
          width:100%;
          height: calc(100% - 70px);
          overflow-y: scroll;
      }
</style>
