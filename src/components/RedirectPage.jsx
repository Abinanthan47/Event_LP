function RedirectPage() {
    return (
        <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <button onClick={() => window.location.href = 'https://link1.com'} style={{ margin: '10px', padding: '20px', color: 'white', backgroundColor: 'blue' }}>
                    Button 1
                </button>
                <button onClick={() => window.location.href = 'https://link2.com'} style={{ margin: '10px', padding: '20px', color: 'white', backgroundColor: 'green' }}>
                    Button 2
                </button>
            </div>
        </div>
    );
}

export default RedirectPage;
