import posts from "./posts"
import {hadiths} from "./posts"
const menu = [
    { id: 1, title: "أحاديث",path: '/hadiths',data:hadiths},
    { id: 1, title: 'المنشورات',path: '/posts',data:posts},
    { id: 3, title: 'مقاطع الفيديو',path: '/videos',data:[]},
    { id: 2, title: 'الصور',path: '/imgs',data:[]},
    
]
export default menu