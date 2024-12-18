using System;
using Amazon.CDK;
using Amazon.CDK.AWS.S3;
using Amazon.CDK.AWS.S3.Deployment;
using Constructs;

namespace Infrastructure.Constructs
{
    internal class BucketDeploymentConstructProps : IStackProps
    {
        public Bucket Bucket;
        //public Distribution distribution;
    }

    public class BucketDeploymentConstruct : Construct
    {
        internal BucketDeploymentConstruct(Construct scope, string id, BucketDeploymentConstructProps props = null) : base(scope, id)
        {
            new BucketDeployment(
                this, "s3BucketDeploy",
                new BucketDeploymentProps
                {
                    Sources = new[] { Source.Asset("./dist/browser") },
                    DestinationBucket = props.Bucket,
                    //Distribution = cloudFrontDistribution,
                    //DistributionPaths = new[] { "/*" }
                });

            // Output the website URL
            var bucketUrl = props.Bucket.BucketWebsiteUrl;
            Console.WriteLine($"Bucket URL: {bucketUrl}");
        }
    }
}
