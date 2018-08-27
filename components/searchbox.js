import Link from 'next/link';
import PropTypes from 'prop-types';

function resultsItems(props) {
    return props.map((entry) =>
        <div className="search-result" key={entry.name}>
            <p>{entry.name}, {entry.country}</p>
            <p className="location-info">{entry.coords.lat}°, {entry.coords.long}°</p>
        </div>
    );
}

//https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleEntry = this.handleEntry.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.state = {
            resultsVisible: false,
            query: '',
            loading: false,
            searchResults: [
                {
                    name: "Madison",
                    country: "USA",
                    coords: {
                        lat: 43.17,
                        long: -73.80
                    }
                },
                {
                    name: "Seattle",
                    country: "USA",
                    coords: {
                        lat: 47.17,
                        long: -50.80
                    }
                }
            ]
        }
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleEntry(e) {
        this.setState({
            resultsVisible: (e.target.value.length > 0), //if there's no text, don't show the results window.
            query: e.target.value
        });   
        e.preventDefault();
    }

    handleLeave(e) {
        if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
            this.setState((prevState) => {
                return {resultsVisible: false}
            });
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleLeave);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleLeave);
    }

    render() {

        let results;

        if (this.state.loading === false) {
            if (this.state.searchResults) {
                results = 
                    // <div>
                    //     <div className="search-result">
                    //         <p>Result One, USA</p>
                    //         <p className="location-info">43.15°, -73.73°</p>
                    //     </div>
                    //     <div className="search-result">
                    //         <p>Result Two, France</p>
                    //         <p className="location-info">43.15°, -73.73°</p>
                    //     </div>
                    //     <div className="search-result">
                    //         <p>Result Three, Canada</p>
                    //         <p className="location-info">43.15°, -73.73°</p>
                    //     </div>
                    // </div>
                    resultsItems(this.state.searchResults);
                ;
            } else {
                results = <p>No results found...yet!</p>
            }

        } else {
            results = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        }

        return (
            <div>
                <form>
                    <input onInput={this.handleEntry} type="text" />
                </form>
                <div ref={this.setWrapperRef} className="results-box" style={{display: this.state.resultsVisible ? 'block' : 'none'}}>
                    {results}
                </div>
            </div>
        );
    }
}

// SearchBox.propTypes = {
//     children: PropTypes.element.isRequired,
// };

export default SearchBox;