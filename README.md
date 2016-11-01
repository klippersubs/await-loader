# await-loader

Simplest promise loader for webpack.

````bash
npm install await-loader --save-dev
````

````javascript
async function main () {
    const myModule = await require('await!./myModule');
}

main();
````

# License

MIT
