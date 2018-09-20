To reproduce:

1. Works with plain service workers:

Run the example with the section within the comments uncommented:
/* From: https://googlechrome.github.io/samples/service-worker/offline-analytics/ */
/* ~From: https://googlechrome.github.io/samples/service-worker/offline-analytics/ */

and the section within the comments commented in the section:
 /* Using workbox */
 /* ~Using workbox */

npm install 
npm run start 

In Chrome browser go to http://localhost:8081

Take network offline and load page.
IndexedDB has entry offline-analytics - http://localhost:8081, under this an entry for the google analytics url is created
Reconnect to network and load page.
The request in the indexedDB is replayed and the indexedDB entry is cleared.

Reconnect to network and load page.
The request in the indexedDB is replayed and the indexedDB entry is cleared.

-------

2. Cannot make it work with workbox

Now run with workblox
Run the example with the section within the comments commented:
/* From: https://googlechrome.github.io/samples/service-worker/offline-analytics/ */
/* ~From: https://googlechrome.github.io/samples/service-worker/offline-analytics/ */

and the section within the comments uncommented in the section:
 /* Using workbox */
 /* ~Using workbox */

npm install 
npm run start 

In Chrome browser go to http://localhost:8081

Take network offline and load page.
IndexedDB has entry workbox-background-sync - http://localhost:8081, under this an entry for the google analytics url is created
Reconnect to network and load page.
The request in the indexedDB is replayed and the indexedDB entry is cleared.

Reconnect to network and load page.
The request in the indexedDB is not replayed and the indexedDB entry is not cleared.

-----------

