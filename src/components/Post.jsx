import React from 'react'
import CopyIcons from "./CopyIcons/CopyIcons"
import parse from "html-react-parser";

function Post({content}) {
  return (
    <div class="info">
                    <div class="info__icon">
                    </div>
                    <div class="info__title">
                       {parse(content)}
<CopyIcons copiedText={content}/>
</div>
                </div>
  )
}

export default Post