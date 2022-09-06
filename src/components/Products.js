// import React, { useState, useEffect } from "react";
// import { Table } from "react-bootstrap";
// import axios from "axios";
// import AddProducts from "./AddProducts";

// const Products = () => {
//   const [product, setProduct] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showAddModal, setShowAddModal] = useState(false);

//   const updateShowAddModal = () => {
//       setShowAddModal(true);
//   }

//   const handleClose = () => {
//       setShowAddModal(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         "https://ty-shop.herokuapp.com/api/products"
//       );
//       setLoading(false);
//       console.log(response);
//       if (response.data.error) {
//         console.log(response.data.error);
//       } else {
//         setProduct(response.data.products);
//       }
//     } catch (err) {
//       setLoading(false);
//       console.log(err);
//     }
//   };
//   {
//     if (loading) {
//       return <h1>Loading!!!</h1>;
//     } else {
//       return (
//         <div>
//             {!showAddModal ? (
//           <Table>
//             <thead>
//               <tr>
//                 <th>Id</th>
//                 <th>productName</th>
//                 <th>productDescription</th>
//                 <th>productImage</th>
//                 <th> productPrice</th>
//                 <th>
//                   <button onClick={updateShowAddModal}>Add product</button>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {product.map((val) => {
//                 return (
//                   <tr>
//                     <td>{val._id}</td>
//                     <td>{val.productName}</td>
//                     <td>{val.productDescription}</td>
//                     <td>
//                       <img
//                         src={val.productImageURL}
//                         width="180px"
//                         height="150px"
//                       />
//                     </td>
//                     <td>{val.productPrice}</td>
//                     <td>
//                       <button>Edit</button>
//                     </td>
//                     <td>
//                       <button>Delete</button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </Table>
//             ):(
//                 <AddProducts
//                 showAddModal={showAddModal}
//                 handleClose={handleClose}
//                 fetchData={fetchData}
//                 />
            
            
//             )}
//         </div>
//       );
//     }
//   }
// };
// export default Products;


import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import AddProducts from "./AddProducts";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const updateShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleClose = () => {
    setShowAddModal(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://ty-shop.herokuapp.com/api/products"
      );
      setLoading(false);
      console.log(response.data);
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        setProduct(response.data.products);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  {
    if (loading) {
      return <h2>loading!!</h2>;
    } else {
      return (
        <div>
          {!showAddModal ? (
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>productName</th>
                  <th>productDescription</th>
                  <th>productImage</th>
                  <th>productPrice</th>
                  <th>
                    <button onClick={updateShowAddModal}>Add product</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.map((val) => {
                  return (
                    <tr>
                      <td>{val.id}</td>
                      <td>{val.productName}</td>
                      <td>{val.productDescription}</td>
                      <td>
                        <img
                          src={val.productImageURL}
                          width="180px"
                          height="150px"
                        />
                      </td>
                      <td>{val.productPrice}</td>
                      <td>
                        <button>Edit</button>
                      </td>
                      <td>
                        <button>delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <AddProducts
              showAddModal={showAddModal}
              handleClose={handleClose}
              fetchData={fetchData}
            />
          )}
        </div>
      );
    }
  }
};

export default Products;