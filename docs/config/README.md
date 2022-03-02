# Configuration reference

```
.
┣ 📂config
 ┃ ┣ 📜local.yml
 ┃ ┗ 📜production.yml
```

## Context

```yaml
context:
  environment: production
  port: 8080
  cluster: true
```

Enable or disable cluster. If enable, the server will fork processes and use all available cpu cores.
In some case, it is better to disable it if you are using PM2 or other orchestrator that handle replication.

## Headers

```yaml
headers:
  countryLanguage: "x-country-language"
```

## Internationalization

```yaml
internationalization:
  defaultCountry: UK
  defaultLanguage: en
  languagesForCountry:
    UK:
      - en
    FR:
      - fr
    CH:
      - fr
      - it
      - en
```

## Cache control

You can set a header cache value for each pages and static assets.
Values are in ms

```yaml
cacheControl:
  pages:
    category: 360
    home: 15552000
  static:
    robots: 86400
    favicon: 15552000
    asset: 15552000
```

## Third party scripts

If you want to add third party scripts, like analytics, ab testing script, ...
You can easily add them here.

```yaml
thirdPartyScripts:
  - id: fake-uri-id # tag id
    uri: https://third-party-fake-domain/third-party-fake-path.js 
    node: body # values can be `body` or `head`
    async: true
    defer: true
  - id: fake-body-id
    body: (function () { console.log('loading third-party with body'); } )();
    node: head
```
