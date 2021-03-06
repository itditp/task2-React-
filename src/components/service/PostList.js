import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Loadcircle from '../common/Loadcircle';

const style = {
  height: 500,
  width: 900,
  margin: "auto",
  overflow: "auto"

};

const styleForPost = {
  margin: 10,
  padding: 10
};

const PostList = ({posts, loading}) => {
	return (
    
    <Paper style={style} zDepth={3}>
      {loading && <Loadcircle/>}
      {posts.map(post =>
        <Paper style={styleForPost} key={post.id} zDepth={2}>
          <span>ID:</span>{post.id}<br/>
          <span>Title:</span>{post.title}<br/>
          <span>Body:</span>{post.body}
        </Paper>
      )}
    </Paper>
  );
};

PostList.propTypes = {
	posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default PostList;

