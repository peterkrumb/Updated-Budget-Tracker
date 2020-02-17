# Unit 18 PWA Homework: Online/Offline Budget Trackers

## How to turn an application into a PWA
There are 3 primary ways to make a desktop app into a PWA: service worker, manifest and webpack. 
* Since this app has no images the manifest isn't necessary. 
* Service workers set upp the app to run in an environment that's offline. You enter the service worker code in service-worker.js, add the files you want to cache, and add a certain code into index.html to activate it.
* Webpack is a tool that manages JavaScript dependencies. It allows you to import JavaScript code from libraries and bundles your JavaScript together into one or many files.

## Other steps
* The other step you need to take is you have to add the script for dist as in your index.html. Dist is the folder containing the bundle.js created by webpack.