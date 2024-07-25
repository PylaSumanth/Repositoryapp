import React,{useRef,useState} from "react";
function UncontrolledForm() {

    const emailRef=useRef();
    const passwordRef=useRef();
    const [error,setError]=useState(null);

    const SubmitHandler = (event) => {
        event.preventDefault();

        const emailEntered = emailRef.current.value;
        const passwordEntered = passwordRef.current.value;

        console.log(emailEntered,passwordEntered,"User entered details");
        if(emailEntered.length <= 15 && passwordEntered.length <= 15){
            setError(null);
            alert("completed")
        }else{
            setError("Please entered<15 characters for email and password");
        }
    };

    return (
        <>
        <form onSubmit={SubmitHandler}>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              ref={passwordRef}
            />
          </div>
    
          {error && <span style={{ color: "red" }}>{error}</span>}
          <div className="form-check mb-3">
            
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        
        </>
      );
    }
    
export default UncontrolledForm;