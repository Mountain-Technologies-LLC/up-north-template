using Amazon.CDK;
using Amazon.CDK.AWS.CloudFront;
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

            // var hostedZone = HostedZone.FromLookup(
            //     this, "hostedZone",
            //     new HostedZoneProviderProps
            //     {
            //         DomainName = domainName
            //     });

            // Below will incur a monthly cost
            /*
            using Amazon.CDK.AWS.CertificateManager;
            using Amazon.CDK.AWS.CloudFront.Origins;
            using Amazon.CDK.AWS.Route53.Targets;
            using Amazon.CertificateManager;
            using Amazon.CertificateManager.Model;
            using Amazon.Route53;
            using Amazon.Route53.Model;

            var route53Client = new AmazonRoute53Client();
            var acmClient = new AmazonCertificateManagerClient();

            // Create a Route 53 hosted zone
            var hostedZoneRequest = new CreateHostedZoneRequest
            {
                Name = domainName,
                CallerReference = Guid.NewGuid().ToString()
            };
            var hostedZoneResponse = route53Client.CreateHostedZoneAsync(hostedZoneRequest).Result;
            var hostedZoneId = hostedZoneResponse.HostedZone.Id;

            // var dnsValidatedCertificate = new DnsValidatedCertificate(
            //     this, "dnsValidatedCertificate",
            //     new DnsValidatedCertificateProps
            //     {
            //         DomainName = domainName,
            //         SubjectAlternativeNames = new[] { wwwDomainName },
            //         HostedZone = hostedZone,
            //         Region = scopedAws.Region,
            //         Validation = CertificateValidation.FromDns()
            //     });

            // Request a certificate
            var certificateRequest = new RequestCertificateRequest
            {
                DomainName = domainName,
                ValidationMethod = Amazon.CertificateManager.ValidationMethod.DNS,
                IdempotencyToken = Guid.NewGuid().ToString(),
                DomainValidationOptions = new List<DomainValidationOption>
                {
                    new DomainValidationOption
                    {
                        DomainName = domainName,
                        HostedZoneId = hostedZoneId
                    }
                }
            };
            var certificateResponse = acmClient.RequestCertificateAsync(certificateRequest).Result;
            var certificateArn = certificateResponse.CertificateArn;

            var cloudFrontOriginAccessIdentity = new OriginAccessIdentity(
                this, "cloudFrontOriginAccessIdentity",
                new OriginAccessIdentityProps { Comment = "Wedding.Yytt.Media" });

            var cloudFrontDistribution = new Distribution(
                this, "distribution",
                new DistributionProps
                {
                    DomainNames = new[] { domainName, wwwDomainName },
                    DefaultBehavior = new BehaviorOptions
                    {
                        Origin = new S3Origin(props.Bucket, new S3OriginProps { OriginAccessIdentity = cloudFrontOriginAccessIdentity }),
                        Compress = true,
                        AllowedMethods = AllowedMethods.ALLOW_GET_HEAD,
                        CachedMethods = CachedMethods.CACHE_GET_HEAD,
                        ViewerProtocolPolicy = ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                        CachePolicy = CachePolicy.CACHING_OPTIMIZED
                    },
                    ErrorResponses = new[]
                    {
                        new ErrorResponse { HttpStatus = 403, ResponsePagePath = "/index.html", ResponseHttpStatus = 403, Ttl = Duration.Minutes(0) },
                        new ErrorResponse { HttpStatus = 404, ResponsePagePath = "/index.html", ResponseHttpStatus = 404, Ttl = Duration.Minutes(0) }
                    },
                    PriceClass = PriceClass.PRICE_CLASS_100, // USA, Canada, Europe, & Israel
                    Enabled = true,
                    Certificate = dnsValidatedCertificate,
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
                    Target = RecordTarget.FromAlias(new CloudFrontTarget(cloudFrontDistribution))
                });

            new ARecord(
                this, "wwwRoute53ARecord",
                new ARecordProps
                {
                    RecordName = wwwDomainName,
                    Zone = hostedZone,
                    Target = RecordTarget.FromAlias(new Route53RecordTarget(route53ARecord))
                });

            route53Client.Dispose();
            acmClient.Dispose();
            */
        }

        /*
        private void ValidateDomains(AmazonRoute53Client route53Client, List<string> domainNames)
        {
            foreach (var domain in domainNames)
            {
                var request = new ListHostedZonesByNameRequest
                {
                    DNSName = domain
                };
                var response = route53Client.ListHostedZonesByNameAsync(request).Result;

                if (response.HostedZones.Count == 0)
                {
                    throw new Exception($"Domain {domain} not found in Route 53");
                }
            }
        }
        */
    }
}
