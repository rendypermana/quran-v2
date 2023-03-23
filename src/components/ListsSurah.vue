<template>
<div class="listsSurahComponent">
    <div v-if="loadingData">
        <div 
            class="loaderLists" 
            v-for="n in 10"
            :key="n"
        >
            <v-row no-gutters>
                <v-col cols="2">
                    <v-skeleton-loader
                        elevation="0"
                        type="avatar"
                    />
                </v-col>
                <v-col cols="7">
                    <v-row style="margin-top: -3px;">
                        <v-col cols="8">
                            <v-skeleton-loader
                                elevation="0"
                                type="sentences"
                            />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="3" >
                    <div style="margin-top: 4px;">
                        <v-skeleton-loader
                            elevation="0"
                            type="list-item"
                        />
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
    <ItemSurah 
        v-else
        v-for="(itemData, index) in listsData" 
        :key="index" 
        :surah="itemData"
    />
</div>
</template>

<script>
import ItemSurah from './ItemSurah.vue';

export default {
    name: "ListsSurah",
    props: {
        listsData: {
            type: Array,
            default: () => []
        },
        loadingData: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            attrs: {
                class: 'mb-3',
                boilerplate: true,
                elevation: 2,
            },
        }
    },
    components: { 
        ItemSurah 
    }
}
</script>

<style lang="scss" scoped>
.listsSurahComponent {
    margin: 20px 0px;
    .loaderLists {
        border-bottom: 1px solid rgba(187, 196, 206, 0.35);
        padding-bottom: 15px;
        margin-top: 15px;
    }
}
</style>