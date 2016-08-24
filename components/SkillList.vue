<template>
    <div>
        <h5>{{ category }}</h5>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['category']
    }
</script>