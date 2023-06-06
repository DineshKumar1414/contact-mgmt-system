
import React,{useEffect} from "react";
import {Route,Routes} from "react-router-dom"
import Contacts from "./Contacts"
import Dashboard from "./Charts_and_Maps"
import EditContact from "../Components/Edit_Contact"
import ContactForm from "../Components/ContactForm"

const AllRoutes=()=>{
    var location = window.location.href;
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, [location]);
   
    return(
        <Routes >
            <Route path="/" element={<Contacts/>}/>
            <Route path="/contact_form" element={<ContactForm/>}/>
            <Route path="/chart-and-maps" element={<Dashboard/>}/>
            <Route path="/edit/:id" element={<EditContact/>}/>
        </Routes>
    )
}

export default AllRoutes