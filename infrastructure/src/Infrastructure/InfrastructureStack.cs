using Amazon.CDK;
using Constructs;
using Infrastructure.Constructs;

namespace Infrastructure
{
    internal class InfrastructureStackProps : StackProps
    {
        public string Name;
        public string DomainName;
    }

    public class InfrastructureStack : Stack
    {
        internal InfrastructureStack(Construct scope, string id, InfrastructureStackProps props = null) : base(scope, id, props)
        {
            var bucketConstruct = new BucketConstruct(this, "BucketConstruct", new BucketConstructProps
            {
                Name = props.Name,
                DomainName = props.DomainName
            });

            _ = new DistributionConstruct(this, "DistributionConstruct", new DistributionConstructProps
            {
                DomainName = props.DomainName
            });

            _ = new BucketDeploymentConstruct(this, "BucketDeploymentConstruct", new BucketDeploymentConstructProps
            {
                Bucket = bucketConstruct.Bucket
            });

            _ = new AmplifyConstruct(this, "AmplifyConstruct", new AmplifyConstructProps
            {
                Name = props.Name
            });
        }
    }
}
