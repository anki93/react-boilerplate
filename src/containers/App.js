import { connect } from 'react-redux'
import App from '../components/App'


const mapStateToProps = (state) => {
     return {
          //cities : state.storeCity.cities
     };
};
const mapToDispatchProps = (dispatch) =>{
     return {
          //getCities : () => dispatch(getCities())
      }
}
export default connect(mapStateToProps, mapToDispatchProps)(App)
