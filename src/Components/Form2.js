import React, {  useState } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { FaUserEdit } from "react-icons/fa";

export default function Form2() {
  const [listOfEmployee, setList] = useState(() => initialize());
  const [isAddMode, setMode] = useState(true);
  const [Employee, setEmployee] = useState({
    Id: 0,
    Name: "",
    Email: "",
    Age: 0,
    Gender: "",
  });

  function changeEmployee(e) {
    const name = e.target.name;
    const value = e.target.value;
    setEmployee((prev) => ({ ...prev, [name]: value }));
    console.log(Employee);
  }

  function reset() {
    setEmployee({
      Id: 0,
      Name: "",
      Email: "",
      Age: 0,
      Gender: "",
    });
    setMode(true);
  }

  function addEmployee() {
    setList((prev) => [...prev, Employee]);
  }

  function deleteEmployee(id) {
    setList((prev) => prev.filter((item) => id !== item.Id));
  }

  function showItem(emp) {
    setMode(false);
    setEmployee(emp);
  }

  function updateItem(employee) {
    console.log(employee);
    console.log(Employee);
    setList(
      listOfEmployee.map((item) => (employee.Id !== item.Id ? item : Employee))
    );
  }

  function initialize() {
    return [
      {
        Id: 1,
        Name: "Sutherland",
        Email: "sbrandli0@hp.com",
        Age: 79,
        Gender: "Male",
      },
      {
        Id: 2,
        Name: "Corrinne",
        Email: "ctyers1@people.com.cn",
        Age: 55,
        Gender: "Female",
      },
      {
        Id: 3,
        Name: "Libbey",
        Email: "lfollows2@spiegel.de",
        Age: 3,
        Gender: "Female",
      },
      {
        Id: 4,
        Name: "Jammie",
        Email: "jkleingrub3@cisco.com",
        Age: 81,
        Gender: "Female",
      },
      {
        Id: 5,
        Name: "Juanita",
        Email: "jwort4@ask.com",
        Age: 79,
        Gender: "Female",
      },
      {
        Id: 6,
        Name: "Marius",
        Email: "mibbeson5@salon.com",
        Age: 94,
        Gender: "Male",
      },
      {
        Id: 7,
        Name: "Harrison",
        Email: "hmotton6@un.org",
        Age: 89,
        Gender: "Male",
      },
      {
        Id: 8,
        Name: "Kerby",
        Email: "kabramino7@vistaprint.com",
        Age: 39,
        Gender: "Male",
      },
      {
        Id: 9,
        Name: "Murvyn",
        Email: "mpalliser8@statcounter.com",
        Age: 44,
        Gender: "Polygender",
      },
      {
        Id: 10,
        Name: "Giulietta",
        Email: "glangelaan9@pen.io",
        Age: 85,
        Gender: "Female",
      },
    ];
  }

  return (
    <div className="container my-5">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setMode(true)}
      >
        Add new Employee +
      </button>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Operation1</th>
              <th>Operation2</th>
            </tr>
          </thead>
          <tbody>
            {listOfEmployee.length > 0 ? (
              listOfEmployee.map((item, index) => (
                <tr key={index}>
                  <td>{item.Id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Age}</td>
                  <td>{item.Gender}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger p-2"
                      onClick={() => deleteEmployee(item.Id)}
                    >
                      {/* <AiFillDelete className=" fs-5 me-1 mb-1" /> */}
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => showItem(item)}
                    >
                      {/* <FaUserEdit className=" fs-5 me-1 mb-1" /> */}
                      Update
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="text-center">
                <td colSpan={7} className="pt-4 h2   ">
                  <div class="alert alert-danger" role="alert">
                    No Employees Here
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add new Employee
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  name="Id"
                  className="form-control"
                  placeholder="Id"
                  id="Id"
                  value={Employee.Id}
                  disabled={isAddMode ? false : true}
                  onChange={changeEmployee}
                />
                <label htmlFor="Id">Id</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  value={Employee.Name}
                  onChange={changeEmployee}
                  className="form-control"
                  placeholder="Name"
                />
                <label htmlFor="Name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="Email"
                  value={Employee.Email}
                  onChange={changeEmployee}
                  className="form-control"
                  placeholder="name@example.com"
                />
                <label htmlFor="Email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={changeEmployee}
                  value={Employee.Age}
                  type="number"
                  name="Age"
                  className="form-control"
                  placeholder="Age"
                />
                <label htmlFor="Age">Age</label>
              </div>
              <div className="form-floating">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="Gender"
                  value={Employee.Gender}
                  onChange={changeEmployee}
                >
                  <option value="Male" key={0}>
                    Male
                  </option>
                  <option value="Female" key={1}>
                    Female
                  </option>
                </select>

                <label htmlFor="Gender">Gender</label>
                <button
                  type="button"
                  className="btn btn-primary my-3"
                  onClick={reset}
                >
                  Reset
                </button>
              </div>{" "}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={isAddMode ? addEmployee : () => updateItem(Employee)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
