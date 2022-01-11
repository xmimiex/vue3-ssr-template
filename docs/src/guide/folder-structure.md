# Folder structure

```json5
📦vue3-ssr-template
 ┣ 📂config // contains configuration for each environments
 ┃ ┣ 📜local.yml
 ┃ ┗ 📜production.yml
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┗ 📜robots.txt // robots configuration
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┣ 📂scss
 ┃ ┃ ┃ ┃ ┣ 📜index.scss
 ┃ ┃ ┃ ┃ ┗ 📜tokens.scss
 ┃ ┃ ┣ 📂components // you can arrange your componants as you like but we recommend using atoms molecules and organisms 
 ┃ ┃ ┃ ┗ 📂atoms
 ┃ ┃ ┣ 📂i18n
 ┃ ┃ ┃ ┣ 📂formats
 ┃ ┃ ┃ ┃ ┣ 📜formats-CH.ts
 ┃ ┃ ┃ ┃ ┣ 📜formats-FR.ts
 ┃ ┃ ┃ ┃ ┗ 📜formats-UK.ts
 ┃ ┃ ┃ ┣ 📂messages // localization
 ┃ ┃ ┃ ┃ ┣ 📜messages-en.json
 ┃ ┃ ┃ ┃ ┣ 📜messages-fr.json
 ┃ ┃ ┃ ┃ ┗ 📜messages-it.json
 ┃ ┃ ┣ 📂pages // all entry pages
 ┃ ┃ ┃ ┣ 📜Empty.vue
 ┃ ┃ ┃ ┣ 📜Home.vue
 ┃ ┃ ┃ ┗ 📜NotFound.vue
 ┃ ┃ ┣ 📂router
 ┃ ┃ ┃ ┣ 📂routes // create a separate file for each routes
 ┃ ┃ ┃ ┃ ┣ 📜category.ts
 ┃ ┃ ┃ ┃ ┣ 📜home.ts
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜main.ts
 ┃ ┃ ┃ ┃ ┗ 📜not-found.ts
 ┃ ┃ ┣ 📂stores
 ┃ ┃ ┣ 📂typings
 ┃ ┃ ┣ 📂utils
 ┃ ┗ 📂server
 ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📂middlewares
 ┃ ┃ ┣ 📂typings
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜index-dev-server.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜tsconfig-server.json // confi file for server only
 ┣ 📜.env
 ┣ 📜.env.production
 ┣ 📜package.json
```