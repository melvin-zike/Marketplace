import "./rightbar.css";
// import { Link } from "react-router-dom";
import { popularProducts } from '../../data';
const Rightbar = () => {
    return (
        <>
          <div className="birthdayContainer">
            <img className="birthdayImg" style={{width: "220px", height: "180px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UEEcxgE6SAeiJ8MlliBEzaFv4TnZi1i1qA&usqp=CAU" alt="" />
            <img className="rightbarAd" style={{width: "220px", height: "180px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzuY779MOpriKMLE9ZDeoKHvaTAkU9d7gBA&usqp=CAU" alt="" />
          </div>
          <ul className="rightbarFriendList">
            {/* {popularProducts.map((u) => (
              <div key={u.id} user={u}>
                {u.img}
              </div>
            ))} */}
          </ul>
        </>
      );
}

export default Rightbar
