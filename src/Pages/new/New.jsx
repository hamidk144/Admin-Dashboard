import "./New.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { serverTimestamp } from "firebase/firestore"; 
import { doc, setDoc, addDoc, collection } from "firebase/firestore"; 
import { db,auth, storage } from "../../firebase";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {} from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const New = ({ inputs,  type }) => {

  const [file, setFile] = useState("");
  const [usersdata, setUsersData] = useState({});
  const [productsData, setProductsData] = useState({});
  const [percent, setPercent] = useState(null);
 

  const navigate= useNavigate();
  
 

useEffect(()=>{


  const uploadFile = () => {
    const uniqueName= new Date().getTime() + file.name;
    const storageRef = ref(storage, uniqueName);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
uploadTask.on('state_changed', 
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPercent(progress);

    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setUsersData( (prev) => ({...prev, img: downloadURL,}) );
      setProductsData( (prev) => ({...prev, img: downloadURL,}) );
    
    });
  }
);
}
  file && uploadFile();

},[file])




const handleInput=(e)=>{
  const id= e.target.id;
  const value= e.target.value;
  setUsersData({...usersdata, [id]:value});
  setProductsData({...productsData, [id]:value})
  
}
  


  const handleUsersAdd= async(e)=>{  
    e.preventDefault();  
    try {
     const res= await createUserWithEmailAndPassword(auth, usersdata.email, usersdata.password)
     const docRef = await setDoc(doc(db, "users", res.user.uid), {
          ...usersdata,
          timeStamp: serverTimestamp(),
        });
        navigate(-1);
        alert('Successfully added')
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }


  
  const handleProductsAdd= async(e)=>{  
    e.preventDefault();  
    try {
      const docRef = await addDoc(collection(db, "products"), {
          ...productsData,
          timeStamp: serverTimestamp(),
        });
        navigate(-1);
        alert('Successfully added')
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  



  return (
    <div className="new">
     
      <Sidebar/>

      <div className="Main-content">

      <Navbar/>
        <div className="new-top">
          <h1>Add new {type}</h1>
        </div>
        <div className="new-bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={(type==='User')?handleUsersAdd:handleProductsAdd }>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input 
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={handleInput}
                   />
                </div>
              ))}
              <button disabled={percent != null && percent < 100} type="submit">Add</button>
              
            </form>
          </div>
        </div>
        </div>
    </div>
  );
};

export default New;