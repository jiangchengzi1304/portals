<template>
    <div class="operate-container">
        <div class="left-list">
             <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#306988"
                text-color="#75b1c5"
                active-text-color="#74a8fc"
                router>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/yemianshezhi">选项1</el-menu-item>
                        <el-menu-item index="/qitashezhi">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <div class="right-content">
             <router-view/>
        </div>
    </div>
</template>
<script>
    export default  {
        name: 'operate',
        methods: {
            handleOpen() {
                //  console.log(key, keyPath);
            },
            handleClose() {
                // console.log(key, keyPath);
            }
        }
    }
</script>
<style>
    .operate-container{
        width: 100%;
        height:100%;
    }
     .operate-container li{
         height: 35px;
         line-height: 35px;
         text-align: center;
         cursor: pointer;
     }
</style>