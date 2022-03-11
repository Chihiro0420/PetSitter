# Petsitter

### Final group project at Dev Academy

<<<<<<< HEAD
### Tech
React, Redux, Node.js, SQLITE, JEST, AUTH0, REST APIs, HTML, CSS, SASS
||||||| d8cdba8
=======
![topimage](https://user-images.githubusercontent.com/88119709/157583527-ef14044c-32dc-42be-b540-644397c4db72.png)

>>>>>>> c0f304d45e9a9b3c5baa8fc8c750fb760f5e7c87
## User sotry 
### Problem
Pet owners finding it hard to locate pet services close to them (e.g. pet sitting, grooming, walking etc) so we wanted an easy way to connect pet owners to available services.

### Solution
 Create an app to connect pet owners with other pet lovers/services that are willing to provide the certain pet services.

### What can the user do after this app has been created?
Pet owners can have easy access to pet services provided by individuals/ pet service companies. Our web app Pet Sitters will benefit both pet owners and pet service providers - they can make money/find trusted pet providers.


## Initial Wireframe
https://www.figma.com/file/mkNJKfL1XmMBqWWyjeyZ2A/PetSitter?node-id=0%3A1

## SET UP

```shell
git clone
cd PetSitter
cp client/auth_config.json.example client/auth_config.json
cp server/.env.example server/.env
npm install # to install dependencies
npm run knex migrate:latest
npm run knex seed:run
npm run dev # to start the dev server
```


