module.exports = {
  siteMetadata: {
    title: "Katryn's Maker Lab II Portfolio",
    author: {
      name: "Katryn's Maker Lab II Portfolio",
      image: "/img/giphy.gif",
      biography: "Katryn Relleve is a User Experience Design student currently in her second year at Wilfrid Laurier University. \
          This is her portfolio showcasing Maker Lab II projects.",
    },
    // for a list of supported networks take a look at https://jaketrent.github.io/react-social-icons/
    networks: [
      "https://twitter.com/",
      "https://github.com/",
      "mailto:rell1960@mylaurier.ca",
    ],
    about: '<p>Katryn Relleve is a User Experience Design student currently in her second year at Wilfrid Laurier University. \
    Previously, she worked as a Junior Web Designer for WCDSB. She is currently the Web Director for The Sputnik (WLUSP). \
    Katryn is most interested in learning how to create designs driven by people and purpose. \
    This is her portfolio showcasing Maker Lab projects, which aim at achieving social good with the use of speculative design strategies and critical making. \
    </p> \
    ',
  },
  plugins: [
    `gatsby-plugin-tslint`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-emoji-unicode`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-haezl",
        short_name: "haezl",
        start_url: "/",
        background_color: "#eeeeee",
        theme_color: "#0c9ed1",
        display: "standalone",
        icon: "static/img/me.png",
        include_favicon: true,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        // Don't cache-bust JS or CSS files, and anything in the static directory,
        // since these files have unique URLs and their contents will never change
        dontCacheBustUrlsMatching: /(\.js$|\.css$|static\/)/,
        runtimeCaching: [{
            // Use networkFirst
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `networkFirst`,
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `staleWhileRevalidate`,
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          primaryColor: "#0c9ed1",
        },
      },
    },
  ],
  pathPrefix: "/img",
}
