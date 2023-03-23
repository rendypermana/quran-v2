<template>
    <div class="lastReadComponent">
        <div  class="lastReadComponent--content">
            <div class="title">
                <span><i><img :src="iconRead" /></i> Last Read</span>
            </div>
            <div class="body">
                <router-link class="surah" to="/">Al-Fatihah</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import lastReadIcon from '@/assets/images/icon/Last-read.svg';

export default {
    name: 'LastRead',
    data() {
        return {
            iconRead: lastReadIcon
        }
    }
}
</script>

<style lang="scss">
.lastReadComponent {
    background: url('../assets/images/Frame-home.svg') no-repeat;
    background-color: #fff;
    background-size: 100%;
    height: 155px;
    text-align: left;
        &--content {
            padding: 15px; 
                .title {
                    font-size: 14px!important;
                    color: #fff;
                    span {
                        i {
                           margin-right: 8px; 
                        }
                    }
                } 
                .body {
                    margin-top: 20px;
                    .surah {
                        font-weight: 600;
                        font-size: 21px;
                        color: #fff;
                        text-decoration: none;
                    }
                }   
        }
}
</style>