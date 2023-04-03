import { reactive } from "vue";

export const store = reactive({
    config: {
        // chiamata API Film
        urlMovie:'https://api.themoviedb.org/3/search/movie',
        // chiamata API Serie Tv
        urlSeries: 'https://api.themoviedb.org/3/search/tv',
        apiKey:'e8d17ad606042d085a849bc6954e3d7d',
        defaultLang:'it-IT',
    },
    movies:[],
    searchKey:''
});