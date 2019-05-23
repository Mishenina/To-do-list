import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAppData,addTask } from './action';
import Task from '../../components/task/Task';
import './style.css';
import AddTask from '../../components/addtask/AddTask';
class Later extends React.Component {
    componentDidMount() {
        this.props.getAppData();
    }
    onAddTask(newTask) {
        this.props.addTask(newTask);
    }
    render() {
        return (
            <div>
                <AddTask onSubmit={this.onAddTask.bind(this)}/>
                <div className="tasks-list">
                    <div>{this.props.data ? this.props.data.map((item) => (
                        <Task key={item.id} data={item} page="later"/>
                    )) : null}
                    </div>
                </div>
            </div>
        );
    }
}

Later.propTypes = {
  children: React.PropTypes.node
};


const mapStateToProps = (state) => {
  return {
    data: state.appCompReducer.data,
  }
};

const mapDispatchToProps = (dispatch) => ({
    getAppData: bindActionCreators(getAppData, dispatch),
    addTask: bindActionCreators(addTask, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Later);