class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        {this.props.content}
      </div>
    )
  }
}

class BlogPost extends React.Component {
  render() {
    return(
      <div id="blog-post">
        <div id="blog-content">
          Dear Reader: ...
        </div>
        
        <Comment content={"I agree"}/>
        <Comment content={"So true."}/>
      </div>
    )
  }
}