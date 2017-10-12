import { connect } from 'react-redux'
import Search from '../components/search/search'


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
export default connect(mapStateToProps, mapToDispatchProps)(Search)
