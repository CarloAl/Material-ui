import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';



class Main extends React.Component {
    /*constructor(props, context) {
        super(props, context);
        //this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
    }*/



    handleTouchTap() {
        alert('t');
        console.log('here i am');
    }

    render() {
        return (
            <LeftNav>
                <MenuItem onTouchTap={this.handleTouchTap}>PRD00</MenuItem>
                <MenuItem>TST00 </MenuItem>
            </LeftNav>
        );
    }
}

export default Main;