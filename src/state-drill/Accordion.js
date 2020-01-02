import React, { Component } from 'react';

export default class Accordion extends Component {
    state = {
        current: 0
      };
    renderContent(index) {
        return ( <p>{this.state.content}</p>)
    }
    render() {
        const sections = this.props.sections.map((section, index) =>
            <li key={index}>
                <button>
                    {section.title}
                    {(this.state.current === index) && this.renderContent(index)}
                </button>
            </li>);

        return (
            <ul>
                {sections}
            </ul>
        )
    }
}