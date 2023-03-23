<template>
<div class="singleAyah">
    <div class="singleAyah__header">
        <div class="number">1</div>
        <div class="right">
            <div class="share">sh</div>
            <div class="play">play</div>
            <div class="bookmarks">bk</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'SingleAyah',
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
.singleAyah {
    &__header {
        display: flex;
        width: 100%;
        background: rgba(134, 62, 213, 0.05);
        border-radius: 10px;
        padding: 10px;
        .number {
            width: 10%;
        }
        .right {
            display: flex;
            width: 90%;
            align-items: right;
            justify-content: right;
        };
    }
}

</style>