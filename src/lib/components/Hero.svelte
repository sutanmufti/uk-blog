<div class='main'>
    <div class='head headone hero'>
        <div>
            <div style='text-align:start'>
                    <span class='title'>
                    Indonesian survival guide in the UK 
                </span>
                </div>
                <div class='caption'>
                    Knowledge repository for Indonesian in the UK
                </div>
                <div class='goto'>
                    <button id='go'>Go to Blog</button>
                </div>
        </div>
    </div>
    <div class='head'>
        <img src="britain.svg" width='300px' alt="">
    </div>


</div>


<style>

    .head {
        /* border: 1px solid red; */
        display: flex;
        /* text-align: center; */
        align-items: center;
        justify-content: center;
        text-align: start;
        
    }

    .headone {
        width: 600px;
        height: 60vh;
        justify-content: start;
        flex-flow: row;
    }
    .main {
        /* border: 1px solid black; */
        text-align: start;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title {
        font-size: 2em;
        text-align:start;
        display: block;
    }

    .hero {
        text-align:start;
    }

    .caption {
        font-size: 1em;
        margin-top: 10px;
        display: block;
    }

    .goto {
        margin-top: 20px;
    }

    #go {
        color: white;
        border: 0;
        padding: 10px 20px 10px 20px;
        background-color: rgb(16,103,222);
        border-radius: 5px;
        cursor: pointer;
        transition: box-shadow 0.2s
    }

    #go:hover {
        box-shadow: 0 0 5px rgb(16,103,222);
    }

</style>