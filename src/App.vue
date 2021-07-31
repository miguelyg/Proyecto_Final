<template>

    
    <router-view/>
</template>

<style>

    @font-face {
        font-family: 'robotolight';
        src: url('./assets/fonts/roboto/roboto-light-webfont.woff2') format('woff2'),
            url('./assets/fonts/roboto/roboto-light-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }

    @font-face {
        font-family: 'robotobold';
        src: url('./assets/fonts/roboto_bold/roboto-bold-webfont.woff2') format('woff2'),
            url('./assets/fonts/roboto_bold/roboto-bold-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }

    @font-face {
        font-family: 'poppinslight';
        src: url('./assets/fonts/popin/poppins-light-webfont.woff2') format('woff2'),
            url('./assets/fonts/popin/poppins-light-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }

    @font-face {
        font-family: 'poppinsbold';
        src: url('./assets/fonts/popin_bold/poppins-bold-webfont.woff2') format('woff2'),
            url('./assets/fonts/popin_bold/poppins-bold-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;

    }


    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'robotolight','robotobold','poppinslight','poppinsbold';
        padding: 0;
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    li,
    a {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: white;
        font-size: 1.2em;
        text-transform: uppercase;
    }

    .container{
        width: 70%;
        margin: 0 auto;
    }
</style>

<script>
// @ is an alias to /src



export default {
  name: 'App',
  components: {
  }
}
</script>