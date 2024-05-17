import "../form_style.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [dob, setDOB] = useState(null);
  const [joining, setJoining] = useState(null);

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [taluks, setTaluks] = useState([]);

  const taluksData = {
    Bagalkote: [
      "Bagalkote",
      "Jamkhandi",
      "Mudhola",
      "Badami",
      "Bilagi",
      "Hunagunda",
      "Ilkal",
      "Rabkavi Banhatti",
      "Guledgudda",
    ],
    Ballari: ["Ballari", "Kurugodu", "Kampli", "Sanduru", "Siraguppa"],
    Belagavi: [
      "Belagavi",
      "Athani",
      "Bailhongal",
      "Chikkodi",
      "Gokak",
      "Khanapura",
      "Mudalgi",
      "Nippani",
      "Rayabaga",
      "Savadatti",
      "Ramadurga",
      "Kagawada",
      "Hukkeri",
      "Kitturu",
    ],
    "Bengaluru Urban": [
      "Hebbala",
      "Kengeri",
      "Krishnarajapura",
      "Anekal",
      "Yelahanka",
    ],
    "Bengaluru Rural": [
      "Nelamangala",
      "Doddaballapura",
      "Devanahalli",
      "Hosakote",
    ],
    Bidar: [
      "Aurad",
      "Basavakalyana",
      "Bhalki",
      "Bidar",
      "Chitgoppa",
      "Hulsuru",
      "Humnabad",
      "Kamalanagara",
    ],
    Chamarajanagara: [
      "Chamarajanagara",
      "Gundlupete",
      "Kollegala",
      "Yelanduru",
      "Hanuru",
    ],
    Chikkaballapura: [
      "Chikkaballapura",
      "Bagepalli",
      "Chintamani",
      "Gauribidanuru",
      "Gudibanda",
      "Sidlaghatta",
      "Cheluru",
    ],
    Chikkmagaluru: [
      "Chikkamagaluru",
      "Kaduru",
      "Koppa",
      "Mudigere",
      "Narasimharajapura",
      "Sringeri",
      "Tarikere",
      "Ajjampura",
      "Kalasa",
    ],
    Chitradurga: [
      "Chitradurga",
      "Challakere",
      "Hiriyur",
      "Holalkere",
      "Hosadurga",
      "Molakalmuru",
    ],
    "Dakshina Kannada": [
      "Mangaluru",
      "Ullal",
      "Mulki",
      "Moodbidri",
      "Bantwala",
      "Belathangadi",
      "Putturu",
      "Sulya",
      "Kadaba",
    ],
    Davanagere: [
      "Davanagere",
      "Harihara",
      "Channagiri",
      "Honnali",
      "Nyamathi",
      "Jagaluru",
    ],
    Dharwad: [
      "Kalghatgi",
      "Dharwad",
      "Hubballi (Rural)",
      "Hubballi (Urban)",
      "Kundagolu",
      "Navalgunda",
      "Alnavara",
      "Annigeri",
    ],
    Gadag: [
      "Gadag",
      "Naragunda",
      "Mundaragi",
      "Rona",
      "Gajendragada",
      "Lakshmeshwara",
      "Shirahatti",
    ],
    Hassan: [
      "Hassan",
      "Arasikere",
      "Channarayapattana",
      "Holenarsipura",
      "Sakleshpura",
      "Aluru",
      "Arakalagudu",
      "Beluru",
    ],
    Haveri: [
      "Ranibennur",
      "Byadgi",
      "Hangala",
      "Haveri",
      "Savanuru",
      "Hirekeruru",
      "Shiggavi",
      "Rattihalli",
    ],
    Kalaburagi: [
      "Kalaburagi",
      "Afzalpura",
      "Alanda",
      "Chincholi",
      "Chitapura",
      "Jevargi",
      "Sedam",
      "Kamalapura",
      "Shahabad",
      "Kalgi",
      "Yedrami",
    ],
    Kodagu: [
      "Madikeri",
      "Somawarapete",
      "Virajapete",
      "Ponnammapete",
      "Kushalnagara",
    ],
    Kolar: [
      "Kolar",
      "Bangarapete",
      "Maluru",
      "Mulabagilu",
      "Srinivasapura",
      "Kolar Gold Fields (Robertsonpete)",
    ],
    Koppala: [
      "Koppala",
      "Gangavathi",
      "Kushtagi",
      "Yelaburga",
      "Kanakagiri",
      "Karatagi",
      "Kukanuru",
    ],
    Mandya: [
      "Mandya",
      "Madduru",
      "Malavalli",
      "Srirangapattana",
      "Krishnarajapete",
      "Nagamangala",
      "Pandavapura",
    ],
    Mysuru: [
      "Mysuru",
      "Hunasuru",
      "Krishnarajanagara",
      "Nanjanagodu",
      "Heggadadevanakote",
      "Piriyapattana",
      "Tirumakudalu Narasipura",
      "Saraguru",
      "Saligrama",
    ],
    Raichuru: [
      "Raichuru",
      "Sindhanuru",
      "Manvi",
      "Devadurga",
      "Lingasaguru",
      "Mudgal",
      "Maski",
      "Sirawara",
    ],
    Ramanagara: [
      "Ramanagara",
      "Magadi",
      "Kanakapura",
      "Channapattana",
      "Harohalli",
    ],
    Shivamogga: [
      "Shivamogga",
      "Sagara",
      "Bhadravathi",
      "Hosanagara",
      "Shikaripura",
      "Soraba",
      "Tirthahalli",
    ],
    Tumakuru: [
      "Tumakuru",
      "Chikkanayakanahalli",
      "Kunigal",
      "Madhugiri",
      "Sira",
      "Tipturu",
      "Gubbi",
      "Koratagere",
      "Pavagada",
      "Turuvekere",
    ],
    Udupi: [
      "Udupi",
      "Kapu",
      "Bynduru",
      "Karkala",
      "Kundapura",
      "Hebri",
      "Brahmavara",
    ],
    "Uttara Kannada": [
      "Karwara",
      "Sirsi",
      "Joida",
      "Dandeli",
      "Bhatkal",
      "Kumta",
      "Ankola",
      "Haliyal",
      "Honnavara",
      "Mundagodu",
      "Siddapura",
      "Yellapura",
    ],
    Vijayapura: [
      "Vijayapura",
      "Indi",
      "Basavana Bagewadi",
      "Sindgi",
      "Muddebihala",
      "Talikote",
      "Devara Hipparagi",
      "Chadchana",
      "Tikote",
      "Babaleshwara",
      "Kolhara",
      "Nidagundi",
      "Alamela",
    ],
    Yadagiri: [
      "Yadagiri",
      "Shahapura",
      "Surapura",
      "Gurmitkala",
      "Vadagera",
      "Hunsagi",
    ],
    Vijayanagara: [
      "Hosapete",
      "Hagaribommanahalli",
      "Harapanahalli",
      "Hoovina Hadagali",
      "Kudligi",
      "Kotturu",
    ],
  };

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setTaluks(taluksData[district] || []);
  };

  const districts = Object.keys(taluksData);

  return (
    <>
      <body class="form-v10">
        <div class="page-content">
          <div class="form-v10-content">
            <form class="form-detail" action="#" method="post" id="myform">
              <div class="form-left">
                <h2>General Infomation</h2>
                <div class="form-row">
                  <select name="title">
                    <option value="" disabled selected>
                      Choose Prefix
                    </option>
                    <option class="option" value="businessman">
                      Mr.
                    </option>
                    <option class="option" value="reporter">
                      Ms.
                    </option>
                    <option class="option" value="secretary">
                      Mrs.
                    </option>
                  </select>
                  <span class="select-btn">
                    <i class="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>
                <div class="form-group">
                  <div class="form-row form-row-1">
                    <label>First Name:</label>

                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      class="input-text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div class="form-row form-row-2">
                    <label>Last Name:</label>

                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      class="input-text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-row form-row-1">
                    <label>Aadhar Number:</label>

                    <input
                      type="number"
                      name="aadhar_number"
                      id="aadhar_number"
                      class="input-text"
                      placeholder="Aadhar Number"
                      required
                    />
                  </div>
                  <div class="form-row form-row-2">
                    <label>Aadhar Copy:</label>

                    <input
                      type="file"
                      name="aadhar_cpy"
                      id="aadhar_copy"
                      class="input-text"
                      placeholder=""
                      accept=".jpg, .jpeg, .png, .pdf"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div class="form-row form-row-1">
                    <label>License Number:</label>

                    <input
                      type="text"
                      name="license_number"
                      id="license_number"
                      class="input-text"
                      placeholder="License Number"
                      required
                    />
                  </div>
                  <div class="form-row form-row-2">
                    <label>Father's Name:</label>

                    <input
                      type="text"
                      name="fathers_name"
                      id="fathers_name"
                      class="input-text"
                      placeholder="Father's Name"
                      required
                    />
                  </div>
                </div>

                <div className="form-row z-23">
                  <label>Date of Birth:</label>
                  <DatePicker
                    selected={dob}
                    onChange={(date) => setDOB(date)}
                    dateFormat="dd/MM/yyyy" // Set the date format to day/month/year
                    required // Make the field required
                  />
                </div>
                <div class="form-group">
                  <div className="form-row form-row-1">
                    <label htmlFor="blood_group">Blood Group:</label>
                    <select
                      name="blood_group"
                      id="blood_group"
                      className="blood_group"
                      required
                    >
                      <option value="" disabled selected>
                        Select Blood Group
                      </option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>

                  <div class="form-row form-row-2">
                    <label for="gender">Gender:</label>
                    <select name="gender" id="gender" required>
                      <option value="" disabled selected>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <span class="select-btn">
                      <i class="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-row form-row-1">
                    <label>Religion:</label>

                    <input
                      type="text"
                      name="religion"
                      id="religion"
                      class="input-text"
                      placeholder="Religion"
                      required
                    />
                  </div>

                  <div className="form-row form-row-2">
                    <label htmlFor="blood_group">Category:</label>
                    <select
                      name="category"
                      id="category"
                      className="category"
                      required
                    >
                      <option value="" disabled selected>
                        Select Category
                      </option>
                      <option value="GM">GM</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="Cat-1">Cat-1</option>
                      <option value="2A">2A</option>
                      <option value="2B">2B</option>
                      <option value="3A">3A</option>
                      <option value="3B">3B</option>
                      <option value="XMP">XMP</option>
                    </select>
                    <span class="select-btn">
                      <i class="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <div class="form-row form-row-1">
                    <label for="gender">Marital Status:</label>
                    <select name="marital" id="marital" required>
                      <option value="" disabled selected>
                        Marital Status
                      </option>
                      <option value="marital_yes">Yes</option>
                      <option value="marital_no">No</option>
                    </select>
                    <span class="select-btn">
                      <i class="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                  <div class="form-row form-row-2 z-20">
                    <label for="gender">Joining Date:</label>
                    <DatePicker
                      selected={joining}
                      onChange={(date) => setJoining(date)}
                      dateFormat="dd/MM/yyyy"
                      required
                    />
                  </div>
                </div>
                <div class="form-row form-row-1">
                  <label htmlFor="">Qualification:</label>
                  <input
                    type="text"
                    name="qualification"
                    class="qualification"
                    id="qualification"
                    placeholder="Qualification"
                    required
                  />
                </div>
              </div>

              <div class="form-right">
                <h2>Other Details</h2>

                {/* District */}
                <div className="form-row form-row-1">
                  <label htmlFor="district">Working District:</label>
                  <select
                    name="district"
                    id="district"
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    required
                  >
                    <option value="" disabled>
                      Select District
                    </option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                  <span class="select-btn">
                    <i class="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>

                <div className="form-row">
                  <label htmlFor="taluk" className="text-white">
                    Working Taluk:
                  </label>
                  <select name="taluk" id="taluk" required>
                    <option value="" disabled>
                      Select Taluk
                    </option>
                    {taluks.map((taluk) => (
                      <option key={taluk} value={taluk}>
                        {taluk}
                      </option>
                    ))}
                  </select>
                  <span class="select-btn">
                    <i class="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>

                <div class="form-row">
                  <input
                    type="text"
                    name="address"
                    class="street"
                    id="address"
                    placeholder="Permanent address"
                    required
                  />
                </div>

                <div class="form-group">
                  <div class="form-row form-row-1">
                    <input
                      type="text"
                      name="zip"
                      class="zip"
                      id="zip"
                      placeholder="Zip Code"
                      required
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-row form-row-1">
                    <input
                      type="text"
                      name="code"
                      class="code"
                      id="code"
                      placeholder="+91"
                      required
                    />
                  </div>
                  <div class="form-row form-row-2">
                    <input
                      type="text"
                      name="phone"
                      class="phone"
                      id="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div class="form-row">
                  <input
                    type="text"
                    name="your_email"
                    id="your_email"
                    class="input-text"
                    required
                    pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-row form-row-2">
                  <label>Passport size photo:</label>

                  <input
                    type="file"
                    name="photo_copy"
                    id="photo_copy"
                    class="input-text"
                    placeholder=""
                    accept=".jpg, .jpeg, .png, .pdf"
                    required
                  />
                </div>
                <div class="form-checkbox">
                  <label class="container">
                    <p>
                      I do accept the{" "}
                      <a href="#" class="text">
                        Terms and Conditions
                      </a>{" "}
                      of your site.
                    </p>
                    <input type="checkbox" name="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="form-row-last">
                  <input
                    type="submit"
                    name="register"
                    class="register"
                    value="Register"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
