function TopScores ({scores: [first, second, third ]}) {

    return (
        <div>
            <p>{first}</p>
            <p>{second}</p>
            <p>{third}</p>
        </div>
    );
}
export default TopScores

export function PlayerList ({ players: [caption, ...teamates] }) {

    return (
        <div>
            <h3>Caption: {caption}</h3>
            <ul>
                {teamates.map((mate, index) => <li key = {index}>{mate}</li>)}
            </ul>
        </div>
    );
}