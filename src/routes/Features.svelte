<script>
    import FeatureCard from "./FeatureCard.svelte";
    import Maptooltip from "./Maptooltip.svelte";
</script>

<!-- <Maptooltip/> -->
<div class='main'>
    Featured Topics:
</div>
<div class='main'>
    <FeatureCard title='Student Visa' content="Are you a student coming to the UK? Look here and view some stories other students have gone through."/>
    <FeatureCard title='Working Visa' content="Working in the UK requires a sponsor letter from the hiring company. Click here for some Indonesian expats stories of applying for Tier 2 visa."/>
    <FeatureCard title='Feature1' content="some content"/>
</div>



<style>
    .main {
        padding: 15px;
        background-color: rgb(251, 251, 251);
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>