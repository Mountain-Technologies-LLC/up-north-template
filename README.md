# up-north-template

- Follow how to set up Angular website in README in template-app.
- Edit template-app/src/data.json to customize your website.
- Export JSON to see changes in data.json.
- Profit.

![Image of Up North Template](Documents/website.png "Image of Up North Template")

## Working with repo
1. Push changes.
1. Changes should be picked up by GitHub Actions.

## Manual Builds
1. Build for GitHub: ```ng build --base-href /up-north-template --deploy-url /up-north-template/```
   - Current Directory must be within ```./template-app```
1. Deploy to AWS
   - See [infrastructure README.md](./infrastructure/README.md) for more.
   1. ```npm run build --if-present --prefix ./template-app -- --output-path ../dist```
   1. ```cdk synth --app "dotnet run --project infrastructure/src/Infrastructure/Infrastructure.csproj" --context name=test-com```
   1. ```cdk deploy --app "dotnet run --project infrastructure/src/Infrastructure/Infrastructure.csproj" --context name=test-com```
   1. Destroy from AWS
      1. ```cdk destroy --app "dotnet run --project infrastructure/src/Infrastructure/Infrastructure.csproj" --context name=test-com```
