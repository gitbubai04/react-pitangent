import React from 'react'
import Header from './Header';
import Blog from './Blog';
import Contact from './Contact';
import EditPick from './EditPick';
import Discover from './Discover';
import Review from './Review';
import Cunnect from './Cunnect'

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Blog />
            <Contact />
            <EditPick />
            <Discover />
            <Review />
            <Cunnect />
        </React.Fragment>
    )
}

export default Home