'use strict';

let b = Block('menu');
let Link = Router.Link;

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
                {this.state.list.map((item, idx) => {
                    return <li key={idx} className={b('item')}><Link to={item.toLowerCase()}>{item}</Link></li>;
                })}
            </ul>
        );
    }
}

module.exports = Menu;
