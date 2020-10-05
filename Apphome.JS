let bl = 0;
const App = {
    start:function(){
        let get_search = document.querySelector(".btn")
        get_search.addEventListener("click",this.search)
    },
    search:function(){
        if(bl==1){
        let count = 0;
        window.scrollTo(0,document.querySelector(".ftco-footer").scrollHeight);
        console.log("tìm kiếm")
        let get_tr_search =document.querySelector(".tr_search")
        let get_ketqua = document.querySelector(".ketqua")
        console.log(get_ketqua.hasChildNodes())
        if(get_ketqua.hasChildNodes()){
        get_tr_search.parentElement.removeChild(get_tr_search)
        get_ketqua.insertAdjacentHTML("beforeend",`<tr class="tr_search"></tr>`)
        }
        let get_form_control = document.querySelector(".form-control")
        console.log(get_form_control.value)
        for(let i = 0 ; i < DATA.tags.length ; i++){
            let idPersona ;
            for(let j = 0 ; j < DATA.persona.length ;j++){
                if(get_form_control.value === DATA.persona[j].name){
                    idPersona =  DATA.persona[j].id
                }
            }
            console.log( DATA.tags[1].persona.length)
            console.log(idPersona)
            for(let k = 0; k < DATA.tags[i].persona.length ; k++){
                console.log(DATA.tags[i].persona[k])
                if(idPersona == DATA.tags[i].persona[k]){
                    console.log("Đã vào")
                    let htmlRaw = `<td align="center"height="300px" width="350px" class="cot">
                    <img  width="280px" src="images/Lăng Bác.jpg" alt="" class="anh" >
                    <div class="color"></div>
                    <p class="mota">Lăng Bác <br>Lăng Chủ tịch Hồ Chí Minh, hay còn gọi là Lăng Hồ Chủ tịch, Lăng Bác, là nơi đặt thi hài Hồ Chí Minh. Lăng Chủ tịch Hồ Chí Minh được chính thức khởi công ngày 2 tháng 9 năm 1973...</p>
                     </td> `;
                     let nameLocation ;
                     let motaLocation;
                     console.log("Độ dài mảng: "+DATA.location.length )
                     for( let h = 0 ; h < DATA.location.length ; h++){
                          console.log(DATA.tags[i].location+" So Sánh "+DATA.location[h].id)
                           if(DATA.tags[i].location == DATA.location[h].id){
                               nameLocation=DATA.location[h].name
                               motaLocation=DATA.location[h].moTa
                           }
                     }
                    console.log(nameLocation)
                    htmlRaw=htmlRaw.replace("Lăng Bác",nameLocation)
                    htmlRaw=htmlRaw.replace("Lăng Bác <br>Lăng Chủ tịch Hồ Chí Minh, hay còn gọi là Lăng Hồ Chủ tịch, Lăng Bác, là nơi đặt thi hài Hồ Chí Minh. Lăng Chủ tịch Hồ Chí Minh được chính thức khởi công ngày 2 tháng 9 năm 1973...",motaLocation)
                    let bangSreach = document.querySelector(".tr_search")
                    bangSreach.insertAdjacentHTML("beforeend",htmlRaw)
                    count ++;
                }
            }
        }
        if(count==0){
            let bangSreach = document.querySelector(".tr_search")
            bangSreach.insertAdjacentHTML("beforeend","Không tìm thấy kết quả")
        }
    }else{
        window.scrollTo(0,document.querySelector(".ftco-footer").scrollHeight);
        console.log("hãy đăng nhập")
        let get_tr_search =document.querySelector(".tr_search")
        let get_ketqua = document.querySelector(".ketqua")
        get_tr_search.parentElement.removeChild(get_tr_search)
        get_ketqua.insertAdjacentHTML("beforeend",`<tr class="tr_search"></tr>`)
        let bangSreach = document.querySelector(".tr_search")
        bangSreach.insertAdjacentHTML("beforeend","Xin hãy đăng nhập")
    }
}
}
App.start()
const UIcontroler = {
    online:function(){
        if(online){
            bl=1;
            let nav_link = document.querySelector(".nav-link")
            nav_link.parentElement.removeChild(nav_link)
            let rawHtml =`<p href="" class="nav-link">Đăng nhập</p><a href="index.html"  class="nav-link">Đăng xuất</a>`
            console.log(online)
            rawHtml=rawHtml.replace("Đăng nhập","Xin chào "+online.name)
            console.log(rawHtml)
            let nav_item = document.querySelector(".nav-item")
            nav_item.insertAdjacentHTML("beforeend",rawHtml)
            let taikhoanmoi = JSON.parse(localStorage.getItem("taikhoanmoi"))
            taikhoanmoi.id = DATA.user.length
            DATA.user.push(taikhoanmoi)
            localStorage.setItem("taikhoanmoi",JSON.stringify(null))
            console.log("tài khoản hiện tại")
            console.log(DATA.user)
        }
    }
}
let DATA = {
    user:[],
    location:[
        hoHoanKiem = {
            id:0,
            name:"Hồ Hoàn Kiếm",
            moTa:"Hồ Hoàn Kiếm <br> Hồ Hoàn Kiếm còn được gọi là Hồ Gươm, là một hồ nước ngọt tự nhiên nằm ở trung tâm thành phố Hà Nội. Hồ có diện tích khoảng 12 ha."
        },
        phoCo = {
            id:1,
            name:"Phố Cổ",
            moTa:"Phố Cổ <br> Phố cổ Hà Nội nằm ở phía Tây và Bắc của hồ Hoàn Kiếm gồm 36 phố phường, mỗi phố lại tập trung bán một mặt hàng khác nhau."
        },
        hoTay = {
            id:2,
            name:"Hồ Tây",
            moTa:"Hồ Tây <br> Hồ Tây trước đây còn có các tên gọi khác như Đầm Xác Cáo, Hồ Kim Ngưu, Lãng Bạc, Dâm Đàm, Đoài Hồ, là một hồ nước tự nhiên lớn nhất ở nội thành thủ đô Hà Nội, nằm ở quận Tây Hồ."
        },
        langBac = {
            id:3,
            name:"Lăng Bác",
            moTa:"Lăng Bác <br>Lăng Chủ tịch Hồ Chí Minh, hay còn gọi là Lăng Hồ Chủ tịch, Lăng Bác, là nơi đặt thi hài Hồ Chí Minh. Lăng Chủ tịch Hồ Chí Minh được chính thức khởi công ngày 2 tháng 9 năm 1973..."
        }
    ],
    tags:[
        tgas0 = {
            id:0,
            location:0,
            persona:[2,3,6]
        },
        tgas1 = {
            id:1,
            location:1,
            persona:[2,3,5]
        },
        tgas2 = {
            id:2,
            location:2,
            persona:[5,6]
        },
        tags3 = {
            id:3,
            location:3,
            persona:[3,2]
        }
    ],
    persona: [
        soiNoi = {
            id:0,
            name:"Sôi Nổi"
        },
        nangDong = {
            id:1,
            name:"Năng Động"
        },
        gianDi = {
            id:2,
            name:"Giản Dị"
        },
        hoaiCo = {
            id:3,
            name:"Hoài Cổ"
        },
        manhMe = {
            id:4,
            name:"Mạnh Mẽ"
        },
        khamPha = {
            id:5,
            name:"Khám Phá"
        },
        langMang = {
            id:6,
            name:"Lãng Mạng"
        }
    ],
}
let user1 = {
    id:0,
    username:"nva",
    name:"nguyễn văn A",
    phone:"091234567",
    password:12345
}
DATA.user.push(user1)
console.log(DATA.user[0])
localStorage.setItem("DATA",JSON.stringify(DATA))
console.log(JSON.parse(localStorage.getItem("DATA")))
console.log("Đang online")
console.log(JSON.parse(localStorage.getItem("online")))
let online = JSON.parse(localStorage.getItem("online"))
localStorage.setItem("online",JSON.stringify(null))
UIcontroler.online()


