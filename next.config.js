module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "scarlet-biological-chipmunk-168.mypinata.cloud",
                port: "",
                pathname:
                    "/ipfs/QmbmsALmobAaTKDLVmPyC1j1Z1nABn7MfNCNXbYvFMrx3m/**",
            },
        ],
    },
    webpack(config) {
        config.resolve.fallback = {
            // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped.
            ...config.resolve.fallback,

            fs: false, // the solution
        };

        return config;
    },
};
