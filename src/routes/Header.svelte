<script>
    import { base } from "$app/paths";
</script>

<header>
    <div class='flexbox'>
        <div class='flexbox logo'>
            <img src="{base}/logo_rds.png" height=60 alt="">
            <span style='margin-left: 5px; font-weight: 600'>
                UKIndo
            </span>
        </div>
        <div class='stretch menucontainer'>
            <div class='flexbox' style='text-align: left;'>
                <div class='menus'>
                        <a href="{base}#someref">
                        Home
                    </a>
                    
                    </div>
                <div class='menus'>
                        <a href="{base}/blog/0">
                        Blog
                    </a>
                </div>
                <div class='menus'>
                        <a href="#someref">
                        About
                    </a>
            </div>
            </div>
        </div>
        <div >
            <!-- This is the Header -->
        </div>

    </div>
</header>

<style>
    a {
        text-decoration: none;
        color: #696969;
    }

    a:hover {
        color: black;
        font-weight: normal;
        transition: color 0.5s;
    }

    .menucontainer {
        margin-left: 65px
    }
    .menus {
        display: block;
        margin: 0 35px 0 0;
        font-size: smaller;
    }

    @media only screen and (max-width: 600px) {
        .menus {
            margin: 0 10px 0 0;
            /* background-color: blue; */
        }
        .menucontainer {
        margin-left: 25px
        }
        .flexbox {
            flex-flow: column;
        }
        .logo {
            flex-grow: 1;
        }
}

    .stretch {
        flex-grow: 1;
        text-align: center;
        margin-left: 20px;
        
    }
    .flexbox {
        display: flex;
        flex-wrap: nowrap;
        flex-flow: row;
        align-items: center;  
        
    }
    header{
        border: 0px solid red;
        border-bottom: 0.5px solid #dedede;
        padding: 0 20px 0 20px;
        /* padding: 20px; */
    }    
</style>