import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAppData, addTask } from './action';
import Task from '../../components/task/Task';
import './styleToday.css';
import Filter from '../../components/filter/Filter';
import AddTask from '../../components/addtask/AddTask';

class Today extends React.Component {
    componentDidMount() {
        this.props.getAppData();
    }

    cl() {
        return alert('fdfdfdfdf');
    }

    onAddTask(newTask) {
        this.props.addTask(newTask);
    }

    render() {
        return (
            <div>
                <Filter cl={this.cl} />
                <AddTask onSubmit={this.onAddTask.bind(this)}/>
                <div className="tasks-list">
                    {this.props.data ? this.props.data.map((item) => (
                        <Task key={item.task} data={item} page="today"/>)) : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.appCompReducer.data,
    }
};

const mapDispatchToProps = (dispatch) => ({
    getAppData: bindActionCreators(getAppData, dispatch),
    addTask: bindActionCreators(addTask, dispatch)
    // getAppData: () => { dispatch(getAppData()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Today);
