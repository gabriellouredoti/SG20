/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    // To speed up NextJS development time and compile time when using MUI,
    // we have to use modularizeImportsoption in NextJS configuration.
    modularizeImports: {
        "@mui/material": {
            transform: "@mui/material/{{member}}",
        },
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}",
        },
        "@mui/styles": {
            transform: "@mui/styles/{{member}}",
        },
        "@mui/lab": {
            transform: "@mui/lab/{{member}}",
        },
    },
};

module.exports = nextConfig;
