class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleEntry = this.handleEntry.bind(this);
    }

    handleEntry() {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" />
                </form>
            </div>
        );
    }
}

export default SearchBox;