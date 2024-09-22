# up-north-template

- Follow how to set up Angular website in README in template-app.
- Edit template-app/src/data.json to customize your website.
- Export JSON to see changes in data.json.
- Profit.

![Image of Up North Template](Documents/website.png "Image of Up North Template")

# Working with repo
1. Push changes.
1. Changes should be picked up by GitHub Actions.

# Commands
## Run locally
- ```npm run start```

## Deploy to AWS
- See [infrastructure README.md](./infrastructure/README.md) for more.
- ```npm run build```
- ```npm run synth -- --context name=test.com```
- ```npm run diff -- --context name=test.com```
- ```npm run deploy -- --context name=test.com```
- Destroy from AWS
   - ```npm run destroy -- --context name=test.com```
