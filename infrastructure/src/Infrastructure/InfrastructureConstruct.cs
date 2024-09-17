using Amazon.CDK;
using Amazon.CDK.AWS.S3;
using Amazon.CDK.AWS.S3.Deployment;
using Constructs;

namespace Infrastructure
{
    internal class InfrastructureConstructProps : IStackProps
    {
        public string Name;
    }

    public class InfrastructureConstruct : Construct
    {
        internal InfrastructureConstruct(Construct scope, string id, InfrastructureConstructProps props = null) : base(scope, id)
        {
            new CfnOutput(this, "CfnOutput-InfrastructureConstruct-Start", new CfnOutputProps { Value = $"{props.Name}" });

            var scopedAws = new ScopedAws(this);

            var bucketName = $"{scopedAws.AccountId}-{props.Name}";

            var s3Bucket = new Bucket(
                this, "s3Bucket",
                new BucketProps
                {
                    BucketName = bucketName,
                    //overriden below //BlockPublicAccess = BlockPublicAccess.BLOCK_ALL,
                    RemovalPolicy = RemovalPolicy.DESTROY,
                    AutoDeleteObjects = true,

                    // Settings for just access to s3 bucket
                    PublicReadAccess = true,
                    BlockPublicAccess = BlockPublicAccess.BLOCK_ACLS,
                    WebsiteErrorDocument = "index.html",
                    WebsiteIndexDocument = "index.html",
                });

            new BucketDeployment(
                this, "s3BucketDeploy",
                new BucketDeploymentProps
                {
                    Sources = new[] { Source.Asset("./dist/browser") },
                    DestinationBucket = s3Bucket,
                    //Distribution = cloudFrontDistribution,
                    //DistributionPaths = new[] { "/*" }
                });

            new CfnOutput(this, "CfnOutput-InfrastructureConstruct-Deployed", new CfnOutputProps { Value = $"{props.Name}" });
        }
    }
}
