
<div>
    {@html result}
</div>

<script>
    import MarkdownIt from 'markdown-it'
    export let data;

    const md = new MarkdownIt();
    const result = md.render(data.post);
    // console.log(__dirname)
</script>