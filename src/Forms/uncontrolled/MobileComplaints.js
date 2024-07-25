
import React, { useRef, useState } from "react";

function Mobilecomplaints() {
  const BrandnameRef = useRef();
  const ModelnameRef = useRef();
  const PriceRef = useRef();
  const SpecificationsRef = useRef();
  const ComplaintRef = useRef();
  const [error, setError] = useState(null);

  const SubmitHandler = (event) => {
    event.preventDefault();

    const BrandnameEntered = BrandnameRef.current.value;
    const ModelnameEntered = ModelnameRef.current.value;
    const PriceEntered = PriceRef.current.value;
    const SpecificationsEntered = SpecificationsRef.current.value;
    const ComplaintEntered = ComplaintRef.current.value;

    console.log(
      BrandnameEntered,
      ModelnameEntered,
      PriceEntered,
      SpecificationsEntered,
      ComplaintEntered,
      "User entered details"
    );

    if (
      BrandnameEntered.length <= 15 &&
      ModelnameEntered.length <= 15 &&
      PriceEntered.length <= 15 &&
      SpecificationsEntered.length <= 15 &&
      ComplaintEntered.length <= 15
    ) {
      setError(null);
      alert("Accurate specifications required");
    } else {
      setError(
        "Please enter less than or equal to 15 characters for Brandname, Modelname, Price, Specifications, Complaint"
      );
    }
  };

  return (
    <>
      <form onSubmit={SubmitHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputBrandname1">Brandname</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputBrandname1"
            aria-describedby="BrandnameHelp"
            placeholder="Enter Brandname"
            ref={BrandnameRef}
          />
          <small id="BrandnameHelp" className="form-text text-muted">
            We'll never share your IMEI Number with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputModelname1">Modelname</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputModelname1"
            placeholder="Enter Modelname"
            ref={ModelnameRef}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPrice1">Price</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPrice1"
            placeholder="Enter Price"
            ref={PriceRef}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputSpecifications1">Specifications</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputSpecifications1"
            placeholder="Enter Specifications"
            ref={SpecificationsRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputComplaint1">Complaint</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputComplaint1"
            placeholder="Enter Complaint"
            ref={ComplaintRef}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </>
  );
}

export default Mobilecomplaints;
