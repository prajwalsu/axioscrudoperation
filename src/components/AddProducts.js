// import { Box } from "@mui/material";
// import axios from "axios";
// import { Button } from "bootstrap";
// import paper from "@mui/material";
// import * as React from "react"; 
// import { Modal } from "react-bootstrap";

// const style = {
//     position : "absolute",
//     top : "50%",
//     left : "50%",
//     transform : "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border:"2px solid #000",
//     boxShadow:24,
//     pt:2,
//     px:4,
//     pb:3
// };

// export default function AddProducts({showAddModal, handleClose, fetchData}) {
//     const[singleProduct, setSingleProduct] = React.useState({
//         productName:"",
//         productDescription:"",
//         productImageURL:"",
//         productPrice:"",
//     });

//     const handleChange = (e) => {
//         setSingleProduct({
//             ...singleProduct,
//             [e.target.name] : e.target.value,
//         });
//         console.log(singleProduct);
//     };
//     const addProduct = async () => {
//         try {
//             const response = await axios.post(
//                 "https://ty-shop.herokuapp.com/api/products",
//                 singleProduct
//             );
//             if (response.data.error) {
//                 alert("response.data.error");
//             }else{
//                 handleClose();
//                 fetchData();
//             }
//         }catch (err) {
//             console.log(err);
//         }
//     };

//     return(
//         <div>
//             <Modal
//             open={showAddModal}
//             onClose={handleClose}
//             aria-labelledby="parent-modal-title"
//             aria-describeddy="parent-modal-desscription"
//             >
//                 <Box SX = {style}>
//                     <form>
//                         <div className="mb-3">
//                             <label>ProductName</label>
//                             <input
//                             type="text"
//                             onChange={handleChange}
//                             name="productName"
//                             value={singleProduct.productName}
//                             className="form-control"
//                             />

//                         </div>

//                         <div className="mb-3">
//                             <label>Product discription</label>
//                             <input
//                             type="text"
//                             onChange={handleChange}
//                             name="productDescription"
//                             className="form-control"
//                             value={singleProduct.productDescription}
//                             />

//                         </div>

//                         <div className="mb-3">
//                             <label>Product price</label>
//                             <input
//                              type="text"
//                              onChange={handleChange}
//                              name="productPrice"
//                              className="form-control"
//                              value={singleProduct.productPrice}/>
//                         </div>

//                         <div className="mb-3">
//                             <label>Product Image URL</label>
//                             <input
//                              type="text"
//                              onChange={handleChange}
//                              name="productImageURL"
//                              className="form-control"
//                              value={singleProduct.productImageURL}/>
//                         </div>

//                         <Button onClick={addProduct}>Save</Button>
//                         <Button onClick={handleClose}>Cancel</Button>


//                     </form>
//                 </Box>
//             </Modal>
//         </div>
//     )

// }

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background paper",
  border: "2px solid #000",
  boxshadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function AddProducts({ showAddModal, handleClose, fetchData }) {
  const [singleProduct, setSingleProduct] = React.useState({
    productName: "",
    productDescription: "",
    productImageURL: "",
    productPrice: "",
  });

  const handleChange = (e) => {
    setSingleProduct({
      ...singleProduct,
      [e.target.name]: e.target.value,
    });
    console.log(singleProduct);
  };

  const addProduct = async () => {
    try {
      const response = await axios.post(
        "https://ty-shop.herokuapp.com/api/products",
        singleProduct
      );

      if (response.data.error) {
        alert("response.data.error");
      } else {
        handleClose();
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal
        open={showAddModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <form>
            <div className="mb-3">
              <label>ProductName</label>
              <input
                type="text"
                onChange={handleChange}
                name="productName"
                value={singleProduct.productName}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label>Product Description</label>
              <input
                type="text"
                onChange={handleChange}
                name="productDescription"
                value={singleProduct.productDescription}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label>Product Price</label>
              <input
                type="text"
                onChange={handleChange}
                name="productPrice"
                value={singleProduct.productPrice}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label>Product Image Url</label>
              <input
                type="text"
                onChange={handleChange}
                name="productImageURL"
                value={singleProduct.productImageURL}
                className="form-control"
              />
            </div>
            <Button onClick={addProduct}>Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
