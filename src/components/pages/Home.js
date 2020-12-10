import React, {Component} from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Fotter'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
// import ListCard from '../ListCard'

class Home extends Component {
    
    render(){
        if(!this.props.search){
            return(
                <>
                    <HeroSection />
                    <Cards list_product = {this.props.list_product} handle_detail = {this.props.handle_detail}
                    handle_clear = {this.props.handle_clear}/>
                    {/* <ListCard /> */}
                    <Footer />
                </>
            )
        }
        else{
            return <Redirect to={'/search?key=' + this.props.search}/>
        }
    }
}


Home.propTypes = {
    list_product: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    handle_detail: PropTypes.func.isRequired,
    handle_clear: PropTypes.func.isRequired,
}

export default Home;