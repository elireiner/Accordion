import React, { Component } from 'react';

export default class Accordion extends Component {
    static defaultProps = {
        sections: []
    }

    state = {
        current: null
    };

    renderContent(content) {
        return (<p>{content}</p>)
    }

    handleClick = (index) => {
        this.setState(
            {
                current: index
            }
        )
    }

    render() {
        const sections = this.props.sections.map((section, index) =>
            <li key={index}>
                <button onClick={() => this.handleClick(index)}>
                    {section.title}
                </button>
                {(this.state.current === index) && this.renderContent(section.content)}
            </li>);

        return (
            <ul>
                {sections}
            </ul>
        )
    }
}