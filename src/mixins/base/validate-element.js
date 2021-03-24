export default {
    inheritAttrs: false,
    computed: {
        propsValue: {
            get: function () {
                return this.value;
            },
            set: function (value) {
                this.$emit("update:value", value);
            },
        },
    },  
    props:{
        // значения input
        value: {
            required: true, 
        },
        // текст для input
        items: {
            type: String,
            required: true,
        },
        // объект валидации input
        $v: {
            type: Object,
            required: true,
        },
        // объект ошибок
        error: {
            type: Array,
            required: true,
        },
    }
}