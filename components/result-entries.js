class resultEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let listItems = props.items.map((entry) =>
            <div className="search-result">
                <p>{entry.name}, {entry.country}</p>
                <p className="location-info">{entry.coords.lat}°, {entry.coords.long}°</p>
            </div>
        );
        return (
            {listItems}
        );
    }
}