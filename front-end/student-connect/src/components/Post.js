import React from 'react';

export default function Post(props) {
  return (
    <div class="statusPost">
      <input type="text" class="form-control" placeholder="Share an article, photo, or idea" aria-describedby="basic-addon1"/>
      <button type="button" class="btn btn-primary btn-sm">Post</button>
    </div>
  )
}
