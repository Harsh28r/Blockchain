import React, { useState, useContext, useRef } from "react";
// import Pdf from "react-to-pdf";
// import BlockchainContext from "../context/BlockChainContext";
// import QrReader from "react-qr-reader";
// import { sha256 } from "js-sha256";

// reactstrap components
import {
  Button,
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  UncontrolledTooltip,
  Badge,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import ProfilePageHeader from "components/profilePageHeader";
// import GetDistance from "components/GetDistance.js";
// import GetInfoFromAadhar from "components/AadharApi.js";
// import SendEmail from "components/SendEmail.js";
// import globalContext from "../context/GlobalContext";

const ref = React.createRef();
function HospitalHome() {
//   const { web3, accounts, contract } = useContext(BlockchainContext);
//   const { user } = useContext(globalContext);

  // const [pills, setPills] = React.useState("2");

  const [bloodToBeSearched, setBloodToBeSearched] = useState({
    selectedBloodGroup: "select",
    name: "",
  });

//   const [hid, setHid] = useState(
//     {
//       den: false,
//     },
//     []
//   );

//   const [modal1, setModal1] = React.useState(false);
//   const [bloodbankCord, updateBloodbankCord] = useState();

//   const reader = useRef(null);
//   const [code, setCode] = useState("");
//   const [hash, setHash] = useState();
//   const [loading, setLoading] = useState(false);

//   const handleScan = (data) => {
//     setCode(data);
//     console.log("data", data);
//     // reader.current.reader.result
//     console.log("data", reader.current.reader.result);
//     console.log("blooToBeSearched", bloodToBeSearched);
//     var h = bloodToBeSearched.adharNo
//       .replaceAll(" ", "")
//       .concat(bloodToBeSearched.bloodId)
//       .concat(bloodToBeSearched.batchNo);
//     console.log("h", h);
//     setHash(sha256(h));
//     console.log("hash", hash);
//     console.log("code", code);
//     // alert(code)
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   const openImageDialog = () => {
//     reader.current.openImageDialog();
//   };

//   //----------------------------

//   React.useEffect(() => {
//     document.body.classList.add("profile-page");
//     document.body.classList.add("sidebar-collapse");
//     document.documentElement.classList.remove("nav-open");
//     window.scrollTo(0, 0);
//     document.body.scrollTop = 0;
//     return function cleanup() {
//       document.body.classList.remove("profile-page");
//       document.body.classList.remove("sidebar-collapse");
//     };
//   }, []);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setBloodToBeSearched((preVal) => {
//       return {
//         ...preVal,
//         [name]: value,
//       };
//     });
//   };

//   const dummy_search = async (e) => {
//     // to be deleted
//     e.preventDefault();
//     setLoading(true);

//     var b_count = await contract.methods.getBloodCount().call();
//     var temp_dict_1 = {};
//     var nearest = "";
//     var temp_loc = "";

//     console.log("Finding Nearest");
//     for (let i = 1; i <= b_count; ++i) {
//       const tag = await contract.methods.getBlood(i).call();
//       const tag1 = await contract.methods.getBlood2(i).call();
//       const tag2 = await contract.methods.getStatus(i, tag1["1"]).call();

//       if (
//         bloodToBeSearched.selectedBloodGroup === tag["4"] &&
//         tag2["2"].toString().toLowerCase().includes("blood") &&
//         tag2["3"].toString() === "1"
//       ) {
//         //checking blood bank hi hai na 👆
//         // hospital ka dist -> user.location
//         // bb ka loc -> tag2['1']

//         temp_dict_1[tag2["2"].trim()] = [
//           tag2["1"], //string containaing lat long
//           (temp_dict_1[tag2["2"].trim()] || [0, 0])[1] + 1, //bld count
//         ];
//       }
//     }

//     var temp_arr_1 = [];
//     for (let key in temp_dict_1) {
//       let gd = GetDistance(
//         parseFloat(user.location.split(",")[0]),
//         parseFloat(temp_dict_1[key][0].split(",")[0]),
//         parseFloat(user.location.split(",")[1]),
//         parseFloat(temp_dict_1[key][0].split(",")[1])
//       );
//       if (temp_dict_1[key][1] > 0) {
//         temp_arr_1.push([
//           gd, //dist
//           temp_dict_1[key][1], // bld count
//           temp_dict_1[key][0], // loc as a string
//           key, // name of bb
//         ]);
//       }
//     }

//     temp_arr_1.sort(function (a, b) {
//       let x = a[0] / a[1],
//         y = b[0] / b[1];
//       return x === y ? (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]) : x - y;
//     });

//     if (temp_arr_1[0]) {
//       nearest = temp_arr_1[0][3];
//       temp_loc = temp_arr_1[0][2];
//       updateBloodbankCord(temp_arr_1[0][2]); // save blood bank cordinates for further use like map
//       const bb_em_1 = await contract.methods
//         .getemail(nearest.toString())
//         .call();
//       console.log(
//         "finally",
//         temp_arr_1,
//         nearest,
//         temp_loc,
//         bloodbankCord,
//         bb_em_1
//       );
//     } else {
//       setLoading(false);
//       alert("Blood Not Found");
//       return;
//     }

//     setLoading(false);
//   };

//   const search = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     if (bloodToBeSearched.selectedBloodGroup !== "select") {
//       // 1.1 . search for nearest blood banks
//       var b_count = await contract.methods.getBloodCount().call();
//       var temp_dict_1 = {};
//       var nearest = "";
//       var temp_loc = "";
//       var bloodToBeSearched_copy = {};

//       console.log("Finding Nearest");
//       for (let i = 1; i <= b_count; ++i) {
//         const tag = await contract.methods.getBlood(i).call();
//         const tag1 = await contract.methods.getBlood2(i).call();
//         const tag2 = await contract.methods.getStatus(i, tag1["1"]).call();

//         if (
//           bloodToBeSearched.selectedBloodGroup === tag["4"] &&
//           tag2["2"].toString().toLowerCase().includes("blood") &&
//           tag2["3"].toString() === "1"
//         ) {
//           //checking blood bank hi hai na 👆
//           // hospital ka dist -> user.location
//           // bb ka loc -> tag2['1']

//           temp_dict_1[tag2["2"].trim()] = [
//             tag2["1"], //string containaing lat long
//             (temp_dict_1[tag2["2"].trim()] || [0, 0])[1] + 1, //bld count
//           ];
//         }
//       }

//       var temp_arr_1 = [];
//       for (let key in temp_dict_1) {
//         let gd = GetDistance(
//           parseFloat(user.location.split(",")[0]),
//           parseFloat(temp_dict_1[key][0].split(",")[0]),
//           parseFloat(user.location.split(",")[1]),
//           parseFloat(temp_dict_1[key][0].split(",")[1])
//         );
//         if (temp_dict_1[key][1] > 0) {
//           temp_arr_1.push([
//             gd, //dist
//             temp_dict_1[key][1], // bld count
//             temp_dict_1[key][0], // loc as a string
//             key, // name of bb
//           ]);
//         }
//       }

//       temp_arr_1.sort(function (a, b) {
//         let x = a[0] / a[1],
//           y = b[0] / b[1];
//         return x === y ? (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]) : x - y;
//       });

//       if (temp_arr_1[0]) {
//         nearest = temp_arr_1[0][3];
//         temp_loc = temp_arr_1[0][2];
//         updateBloodbankCord(temp_arr_1[0][2]); // save blood bank cordinates for further use like map
//         const bb_em_1 = await contract.methods
//           .getemail(nearest.toString())
//           .call();
//         console.log(
//           "finally",
//           temp_arr_1,
//           nearest,
//           temp_loc,
//           bloodbankCord,
//           bb_em_1
//         );
//       } else {
//         setLoading(false);
//         alert("Blood Not Found");
//         return;
//       }

//       // 1.2 getting info about required blood from blood bank
//       console.log("searching");
//       var flag = false;
//       for (let i = 1; i <= b_count; ++i) {
//         const tag = await contract.methods.getBlood(i).call();
//         const tag1 = await contract.methods.getBlood2(i).call();
//         const tag2 = await contract.methods.getStatus(i, tag1["1"]).call();
//         if (
//           tag2["2"].trim().toLocaleLowerCase() ===
//             nearest.trim().toLocaleLowerCase() &&
//           tag["4"] === bloodToBeSearched.selectedBloodGroup &&
//           tag2["3"] === "1"
//         ) {
//           flag = true;
//           var temp = {
//             index_of_blood_to_be_transferred: i,
//             bloodId: tag["0"],
//             batchNo: tag["1"],
//             email: GetInfoFromAadhar(tag["2"])["Email"],
//             name: GetInfoFromAadhar(tag["2"])["Name"],
//             adharNo: tag["2"],
//             bloodGroup: tag["4"],
//             age: GetInfoFromAadhar(tag["2"])["Age"] + " Years",
//             verified: tag2["3"],
//             collectionDate: new Date(1000 * tag2["0"])
//               .toLocaleString("en-GB")
//               .split(" ")[0]
//               .replaceAll("/", " / "),
//             expiryDate: tag["5"].replaceAll("/", " / "),
//             currentBloodBank: tag2["2"],
//             selectedBloodGroup: bloodToBeSearched.selectedBloodGroup,
//           };
//           bloodToBeSearched_copy = temp;
//           setBloodToBeSearched(temp);

//           console.log(`${JSON.stringify(bloodToBeSearched_copy)}`);
//         }
//       }
//       if (!flag) {
//         alert("Blood Not Found");
//         setLoading(false);
//         return;
//       } else {
//         // 1.3. transfer the selected blood
//         console.log("transferring");
//         console.log(`${JSON.stringify(bloodToBeSearched)}`);
//         try {
//           var info = await contract.methods
//             .transferAsset(
//               bloodToBeSearched_copy["index_of_blood_to_be_transferred"], //index_of_blood_to_be_transferred
//               bloodToBeSearched_copy["currentBloodBank"], //blood bank name
//               bloodToBeSearched_copy["verified"],
//               user.location, //hospital cordinates
//               user.name //hospital name
//             )
//             .send({ from: accounts[0] })
//             .then(() => {
//               return;
//             });
//           console.log(info);

//           // 1.4. Hospitals would be notified of this transfer and asked to collect the blood physically
//           console.log("sending email");
//           var email_data = {
//             to_email: user.email,
//             subject: `Blood received virtually`,
//             blood_bank: bloodToBeSearched_copy["currentBloodBank"],
//             body: `<html>This is to notify <b>${user.name}</b> that <b>${bloodToBeSearched_copy["bloodGroup"]}</b> blood with Id = <b>${bloodToBeSearched_copy["bloodId"]}</b> and Batch No. = <b>${bloodToBeSearched_copy["batchNo"]}</b> was transferred to you virtually<br></br>You can now collect it from our Blood bank. Thank you!</html>`,
//           };
//           SendEmail(email_data);

//           // send email to blood bank
//           console.log("sending email 2");
//           const bb_em_1 = await contract.methods
//             .getemail(nearest.toString())
//             .call();
//           var email_data_2 = {
//             to_email: bb_em_1, // jisse blood aya vo
//             subject: `Blood Received Virtually`,
//             blood_bank: user.name,
//             body: `<html>This is to notify <b>${nearest}</b> that <b>${bloodToBeSearched_copy["bloodGroup"]}</b> blood with Id = <b>${bloodToBeSearched_copy["bloodId"]}</b> and Batch No. = <b>${bloodToBeSearched_copy["batchNo"]}</b> was transferred to from your bloodbank virtually to ${user.name}<br></br>The arrival of the hospital staff for collecting blood packets is expected soon.</html>`,
//           };
//           SendEmail(email_data_2);

//           // 1.5. Once blood is received at the hospital it should be verified with the help of hash

//           // 2.1. check if blood is scarce
//           var bld_dict = {
//             "A +ve": 0,
//             "A -ve": 0,
//             "B +ve": 0,
//             "B -ve": 0,
//             "O +ve": 0,
//             "O -ve": 0,
//             "AB +ve": 0,
//             "AB -ve": 0,
//           };
//           console.log("in 2.1");
//           var bg_dist_and_bg_count = {};
//           for (let i = 1; i <= b_count; ++i) {
//             const tag = await contract.methods.getBlood(i).call();
//             const tag1 = await contract.methods.getBlood2(i).call();
//             const tag2 = await contract.methods.getStatus(i, tag1["1"]).call();
//             if (
//               bloodToBeSearched.selectedBloodGroup === tag["4"] &&
//               tag2["2"].toLowerCase().trim() !== nearest.toLowerCase().trim() &&
//               tag2["3"].toString() === "1" &&
//               tag2["2"].toString().toLowerCase().includes("blood")
//             ) {
//               bg_dist_and_bg_count[tag2["2"].trim()] = [
//                 GetDistance(
//                   parseFloat(temp_loc.split(",")[0]),
//                   parseFloat(tag2["1"].split(",")[0]),
//                   parseFloat(temp_loc.split(",")[1]),
//                   parseFloat(tag2["1"].split(",")[1])
//                 ),
//                 (bg_dist_and_bg_count[tag2["2"].trim()] || [0, 0])[1] + 1,
//               ];
//             }
//             if (
//               nearest.toLowerCase().trim() === tag2["2"].toLowerCase().trim()
//             ) {
//               bld_dict[tag["4"]] = bld_dict[tag["4"]] + 1;
//             }
//           }

        //   var nearest_bb_sorted = [];
        //   for (var arr in bg_dist_and_bg_count) {
        //     if (bg_dist_and_bg_count[arr][1] >= 2) {
        //       // for count greater than 2
        //       nearest_bb_sorted.push([
        //         bg_dist_and_bg_count[arr][0],
        //         bg_dist_and_bg_count[arr][1],
        //         arr,
        //       ]);
        //     }
        //   }

        //   console.log("nearest_bb_sorted bef srt", nearest_bb_sorted);

        //   nearest_bb_sorted.sort(function (a, b) {
        //     let x = a[0] / a[1],
        //       y = b[0] / b[1];
        //     return x === y
        //       ? a[0] === b[0]
        //         ? b[1] - a[1]
        //         : a[0] - b[0]
        //       : x - y;
        //   });

        //   console.log("nearest_bb_sorted after srt", nearest_bb_sorted);

        //   if (
        //     bld_dict[bloodToBeSearched.selectedBloodGroup] <= 0 &&
        //     nearest_bb_sorted.length !== 0
        //   ) {
        //     for (let i = 1; i <= b_count; ++i) {
        //       const tag = await contract.methods.getBlood(i).call();
        //       const tag1 = await contract.methods.getBlood2(i).call();
        //       const tag2 = await contract.methods
        //         .getStatus(i, tag1["1"])
        //         .call();
        //       // 2.2 blood bank to blood bank transfer
        //       if (
        //         nearest_bb_sorted[0][2].toLowerCase().trim() ===
        //           tag2["2"].toLowerCase().trim() &&
        //         bloodToBeSearched.selectedBloodGroup === tag["4"]
        //       ) {
        //         try {
        //           var info2 = await contract.methods
        //             .transferAsset(
        //               i, //index_of_blood_to_be_transferred
        //               tag2["2"], //blood bank name
        //               tag2["3"],
        //               temp_loc, //curr bb cordinates
        //               nearest //bb name
        //             )
        //             .send({ from: accounts[0] });
        //           console.log(info2);

        //           // 2.3 both BB would be notified of this transfer and asked to collect the blood physically
        //           console.log("sending email 3");
        //           const bb_em_2 = await contract.methods
        //             .getemail(nearest.toString())
        //             .call();
        //           var email_data_3 = {
        //             to_email: bb_em_2, // jiska scare hai vo
        //             subject: `Blood Received Virtually`,
        //             blood_bank: tag2["2"],
        //             body: `<html>This is to notify <b>${nearest},</b> that <b>${tag["4"]}</b> blood with Id = <b>${tag["0"]}</b> and Batch No. = <b>${tag["1"]}</b> was transferred to you virtually<br></br>You can now collect it from our Blood bank. Thank you!</html>`,
        //           };
        //           SendEmail(email_data_3);

        //           console.log("sending email 4");
        //           const bb_em_3 = await contract.methods
        //             .getemail(tag2["2"].toString())
        //             .call();
        //           var email_data_4 = {
        //             to_email: bb_em_3, // jisne blood diya vo
        //             subject: `Blood sent virtually`,
        //             blood_bank: nearest,
        //             body: `<html>This is to notify <b>${tag2["2"]}</b> that <b>${tag["4"]}</b> blood with Id = <b>${tag["0"]}</b> and Batch No. = <b>${tag["1"]}</b> was transferred virtually to <b>${nearest}</b>. <br></br> You can expect them to arrive at your Blood bank to collect it. Thank you!</html>`,
        //           };
        //           SendEmail(email_data_4);

        //           setHid({ den: false });
        //           setModal1(true);
        //           setLoading(false);
        //           return;
        //         } catch (err) {
        //           setLoading(false);
        //           console.log("Error in BB to BB Transfer function", err);
        //         }
        //       }
        //     }
        //   }
        // } catch (err) {
        //   setLoading(false);
        //   console.log("Error in Transfer function", err);
        //   return;
        // }

    //     setHid({ den: false });
    //     setLoading(false);
    //     setModal1(true);
    //     // add to blockchain
    //   }
    // } else {
    //   alert(`${"Please Select a Blood Group"}`);
    // }
//   }
     return (
        <>
         <ExamplesNavbar urlname="hhome" />
         <div className="wrapper">
        <ProfilePageHeader
        //   name={user.name.toUpperCase()}
        //   address={user.add}
          bloodcount={{}}
        />
        <div className="section">
          <Container>
            <div className="button-container row justify-content-center">
              <Button
                className="btn-round"
                color="info"
                size="lg"
                id="emailtooltip"
              >
                {/* {user.email} */}Hospital@gmail.com
              </Button>
              <UncontrolledTooltip delay={0} target="emailtooltip">
                Email us here
              </UncontrolledTooltip>
              <div className="mx-2"></div>
              <Button
                className="btn-round"
                color="info"
                size="lg"
                id="phonetooltip"
              >
                {/* {user.no} */} +91 7822952756
              </Button>
              <UncontrolledTooltip delay={0} target="phonetooltip">
                Call us here
              </UncontrolledTooltip>
              <div className="mx-2"></div>
              <Button
                className="btn-round"
                color="info"
                size="lg"
                id="addresstooltip"
              >
                {/* {user.add} */}
                Sfit Hospital , Borivali
              </Button>
              <UncontrolledTooltip delay={0} target="addresstooltip">
                Visit us here
              </UncontrolledTooltip>
            </div>

            <div className="section section-contact-us text-center">
              <Container>
                <h2 className="title">Ask for Blood</h2>
                <p className="description">
                  let us find an optimal blood bank for your patient
                </p>
                <Row>
                  <Col
                    className="text-center ml-auto mr-auto mt-4"
                    lg="6"
                    md="8"
                  >
                    <div
                      className="p-2"
                      style={{
                        borderBottomLeftRadius: "50px",
                        borderTopLeftRadius: "50px",
                        borderBottomRightRadius: "50px",
                        borderTopRightRadius: "50px",
                        borderStyle: "solid",
                        borderColor: " rgb(219, 219, 219)",
                        borderWidth: "1px",
                      }}
                    >
                      <label>
                        Blood Group of Patient :
                        <select
                          className="ml-5"
                          name="selectedBloodGroup"
                          value={bloodToBeSearched.selectedBloodGroup}
                        //   onChange={handleChange}
                        >
                          <option value="select">Select</option>
                          <option value="A +ve">A +ve</option>
                          <option value="A -ve">A -ve</option>
                          <option value="B +ve">B +ve</option>
                          <option value="B -ve">B -ve</option>
                          <option value="O +ve">O +ve</option>
                          <option value="O -ve">O -ve</option>
                          <option value="AB +ve">AB +ve</option>
                          <option value="AB -ve">AB -ve</option>
                        </select>
                      </label>
                    </div>
                    <div className="send-button">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        // onClick={dummy_search}
                        // onClick={search}
                        size="lg"
                      >
                        searching...
                        {/* {!loading ? "Search for Blood" : "Searching ..."} */}
                      </Button>
                      </div>
                    
                    </Col>
                 </Row>
                       
                    </Container>
                    </div>
              </Container>
           </div>
          </div>



     
    </>
  );
}

export default HospitalHome;
