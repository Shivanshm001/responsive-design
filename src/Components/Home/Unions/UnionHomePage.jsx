import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unionTabSelection } from "../../../redux/actionCreators/userActionCreator";
import MyUnion from "./MyUnion";
import PartOfUnion from "./MyUnion";

const UnionHomePage = () => {
  const unionData = ["My Unions", "Part of Unions"];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState({
    myUnion: false,
    partOfUnion: false,
  });
  const { unionTab } = useSelector((state) => state.userReducer);
  const onHandleModal = () => {
    setShowModal({ ...showModal, partOfUnion: true });
  };
  const onHandleModal2 = () => {
    setShowModal({ ...showModal, myUnion: true });
  };
  const onCloseModal = () => {
    setShowModal({ ...showModal, myUnion: false, partOfUnion: false });
  };
  const onSingleUnionPage = () => {
    navigate("/single-unions-page");
  };
  const onCreateUnion = () => {
    navigate("/create-union");
  };
  const onUnionTabSelected = (option) => {
    dispatch(unionTabSelection(option));
  };
  return (
    <div className="w-full flex flex-col items-center gap-5 px-4 h-full">
      <h1 className="text-sm text-center">
        Create and Join Private unions to Create post's Events and Polls.
      </h1>
      <div className="flex justify-center gap-5 w-full">
        {unionData?.map((elem) => (
          <button
            key={elem}
            className={`w-[30%] text-white font-bold py-1 text-xs rounded-lg`}
            style={{
              backgroundColor: unionTab === elem ? "#7991BD" : "#666567",
            }}
            onClick={() => onUnionTabSelected(elem)}
          >
            {elem}
          </button>
        ))}
        <button
          className={`w-[30%] text-white font-bold py-1 text-xs rounded-lg bg-[#7991BD]`}
          onClick={onCreateUnion}
        >
          Add Unions
        </button>
      </div>

      {unionTab === "My Unions" && (
        <MyUnion
          isValid={true}
          onSingleUnionPage={onSingleUnionPage}
          showModal={showModal}
          onHandleModal={onHandleModal2}
          onCloseModal={onCloseModal}
        />
      )}
      {unionTab === "Part of Unions" && (
        <PartOfUnion
          isValid={false}
          showModal={showModal}
          onHandleModal={onHandleModal}
          onCloseModal={onCloseModal}
        />
      )}
    </div>
  );
};

export default UnionHomePage;
