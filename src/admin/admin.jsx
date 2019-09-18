import React from 'react';


export class Admin extends React.Component {
    state = {
        a: 5,
        question: "",
        answer: "",
    };

    send = () => {
        console.log(this.state.a);
    };

    updateKey = (key) => (event) => {
        this.setState(
            { [key]: event.target.value }, () => { console.log(key) }
        );

    };

    render() {
        return (
            <div>
                <div>Question category</div>
                <select>
                    <option value="CSS">CSS</option>
                    <option value="HTML">HTML</option>
                    <option value="JavaScript">Java Script</option>
                    <option value="React">React</option>
                </select>
                <div>Question:</div>
                <textarea onChange={this.updateKey("question")} />
                <div>Answer</div>
                <textarea onChange={this.updateKey("answer")} />
                <button onClick={this.send}>Send</button>

            </div >
        )
    }
};