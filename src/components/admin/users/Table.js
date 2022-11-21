import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import axios from "axios";
//import image from "../assets/img/faces/face-3.jpg"
function Table() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:5000/users/list"
        );
        setUsers(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  const handleDelete = (e) => {
    e.preventDefault(console.log(e.target));
  };
  const handleView = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card strpied-tabled-with-hover">
            <div className="card-header ">
              <h4 className="card-title">User Management</h4>
              <p className="card-category">
                {" "}
                <div className="col-sm-7">
                  <a href="/register" className="btn btn-secondary p-1 m-1">
                    <i
                      className="fa fa-plus-circle text-secondary"
                      aria-hidden="true"
                    ></i>{" "}
                    Add New User
                  </a>
                  <a href="#" className="btn btn-secondary p-1">
                    <i
                      className="fa fa-download text-secondary"
                      aria-hidden="true"
                    ></i>{" "}
                    Export to Excel
                  </a>
                </div>
              </p>
            </div>
            <div className="card-body table-full-width table-responsive">
              <table className="table table-hover table-striped">
                <thead>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date Created</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  {loading
                    ? "Loading"
                    : users.data.map((e, index) => {
                        let imagesrc = "";
                        if (e.image) {
                          imagesrc =
                            "http://localhost:5000/rentals/image?file=" +
                            e.image;
                        }
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <a href={"/user/" + e.id}>
                                <img
                                  src={imagesrc}
                                  className="avatar"
                                  width="20"
                                  height="20"
                                  alt="Avatar"
                                  style={{ borderRadius: "50%" }}
                                />{" "}
                                {e.first_name} {e.last_name}
                              </a>
                            </td>
                            <td>{e.email}</td>
                            <td> {e.date_created}</td>
                            <td>{e.role}</td>
                            <td>
                              <span className="status text-success"></span>{" "}
                              {e.active ? "Active" : "Inactive"}
                            </td>
                            <td className="pl-1 pr-1">
                              <a
                                href="#"
                                className="view "
                                title="View"
                                data-toggle="tooltip"
                                onClick={handleView}
                              >
                                <i
                                  className="fa fa-eye text-success"
                                  style={{fontSize:"12px"}}
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a
                                href="#"
                                className="edit pl-2 pr-2"
                                title="edit"
                                data-toggle="tooltip"
                                onClick={handleEdit}
                              >
                                <i className="fa fa-pen text-warning" style={{fontSize:"12px"}}aria-hidden="true"></i>
                              </a>
                              <a
                                href="#"
                                className="delete "
                                title="Delete"
                                data-toggle="tooltip" 
                                onClick={handleDelete}
                              >
                                <i
                                  className="fa fa-trash text-danger"
                                  style={{fontSize:"12px"}}
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Table;
