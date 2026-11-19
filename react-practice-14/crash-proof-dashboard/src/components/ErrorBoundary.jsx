import { Component } from "react";
import { logError } from "../utils/logError";

const keysChanged = (a=[], b=[]) => 
    a.length !== b.length || a.some((item, i) => !Object.is(item, b[i])
);

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            failures: 0,
        };
    }

    //Render Phase: Only update the state so fallback UI shows
    static getDerivedStateFromError (error) {
        return {
            hasError: true,
            error,
        }
    }

    // Commit Phase: side Effect (logging & counting)
    componentDidCatch(error, info) {
        console.error(`[${this.props.name ?? "ErrorBoundary"}]`, 
            error, 
            info.compnentStack
        );
        logError({
            widget: this.props.name ?? "Unnamed",
            message: error.message,
            stack: info.compnentStack,
        });
        this.setState((s) => ({failures: s.failures + 1}));
    }

    // Auto-reset when any key in resetKeys changes
    componentDidUpdate(prevProps) {
        if (this.state.hasError && 
            keysChanged(prevProps.resetKeys, this.props.resetKeys)
        ) {
            this.setState({
                hasError: false,
                error: null,
                failures: 0,
            });
        }
    }

    reset = () => {
        this.setState({
            hasError: false,
            error: null,
        });
    }

    render() {
        const { hasError, error, failures } = this.state;
        const { fallback, children, maxRetries = 3 } = this.props;

        if(!hasError) return children;

        const canRetry = failures < maxRetries;
        const props = {
            error,
            reset: this.reset,
            failures,
            canRetry,
        };

        if(typeof fallback === "function") return fallback(props);
        if(fallback) return fallback;

        return (
            <div role= "alert">
                <p>
                    {this.props.name ? `${this.props.name} failed` : `Something went wrong`}
                </p>
                <p>
                {import.meta.env.DEV ? error.message : "We couldn't load this section."}
                </p>
                {canRetry ? (
                    <button onClick={this.reset}>
                        Try Again({maxRetries - failures} left)
                    </button>
                ) : (
                    <p>Too many failures. Reload the page to continue.</p>
                )}
            </div>
        );
    }
}
export default ErrorBoundary;