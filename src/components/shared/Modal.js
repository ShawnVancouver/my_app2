import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { showModalA } from "../../actions";
import FilterModal from "./Modal_content/FilterModal";
// const Modal = (props) => {
//   if (props.ModalReducer) {
//     console.log("props.PopReducer.name " + JSON.stringify(props.ModalReducer));

//     debugger;

//     return ReactDOM.createPortal(
//       <div className="popModal">
//         <div>{props.ModalReducer.name}</div>
//         <div>{props.ModalReducer.age}</div>
//       </div>,
//       document.querySelector("#modal")
//     );
//   }
//   return "";
// };

const Modal = (props) => {
  useEffect(() => {
    if (props.PopReducer == false) {
      props.showModalA(null);
    }
  }, [props.PopReducer]);

  console.log("props.PopReducer.name " + JSON.stringify(props.ModalReducer));

  if (props.ModalReducer && props.PopReducer) {
    if (props.ModalReducer.modalType == "profile") {
      return (
        <div className="popModal">
          <div>{props.ModalReducer.name}</div>
          <div>{props.ModalReducer.age}</div>
          <div>{props.ModalReducer.sex}</div>
          <div>{props.ModalReducer.desc}</div>
        </div>
      );
    }

    if (props.ModalReducer.modalType == "filter") {
      return <FilterModal />;
    }
  }
  return "";
};

const mapStateToProps = (state) => {
  return {
    ModalReducer: state.ModalReducer,
    PopReducer: state.PopReducerState,
  };
};

export default connect(mapStateToProps, { showModalA })(Modal);

// export default Modal;