import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import _ from 'lodash';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee.item, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.item.uid });
    }

    onTextButtonPress() {
        const { name, phone, shift } = this.props;
        Communications.text(phone, `${name} upcoming shift is on ${shift}.`);
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    onAccept() {
        const { uid } = this.props.employee.item;
        this.props.employeeDelete({ uid });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextButtonPress.bind(this)}>
                        Send Message
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete Employee
                    </Button>
                </CardSection>
                
                 <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                 >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps,
     { employeeUpdate,
        employeeSave,
        employeeDelete })(EmployeeEdit);
