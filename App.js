const App = () => (
    <div>
        <RandomChoice choices= {['red','green','yellow']}/>
        <Animal name="Patrick" species="Red Fox" emoji="🦊" />
        <Animal name="Henry" species="Silkie Chicken" emoji="🐔" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
