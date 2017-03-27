import React from 'react'
import { Link } from 'react-router'

export default () => <div>
    <h1>Page Two</h1>

    <p>Mauris iaculis nec sem non vulputate. Morbi consectetur condimentum ultricies. Fusce elementum eget odio ut ornare. Pellentesque egestas libero et est elementum.</p>

    <Link to="/">Home</Link>
    <Link to="/page-one">Page One</Link>
    <Link to="/page-two">Page Two</Link>
</div>
