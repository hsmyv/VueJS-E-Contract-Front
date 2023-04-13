<template>
    <div>
        <input :id="`input-${placeholder}`" :placeholder="placeholder" class="
                       pl-2 outline-none border-none" :type="inputType" v-model="inputComputed" autocomplete="off" :maxlength="max">
        <span v-if="error" class="text-red-500 text-[14px] font-semibold">
            {{ error }}
        </span>
    </div>
</template>

<script setup>
const emit = defineEmits(['update:input'])

const props = defineProps(['input', 'placeholder', 'inputType', 'max', 'autoFocus', 'error'])
const { input, placeholder, inputType, max, autoFocus, error } = toRefs(props)

onMounted(() => {
    if (autoFocus.value) {
        document.getElementById(`input-${placeholder.value}`).focus()
    }
})

const inputComputed = computed({
    get: () => input.value,
    set: (val) => emit('update:input', val)
})
</script>