import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAppData } from './action';
import Task from '../../components/task/Task';
import './style.css';

class Finished extends React.Component {
    componentDidMount() {
        this.props.getAppData();
    }

    render() {
        return (
            <div className="tasks-list">
              <div>{this.props.data ? this.props.data.map((item) => (
                  <Task key={item.id} data={item} defaultChecked="true" page="finished"/>)) : null}</div>
            </div>

        );
    }
}

Finished.propTypes = {
  children: React.PropTypes.node
};


const mapStateToProps = (state) => {
  return {
    data: state.appCompReducer.data,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getAppData: bindActionCreators(getAppData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Finished);
