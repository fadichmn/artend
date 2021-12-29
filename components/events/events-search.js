import { useRef } from "react";

import Button from "../ui/button";
import classes from "./events-search.module.css";

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <di className={classes.control}>
          <label htmlFor="year">År</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </di>
      </div>
      <div className={classes.control}>
        <label htmlFor="month">Månad</label>
        <select id="month" ref={monthInputRef}>
          <option value="1">Januari</option>
          <option value="2">Februari</option>
          <option value="3">Mars</option>
          <option value="4">April</option>
          <option value="5">Maj</option>
          <option value="6">Juni</option>
          <option value="7">Juli</option>
          <option value="8">Augusti</option>
          <option value="9">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <Button>Filtrera</Button>
    </form>
  );
}

export default EventsSearch;