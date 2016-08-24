<template>
    <div class="skill">
        {{ name }}
        <span class="pull-right">
            <rating :stars="rating"></rating>
        </span>
    </div>
</template>

<script>
    export default {
        props: ['name', 'rating'],
        components: {
            'rating': require('./Stars.vue')
        }
    }
</script>

