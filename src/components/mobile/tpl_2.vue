<template>
    <div class="tpl_2">
        <div v-for="(item,index) in data.blockList" :key="index" class="third-img">
            <common :block="item" @handleEdit="handleEdit(index)"></common>
        </div>
    </div>
</template>

<script>
 import minix from './minix'
    export default {
        name:'tpl_2',
        title:'三张图片',
        mixins:[minix],
        dataTpl:{
            tpl_id:1,
            blockList:[
                { block_type: 'IMAGE', block_value: '', block_opt: '' },
                { block_type: 'IMAGE', block_value: '', block_opt: '' },
                { block_type: 'IMAGE', block_value: '', block_opt: '' },
            ]
        }
        
    }
</script>

<style lang="scss" scoped>
.tpl_2{
    display: flex;
    height: 50px;
    justify-content: space-between;
    .third-img{
        flex: 1;
       
    }
}
</style>