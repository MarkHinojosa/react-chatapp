import React, { Component } from 'react'

class TypingIndicator extends Component {
    
    render() {
        console.log(this.props);
        if (this.props.usersWhoAreTyping.length > 0) {
            return (
                <div>
                    {`${this.props.usersWhoAreTyping
                        .slice(0, 2)
                        .join(' and ')} is typing`}
                </div>
            )
        }else {
            return (
            <div>
                <text>Nobody is typing</text>
            </div>
            )
        }
        
    }
}

export default TypingIndicator