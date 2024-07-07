import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) => {
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [dateofbirth, setDateofBirth] = useState('');
    const [placeofbirth, setPlaceofBirth] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipCode ] = useState('');
    const [telephone_number, setTelephone] = useState('');
    const [mobile_number, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [extension_name, setExtensionName] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBloodType] = useState('');
    const [gsis_id, setGSIS] = useState('');
    const [philhealth_id, setPHILHEALTH] = useState('');
    const [pagibig_id, setPAGIBIG] = useState('');
    const [sss_id, setSSS] = useState('');
    const [tin_id, setTIN] = useState('');
    const [mother_name, setMotherName] = useState('');
    const [mother_occupation, setMotherOccupation] = useState('');
    const [mother_contact, setMotherContact] = useState('');
    const [mother_dateofbirth, setMotherDateofBirth] = useState('');
    const [father_name, setFatherName] = useState('');
    const [father_occupation, setFatherOccupation] = useState('');
    const [father_contact, setFatherContact] = useState('');
    const [father_dateofbirth, setFatherDateofBirth] = useState('');
    const [elementary, setElementary] = useState('');
    const [highschool, setHighSchool] = useState('');
    const [vocational, setVocational] = useState('');
    const [college, setCollege] = useState('');
    const [elementary_sy, setElementarySY] = useState('');
    const [highschool_sy, setHighSchoolSY] = useState('');
    const [vocational_sy, setVocationalSY] = useState('');
    const [college_sy, setCollegeSY] = useState('');


    
    

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setDateofBirth(item.dateofbirth);
            setPlaceofBirth(item.placeofbirth);
            setCitizenship(item.citizenship);
            setAddress(item.address);
            setZipCode(item.zipcode);
            setTelephone(item.telephone_number);
            setMobile(item.mobile_number);
            setEmail(item.email);
            setExtensionName(item.extension_name);
            setSex(item.sex);
            setCivilStatus(item.civil_status);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodType(item.blood_type);
            setGSIS(item.gsis_id);
            setPHILHEALTH(item.philhealth_id);
            setPAGIBIG(item.pagibig_id);
            setSSS(item.sss_id);
            setTIN(item.tin_id);
            setMotherName(item.mother_name);
            setMotherOccupation(item.mother_occupation);
            setMotherContact(item.mother_contact);
            setMotherDateofBirth(item.mother_dateofbirth);
            setFatherName(item.father_name);
            setFatherOccupation(item.father_occupation);
            setFatherContact(item.father_contact);
            setFatherDateofBirth(item.father_dateofbirth);
            setElementary(item.elementary);
            setHighSchool(item.highschool);
            setVocational(item.vocational);
            setCollege(item.college);
            setElementarySY(item.elementary_sy);
            setHighSchoolSY(item.highschool_sy);
            setVocationalSY(item.vocational_sy);
            setCollegeSY(item.college_sy);
        }
    }, [item]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = {first_name, middle_name, last_name, dateofbirth, placeofbirth, citizenship, address, zipcode, telephone_number, mobile_number, email, extension_name,
            sex, civil_status, height, weight, blood_type, gsis_id, philhealth_id, pagibig_id, sss_id, tin_id, mother_name, mother_occupation, mother_contact, mother_dateofbirth,
            father_name, father_occupation, father_contact, father_dateofbirth, elementary, highschool, vocational, college, elementary_sy, highschool_sy, vocational_sy, college_sy};
        try {
            if(item){
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('Error submitting the form!', error);
        }
    };

            {/* ... PERSONAL INFORMATION ... */}
    return(
        <div style={{textAlign: "center"}}>
            <h1 style={{fontFamily: "'Times New Roman', Times, serif"}}>Bio Data Form</h1>
            <h3 style={{fontFamily: "'Times New Roman', Times, serif"}}>I. PERSONAL INFORMATION</h3>
            {/* PERSONAL INFORMATION INPUTS */}
            <form onSubmit={handleSubmit} style={{fontFamily: "'Times New Roman', Times, serif", borderRadius: "10px", backgroundColor: "white", width: "50%", margin: "auto", padding: "20px"}}>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>First Name:</label>
                        <input type='text' value={first_name} onChange={(e) => setFirstName(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Extension Name (JR,SR):</label>
                        <input type='text' value={extension_name} onChange={(e) => setExtensionName(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Middle Name:</label>
                        <input type='text' value={middle_name} onChange={(e) => setMiddleName(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Sex:</label>
                        <input type='text' value={sex} onChange={(e) => setSex(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Last Name:</label>
                        <input type='text' value={last_name} onChange={(e) => setLastName(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Civil Status:</label>
                        <input type='text' value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Date of Birth:</label>
                        <input type='text' value={dateofbirth} onChange={(e) => setDateofBirth(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Height (m):</label>
                        <input type='text' value={height} onChange={(e) => setHeight(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Place of Birth:</label>
                        <input type='text' value={placeofbirth} onChange={(e) => setPlaceofBirth(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Weight (kg):</label>
                        <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Address:</label>
                        <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Blood Type:</label>
                        <input type='text' value={blood_type} onChange={(e) => setBloodType(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Citizenship:</label>
                        <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>PHILHEALTH ID no.:</label>
                        <input type='text' value={philhealth_id} onChange={(e) => setPHILHEALTH(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Zip Code:</label>
                        <input type='text' value={zipcode} onChange={(e) => setZipCode(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>GSIS ID no.:</label>
                        <input type='text' value={gsis_id} onChange={(e) => setGSIS(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Telephone no.:</label>
                        <input type='text' value={telephone_number} onChange={(e) => setTelephone(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>PAG-IBIG ID no.:</label>
                        <input type='text' value={pagibig_id} onChange={(e) => setPAGIBIG(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Mobile no.:</label>
                        <input type='text' value={mobile_number} onChange={(e) => setMobile(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>SSS ID no.:</label>
                        <input type='text' value={sss_id} onChange={(e) => setSSS(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>Email:</label>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                    <div style={{flex: 1, textAlign: "left"}}>
                        <label style={{fontWeight: "bold", fontSize: "1.2em"}}>TIN ID no.:</label>
                        <input type='text' value={tin_id} onChange={(e) => setTIN(e.target.value)} style={{marginLeft: "0", width: "100%"}}/>
                    </div>
                </div>

                {/* ... FAMILY BACKGROUND ... */}

                <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }}>II. FAMILY BACKGROUND</h3>

                {/* FAMILY BACKGROUND INPUTS */}
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <div style={{ flex: 1, textAlign: "left" }}>
                    <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>Mother's Full Name:</label>
                    <input type='text' value={mother_name} onChange={(e) => setMotherName(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                 </div>
                 <div style={{ flex: 1, textAlign: "left" }}>
                     <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>Mother's Occupation:</label>
                    <input type='text' value={mother_occupation} onChange={(e) => setMotherOccupation(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                     </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <div style={{ flex: 1, textAlign: "left" }}>
                        <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>Mother's Contact:</label>
                        <input type='text' value={mother_contact} onChange={(e) => setMotherContact(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                    </div>
                    <div style={{ flex: 1, textAlign: "left" }}>
                        <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>Mother's Date of Birth:</label>
                        <input type='text' value={mother_dateofbirth} onChange={(e) => setMotherDateofBirth(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <div style={{ flex: 1, textAlign: "left" }}>
                        <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>Father's Full Name:</label>
                        <input type='text' value={father_name} onChange={(e) => setFatherName(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                    </div>
                    <div style={{ flex: 1, textAlign: "left" }}>
                        <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>Father's Occupation:</label>
                        <input type='text' value={father_occupation} onChange={(e) => setFatherOccupation(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <div style={{ flex: 1, textAlign: "left" }}>
                        <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>Father's Contact:</label>
                        <input type='text' value={father_contact} onChange={(e) => setFatherContact(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                    </div>
                    <div style={{ flex: 1, textAlign: "left" }}>
                        <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>Father's Date of Birth:</label>
                        <input type='text' value={father_dateofbirth} onChange={(e) => setFatherDateofBirth(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                    </div>
                </div>
                 {/* ... EDUCATIONAL BACKGROUND ... */}

                 <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }}>III. EDUCATIONAL BACKGROUND</h3>

                {/* EDUCATIONAL BACKGROUND INPUTS */}
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}> 
                <div style={{ flex: 1, textAlign: "left" }}>
                 <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>Elementary:</label>
                 <input type='text' value={elementary} onChange={(e) => setElementary(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                    </div>
                <div style={{ flex: 1, textAlign: "left" }}>
                 <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>School Year:</label>
                 <input type='text' value={elementary_sy} onChange={(e) => setElementarySY(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                 </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}> 
                <div style={{ flex: 1, textAlign: "left" }}>
                 <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>Junior:</label>
                 <input type='text' value={highschool} onChange={(e) => setHighSchool(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                    </div>
                <div style={{ flex: 1, textAlign: "left" }}>
                 <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>School Year:</label>
                 <input type='text' value={highschool_sy} onChange={(e) => setHighSchoolSY(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                 </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}> 
                <div style={{ flex: 1, textAlign: "left" }}>
                 <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>Senior:</label>
                 <input type='text' value={vocational} onChange={(e) => setVocational(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                    </div>
                <div style={{ flex: 1, textAlign: "left" }}>
                 <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>School Year:</label>
                 <input type='text' value={vocational_sy} onChange={(e) => setVocationalSY(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                 </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}> 
                <div style={{ flex: 1, textAlign: "left" }}>
                 <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>College:</label>
                 <input type='text' value={college} onChange={(e) => setCollege(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                    </div>
                <div style={{ flex: 1, textAlign: "left" }}>
                 <label style={{ fontWeight: "bold", fontSize: "1.2em" }}>School Year:</label>
                 <input type='text' value={college_sy} onChange={(e) => setCollegeSY(e.target.value)} style={{ marginLeft: "0", width: "100%" }} />
                 </div>
                </div>
                <br/>
                <button type='submit' style={{width: "100%", padding: "10px", backgroundColor: "lightblue", border: "none", borderRadius: "5px", cursor: "pointer"}}>Submit</button>
            </form>
        </div>
    );
}

export default ItemForm