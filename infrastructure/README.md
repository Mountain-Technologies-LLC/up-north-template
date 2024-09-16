# Welcome to your CDK C# project!

This is a blank project for CDK development with C#.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

It uses the [.NET CLI](https://docs.microsoft.com/dotnet/articles/core/) to compile and execute your project.

# Requirements
1. Local machine has npm installed by running `npm -v`
1. Local machine has aws-sdk installed by running `npm info aws-sdk version`
1. Local machine has aws-sdk installed by running `cdk --version`
1. Local machine has an identity by running `aws sts get-caller-identity`

## Useful commands
* *These are standard commands and will not work. See parent [README.md](../README.md).*
* `dotnet build src` compile this app
* `cdk deploy`       deploy this stack to your default AWS account/region
* `cdk diff`         compare deployed stack with current state
* `cdk synth`        emits the synthesized CloudFormation template
