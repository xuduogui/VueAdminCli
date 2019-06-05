const mixin = {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
        };
    },
    mounted () {
    },
    computed: {
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}

export default mixin