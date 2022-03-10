# Petsitter

## SET UP

### From the command line

```shell
git clone git@github.com:dev-academy-challenges/boilerplate-full-stack-auth0.git [your-project-name]
cd [your-project-name]
cp client/auth_config.json.example client/auth_config.json
cp server/.env.example server/.env
npm install # to install dependencies
npm run knex migrate:latest
npm run knex seed:run
npm run dev # to start the dev server
```


