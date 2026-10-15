import { Component } from "react";

class ErrorBoundary extends Component {
    state = { error: null };

    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        if (this.state.error) {
            return (
                <div>
                    <p>Error: {this.state.error.message}</p>
                    <button
                        onClick={this.props.onReset}
                    >
                        Band Karo
                    </button>
                </div>
            )
        };
        return this.props.children;
    };
}
export default ErrorBoundary;