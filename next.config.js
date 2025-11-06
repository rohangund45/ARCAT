// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     reactCompiler: true,
//     typedRoutes: true,
//     turbo: true
//   }
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {}, // ✅ must be an object, not boolean
    typedRoutes: true,
    // disable reactCompiler to prevent the error
    reactCompiler: false
  }
};

module.exports = nextConfig;
