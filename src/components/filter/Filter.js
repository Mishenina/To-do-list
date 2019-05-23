import React from 'react';

import './styleFilter.css';

var filters = [{"value":"Важно", "id":"100", "defaultChecked":"true"},
    {"value":"Срочно", "id":"101","defaultChecked":"false"},
    {"value":"Понятно", "id":"102","defaultChecked":"false"}];
export default class Filter extends React.Component {
    test() {
        alert('23232323232');
    }

//this.state=isChecked событие на input
    render() {
        console.log(this.props);
        let _this = this;

        return (
            <div className="filter">

                {filters ? filters.map(function (filter) {
                    return (
                        <span key={filter.id}>
                            <input id={filter.id}
                                   className="filter__menu-element_radio"
                                   type="checkbox" name="filter"
                                   onChange={() => _this.test()}
                                   value={filter.value}
                            />
                            <label htmlFor={filter.id}

                                   className="filter__menu-element">{filter.value}

                            </label>
                        </span>
                    )
                }) : null}
            </div>

        );
    }
}


// <input id={filter.id} className="filter__menu-element_radio" defaultChecked={} onchange={} type="checkbox" name="filter"

// фильтры передать через пропс
// фильтры и их значения checked в редюсере.
// чекбокс отдельный компонент  выполняем функцию onchange , в родительском компоненте пробрасываем функцию, которую надо вполнить

//ждет event
//соединяем два состояния
//action

Filter.propTypes = {
    cl: React.PropTypes.func
};