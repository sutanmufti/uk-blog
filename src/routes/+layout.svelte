<script>
    import Header from "$lib/components/Header.svelte";
    import { base } from "$app/paths";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

    <link rel="icon" type="image/x-icon" href="{base}/logo_rds.png">
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