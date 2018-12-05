import 'antd/lib/button/style/css';
import * as React from "react";
import { IRootState } from '../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../store/demo/actions';
import { DemoActions } from '../store/demo/types';
import Form from './Form';

// todo gör ny komponent som efterliknar denna och koppla nya state

const mapDispatcherToProps = (dispatch: Dispatch<DemoActions>) => {
    return {
        addItem: (item: string) => dispatch(actions.addItemToList(item)),
        setLoading: (loading: boolean) => dispatch(actions.setLoading(loading))
    };
};

const mapStateToProps = ({ demo }: IRootState) => {
    const { list, loading } = demo;
    return { list, loading };
};

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

interface IState {
    inputText: string
};

class App extends React.Component<ReduxType, IState> {
    state: IState = {
        inputText: ''
    }

    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputText: e.target.value });
    }

    onAddClick = () => {
        const { addItem, setLoading } = this.props;

        setLoading(true);
        addItem(this.state.inputText);
        this.setState({inputText: ''});
        setLoading(false);
    }

    render() {
        const { list, loading } = this.props;
        return (
            <div style={{margin: '20px'}}>
            <div>jjdd</div>
                <input value={this.state.inputText} onChange={this.onInputChange}/>
                <button onClick={this.onAddClick}>Add</button>
                <ul>
                    {list.map(l => <li key={l}>{l}</li>)}
                </ul>
                {
                    loading && <p>loading...</p>
                }
                <Form/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);