import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom';
import AsyncButton from './buttons/AsyncButton';

class SettingsMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className='sidebar-general'>
                    <Sidebar/>
                </div>

                <div className='main-content'>
                    <div id='settings-main'>
                        Settings

                        <div>
                            <Link className="button-big-ghost" to='/login'>Login</Link>
                        </div>

                        <div>
                            <Link className="button-big-primary" to='/login'>Login</Link>
                        </div>

                        <div>
                            <AsyncButton>Async</AsyncButton>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {};
};

export default connect(mapStateToProps)(SettingsMain);
