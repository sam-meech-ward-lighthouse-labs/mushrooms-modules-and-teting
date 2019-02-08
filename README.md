# Modules and Testing

## Modules 

* What is a module?
  - in node, a module is a javascript file.

* and what problem does it solve?
  - help us solve more complicated code errors. 
  - **easier to test**
  - allows you to keep pieces of code that aren't supposed to interact, away from each other.
  - makes it easier to organize code.

* Every module gets its own version of these variables: exports, require, module, __filename, __dirname
* Everything inside of a module, is scoped to that module. Everything is **private** by default.

//exports is an empty object
//require is a function
// module is a more interesting object, that has an exports property
// 

* when you `require` a module, the `require` function returns that module's `exports` object.
* every single module in node gets its own exports object that by default, is an empty object.
* Everything inside of a module is private by default, except the `exports` object.

## npm

"Nice Parakeet Marriage"

a package manager for node.

* The JavaScript community, is one of the best communities for sharing code, through libraries.

- package.json 
- `npm init`
- `-g` 

## Testing

* checking that variables have the value that you expect. maybe you test this with a `console.log`
* a better approach is to use a library like `assert` to check that functions do the thing you expect them to do. return the value you expect them to return.


## mocha

mochajs.org

```
npm install --save-dev mocha
```

`--save-dev` for development depedencies

## Terminal Output

```
node mushrooms.js
node mushrooms.js maigc
node mushrooms.js poisen
node mushrooms.js 
node mushrooms.js anything else 
node mushrooms.js 
node app.js
node mushrooms.js
node
npm install cowsay
ls
ls node_modules
npm init
npm init -y
ls
ls node_modules
node mushrooms.js maigc
node mushrooms.js poisen
node mushrooms.js poisens
node mushroomtest.js
npm install --save-dev mocha
./node_modules/mocha/bin/mocha
mkdir test
ls
mv mushroomtest.js test
ls
ls test
./node_modules/mocha/bin/mocha
npm install --save-dev chai
```

---

## Snippets

```js
(function (exports, require, module, __filename, __dirname) { 
})();
```
