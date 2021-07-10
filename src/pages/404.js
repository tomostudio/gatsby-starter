import React from "react"
import SEOComponent from "../components/seo"
import { SmoothScrollProvider } from "../components/locomotiveScroll"


const NotFoundPage = () => (
  <>
    <SEOComponent title="404: Not found" />
      <SmoothScrollProvider
        options={{
          smooth: true,
          lerp: 0.12
        }}
      >
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </SmoothScrollProvider>
  </>
)

export default NotFoundPage
