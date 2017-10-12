import { connect } from 'react-redux'
import City from '../components/city/City'
import { getCities } from '../actions';


const mapStateToProps = (state) => {
     return {
          cities : state.storeCity.cities
     };
};
const mapToDispatchProps = (dispatch) =>{
     return {
          getCities : () => dispatch(getCities())
      }
}
export default connect(mapStateToProps, mapToDispatchProps)(City)
