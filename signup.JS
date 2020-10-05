
const App = {
    dangKi: function(){
        let get_dangkhingay = document.querySelector(".dangkingay")
        get_dangkhingay.addEventListener("click",this.dangkingay)
    },
    addRecord : function(){
        console.log("đăng kí")
        let result = UIcontroler.getInputFromUI()
        if(result!==undefined){
            localStorage.setItem("result",JSON.stringify(result))
            console.log(JSON.parse(localStorage.getItem("result")))
            let htmlRaw =`<table border="0px" class="bangdangnhap"  cellpandding ="0" cellspacing = "0">
            <tr style="background-color: aquamarine;">
                <td align="center"><p>Đăng Nhập Tài Khoản</p></td>
            </tr>
            <tr style="background-color: beige;">
                <td align="center" ><input type="text" name="username" class="username" placeholder="Nhập username"></td>
            </tr>
            <tr style="background-color: beige;">
                <td align="center"><input type="password" name="password" class="password" placeholder="Nhập mật khẩu"></td>
            </tr>
            <tr style="background-color: beige;">
                <td align="center"><input type="button" name="dangnhap" class="dangnhap" value="Đăng Nhập" onclick="App.addRecordDN()"></td>
            </tr>
            <tr style="background-color: beige;">
                <td align="center"><p>Bạn đã có tài khoản chưa ? <p class="dangkingay" onclick="UIcontroler.UIdangki()"> Đăng kí ngay</p></p></td>
            </tr>
        </table>`
        let get_all =document.querySelector(".all")
        get_all.insertAdjacentHTML("beforeend",htmlRaw)
        let get_bangdangki =document.querySelector(".bangDangKi")
        get_bangdangki.parentElement.removeChild(get_bangdangki)    
        alert("Đăng kí tài khoản Thành Công")  
        let taikhoanmoi = result
        localStorage.setItem("taikhoanmoi",JSON.stringify(taikhoanmoi))
        }
    },
    dangkingay: function(){
        console.log("1")
        UIcontroler.UIdangki()
    },
    addRecordDN:function(){
        let resultDN = UIcontroler.getInputFromUIDN()
        console.log(resultDN)
        let DATA = JSON.parse(localStorage.getItem("DATA"))
        console.log(DATA.user.length)
        console.log("tài khoản mới")
        console.log(JSON.parse(localStorage.getItem("taikhoanmoi")))
        let taikhoanmoi=JSON.parse(localStorage.getItem("taikhoanmoi"))
        for(let i = 0 ; i< DATA.user.length ;i++){
            if(DATA.user[i].username != resultDN.username && DATA.user[i].password != resultDN.password){
                console.log("Tài khoản hoặc mật khẩu sai")
                alert("Tài khoản mật khẩu sai")
                document.querySelector(".password").value=""
            }
            if(DATA.user[i].username==resultDN.username && DATA.user[i].password==resultDN.password){
                console.log("Đăng nhập thành công")
                let online = DATA.user[i]
                localStorage.setItem("online",JSON.stringify(online))
                location.assign("index.html")
            }else if(taikhoanmoi.username==resultDN.username && taikhoanmoi.password==resultDN.password){
                let online = taikhoanmoi
                localStorage.setItem("online",JSON.stringify(online))
                location.assign("index.html")
            }else{
                console.log("Tài khoản hoặc mật khẩu sai")
            }
        }
    }
}
let bl = 0;
const UIcontroler = {
    getInputFromUIDN:function(){
        let name = document.querySelector(".username").value
        let pass = document.querySelector(".password").value
        let resultdn = {
            username:name,
            password:pass
        }
        return  resultdn
    },
    getInputFromUI:function(){
        let accname =document.querySelector(".tenTaiKhoan").value
        let hoTen = document.querySelector(".hoTen").value
        let sdt = document.querySelector(".sdt").value
        let mk = document.querySelector(".nhapMatKhau").value
        if(accname===""||hoTen===""||sdt===""||mk===""){
           if(bl==0){
           let htmlRaw =`<td align="center" style="background-color: white;"><p style="color: red;" class="erro1">Chưa điềm đủ thông tin</p></td>`
           let lay_erro = document.querySelector(".erro")
           lay_erro.insertAdjacentHTML("beforebegin",htmlRaw)
           bl=1
           }
        }else{
        let result = {
            username : accname,
            name :hoTen ,
            phone : sdt,
            password:mk,        
        }
        return result
        }
    },
    UIdangki:function(){
        let htmlRaw=`<table border="0px" class="bangDangKi" width="800px" height="600px" cellpandding ="0" cellspacing = "0">
        <tr style="background-color: rgb(3, 82, 82); color:white;text-align: center;">
            <td> Đăng Kí Tài Khoản</td>
        </tr>
        <tr>
            <td align="center" style="background-color:white;"><input type="text" name="tenTaiKhoan" placeholder="Nhập Tên Tài Khoản" class="tenTaiKhoan"></td>
        </tr>
        <tr>
            <td align="center" style="background-color: white;"><input type="text" name="hoTen" placeholder="Nhập Họ Tên" class="hoTen"></td>
        </tr>
        <tr>
            <td align="center"  style="background-color: white;"><input type="text" name="sdt" class="sdt" placeholder="Nhập Số Điện Thoại"></td>
        </tr>
        <tr>
            <td align="center" style="background-color: white;"><input type="text" name="nhapMatKhau" placeholder="Nhập Mật Khẩu" class="nhapMatKhau"></td>
        </tr>
        <tr  height="5px" class="erro" > 
            <td style="background-color: white;"></td>
        </tr>
        <tr>
            <td colspan="2" align="center" style="background-color:white;"><input type="button" name="dangKi" class="dangKi" value="Đăng Kí" onclick="App.addRecord()"></td>
        </tr>
    </table>`
        let get_all =document.querySelector(".all")
        get_all.insertAdjacentHTML("beforeend",htmlRaw)
        let get_bangdangnhap = document.querySelector(".bangdangnhap")
        get_bangdangnhap.parentElement.removeChild(get_bangdangnhap)
    }
}
App.dangKi()
// function dieu_huong(){
//     location.assign("");
// }