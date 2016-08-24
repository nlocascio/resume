<template>
    <span>
        <i v-for="i in 5" class="fa" :class="[ i + 1 <= stars ? 'fa-star' : 'fa-star-o' ]">
        </i>
    </span>
</template>

<script>
    export default {
        props: ['stars']
    }
</script>