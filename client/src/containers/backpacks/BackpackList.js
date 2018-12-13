import { connect } from 'react-redux';
import { fetchBackpacks } from '../../actions/backpacks';
import { getBackpacks } from '../../selector/backpacks';
import Backpack from '../../components/backpacks/Backpack';
import { withList } from '../../components/withList';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  list: getBackpacks(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchBackpacks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFetch(withList(Backpack))
);
