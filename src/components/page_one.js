import React from 'react'
import { Link } from 'react-router'

export default () => <div>
    <h1>Page One</h1>

    <p>Nullam consectetur lorem ex, sit amet sodales diam egestas id. Vestibulum ultrices ornare ligula, et molestie nulla maximus quis. Aliquam erat volutpat.</p>

    <Link to="/">Home</Link>
    <Link to="/page-one">Page One</Link>
    <Link to="/page-two">Page Two</Link>
</div>
