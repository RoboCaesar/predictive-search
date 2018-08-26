class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleEntry = this.handleEntry.bind(this);
        this.state = {
            resultsVisible: false
        }
    }

    handleEntry(e) {
        this.setState((prevState) => {
            return {resultsVisible: true}
        });
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <input onInput={this.handleEntry} type="text" />
                </form>
                <div className="results-box" style={{display: this.state.resultsVisible ? 'block' : 'none'}}>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        );
    }
}

export default SearchBox;