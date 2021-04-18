<template>
    <div>
        <el-container class="layout-container">
            <el-aside width="auto" class="aside">
                <el-menu
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
                    :collapse="isCollapse"
                    >

                    <el-menu-item index="/">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="/article">
                         <i class="el-icon-menu"></i>
                        <span slot="title">内容管理</span>
                    </el-menu-item>
                     <el-menu-item index="/image">
                        <i class="el-icon-picture"></i>
                        <span slot="title">素材管理</span>
                    </el-menu-item>
                     <el-menu-item index="/publish">
                        <i class="el-icon-s-promotion"></i>
                        <span slot="title">发布文章</span>
                    </el-menu-item>
                     <el-menu-item index="/comment">
                        <i class="el-icon-s-comment"></i>
                        <span slot="title">评论管理</span>
                    </el-menu-item>
                     <el-menu-item index="/fans">
                        <i class="el-icon-present"></i>
                        <span slot="title">粉丝管理</span>
                    </el-menu-item>
                     <el-menu-item index="/settings">
                        <i class="el-icon-setting"></i>
                        <span slot="title">个人设置</span>
                    </el-menu-item>
                    </el-menu>
            </el-aside>
            <el-container>
                <el-header class="header">
                    <div>
                        <i :class="{
                            'el-icon-s=-fold': isCollapse,
                            'el-icon-s-unfold': !isCollapse
                        }" 
                        @click="isCollapse = !isCollapse"></i>
                        <span>楷楷的个人后台</span>
                    </div>
                    <el-dropdown>
                        <div class="avatar-wrap">
                            <img class="userimg" src="./1.jpeg" alt="">
                            <span class="el-dropdown-link">
                                用户昵称<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>设置</el-dropdown-item>
                            <el-dropdown-item>退出</el-dropdown-item>  
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>


                <el-main class="main"><router-view /></el-main>
            </el-container>
        </el-container>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCollapse:true
            }
        },
    }
</script>

<style lang="less" scoped>
.layout-container{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
}
.el-menu{
           height: 100%;
}
.header{
        background: #D3DCE6;
        display: flex;
        justify-content: space-between;
        align-items: center;
         
        .avatar-wrap{
            display: flex;
            flex-direction: row;
            .el-dropdown-link{
                display: flex;
                align-items: center;
            }
        }
        .userimg{
                display: flex;
                width: 30px;
                border-radius: 50%;
                margin-right: 10px;
            }     
        
}

</style>