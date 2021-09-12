import React from 'react'
import { Helmet } from 'react-helmet'
import { Layout } from '../layouts/Layout'

export default function Index({}) {
  return (
    <>
      <Helmet title="Freedom Whare" />

      <article className="hero"></article>
    </>
  )
}

Index.Layout = Layout
