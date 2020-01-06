import React, { useEffect } from "react";
import "./RecipeDetail.scss";
import { Link, withRouter } from "react-router-dom";

const RecipeDetail = props => {
  const exampleProp = {
    id: 2,
    name: "Bún chả",
    mainImg:
      "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/ep8_bun-cha_kaily_dsc_6448.jpg",
    ingredients: [
      { main: "Thịt ba chỉ", sub: "500 gram" },
      { main: "Thịt nạc vai", sub: "400 gram" },
      { main: "Chanh, ớt, tỏi, hành tím, đầu hành", sub: "" },
      { main: "Su hào, cà rốt", sub: "" },
      {
        main:
          "Gia vị: tiêu, nước hàng, xì dầu đen, dầu hào, nước mắm, dầu ăn, nước tương, mật ong",
        sub: ""
      },
      { main: "Rau thơm, bún", sub: "" }
    ],
    methods: [
      "- Thịt ba chỉ thái thành những miếng vừa ăn. Thịt nạc vai đem thái mỏng và băm rối. Hành tím, đầu hành, tỏi đập dập, băm nhuyễn rồi chia thành đôi, cho vào 2 phần thịt lợn.",
      "– Tiếp tục cho vào mỗi phần thịt lợn một thìa canh nước hàng hoặc xì dầu đen, 1 thìa canh dầu hào, 1 thìa canh nước mắm, ½ thìa canh đường vàng, 1 muỗng canh nước tương, 1 muỗng canh mật ong và 1 chút tiêu xay. – Trộn đều để cho các gia vị thấm sâu rồi cho vào tủ lạnh để trong khoảng 3 – 4 tiếng. – Phần thịt vai băm, bạn làm thành hình tròn dẹt rồi đem nướng chín. Phần thịt ba thái miếng vừa ăn cũng vậy. – Cà rốt, su hào gọt vỏ rồi rửa sạch, để ráo. Cà rốt thái tròn mỏng, su hào thái vuông mỏng. Sau đó, cho chung vào một âu và cùng 1 chút muối ăn rồi xóc đều. – Ngâm cà rốt, su hào với muối trong khoảng 15 – 20 phút. Sau đó, đem rửa sạch rồi để ráo nước. – Cho ½ muỗng canh tỏi băm, ½ muỗng canh giấm, 2 muỗng canh đường rồi đảo đều đến khi đường tan rồi cho thêm chút ớt băm vào.– Các loại rau thơm bạn đem ngâm với nước muối loãng trong chừng 10 – 15 phút. Sau đó, đem rửa sạch rồi cho ra rổ để ráo nước.",
      "– Chuẩn bị một bát nhỏ, múc 10 thìa canh nước lọc và cho 2 thìa canh đường, 2 thìa canh nước mắm vào khuấy đều cho đến khi đường tan. – Tiếp tục cho 3 muỗng canh nước cốt chanh, 1 muỗng canh đường, 1 muỗng cà phê tỏi băm, 1 muỗng cà phê ớt rồi khuấy đều lên.",
      "– Như vậy là bạn đã hoàn thành xong món bún chả rồi đấy. Bây giờ, bạn chỉ cần dọn rau thơm, bún, thịt, đồ chua và chả nướng cùng bát nước chấm ra là đã có thể mời mọi người thưởng thức được rồi."
    ]
  };

  useEffect(() => {
    console.log("get ID");
    console.log(props.match.params.id);
  }, [props]);

  return (
    <section className="recipeDetail">
      <h2 className="recipeDetail__header">{exampleProp.name}</h2>
      <hr />
      <span className="recipeDetail__control">
        <Link to="/">Trở về</Link>
        <button>Xóa</button>
      </span>
      <div className="recipeDetail__body">
        <div className="recipeDetail__sub">
          <p className="recipeDetail__img">
            <img
              style={{ width: "50%" }}
              src={exampleProp.mainImg}
              alt={exampleProp.name}
            ></img>
          </p>
          <h3 className="recipeDetail__title">Nguyên liệu</h3>
          <Link to="/recipeAdd/" className="recipeDetail__edit">
            Chỉnh sửa
          </Link>
          <ul className="recipeDetail__contain">
            {exampleProp.ingredients.map((ingredient, index) => (
              <li key={index} className="recipeDetail__item">
                {ingredient.main}{" "}
                {ingredient.sub !== "" ? <span>({ingredient.sub})</span> : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="recipeDetail__main">
          <h3 className="recipeDetail__title">Cách làm</h3>
          <Link
            to={`/recipe/edit/${exampleProp.id}`}
            className="recipeDetail__edit"
          >
            Chỉnh sửa
          </Link>
          <ul className="recipeDetail__method">
            {exampleProp.methods.map((method, index) => (
              <li key={index} className="recipeDetail__step">
                {method}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default withRouter(RecipeDetail);
