import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainComponent from '../layouts/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadTestApi } from '../actions';

class app extends React.Component {

    constructor(props){
        super(props);
        this.handleFecthAPI = this.handleFecthAPI.bind(this);
    }
   
    handleFecthAPI(){
        this.props.loadTestApi();
    }
    render(){
        const {result} = this.props;
        // console.log(this.props+'con');
        return (
            <div className="wrapper">
                <Header/>
                <MainComponent
                    testApi={this.handleFecthAPI}
                    {...result}
                />
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        result: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({loadTestApi: loadTestApi}, dispatch);    
}

export default connect(mapStateToProps,matchDispatchToProps)(app);
