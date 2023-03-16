import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="name">Full Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          type="text"
          className="form-control"
          placeholder="Enter your name"
          id="name"
        />
        <label htmlFor="email">Email:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="email"
          type="text"
          className="form-control"
          placeholder="Enter your email address"
          id="email"
        />
        <label htmlFor="subject" class="col-form-label">Subject</label>
        <input
          value={props.search}
          onChange={props.handInputChange}
          name="subject"
          type="text"
          className="form-control"
          id="subject"
          placeholder="Your subject"
         />
         <label htmlFor="message" class="col-form-label">Message *</label>
        <textarea 
          value={props.search}
          onChange={props.handInputChange}
          name="message" 
          className="form-control"
          id="message" 
          cols="30" rows="4"  
          placeholder="Write your message"></textarea>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
