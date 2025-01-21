import React from 'react'
import Home from "./pages/Home.jsx"
import Posts from "./pages/Posts.jsx"
import Hadith from "./pages/Hadith.jsx"
import {
  BrowserRouter ,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Images from './pages/Images.jsx';
import Videos from './pages/Videos.jsx';
function App() {
  return (
    <BrowserRouter>
     <ToastContainer />
    <Routes>

      <Route element={<Home/>} path="/" />
      <Route  path="/posts" element={<Posts/>} />
      <Route  path="/hadiths" element={<Hadith/>} />
      <Route  path="/imgs" element={<Images/>} />
      <Route  path="/videos" element={<Videos/>} />
    </Routes>
      {/* <Home/> */}
    </BrowserRouter>

  )
}

export default App












































// /* eslint-disable no-undef */
// import React, { createRef } from "react";
// import Home from "./components/Home";
// class App extends React.Component {
//   constructor() {
//     super();

//     this.call = createRef();
//   }

//   componentDidMount() {
//     this.call.current.focus();
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.call} />
//       </div>
//     );
//   }
// }

// class Items extends React.Component {
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.props.show} />
//         <input type="submit" onClick={this.props.add} />
//         {this.props.Products.map((product) => (
//           <Item
//             product={product.pro}
//             id={product.id}
//             removeE={this.props.removeE}
//           />
//         ))}
//       </div>
//     );
//   }
// }
// class Item extends React.Component {
//   render() {
//     return (
//       <div>
//         {console.log(this.props)}

//         {this.props.product}
//         <button onClick={() => this.props.removeE(this.props.id)}>
//           Delete
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// // class Nav extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <h3>Nav bar</h3>
// //       </div>
// //     );
// //   }
// // }

// // class Items extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <h3>Items</h3>
// //         <Item />
// //       </div>
// //     );
// //   }
// // }
// // -------------------------app---------------------------
// // state = {
// //   Products: [],
// //   item: "",
// // };

// // render() {
// //   var su = (e) => {
// //     this.setState({
// //       item: e.target.value,
// //     });
// //   };

// //   var additem = (e) => {
// //     e.preventDefault();
// //     let Products = [
// //       ...this.state.Products,
// //       {
// //         id: Math.random(),
// //         pro: this.state.item,
// //       },
// //     ];
// //     this.setState({
// //       Products,
// //     });
// //   };

// //   let deletel = (id) => {
// //     let Products = [...this.state.Products];
// //     let newProduct = Products.filter((product) => product.id != id);
// //     this.setState({
// //       Products: newProduct,
// //     });
// //   };

// //   return (
// //     <div>
// //       {console.log(this.state.Products)}
// //       <h1>components</h1>
// //       <AddItem
// //         change={su}
// //         add={additem}
// //         Products={this.state.Products}
// //         removel={deletel}
// //       />
// //     </div>
// //   );
// // }
// // ----------------------------------------------------------
// // class AddItem extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <form>
// //           <input type="text" onChange={this.props.change} />
// //           <input type="submit" onClick={this.props.add} />
// //           {this.props.Products.map((e) => (
// //             <Item item={e.pro} id={e.id} removell={this.props.removel} />
// //           ))}
// //         </form>
// //       </div>
// //     );
// //   }
// // }
// // class Item extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         {console.log(this.props)}
// //         <div>
// //           {this.props.item}{" "}
// //           <button onClick={() => this.props.removell(this.props.id)}>
// //             Delete
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // -----------------------------------------------
// // state = {
// //   name: "",
// //   Products:[]
// // }
// // show = (e)=>{

// //   let name = e.target.value;
// //   this.setState({
// //     name
// //   })
// // }

// // addElements = (e)=>{
// //   e.preventDefault()
// //   let Products=[...this.state.Products,{pro : this.state.name,
// //     id:Math.random(),
// //   }];
// //   this.setState({
// //     Products
// //   })
// // }
// // removeElement =(id)=>{
// //   let Products=[...this.state.Products];
// //   let newProducts =Products.filter((e)=> e.id != id );
// //   this.setState({
// //   Products: newProducts
// //   })
// // }
// // ------------------------Refs----------------------
// // constructor(){

// //   super();

// //   this.call=createRef()

// // componentDidMount(){
// //  this.call.current.focus()
// // }

// //  render(){

// //   return(
// //       <div>
// //        <input type="text" ref={this.call}/>
// //       </div>
// //   )
// //  }}
// // ------------------------CallbackRefs----------------------
// // constructor(){

// //   super();

// //   this.call=null;
// //   this.callfun=(ele)=>{
// //     this.call=ele ;
// //   }

// // }
// // componentDidMount(){
// //   if(this.call){
// //     this.call.focus()
// //   }
// // }//  render(){

// //   return(
// //       <div>
// //        <input type="text" ref={this.callfun}/>
// //       </div>
// //   )
// //  }}
