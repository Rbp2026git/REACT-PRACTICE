const Facebook = () => {
    const isLoggedIn = false;
    return (
        <div>

           {isLoggedIn ? (
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Facebook loggedIn
                </a>) :
                (<a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Google
                </a>) 
            }

        </div>
    )
}

export default Facebook