<template>
    <div class="floor-layout tpl_1">
        <common @handleEdit="handleEdit(0)" :block="data.blockList[0]">
            <template v-slot:default="block">
                {{block.block.block_value}}
            </template>
        </common>
    </div>
</template>

<script>
    import minix from './minix'
    export default {
        name:'tpl_1',
        title:'文本框',
        mixins:[minix],
        dataTpl:{
           tpl_id:0, 
           blockList:[
               { block_type: 'TEXT', block_value: '', block_opt: '' },
           ] 
         },
         mounted () {
             console.log('data',this.data);
         },
    }
</script>

<style lang="scss" scoped>
.tpl_1{
    .common{
        width: 100%;
        height: 50px;
        /deep/  .mask-floot{
           height: 50px;
           .bg-mask{
               height: 50px;
           }
       }
    }
}
</style>