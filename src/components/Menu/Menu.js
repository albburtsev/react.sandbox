'use strict';

var b = Block('menu');

/**
 * Menu component
 */
class Menu extends React.Component {
    constructor(props) {
        this.state = {
            list: [
                'Index',
                'About',
                'Contacts'
            ]
        };
    }

    render() {
        return (
            <ul className={b}>
                {this.state.list.map(item => {
                    return <li className={b('item')}>{item}</li>;
                })}
            </ul>
        );
    }
}

module.exports = Menu;
