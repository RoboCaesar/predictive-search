class resultEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let listItems = props.items.map((entry) =>
            <div className="search-result">
                <p>{entry.name}, {entry.country}</p>
                <p className="location-info">{entry.coord.lat}°, {entry.coord.lon}°</p>
            </div>
        );
        return (
            {listItems}
        );
    }
}