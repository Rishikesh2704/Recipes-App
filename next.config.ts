import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images:{
    remotePatterns:[
        {
          protocol:'https',
          hostname:'www.themealdb.com',
          pathname:'/images/**'
        },
        {
          protocol:'https',
          hostname:'img.spoonacular.com',
          pathname:'/recipes/**'
        }
    ]
  }
};

export default nextConfig;
