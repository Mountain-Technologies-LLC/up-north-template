using System;
using System.IO;
using Amazon.CDK;

namespace Infrastructure
{
    sealed class Program
    {
        public static void Main(string[] args)
        {
            var app = new App();

            var account = (string)app.Node.TryGetContext("account");
            var region = (string)app.Node.TryGetContext("region");
            var name = (string)app.Node.TryGetContext("name");

            Console.WriteLine($"Values from context tree: account={account}, region={region}, name={name}");

            PreFlightChecklist(app);

            new InfrastructureStack(app, "InfrastructureStack", new StackProps
            {
                // If you don't specify 'env', this stack will be environment-agnostic.
                // Account/Region-dependent features and context lookups will not work,
                // but a single synthesized template can be deployed anywhere.

                // Uncomment the next block to specialize this stack for the AWS Account
                // and Region that are implied by the current CLI configuration.
                Env = new Amazon.CDK.Environment
                {
                    Account = string.IsNullOrEmpty(account) ? System.Environment.GetEnvironmentVariable("CDK_DEFAULT_ACCOUNT") : account,
                    Region = string.IsNullOrEmpty(region) ? System.Environment.GetEnvironmentVariable("CDK_DEFAULT_REGION") : region,
                },
                StackName = "InfrastructureStack-" + name,

                // Uncomment the next block if you know exactly what Account and Region you
                // want to deploy the stack to.
                /*
                Env = new Amazon.CDK.Environment
                {
                    Account = "123456789012",
                    Region = "us-east-1",
                }
                */

                // For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html
            });
            app.Synth();
        }

        private static void PreFlightChecklist(App app)
        {
            var name = (string)app.Node.TryGetContext("name");

            if (string.IsNullOrEmpty(name))
            {
                throw new ArgumentException("The value {name} was not found. Sample: 'cdk deploy --context name={name}'");
            }

            if (!Directory.Exists("./dist"))
            {
                throw new FileNotFoundException("The folder './dist' does not exist. Contents in this file are copied into a s3 Bucket.");
            }
        }
    }
}
