

// const getHyThan=async(birthdate,hour,minute)=>{
//     const date = new Date(birthdate);
//     const day=date.getDay();
//     const month=date.getMonth();
//     const year=date.getFullYear();
//     const [thien_can_year,dia_chi_year]=[year%10,year%12];
//     const [thien_can_hour,dia_chi_hour]=[thien_can_year,getDiachi(hour,minute)];
//     const [thien_can_day,dia_chi_day]=
    
    
// }

// const getDiachi=async(gio,phut)=>{
//     const gioPhut = gio * 60 + phut;
//     for (let [khoangThoiGian, diaChi] of gio_sinh_map.entries()) {
//         let [start, end] = khoangThoiGian.split(" - ");
//         let startGio = parseInt(start.split(":")[0]) * 60 + parseInt(start.split(":")[1]);
//         let endGio = parseInt(end.split(":")[0]) * 60 + parseInt(end.split(":")[1]);

//         if (gioPhut >= startGio || gioPhut < endGio) {
//             return diaChi;
//         }
//     }
//     return "Giờ không hợp lệ"; 
// }