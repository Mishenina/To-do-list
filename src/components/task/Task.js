import React from 'react';
import './styleTask.css';

export default  class Task extends React.Component {

    getIconClass() {
        if (this.props.page === "later")
            return "task__icon task__icon_later";
        else if (this.props.page === "today")
            return "task__icon task__icon_today";
        else if (this.props.page === "finished")
            return "task__icon";
    }


    click() {

    }

    render() {

        console.log(this.props);

        return (
            <div className="task">

                <div className="task__checkbox" onClick={this.click()}>
                    <input id={this.props.data.id}
                           className="task__radio"
                           type="checkbox"
                           defaultChecked={this.props.defaultChecked}
                           name="filter"
                           value={this.props.data.task}/>
                    <label htmlFor={this.props.data.id} className="task__label"></label>
                </div>
                <p className="task__text">{this.props.data.task}</p>
                <div className={this.getIconClass()}/>
                <div className="task__icon task__icon_del"/>
            </div>

        );
    }
}

Task.propTypes = {
  data: React.PropTypes.object
};
