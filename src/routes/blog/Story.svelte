<script lang='ts'>
    import { base } from "$app/paths";
    export let storyid: string;
    export let title: string;
    export let username: string;
    export let lat: number | undefined = undefined;
    export let long: number | undefined= undefined;
    export let description: string;
    export let created: number; // unix time format
    export let image: {
    thumbnail: string;
    url: string;
}[] | undefined

    const imageurl = (image) ? image[0].thumbnail : "";


    var date = new Date(created );

    const theyear = date.getFullYear()
    const themonth = date.getMonth() +1
    const theday = date.getDay() +1

    // Will display time in 10:30:23 format
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const formattedTime = `${monthNames[date.getMonth()]} ${theyear}`

</script>

<div class='main'>
    <a href="{base}/story/{storyid}">

    
    <div class='containertext '>
        <div class='component'>
            <h1>{title}</h1>
            <p>
                By {username} • {formattedTime}
            </p>
            <p class='description '>
                {description}
            </p>
        </div>
        <div class='imagecontainer component'>

                {#if image}
                <img class='thumbnail' src="{imageurl}" alt="">
                {:else}
                <div class='thumbnail'></div>
                {/if}

        </div>
    </div>
</a>
</div>


<style>
    .component {
        margin: 10px
    }

    .imagepadding{
        /* margin: 10px; */
        height: 100%;
    }
    a {
        text-decoration: none;
        color: inherit;
        
    }
    
    .imagecontainer {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 10 0 10px 0;
    }
    .thumbnail {
        /* padding: 10px; */
        display: block;
        width: 250px;
        height: 100px;
        border-radius: 15px;
        border: 1px solid rgb(190, 190, 190);
        object-fit: cover
    }
    h1 {
        font-size: 1.5em;
        font-weight: 600;
        color: black;
    }
    h1:hover {
        color: rgb(27, 99, 255);
    }
    p {
        margin: 5px 0 5px 0;
    }

    .containertext{
        display: flex;
        justify-content: space-between;
        margin: 0px 15px 0px 15px;
    }
    .main {
        /* border: 1px solid rgb(225, 225, 225); */
        /* border-top: 1px solid rgb(225, 225, 225); */
        /* border-bottom: 1px solid rgb(225, 225, 225); */
        border-radius: 0px;
        margin: 10px 0 10px 0;
    }

    .main:hover {
        background-color: rgb(242, 242, 242);
        border-radius: 10px;
    }


    @media only screen and (max-width: 600px) {
  .containertext {
    flex-direction: column-reverse;
    text-align: center;
    
  }
  .main {
    margin: 20px;
    border: 0px solid rgb(225, 225, 225); 
    /* border-top: 1px solid rgb(225, 225, 225); */
    /* border-bottom: 1px solid rgb(225, 225, 225); */
    border-radius: 0;
  }
  .description{
    display: none;
  }
  .imagecontainer {
    margin: 0;
  }
  h1{ 
    margin: 0;
  }
  .thumbnail {
    width: 100%;
  }
}
    
</style>