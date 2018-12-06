<template>
    <el-dialog :closeOnClickModal="false" :title="moduleTitle" :visible.sync="moduleVisible" width="400px" center :before-close="dialogOff">
         <div class="addmodule-container">
             <el-input-number v-model="modulenum" @change="handleChange" :min="1" :max="10" label="请输入添加模块数"></el-input-number>
         </div>
         <span slot="footer" class="dialog-footer">
            <el-button class="basic-btn" @click="dialogOff">取 消</el-button>
            <el-button class="basic-btn" type="primary" @click="addMosulesubmit" >确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
    export default {
        name: 'addmodule',
        data() {
            return {
                moduleTitle: '增加',
                moduleVisible: false,
                modulenum: 0
            }
        },
        methods: {
            openaddModule(){
                this.moduleVisible = true
                this.modulenum = 0
            },
            dialogOff(){
                this.moduleVisible = false
            },
            handleChange(value) {
                console.log(value)
            },
            addMosulesubmit(){
                this.$emit('modulenum',this.modulenum)
                this.dialogOff()
            }
        }
    }
</script>
<style>
    .addmodule-container{
        text-align: center;
    }
</style>