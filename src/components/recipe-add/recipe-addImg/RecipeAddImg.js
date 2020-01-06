import React, { useState, useRef } from "react";

import "./RecipeAddImg.scss";

const RecipeAddImg = () => {
  const [filename1, setFilename1] = useState("");
  const [filename2, setFilename2] = useState("");
  const getFileName1 = () => {
    setFilename1(inputEle1.current.files[0].name);
  };
  const getFileName2 = () => {
    setFilename2(inputEle2.current.files[0].name);
  };
  const inputEle1 = useRef(null);
  const inputEle2 = useRef(null);

  return (
    <React.Fragment>
      <p className="recipeAddImg__heading">Thêm ảnh #1</p>
      <label className="recipeAddImg__img">
        Chọn 1 file ảnh
        <br />
        {filename1 === "" ? "Chưa có ảnh nào" : `Đã chọn - ${filename1}`}
        <input
          ref={inputEle1}
          onChange={() => getFileName1()}
          type="file"
          accept="image/*"
          name="image1"
        ></input>
      </label>

      <p className="recipeAddImg__heading">Thêm ảnh #2</p>
      <label className="recipeAddImg__img">
        Chọn 1 file ảnh
        <br />
        {filename2 === "" ? "Chưa có ảnh nào" : `Đã chọn - ${filename2}`}
        <input
          ref={inputEle2}
          onChange={() => getFileName2()}
          type="file"
          accept="image/*"
          name="image2"
        ></input>
      </label>
    </React.Fragment>
  );
};

export default RecipeAddImg;
