import React from 'react';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error: error };
    }
    componentDidCatch(error, errorInfo) {
        console.error("Error caught by boundary:", error, errorInfo);
        // logErrorToServer(error, errorInfo);
    }
    reset = () => this.setState({ hasError: false, error: null });
    
    render() {
        if(this.state.hasError) {
            return (
                <div>
                    <h3>This part of the page crashed.</h3>
                    <p>{this.state.error.message}</p>
                    <button onClick={this.reset}>Try Again</button>
                </div>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;