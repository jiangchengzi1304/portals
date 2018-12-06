<template>
    <div class="header">
        <ul>
            <li>
                <router-link tag='span' to="/home">首页</router-link>
            </li>
            <li>
                <router-link tag='span' to="/yemianshezhi">管理</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    
</script>
<style>
    .header{
        width: 100%;
        height: 70px;
        background: #015c75;
    }
    .header > ul {
        float: right;
        color: #fff;
        margin-right: 100px;
    }
    .header > ul > li{
        width: 100px;
        float: left;
        text-align: center;
        line-height: 70px;
        cursor: pointer;
    }
</style>