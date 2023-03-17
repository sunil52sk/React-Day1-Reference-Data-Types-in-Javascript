function Test(){
        let myobject={name:"Madras"};
        let newobject=myobject;
        myobject="Chennai";
        let vowelArray=["a","e","i","o"];
        let newArray=vowelArray;
        vowelArray.push("u");
        console.log(vowelArray);
        console.log(newArray);
        const hi=()=>{alert("Check the console output")};
        return <div><button onClick={hi}> Reference Data Types and call the function </button></div>;
}
ReactDOM.render(<Test/>,document.getElementById('mydiv'));