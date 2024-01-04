import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
          query SiteMetaData {
            site {
              siteMetadata {
                title
                description
                siteUrl
                siteEmail
                address
                country
                phoneNumber
                social {
                  facebook
                  twitter
                  linkedin
                }
              }
            }
          }
        `
    )
    return site.siteMetadata
}
