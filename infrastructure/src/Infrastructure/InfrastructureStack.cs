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

            var distributionConstruct = new DistributionConstruct(this, "DistributionConstruct", new DistributionConstructProps
            {
                Bucket = bucketConstruct.Bucket,
                DomainName = props.DomainName
            });

            _ = new BucketDeploymentConstruct(this, "BucketDeploymentConstruct", new BucketDeploymentConstructProps
            {
                Bucket = bucketConstruct.Bucket,
                distribution = distributionConstruct.distribution
            });

            // _ = new AmplifyConstruct(this, "AmplifyConstruct", new AmplifyConstructProps
            // {
            //     Name = props.Name
            // });
        }
    }
}
