import 'antd/lib/button/style/css';
import * as React from "react";

interface Props {
    updatePersonNr: (e: React.ChangeEvent<HTMLInputElement>) => void,
    editedForm: object
}

class Input extends React.Component<Props> {
    state: Props
    render() {
        const { editedForm } = this.state;
        return (
            <div>
                <input/>
            </div>
        );
    }
}

export default Input;

// <input value={editedForm.personNr} onChange={this.updatePersonNr}/>