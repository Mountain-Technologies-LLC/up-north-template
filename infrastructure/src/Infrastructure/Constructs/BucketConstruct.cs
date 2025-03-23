using Amazon.CDK;
using Amazon.CDK.AWS.S3;
using Constructs;

namespace Infrastructure.Constructs
{
    internal class BucketConstructProps : IStackProps
    {
        public string Name;
        public string DomainName;
    }

    public class BucketConstruct : Construct
    {
        public Bucket Bucket;

        internal BucketConstruct(Construct scope, string id, BucketConstructProps props = null) : base(scope, id)
        {
            var scopedAws = new ScopedAws(this);

            var bucketName = $"{scopedAws.AccountId}-{props.DomainName}";

            Bucket = new Bucket(
                this, "s3Bucket",
                new BucketProps
                {
                    BucketName = bucketName,
                    RemovalPolicy = RemovalPolicy.DESTROY,
                    AutoDeleteObjects = true,

                    // Settings for just access to s3 bucket
                    PublicReadAccess = true,
                    BlockPublicAccess = BlockPublicAccess.BLOCK_ACLS,
                    WebsiteErrorDocument = "index.html",
                    WebsiteIndexDocument = "index.html",
                });

            _ = new CfnOutput(this, "BucketName", new CfnOutputProps { Value = Bucket.BucketName });
            _ = new CfnOutput(this, "Url", new CfnOutputProps { Value = Bucket.BucketWebsiteUrl });
        }
    }
}
