import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBlog, getAllBlogs } from "../redux/actions/blog";
import { AnyAction } from "redux";
const ListBLog = (data: any) => {
  console.log(data)
  const items = data.data;
  const active = data.activeAdmin;
  const searchPage = data.searchPage;
  const [isDelete, setIsDelete] = useState(false);

  const twice = searchPage ? "6" : "4";
  const dispatch = useDispatch();

  function handleDelete(id: any) {
    dispatch(deleteBlog(id) as unknown as AnyAction);
    window.location.reload();
  }

  return (
    <div className="mt-12 container mb-12">
      {/* a tour */}
      {items.length != 0
        ? items.map((item: any, index: any) => {
         if(item.status == "2"){
          return (
            <div
              key={index}
              style={{ padding: "0 15px", margin: "15px auto" }}
              className={`mt-${twice} body-container-tour mb-12 m-9`}
            >
              <div style={{ border: "1px solid #f1f1f1" }}>
                <Link to={`/tour-detail/${item._id}`}>
                  <div
                    style={{
                      backgroundImage: `url("${item.images[0]}")`,
                    }}
                    className="body-choice-img"
                  >
                    <span className="body-choice-price">
                      {/* {formatter.format(item.price)} VND */}
                    </span>
                  </div>
                </Link>

                <div className="body-choice-destination">{item.name}</div>

                <div
                  style={{ backgroundColor: `#${item.color}` }}
                  className="body-choice-feature"
                >
                  <Link to="./Europe" className="body-choice-continent">
                    {item.destination}
                  </Link>
                  <Link to="./Cultural" className="body-choice-aim">
                    {item.aim}
                  </Link>
                </div>
                <div
                  style={{ padding: "20px" }}
                  className="body-choice-content-container"
                >
                  <div className="body-choice-content">
                    {item.description}
                  </div>
                  <div className="w-100 d-flex justify-content-between gap-4 flex-wrap">
                    {(
                      <>
                        <Link to={`/blog-detail/${item._id}`} className="body-choice-btn">
                          Details
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
          }})
        : null}
    </div>
  );
};

export default ListBLog;
