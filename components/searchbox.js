import Link from 'next/link';
import PropTypes from 'prop-types';

//https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleEntry = this.handleEntry.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.state = {
            resultsVisible: false,
            query: ''
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
        return (
            <div>
                <form>
                    <input onInput={this.handleEntry} type="text" />
                </form>
                <div ref={this.setWrapperRef} className="results-box" style={{display: this.state.resultsVisible ? 'block' : 'none'}}>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    <Link href="https://www.google.com">
                        <a>This is a link. Where does it go?</a>
                    </Link>
                </div>
            </div>
        );
    }
}

// SearchBox.propTypes = {
//     children: PropTypes.element.isRequired,
// };

export default SearchBox;