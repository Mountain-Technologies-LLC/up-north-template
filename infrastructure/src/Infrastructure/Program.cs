using System;
using System.IO;
using System.Linq;
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

            var stackName = new string(name.Where(char.IsLetterOrDigit).ToArray());

            new InfrastructureStack(app, "InfrastructureStack", new InfrastructureStackProps
            {
                DomainName = name,
                Env = new Amazon.CDK.Environment
                {
                    Account = string.IsNullOrEmpty(account) ? System.Environment.GetEnvironmentVariable("CDK_DEFAULT_ACCOUNT") : account,
                    Region = string.IsNullOrEmpty(region) ? System.Environment.GetEnvironmentVariable("CDK_DEFAULT_REGION") : region,
                },
                Name = "InfrastructureStack-" + stackName,
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
