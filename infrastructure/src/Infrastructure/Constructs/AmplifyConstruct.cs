using Amazon.CDK;
using Amazon.CDK.AWS.Cognito;
using Constructs;

namespace Infrastructure.Constructs
{
    internal class AmplifyConstructProps : IStackProps
    {
        public string Name;
    }

    public class AmplifyConstruct : Construct
    {
        internal AmplifyConstruct(Construct scope, string id, AmplifyConstructProps props = null) : base(scope, id)
        {
            var userPoolName = $"AmplifyAuthUserPool-{props.Name}";

            // Create a User Pool
            var userPool = new UserPool(this, "AmplifyAuthUserPool", new UserPoolProps
            {
                UserPoolName = props.Name,
                SelfSignUpEnabled = true,
                AutoVerify = new AutoVerifiedAttrs { Email = true },
                StandardAttributes = new StandardAttributes
                {
                    Email = new StandardAttribute { Required = true, Mutable = true }
                },
                PasswordPolicy = new PasswordPolicy
                {
                    MinLength = 8,
                    RequireLowercase = false, // TODO: Make more secure
                    RequireUppercase = false,
                    RequireDigits = false,
                    RequireSymbols = false
                }
            });

            var userPoolClient = new UserPoolClient(this, "AmplifyAuthUserPoolClient", new UserPoolClientProps
            {
                UserPool = userPool,
                GenerateSecret = false,
                AuthFlows = new AuthFlow
                {
                    UserPassword = true,
                    UserSrp = true
                }
            });

            // Output the User Pool ID and Client ID
            new CfnOutput(this, "UserPoolId", new CfnOutputProps { Value = userPool.UserPoolId });
            new CfnOutput(this, "UserPoolClientId", new CfnOutputProps { Value = userPoolClient.UserPoolClientId });
        }
    }
}
