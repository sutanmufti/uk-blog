<script>
    import Header from "./Header.svelte";
    import { base } from "$app/paths";
    import Footer from "./Footer.svelte";
</script>

<svelte:head>
    <!-- <meta charset="UTF-8"> -->
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

    <link rel="icon" type="image/png" href="{base}/logo_rds.png">
    <style>
        body {
            font-family: 'Roboto', 'Poppins', sans-serif;
            margin: 0;
            color: #696969;
            font-weight: 300;
        }
    </style>
</svelte:head>

<Header/>
<slot></slot>
<Footer/>