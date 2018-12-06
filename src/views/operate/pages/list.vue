<template>
    <div>
        <ul>
            <li @click="changeview('yemianshezhi')">页面设置</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'list',
        methods: {
            changeview(){
                this.$emit('yemianshezhi')
            }
        }
    }
</script>