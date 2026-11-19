import {useState, useEffect} from 'react';
import useThrowError from '../hooks/useThrowError';

function QuoteWidget() {
    const [quote, setQuote] = useState(null);
    const throwError = useThrowError();

    useEffect (() => {
        const controller = new AbortController();
        fetch("https://dummyjson.com/quotes/random", {signal: controller.signal})
        .then ((response)=> {
            if(!response.ok) throw new Error(`Quote API returned ${response.status}`);
            return response.json();
        })
        .then(setQuote)
        .catch((err) => {
            if(err.name !== "AbortError") throwError(err);
        });

        return () => controller.abort();
    }, []);

    if(!quote) return <p>Loading quote...</p>

    return (
        <figure>
            <blockquote>{quote.quote}</blockquote>
            <figcaption>{quote.author}</figcaption>
        </figure>
    );
}
export default QuoteWidget;