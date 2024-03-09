import React, { useState } from "react";
import './Password.css';
import img from './img/copy-icon-4803.png' // include image from img folder

const Password = () =>{
    // All useState use hear
    const [copyPassword,setCopyPassword] = useState('');
    const [passwordLength,setPasswordLength] = useState(8);
    const [upperCase,setUpperCase] = useState(true);
    const [lowerCase,setLowerCase] = useState(true);
    const [numbers,setNumbers] = useState(true);
    const [characters,setCharacters] = useState(true);


    // when user click on the generate password button
    const generateRandomPassword= () =>{
        let set = "";
        if(lowerCase){
            set += "abcdefghijklmnopqrstuvwxyz";
        }
        if(upperCase){
            set += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if(numbers){
            set += "0123456789";
        }
        if(characters){
            set += "!@#$%^&*()-_+=";
        }

        if(passwordLength >= 8){ // check if passwordLength is greater 8 then only give the new password 
            let newPassword = "";
            for( let i=0;i<passwordLength;i++){
                const calculate = Math.floor(Math.random() * set.length);
                newPassword += set[calculate];
            }
            setCopyPassword(newPassword);
        }
        else{
            alert("Length out of mentioned range")  // else show alert message
        }
    };

    const newCopyPassword = () =>{  // copy functionalitally use hear
        navigator.clipboard.writeText(copyPassword);
        alert("Password copied");
    };

    return(
        <>
           <div>
                <h1>Password Generator</h1>
                <div className="input_text_plus_copy_code_btn">
                    <input type="text" value={copyPassword}/>
                    <button onClick={newCopyPassword}>
                        <img src={img} alt="img-loading.." width={"23px"} height={"23px"}/>
                    </button>
                </div>
                <div className="length_character_plus_user_input">
                    <label>
                        Select Password length <strong>(**8-50 characters**)</strong>
                    </label>
                    <input min={8} max={50} type="number" value={passwordLength}
                    onChange={(event) => setPasswordLength(parseInt(event.target.value))}/>
                </div>

                <div className="checkbox_plus_generate_btn">
                    <input type="checkbox" checked={upperCase} onChange={() => setUpperCase(!upperCase)}/>
                    <label>Include Upper Case</label><br></br>
                    <input type="checkbox" checked={lowerCase} onChange={() => setLowerCase(!lowerCase)}/>
                    <label>Include Lower Case</label><br></br>
                    <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)}/>
                    <label>Include Numbers</label><br></br>
                    <input type="checkbox" checked={characters} onChange={() => setCharacters(!characters)}/>
                    <label>Include Symbols</label><br></br>
                    <button onClick={generateRandomPassword} className="backColor-blue">Generate Password</button>
                </div>
           </div>
        </>
    );
}

export default Password;