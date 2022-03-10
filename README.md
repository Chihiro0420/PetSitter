# Petsitter

### Final group project at Dev Academy

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


