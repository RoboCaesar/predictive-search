import Layout from '../components/layout.js'
import SearchBox from '../components/searchbox.js'
import "../style.css"

class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        };
    }
    render() {
        return (
            <Layout>
                <h1>Find a City or Town</h1>
                <p className="extra-info">Try typing below and the server will dynamically try to find matches.</p>
                <SearchBox />
            </Layout>
        );
    }
}

export default SearchApp;