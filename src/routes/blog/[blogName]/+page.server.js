import fs from 'fs'



// @ts-nocheck
export function load({ params }) {
    /**
     * @type {string}
     */

    /**
     * @type {string}
     */
    let content;
    if (fs.existsSync(`./src/contents/${params.blogName}.md`)) {
        /**
         * @type {string}
         */
        content = fs.readFileSync(`./src/contents/${params.blogName}.md`, 'utf-8')
        console.log("hello")
    } else {
        content = 'blog not found!'
    }
    return {
      post: content
    };
  }