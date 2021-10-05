const config = {
  ipfs: {
    preload: {
      enabled: false
    },
    config: {
      API: {
        HTTPHeaders: {}
      },
      Addresses: {
        // API: "/ip4/127.0.0.1/tcp/5001",
        // Announce: [],
        // Gateway: "/ip4/127.0.0.1/tcp/8080",
        // NoAnnounce: [],
        Swarm: [
          // "/dns4/peer2.ipfsprivi.com/tcp/443/wss/p2p-webrtc-star/",
          // "/dns4/peer3.ipfsprivi.com/tcp/443/wss/p2p-webrtc-star/",
          "/dns4/peer4.ipfsprivi.com/tcp/443/wss/p2p-webrtc-star/",
          "/dns4/peer5.ipfsprivi.com/tcp/443/wss/p2p-webrtc-star/",
          "/dns4/peer6.ipfsprivi.com/tcp/443/wss/p2p-webrtc-star/",
          "/dns4/peer7.ipfsprivi.com/tcp/443/wss/p2p-webrtc-star/",
          // "/dns4/peer2.ipfsprivi.com/tcp/4001/ipfs/12D3KooWPZCFnEwEBHr4MvXEGS2PcGSy89J17JVuPH1ruKDUutLv",
          "/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
          "/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
          "/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/",
          // "/dns4/a882ed9ffb61649e7b9d63ed690f21f1-106692539.eu-west-2.elb.amazonaws.com/tcp/4001/ipfs/12D3KooWL8M9mcMyhat5jWx2SKrun34Jm7FtNfqEao6JenrJLguo",
          // "/ip6/::/tcp/4001",
          // "/ip4/0.0.0.0/udp/4001/quic",
          // "/ip6/::/udp/4001/quic"
          // "/dns4/peer5.ipfsprivi.com/tcp/4001/ipfs/12D3KooWRJFPELScQeUYQ4jogBDAb8pWcnm4Nk3pTamynoHVE2TK"
        ]
      },
    //   AutoNAT: {},
    // Bootstrap: [
    //   "/dns4/a882ed9ffb61649e7b9d63ed690f21f1-106692539.eu-west-2.elb.amazonaws.com/tcp/4001/ipfs/12D3KooWL8M9mcMyhat5jWx2SKrun34Jm7FtNfqEao6JenrJLguo",
    //   "/dns4/a0d55d5a2fd684e6cb5f9b523edd24a7-1668259307.eu-west-2.elb.amazonaws.com/tcp/4001/ipfs/12D3KooWPZCFnEwEBHr4MvXEGS2PcGSy89J17JVuPH1ruKDUutLv",
    //   "/dns4/ipfs-proxy-1057609920.eu-west-2.elb.amazonaws.com/tcp/4001/ipfs/12D3KooWPzzuBtqAbca6XwC3DquqHBKLMkUox37aTNicSF6PpLSm",
    //   "/dns4/peer4.ipfsprivi.com/tcp/4001/ipfs/12D3KooWMhpvPTERUivrdPhmUDFSiXLRCBmw1z8XAgYBjgwJgdNz",
    //   "/dns4/peer5.ipfsprivi.com/tcp/4001/ipfs/12D3KooWRJFPELScQeUYQ4jogBDAb8pWcnm4Nk3pTamynoHVE2TK",
    //   "/dns4/peer6.ipfsprivi.com/tcp/4001/ipfs/12D3KooWGBrN664m2j6tkofhrDWvWVuHD6265aQ3iX72firZ5eYY",
    //   "/dns4/peer7.ipfsprivi.com/tcp/4001/ipfs/QmQer1CE4JZDPWZFqqX5pMkJ735ALvhKRqPbghxcDQVfJW"
    // ],
    //   DNS: {
    //     Resolvers: {}
    //   },
    //   Datastore: {
    //     BloomFilterSize: 0,
    //     GCPeriod: "1h",
    //     HashOnRead: false,
    //     Spec: {
    //       mounts: [
    //         {
    //           child: {
    //             path: "blocks",
    //             shardFunc: "/repo/flatfs/shard/v1/next-to-last/2",
    //             sync: true,
    //             type: "flatfs"
    //           },
    //           mountpoint: "/blocks",
    //           prefix: "flatfs.datastore",
    //           type: "measure"
    //         },
    //         {
    //           child: {
    //             compression: "none",
    //             path: "datastore",
    //             type: "levelds"
    //           },
    //           mountpoint: "/",
    //           prefix: "leveldb.datastore",
    //           type: "measure"
    //         }
    //       ],
    //       type: "mount"
    //     },
    //     StorageGCWatermark: 90,
    //     StorageMax: "10GB"
    //   },
    //   Discovery: {
    //     MDNS: {
    //       Enabled: true,
    //       Interval: 10
    //     }
    //   },
    //   Experimental: {
    //     AcceleratedDHTClient: false,
    //     FilestoreEnabled: false,
    //     GraphsyncEnabled: false,
    //     Libp2pStreamMounting: false,
    //     P2pHttpProxy: false,
    //     ShardingEnabled: false,
    //     StrategicProviding: false,
    //     UrlstoreEnabled: false
    //   },
    //   Gateway: {
    //     APICommands: [],
    //     HTTPHeaders: {
    //       "Access-Control-Allow-Headers": [
    //         "X-Requested-With",
    //         "Range",
    //         "User-Agent"
    //       ],
    //       "Access-Control-Allow-Methods": [
    //         "GET"
    //       ],
    //       "Access-Control-Allow-Origin": [
    //         "*"
    //       ]
    //     },
    //     NoDNSLink: false,
    //     NoFetch: false,
    //     PathPrefixes: [],
    //     PublicGateways: null,
    //     RootRedirect: "",
    //     Writable: false
    //   },
    //   Identity: {
    //     PeerID: "12D3KooWDG1DscHizrCuNiaMHtoS2dxfWe5xjRYxt6NjT8Wf39kQ",
    //     PrivKey: "CAESQAJMl5wJAwsBvYvWQuSYC80gYdk+FUFHrMR/qY5x9BZbMyR6YKhR5Ua1LeXwZnzZQrI8kl5s/90JsZKGKe8974U="
    //   },
    //   Ipns: {
    //     RecordLifetime: "",
    //     RepublishPeriod: "",
    //     ResolveCacheSize: 128
    //   },
    //   Migration: {
    //     DownloadSources: [],
    //     Keep: ""
    //   },
    //   Mounts: {
    //     FuseAllowOther: false,
    //     IPFS: "/ipfs",
    //     IPNS: "/ipns"
    //   },
    //   Peering: {
    //     Peers: null
    //   },
    //   Pinning: {
    //     RemoteServices: {}
    //   },
    //   Plugins: {
    //     Plugins: null
    //   },
    //   Provider: {
    //     Strategy: ""
    //   },
    //   Pubsub: {
    //     DisableSigning: false,
    //     Router: ""
    //   },
    //   Reprovider: {
    //     Interval: "12h",
    //     Strategy: "all"
    //   },
    //   Routing: {
    //     Type: "dht"
    //   },
    //   Swarm: {
    //     AddrFilters: null,
    //     ConnMgr: {
    //       GracePeriod: "300s",
    //       HighWater: 300,
    //       LowWater: 50,
    //       Type: "basic"
    //     },
    //     DisableBandwidthMetrics: false,
    //     DisableNatPortMap: false,
    //     EnableAutoRelay: false,
    //     EnableRelayHop: false,
    //     Transports: {
    //       Multiplexers: {},
    //       Network: {},
    //       Security: {}
    //     }
    //   }
    // },
      init: {
        privateKey: "65940a71f7d7efc4a5f4215a9b4fe49e8bc14755f33de5a53f8249b1e9af32ba"
      }
    }
  }
}

export default config
