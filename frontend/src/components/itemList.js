import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    },[]);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/')
            setItems(response.data);
        } catch (error) {
            console.error('Error catching the items!', error)
        }
    };


    return (
        <div style={{textAlign: "center"}}>
            <h1 style={{fontFamily: "'Times New Roman', Times, serif"}}>Bio Data List</h1>
            <ul style={{listStyleType: "none", padding: 0}}>
                {items.map(item => (
                   <li key={item.id} style={{margin: "10px 0", padding: "10px", border: "1px solid lightgray", borderRadius: "5px", backgroundColor: "whitesmoke"}}>
                   <div style={{display: "flex", flexDirection: "column", marginBottom: "10px"}}>
                       <div style={{textAlign: "left"}}>
                           <h4 style={{fontFamily: "'Times New Roman', Times, serif"}}>I. PERSONAL INFORMATION</h4>
                       </div>
                       {/* ... PERSONAL INFORMATION DATA ... */}
                       <div style={{display: "flex", justifyContent: "space-between"}}>
                           <div style={{flex: 1, textAlign: "left"}}>
                               <strong>First Name:</strong> {item.first_name}
                           </div>
                           <div style={{flex: 1, textAlign: "left"}}>
                               <strong>Extension Name:</strong> {item.extension_name}
                           </div>
                       </div>
                   </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Middle Name:</strong> {item.middle_name}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Sex:</strong> {item.sex}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Last Name:</strong> {item.last_name}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Civil Status:</strong> {item.civil_status}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Date of Birth:</strong> {item.dateofbirth}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Height (m):</strong> {item.height}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Place of Birth:</strong> {item.placeofbirth}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Weight (kg):</strong> {item.weight}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Address:</strong> {item.address}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Blood Type:</strong> {item.blood_type}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Citizenship:</strong> {item.citizenship}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>PHILHEALTH ID no.:</strong> {item.philhealth_id}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Zip Code:</strong> {item.zipcode}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>GSIS ID no.:</strong> {item.gsis_id}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Telephone no.:</strong> {item.telephone_number}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>PAG-IBIG ID no.:</strong> {item.pagibig_id}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Mobile no.:</strong> {item.mobile_number}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>SSS ID no.:</strong> {item.sss_id}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Email:</strong> {item.email}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>TIN ID no.:</strong> {item.tin_id}
                            </div>
                        </div>
                        {/* ... FAMILY BACKGROUND ... */}
                        <div style={{textAlign: "left"}}>
                           <h4 style={{fontFamily: "'Times New Roman', Times, serif"}}>II. FAMILY BACKGROUND</h4>
                       </div>
                       <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Mother's Full Name:</strong> {item.mother_name}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Mother's Occupation:</strong> {item.mother_occupation}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Mother's Contact:</strong> {item.mother_contact}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Mother's Date of Birth:</strong> {item.mother_dateofbirth}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Father's Full Name:</strong> {item.father_name}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>father's Occupation.:</strong> {item.father_occupation}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Father's Contact:</strong> {item.father_contact}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Father's Date of Birth:</strong> {item.father_dateofbirth}
                            </div>
                        </div>
                         {/* ... EDUCATIONAL BACKGROUND ... */}
                         <div style={{textAlign: "left"}}>
                           <h4 style={{fontFamily: "'Times New Roman', Times, serif"}}>III. EDUCATIONAL BACKGROUND</h4>
                       </div>
                       <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Elementary:</strong> {item.elementary}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>School Year:</strong> {item.elementary_sy}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Junior:</strong> {item.highschool}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>School Year:</strong> {item.highschool_sy}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>Senior:</strong> {item.vocational}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>School Year:</strong> {item.vocational_sy}
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>College:</strong> {item.college}
                            </div>
                            <div style={{flex: 1, textAlign: "left"}}>
                                <strong>School Year:</strong> {item.college_sy}
                            </div>
                        </div>
                        <button onClick={() => onEdit(item)} style={{margin: "10px", padding: "5px 10px", backgroundColor: "lightblue", border: "none", borderRadius: "5px", cursor: "pointer"}}>Edit</button>
                        <button onClick={() => onDelete(item.id)} style={{padding: "5px 10px", backgroundColor: "lightgray", border: "none", borderRadius: "5px", cursor: "pointer"}}>Delete</button>
                    </li>
                ))}
            </ul> 
        </div>
    );

}

export default ItemList;