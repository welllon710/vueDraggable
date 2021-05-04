import common from './com.vue'
export default {
    props: {
        data: {
            type: Object,
            default: () => ({})
        },
    },
    components: {
        common,
    },
    methods: {
        handleEdit(val) {
            this.$emit('handleEdit', JSON.parse(JSON.stringify(this.data)), val)
        }
    },
}