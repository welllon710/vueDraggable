<template>
    <div class="tpl_4">
        <common :block="data.blockList[0]" @handleEdit="handleEdit(0)">
            <template >
                我横向大图
            </template>
        </common>
    </div>
</template>

<script>
    import minix from './minix'
    export default {
        name:'tpl_4',
        title:'单大图',
        mixins:[minix],
        dataTpl:{
            tpl_id:3,
            blockList:[
                 { block_type: 'IMAGE', block_value: '', block_opt: '' },
            ]
        }
    }
</script>

<style lang="scss" scoped>
.tpl_4{
    height: 150px;
}
</style>