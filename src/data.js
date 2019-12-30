const details = [
  {
    environment: "prod",
    account_number: "057346956084",
    regions: [
      {
        region_one: "10.0.0.0/24"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-novus-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "749444856751",
    regions: [
      {
        region_one: "172.31.0.0/16",
        region_three: "172.30.0.0/16"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-gcs-normalization-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "238963201434",
    regions: [
      {
        region_one: "10.37.128.0/20",
        region_three: "10.37.144.0/20"
      }
    ],
    bu: "dcis",
    account_alias: "tr-tax-cp-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "209911870440",
    regions: [
      {
        region_one: "10.150.8.0/21",
        region_three: "10.168.0.0/21"
      }
    ],
    bu: "tax",
    account_alias: "tr-learning-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "933497097166",
    regions: [
      {
        region_six: "10.39.176.0/22",
        region_one: "10.39.160.0/21",
        region_three: "10.39.168.0/21",
        region_four: "10.39.124.0/22"
      }
    ],
    bu: "Corporates",
    account_alias: "tr-integrationpoint-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "777737700635",
    regions: [
      {
        region_nine: "10.152.158.0/24",
        region_ten: "10.97.207.0/24",
        region_one: "10.97.203.0/24",
        region_five: "10.97.205.0/24",
        region_four: "10.97.206.0/24",
        region_three: "10.97.204.0/24"
      }
    ],
    bu: "dcis",
    account_alias: "tr-isrm-ad-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "586447969888",
    regions: [
      {
        region_one: "10.226.208.0/21",
        region_three: "10.39.8.0/21"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-content-console-preprod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "307097860667",
    regions: [
      {
        region_one: "10.37.240.0/22",
        region_four: "10.37.244.0/22"
      }
    ],
    bu: "tax",
    account_alias: "tr-tax-prof1-cicd-nonprod",
    resource_name: "account_info"
  },
  {
    environment: "sandbox",
    account_number: "330062551827",
    regions: [{}],
    bu: "tax",
    account_alias: "tr-tax-prof-sandbox",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "306311469816",
    regions: [
      {
        region_one: "10.226.224.0/21",
        region_three: "10.39.32.0/21"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-content-catalog-preprod",
    resource_name: "account_info"
  },
  {
    environment: "sandbox",
    account_number: "402289134251",
    regions: [{}],
    bu: "legal",
    account_alias: "tr-corporates-sandbox",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "401148645463",
    regions: [
      {
        region_one: "10.37.96.0/19",
        region_three: "10.37.80.0/20"
      }
    ],
    bu: "dcis",
    account_alias: "tr-tax-cp-preprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "565663046794",
    regions: [{}],
    bu: "dcis",
    account_alias: "tr-organisations-master",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "063863854861",
    regions: [
      {
        region_one: "10.37.198.0/24",
        region_nine: "10.97.202.0/24",
        region_four: "10.37.199.0/24"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-isrm-ad-preprod",
    resource_name: "account_info"
  },
  {
    environment: "sandbox",
    account_number: "962390577453",
    regions: [{}],
    bu: "corporate",
    account_alias: "tr-central-sandbox",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "364466722895",
    regions: [
      {
        region_one: "172.31.0.0/16",
        region_four: "172.31.0.0/16"
      }
    ],
    bu: "dcis",
    account_alias: "tr-transit-nonprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "401148047289",
    regions: [{}],
    bu: "CIO and Central Tech",
    account_alias: "tr-quicksight-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "108750161421",
    regions: [
      {
        region_one: "10.21.240.0/22",
        region_three: "10.21.248.0/22",
        region_four: "10.21.244.0/22"
      }
    ],
    bu: "tax",
    account_alias: "tr-corporates-cicd-preprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "123123223698",
    regions: [
      {
        region_one: "10.39.144.0/21",
        region_three: "10.39.152.0/21"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-tms-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "304853478528",
    regions: [
      {
        region_nine: "10.62.80.0/20",
        region_ten: "10.62.64.0/20",
        region_one: "10.114.128.0/18",
        region_three: "10.226.40.0/21",
        region_four: "10.45.128.0/18"
      }
    ],
    bu: "corporate",
    account_alias: "tr-central-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "060725138335",
    regions: [
      {
        region_nine: "10.226.8.0/21",
        region_ten: "10.62.96.0/21",
        region_one: "10.97.0.0/19",
        region_three: "10.226.0.0/21",
        region_four: "10.97.96.0/19"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-central-preprod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "647380077053",
    regions: [
      {
        region_one: "10.0.0.0/24"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-novus-preprod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "669760289733",
    regions: [
      {
        region_one: "10.152.224.0/21",
        region_four: "10.152.232.0/21"
      }
    ],
    bu: "dcis",
    account_alias: "tr-enterprise-nonprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "896748910876",
    regions: [
      {
        region_one: "10.0.0.0/16",
        region_four: "10.0.0.0/16"
      }
    ],
    bu: "dcis",
    account_alias: "tr-bastion-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "289427647455",
    regions: [
      {
        region_one: "10.21.176.0/22",
        region_four: "10.21.180.0/22"
      }
    ],
    bu: "legal",
    account_alias: "tr-legal-cicd-nonprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "639720240417",
    regions: [
      {
        region_one: "10.62.252.0/23",
        region_four: "10.62.254.0/23"
      }
    ],
    bu: "dns",
    account_alias: "tr-dns-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "571788740191",
    regions: [
      {
        region_one: "10.0.0.0/20",
        region_four: "10.0.0.0/24"
      }
    ],
    bu: "dcis",
    account_alias: "tr-custodian-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "519856417699",
    regions: [
      {
        region_one: "10.37.56.0/21",
        region_three: "10.37.44.0/22"
      }
    ],
    bu: "dcis",
    account_alias: "tr-tax-gov2-preprod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "728336755756",
    regions: [
      {
        region_one: "10.62.136.0/23",
        region_four: "10.62.140.0/23"
      }
    ],
    bu: " ",
    account_alias: "tr-isrm-services-nonprod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "755189330144",
    regions: [{}],
    bu: "CIO and Central Tech",
    account_alias: "tr-quicksight-preprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "460300312212",
    regions: [
      {
        region_one: "10.152.140.0/22",
        region_four: "10.152.136.0/22"
      }
    ],
    bu: "dcis",
    account_alias: "tr-enterprise-cicd-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "470717676343",
    regions: [{}],
    bu: "CIO and Central Tech",
    account_alias: "tr-wellarchitected-tool-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "249922119495",
    regions: [
      {
        region_one: "10.97.248.0/21",
        region_three: "10.62.56.0/21"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-authorities-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "043533679309",
    regions: [
      {
        region_five: "10.60.168.0/22",
        region_four: "10.60.164.0/22",
        region_ten: "10.37.212.0/23",
        region_one: "10.37.224.0/20",
        region_seven: "10.60.160.0/24",
        region_two: "10.37.214.0/23",
        region_three: "10.60.144.0/20"
      }
    ],
    bu: "corporate",
    account_alias: "tr-tax-proflgcy1-nonprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "451191978663",
    regions: [
      {
        region_one: "10.37.176.0/21",
        region_four: "10.37.184.0/21",
        region_three: "10.39.88.0/21"
      }
    ],
    bu: "corporate",
    account_alias: "tr-labs-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "757044902840",
    regions: [
      {
        region_one: "10.39.16.0/21",
        region_three: "10.39.24.0/21"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-content-console-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "551488618519",
    regions: [
      {
        region_one: "10.60.216.0/21",
        region_three: "10.226.192.0/20"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-acquisition-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "426942580712",
    regions: [
      {
        region_one: "10.60.32.0/20",
        region_four: "10.60.48.0/20"
      }
    ],
    bu: "corporate",
    account_alias: "tr-news-platform-preprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "431006081085",
    regions: [
      {
        region_one: "10.39.184.0/21",
        region_three: "10.39.192.0/21"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-datalake-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "736950028789",
    regions: [
      {
        region_one: "172.31.0.0/16",
        region_three: "172.30.0.0/16"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-gcs-normalization-preprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "907158839528",
    regions: [
      {
        region_one: "10.60.172.0/22",
        region_three: "10.226.188.0/22",
        region_four: "10.60.176.0/22"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-central-cicd-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "961483286993",
    regions: [
      {
        region_one: "10.226.156.0/23",
        region_four: "10.226.158.0/23"
      }
    ],
    bu: "dcis",
    account_alias: "tr-isrm-forensics-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "773476038677",
    regions: [
      {
        region_one: "10.37.16.0/20",
        region_five: "10.37.32.0/22",
        region_seven: "10.37.72.0/24",
        region_three: "10.37.0.0/20",
        region_four: "10.37.36.0/22"
      }
    ],
    bu: "dcis",
    account_alias: "tr-tax-prof1-preprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "612360232994",
    regions: [
      {
        region_one: "10.114.192.0/18",
        region_four: "10.45.192.0/18"
      }
    ],
    bu: " ",
    account_alias: "tr-ggo-prod",
    resource_name: "account_info"
  },
  {
    environment: "sandbox",
    account_number: "036263847021",
    regions: [{}],
    bu: "legal",
    account_alias: "tr-legal-sandbox",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "292941670003",
    regions: [
      {
        region_five: "10.153.16.0/20",
        region_four: "10.153.96.0/20",
        region_ten: "10.153.48.0/20",
        region_one: "10.153.80.0/20",
        region_seven: "10.153.32.0/20",
        region_two: "10.153.64.0/20",
        region_three: "10.153.0.0/20"
      }
    ],
    bu: "tax",
    account_alias: "tr-tax-prof1-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "724187052334",
    regions: [
      {
        region_one: "10.0.0.0/16",
        region_four: "10.0.0.0/16"
      }
    ],
    bu: "dcis",
    account_alias: "tr-enterprise-logging",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "829215188275",
    regions: [
      {
        region_one: "10.37.66.0/23",
        region_three: "10.37.64.0/23"
      }
    ],
    bu: "dcis",
    account_alias: "tr-tax-gov1-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "980461583422",
    regions: [
      {
        region_one: "10.97.64.0/19",
        region_four: "10.97.160.0/19"
      }
    ],
    bu: " ",
    account_alias: "tr-ggo-preprod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "591518367534",
    regions: [
      {
        region_one: "10.194.209.0/24",
        region_three: "10.209.51.0/24",
        region_four: "10.194.210.0/24"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-enterprise-test",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "142227596713",
    regions: [
      {
        region_one: "10.152.132.0/22",
        region_four: "10.152.128.0/22"
      }
    ],
    bu: "dcis",
    account_alias: "tr-enterprise-cicd-nonprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "599473504514",
    regions: [
      {
        region_one: "10.226.252.0/22"
      }
    ],
    bu: "Legal Professionals-All",
    account_alias: "tr-prs-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "773778111642",
    regions: [
      {
        region_eight: "10.62.32.0/20",
        region_five: "10.62.144.0/20",
        region_four: "10.45.64.0/18",
        region_nine: "10.225.128.0/20",
        region_ten: "10.225.112.0/20",
        region_six: "10.62.112.0/20",
        region_one: "10.103.64.0/18",
        region_two: "10.114.112.0/22",
        region_three: "10.103.192.0/18"
      }
    ],
    bu: "tax",
    account_alias: "tr-corporates-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "041916277582",
    regions: [
      {
        region_one: "10.60.64.0/20",
        region_four: "10.60.80.0/20"
      }
    ],
    bu: "corporate",
    account_alias: "tr-news-platform-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "993990991017",
    regions: [
      {
        region_one: "10.37.160.0/21",
        region_three: "10.39.80.0/21",
        region_four: "10.37.168.0/21"
      }
    ],
    bu: "corporate",
    account_alias: "tr-labs-preprod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "732776733977",
    regions: [
      {
        region_one: "10.60.208.0/21",
        region_three: "10.226.216.0/21"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-acquisition-preprod",
    resource_name: "account_info"
  },
  {
    environment: "sandbox",
    account_number: "443862268467",
    regions: [{}],
    bu: "ggo",
    account_alias: "tr-ggo-sandbox",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "017522601624",
    regions: [
      {
        region_one: "10.226.248.0/22"
      }
    ],
    bu: "ct",
    account_alias: "tr-prs-preprod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "599074885545",
    regions: [
      {
        region_one: "10.226.240.0/22"
      }
    ],
    bu: "legal",
    account_alias: "tr-clear-preprod",
    resource_name: "account_info"
  },
  {
    environment: "sandbox",
    account_number: "745778444708",
    regions: [{}],
    bu: "CIO and Central Tech",
    account_alias: "tr-isrm-sailpoint-sandbox",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "932186720256",
    regions: [
      {
        region_one: "10.21.184.0/22",
        region_four: "10.21.188.0/22"
      }
    ],
    bu: "legal",
    account_alias: "tr-legal-cicd-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "020548856685",
    regions: [
      {
        region_one: "10.0.0.0/16"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-nuvolanalytics-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "196154118232",
    regions: [
      {
        region_one: "10.39.56.0/21",
        region_three: "10.39.64.0/21"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-content-workflow-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "010364876731",
    regions: [
      {
        region_one: "10.60.180.0/22",
        region_four: "10.60.184.0/22"
      }
    ],
    bu: "corp",
    account_alias: "tr-central-cicd-nonprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "918544005421",
    regions: [
      {
        region_one: "10.39.212.0/22",
        region_three: "10.39.216.0/22"
      }
    ],
    bu: "Corporates",
    account_alias: "tr-integrationpoint-cicd-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "126965670456",
    regions: [
      {
        region_one: "10.21.248.0/22",
        region_three: "10.21.244.0/22",
        region_four: "10.21.252.0/22"
      }
    ],
    bu: "tax",
    account_alias: "tr-corporates-cicd-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "435163754546",
    regions: [
      {
        region_one: "10.0.0.0/16",
        region_four: "10.0.0.0/16"
      }
    ],
    bu: "dcis",
    account_alias: "tr-cfsigner-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "627274622028",
    regions: [
      {
        region_one: "10.39.220.0/22"
      }
    ],
    bu: "Corporates-ALL",
    account_alias: "tr-integrationpoint-cicd-nonprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "751317295400",
    regions: [
      {
        region_one: "10.62.138.0/23",
        region_nine: "10.60.162.0/23",
        region_four: "10.62.142.0/23"
      }
    ],
    bu: " ",
    account_alias: "tr-isrm-services-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "385396992734",
    regions: [
      {
        region_one: "10.37.48.0/21",
        region_three: "10.37.40.0/22"
      }
    ],
    bu: "dcis",
    account_alias: "tr-tax-gov1-preprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "385419513691",
    regions: [
      {
        region_one: "10.226.244.0/22"
      }
    ],
    bu: "legal",
    account_alias: "tr-clear-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "801842930314",
    regions: [
      {
        region_one: "10.150.0.0/21"
      }
    ],
    bu: "tax",
    account_alias: "tr-learning-preprod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "074929092668",
    regions: [
      {
        region_one: "10.97.232.0/21",
        region_three: "10.97.240.0/21"
      }
    ],
    bu: "CIO and Central Tech",
    account_alias: "tr-authorities-preprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "973795748745",
    regions: [
      {
        region_one: "10.37.248.0/22",
        region_four: "10.37.252.0/22"
      }
    ],
    bu: "tax",
    account_alias: "tr-tax-prof1-cicd-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "266501442221",
    regions: [
      {
        region_one: "10.153.176.0/22",
        region_four: "10.153.180.0/22"
      }
    ],
    bu: "tax",
    account_alias: "tr-news-platform-cicd-nonprod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "974877374319",
    regions: [
      {
        region_one: "10.37.70.0/23",
        region_three: "10.37.68.0/23"
      }
    ],
    bu: "dcis",
    account_alias: "tr-tax-gov2-prod",
    resource_name: "account_info"
  },
  {
    environment: "prod",
    account_number: "280910660413",
    regions: [
      {
        region_ten: "10.37.216.0/21",
        region_six: "10.37.76.0/23",
        region_one: "10.103.0.0/18",
        region_seven: "10.97.216.0/21",
        region_four: "10.45.0.0/18"
      }
    ],
    bu: "legal",
    account_alias: "tr-legal-prod",
    resource_name: "account_info"
  },
  {
    environment: "nonprod",
    account_number: "367379483300",
    regions: [
      {
        region_eight: "10.62.48.0/21",
        region_five: "10.62.192.0/21",
        region_four: "10.158.160.0/19",
        region_nine: "10.225.144.0/21",
        region_ten: "10.225.104.0/21",
        region_six: "10.62.128.0/21",
        region_one: "10.114.0.0/19",
        region_two: "10.114.116.0/22",
        region_three: "10.114.64.0/19"
      }
    ],
    bu: "tax",
    account_alias: "tr-corporates-preprod",
    resource_name: "account_info"
  }
];

export default details;