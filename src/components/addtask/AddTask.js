import React from 'react';

import './styleAddTask.css';
export default class AddTask extends React.Component {

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({
            task: event.target.addtask.value
        })
        console.log("23232323232");
    }

    render() {
        return (
            <div>
                <form id="addtasks" name="addtasks" className="form" action='#' onSubmit={this.onSubmit.bind(this)}>
                    <input name="addtask"
                           type="text"
                           form="addtasks" placeholder="Введите ключевые слова для создания задачи ..."
                           className="form__input-field"
                    />
                    <input type="submit" value="" form="addtasks"
                           className="form__send"/>
                </form>
            </div>
        );
    }
};
