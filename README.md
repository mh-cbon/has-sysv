# has-sysv

Tells if the system is running sysv init system.

# Install

```sh
npm i @mh-cbon/has-sysv
```

# Usage

```js
require('@mh-cbon/has-sysv')(function (err) {
  if (err) return console.error('this system does not run sysv');
  console.log('This system seems to run sysv');
})
```
