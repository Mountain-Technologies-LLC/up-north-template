using Amazon.CDK;
using Constructs;

namespace Infrastructure
{
    public class InfrastructureStack : Stack
    {
        internal InfrastructureStack(Construct scope, string id, IStackProps props = null) : base(scope, id, props)
        {
            var name = (string)Node.TryGetContext("name");

            new InfrastructureConstruct(this, "InfrastructureConstruct", new InfrastructureConstructProps
            {
                Name = name
            });
        }
    }
}
