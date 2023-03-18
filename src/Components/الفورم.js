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