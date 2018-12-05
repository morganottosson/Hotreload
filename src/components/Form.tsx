import 'antd/lib/button/style/css';
import * as React from "react";
import { IRootState } from '../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../store/person/actions';
import { PersonActions } from '../store/person/types';

const mapDispatcherToProps = (dispatch: Dispatch<PersonActions>) => {
    return {
        sendForm: (item: object) => dispatch(actions.sendForm(item)),
        setLoading: (loading: boolean) => dispatch(actions.setLoading(loading))
    };
};

const mapStateToProps = ({ person }: IRootState) => {
    const { form, loading } = person;
    return { form, loading };
};

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

interface IState {
    editedForm: object
};

class Form extends React.Component<ReduxType, IState> {
    state: IState = {
        editedForm: Object.assign({}, this.props.form)
    }

    onSendClick = () => {
        const { sendForm, setLoading } = this.props;

        setLoading(true);
        sendForm(this.state.editedForm);
        this.setState({editedForm: {}});
        setLoading(false);
        console.log('sendClick')
    }

    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ editedForm: { personNr: e.target.value} });
    }

    render() {
        console.log('propsss')
        console.log(this.props.form);
        console.log('state')
        console.log(this.state.editedForm)
        const { form, loading } = this.props;
        const { editedForm } = this.state;
        return (
            <div style={{margin: '20px'}}>
                <input onChange={this.onInputChange}/>
                <button onClick={this.onSendClick}>Add</button>
                {
                    loading && <p>loading...</p>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Form);