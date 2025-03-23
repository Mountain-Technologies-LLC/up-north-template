using Amazon.CDK;
using Amazon.CDK.AWS.CertificateManager;
using Amazon.CDK.AWS.CloudFront;
using Amazon.CDK.AWS.CloudFront.Origins;
using Amazon.CDK.AWS.Route53;
using Amazon.CDK.AWS.Route53.Targets;
using Amazon.CDK.AWS.S3;
using Constructs;

namespace Infrastructure.Constructs
{
    internal class DistributionConstructProps : IStackProps
    {
        public Bucket Bucket;
        public string DomainName;
    }

    public class DistributionConstruct : Construct
    {
        public Distribution distribution;

        internal DistributionConstruct(Construct scope, string id, DistributionConstructProps props = null) : base(scope, id)
        {
            var domainName = props.DomainName;
            var wwwDomainName = $"www.{domainName}";

            var hostedZone = HostedZone.FromLookup(
                this, "hostedZone",
                new HostedZoneProviderProps
                {
                    DomainName = domainName
                });

            var certificate = new Certificate(
                this, "certificate",
                new CertificateProps
                {
                    DomainName = domainName,
                    SubjectAlternativeNames = [wwwDomainName],
                    Validation = CertificateValidation.FromDns(hostedZone)
                });

            var s3BucketOrigin = S3BucketOrigin.WithOriginAccessControl(props.Bucket);


            distribution = new Distribution(
                this, "distribution",
                new DistributionProps
                {
                    DomainNames = [domainName, wwwDomainName],
                    DefaultBehavior = new BehaviorOptions
                    {
                        Origin = s3BucketOrigin,
                        Compress = true,
                        AllowedMethods = AllowedMethods.ALLOW_GET_HEAD,
                        CachedMethods = CachedMethods.CACHE_GET_HEAD,
                        ViewerProtocolPolicy = ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                        CachePolicy = CachePolicy.CACHING_OPTIMIZED
                    },
                    ErrorResponses =
                    [
                        new ErrorResponse { HttpStatus = 403, ResponsePagePath = "/index.html", ResponseHttpStatus = 403, Ttl = Duration.Minutes(0) },
                        new ErrorResponse { HttpStatus = 404, ResponsePagePath = "/index.html", ResponseHttpStatus = 404, Ttl = Duration.Minutes(0) }
                    ],
                    PriceClass = PriceClass.PRICE_CLASS_100, // USA, Canada, Europe, & Israel
                    Enabled = true,
                    Certificate = certificate,
                    MinimumProtocolVersion = SecurityPolicyProtocol.TLS_V1_2_2021,
                    HttpVersion = HttpVersion.HTTP2,
                    DefaultRootObject = "index.html",
                    EnableIpv6 = true
                });

            var route53ARecord = new ARecord(
                this, "route53ARecord",
                new ARecordProps
                {
                    RecordName = domainName,
                    Zone = hostedZone,
                    Target = RecordTarget.FromAlias(new CloudFrontTarget(distribution))
                });

            _ = new ARecord(
                this, "wwwRoute53ARecord",
                new ARecordProps
                {
                    RecordName = wwwDomainName,
                    Zone = hostedZone,
                    Target = RecordTarget.FromAlias(new Route53RecordTarget(route53ARecord))
                });
        }
    }
}
