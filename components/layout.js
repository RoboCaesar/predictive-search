const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
    fontFamily: 'sans-serif'
};

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style= {layoutStyle}>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;