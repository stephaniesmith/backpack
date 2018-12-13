import { connect } from 'react-redux';
import { fetchBackpack } from '../../actions/backpacks';
import { getBackpack } from '../../selector/backpacks';
import BackpackDetail from '../../components/backpacks/BackpackDetail';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  detail: getBackpack(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchBackpack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(BackpackDetail));
