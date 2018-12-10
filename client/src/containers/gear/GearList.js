import { connect } from 'react-redux';
import { fetchGear } from '../../actions/gear';
import { getGear } from '../../selector/gear';
import GearList from '../../components/gear/GearList';

const mapStateToProps = state => ({
  list: getGear(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchGear())
});

export default connect(mapStateToProps, mapDispatchToProps)(GearList);

