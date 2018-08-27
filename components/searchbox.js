import Link from 'next/link';
import PropTypes from 'prop-types';

//https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleEntry = this.handleEntry.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.state = {
            resultsVisible: false
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleEntry(e) {
        this.setState((prevState) => {
            return {resultsVisible: true}
        });
        e.preventDefault();
    }

    handleLeave(e) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
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
            <div ref={this.setWrapperRef}>
                <form>
                    <input onInput={this.handleEntry} type="text" />
                </form>
                <div className="results-box" style={{display: this.state.resultsVisible ? 'block' : 'none'}}>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    <Link href="https://www.google.com">
                        <a>This is a link. Where does it go?</a>
                    </Link>
                </div>
            </div>
        );
    }
}

SearchBox.propTypes = {
    children: PropTypes.element.isRequired,
};

export default SearchBox;