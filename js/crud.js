
var sitenameInput=document.getElementById("SiteName");
var siteURLInput=document.getElementById("urlSite");

var listSites=[];
if(JSON.parse(localStorage.getItem("sitesinformation:"))!==null){
    listSites=JSON.parse(localStorage.getItem("sitesinformation:"));
    diplaydata();

}
function Adddata(){
    if(validationsite() && validationUrl()){
        var list={
            name:sitenameInput.value,
            vist:siteURLInput.value,
        };
        listSites.push(list);
        localStorage.setItem("sitesinformation:",JSON.stringify(listSites))
        diplaydata();
        clearform();
        console.log(listSites)
    }
    else{
        Swal.fire({
            title:"Sorry Try again!",
            showCloseButton: true,
            html:`
                <p style="font-weight: bolder;font-size:1.2rem; color:black;text-align: left;font-family:"PT Sans Caption", serif;">Site Name or Url is not valid, Please follow the rules below:</p>
                <p style="font-weight:500;color:black;text-align: left;"><i class="fa-solid fa-arrow-right" style="color: #f46b62; "></i> Site name must contain at least 3 characters</p>
                <p style="font-weight:500;color:black;text-align: left;"><i class="fa-solid fa-arrow-right" style="color: #f46b62; "></i> Site URL must be a valid one</p>
            `,
            icon: "error"
        });
    }
   
}
function clearform(){
    sitenameInput.value="";
    siteURLInput.value="";
}
function diplaydata(){
    var balckbox="";
    for(var i=0;i<listSites.length;i++){
        balckbox+=`
        <tr>
            <th scope="row">${i+1}</th>
            <td>${listSites[i].name}</td>
            <td><button type="button" onclick="visitsite('${listSites[i].vist}')" class="btn btn-success  px-3"><i class="fa-solid fa-eye" style="color: #ffffff;margin-right:.3rem;"></i>Visit</button></td>
            <td><button type="button"onclick="deletedata(${i})" class="btn btn-danger text-white px-3"><i class="fa-regular fa-trash-can" style="color: #ffffff;margin-right:.3rem;"></i>Delete</button></td>
        </tr>
        ` 
    }
    document.getElementById("table").innerHTML=balckbox;
}
function deletedata(i){
    listSites.splice(i,1)
    diplaydata();

}
function visitsite(visit){
    window.open(visit, "_blank")
}

function validationsite(){
    var regex=/^([a-zA-Z0-9@:%._\+~#=]{3,30})$/
    var text=sitenameInput.value;
    
    if(regex.test(text)){


        sitenameInput.classList.add("is-valid");
        sitenameInput.classList.remove("is-invalid");
        return true
    }
    else{
        sitenameInput.classList.add("is-invalid");
        sitenameInput.classList.remove("is-valid");
        return false
    }

}
function validationUrl(){
    var regex=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    var text=siteURLInput.value;
    
    if(regex.test(text)){


        siteURLInput.classList.add("is-valid");
        siteURLInput.classList.remove("is-invalid");
        return true
    }
    else{
        siteURLInput.classList.add("is-invalid");
        siteURLInput.classList.remove("is-valid");
        
        return false
    }

}


