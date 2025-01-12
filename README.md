# Weather App

## Bring your own Openweather API key
Enter your Openweather API key in ./.env with key "VITE_OPENWEATHER_API_KEY"

## Starting development server
```
npm run dev
```

## Building
```
npm run build
```

## Deploying to Github pages
### Set environment variables
Ensure that the key "VITE_OPENWEATHER_API_KEY" is set in Github Settings -> Secrets and variables -> Actions -> Repository secrets

### Github Actions
There is a deploy workflow that watches for changes on the **main** branch and builds to **gh-pages** branch. This creates a build with the environment secrets, as this is a static website.

### Github Pages setup
Ensure that gh-pages is activated in Settings -> Pages
* Branch: gh-pages
* Folder: /(root)