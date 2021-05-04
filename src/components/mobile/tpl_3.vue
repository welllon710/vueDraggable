<template>
    <div class="tpl_3">
        <div class="tpl_left">
            <common :block="data.blockList[0]" @handleEdit="handleEdit(0)"></common>
        </div>
         <div class="tpl_right">
            <common :block="data.blockList[1]" @handleEdit="handleEdit(1)"></common>
            <common :block="data.blockList[2]" @handleEdit="handleEdit(2)"></common>
        </div>
    </div>
</template>

<script>
    import minix from './minix'
    export default {
        name:'tpl_3',
        title:'左一右二',
        mixins:[minix],
        dataTpl:{
            tpl_id:2,
            blockList:[
                { block_type: 'IMAGE', block_value: '', block_opt: '' },
                { block_type: 'IMAGE', block_value: '', block_opt: '' },
                { block_type: 'IMAGE', block_value: '', block_opt: '' },
            ]
        }
    }
</script>

<style lang="scss" scoped>
.tpl_3{
    display: flex;
    height: 120px;
    &::after{

    }
    .tpl_left{
        flex: 1;
    }
    .tpl_right{
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .common{
         
    }
}
</style>