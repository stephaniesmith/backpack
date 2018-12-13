import { connect } from 'react-redux';
import { fetchGear } from '../../actions/gear';
import { getGear } from '../../selector/gear';
import Gear from '../../components/gear/Gear';
import { withList } from '../../components/withList';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  list: getGear(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchGear())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFetch(withList(Gear))
);

