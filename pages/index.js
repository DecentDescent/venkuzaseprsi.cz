import BlockContent from "@sanity/block-content-to-react";
import Head from "../components/Head";

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(
      "https://26mzd5qy.api.sanity.io/v1/data/query/venkuzaseprsicz?query=*[_type%20==%20%27post%27]"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Head />
          {items.map(item => (
            <article>
              <h1>{item.title}</h1>
              <h4>{item.song}</h4>
              <BlockContent blocks={item.body} serializers={serializers} />
            </article>
          ))}
        </>
      );
    }
  }
}

export default Home;
