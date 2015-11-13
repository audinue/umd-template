# UMD Template #

A template JavaScript file for Universal Module Definition (UMD).

This project does not have any build tools, it's just a simple template script you can use whether you're writing a UMD
module as-is or using it within any other build tool environment.

## Steps ##

1. Copy the contents of the [template.js](https://raw.githubusercontent.com/chilts/umd-template/master/template.js) and
   paste into your JavaScript file.
2. Change the module name (usually only required when used as a `<script>`, not in CommonJS or RequireJS.
3. Add any requirements to the requires array (leave as `[]` if none required).
4. Write your code in function at the bottom.
5. Return your exported value.

The minimum steps you need to do are 1 and 5. You should also do step 2. Without doing step 4 then you won't have much
of a module. Step 3 is perfectly optional.

## Example ##

Let's imagine I'm writing a pluralise function as follows:

```js
function pluralise(count, singular, plural) {
    return count === 1 ? singular : plural ? plural : singular + 's';
}
```

I would do the following steps:

1. Copy and paste the [template.js](https://raw.githubusercontent.com/chilts/umd-template/master/template.js) into `pluralise.js`.
2. Change the module name to `'pluralise'`.
3. Leave the requirements array alone (since none are needed).
4. Write the `pluralise` function into the function (which provides scope) at the bottom.
5. Do a `return pluralise;` at the bottom.

The complete [pluralise.js](https://github.com/chilts/umd-template/tree/master/example) set of examples is in the `example/` subdirectory.

## Inspiration ##

This project is heavily inspired by [umd](https://github.com/ForbesLindesay/umd) by
[ForbesLindesay](https://github.com/ForbesLindesay).

I kept finding myself copying and pasting the
[template.js](https://raw.githubusercontent.com/ForbesLindesay/umd/master/template.js) into my own projects. However, I
also wanted to change less code when doing it.

## Author ##

[Andrew Chilton](http://chilts.org/) <andychilton at gmail dot com>

* GitHub  - https://github.com/chilts
* Twitter - https://twitter.com/andychilton

(Ends)
