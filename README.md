# Petsitter

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


