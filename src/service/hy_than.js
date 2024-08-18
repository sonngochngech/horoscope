
import { RAGApplicationBuilder, TextLoader, WebLoader } from "@llm-tools/embedjs";
import { LanceDb } from "@llm-tools/embedjs/vectorDb/lance";
import path from 'path'
import { calculate_can_chi_gio, can_chi_array, can_duong, can_menh, can_tang_array, chi_menh, dia_chi_dai_van, dia_chi_diem_co_ban, gio_sinh_array, gio_sinh_map, menh, menh_khac, menh_sinh, nguyet_lenh, nhat_chu, thien_can_array, thien_can_dai_van, thien_can_ngay_gio, tri_so_can_chi } from "../data/dia_chi_can_tang.js";
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const calculate = async (birthdate, hour, minute, sex) => {
    const  randomNumber=Math.floor(Math.random()*1000000);
    const [day, month, year] = birthdate.split('/').map(Number);
    const dirPath = path.join(__dirname, `../RAG/webDB/${randomNumber}`);
    await fs.promises.mkdir(dirPath, { recursive: true });
    const ragApp = await new RAGApplicationBuilder()
        .setVectorDb(new LanceDb({path: path.resolve(`./src/RAG/webDB/${randomNumber}`)}))
        .addLoader(new WebLoader({ urlOrContent: `https://www.xemlicham.com/am-lich/nam/${year}/thang/${month}/ngay/${day}` }))
        .build();
    const res = await ragApp.query(`Hãy tính lịch can chi của tháng,năm, ngày  với case là  người A với ngày sinh  ${birthdate} lúc ${hour} giờ ${minute}
        Chỉ ghi kết quả theo format 
        {"năm": "quý mùi",
        "tháng": "bính mùi",
        "ngày": "ất dậu",
        "ngày_âm_lịch":"14/06/2003"
        }`);
    const parseData = JSON.parse(res.content);

    let { năm: can_chi_nam, tháng: can_chi_thang, ngày: can_chi_ngay, ngày_âm_lịch: ngay_am_lich } = parseData;
    let can_chi_gio=calculate_gio_sinh(hour,minute,can_chi_ngay.split(' ')[0]);
    console.log(ngay_am_lich);
    console.log(can_chi_gio);

    const [day_am, month_am, year_am] = ngay_am_lich.split('/').map(Number);

    const can_chi_dai_van = calculate_dai_van(can_chi_thang, year, sex);

    const [tc_dv, dc_dv] = can_chi_dai_van.split(' ');

    const thien_can_keys = [can_chi_nam.split(' ')[0], can_chi_thang.split(' ')[0], can_chi_ngay.split(' ')[0], can_chi_gio.split(' ')[0]];
    const dia_chi_keys = [can_chi_nam.split(' ')[1], can_chi_thang.split(' ')[1], can_chi_ngay.split(' ')[1], can_chi_gio.split(' ')[1]];
    const can_chi_list = [can_chi_nam, can_chi_thang, can_chi_ngay, can_chi_gio];

    const thien_can = {};
    for (let i = 0; i < thien_can_keys.length; i++) {
        const value = (1 + get_per_thien_can(tc_dv, thien_can_keys[i], day_am, month_am, can_chi_list[i]) / 100) * 36;
        if (thien_can[thien_can_keys[i]]) thien_can[thien_can_keys[i]] += value > 0 ? value : 0;
        else thien_can[thien_can_keys[i]] = value > 0 ? value : 0;
    }
    

    const can_tang = {};
    for (let i = 0; i < dia_chi_keys.length; i++) {
        for (let ct of can_tang_array[dia_chi_keys[i]]) {
            const value = (1 + get_per_can_tang(dc_dv, dia_chi_keys[i], ct, day_am, month_am, can_chi_list[i]) / 100) * dia_chi_diem_co_ban[dia_chi_keys[i]]["can_tang"][ct];
            if (can_tang[ct]) can_tang[ct] += value > 0 ? value : 0;
            can_tang[ct] = value > 0 ? value : 0;
        }
    }

    let [kim, thuy, hoa, tho, moc] = calculate_nguyen_to(thien_can, can_tang);
    let elements = [kim, thuy, hoa, tho, moc];
    let nc = calculate_Nc(thien_can_keys, dia_chi_keys, tc_dv, dc_dv, day_am, month_am);
    let per_nc = Math.floor((nc / (moc + hoa + tho + kim + thuy)) * 100);
    console.log(per_nc);
    let menh_cc = get_menh(can_chi_nam);
    console.log(menh_cc);
    console.log("per_nc",per_nc);
    let hy_than;
    if (per_nc < 8) {
        let maxElement = Math.max(...elements);
        hy_than= menh[elements.indexOf(maxElement)];
    } else if (per_nc >= 8 && per_nc <= 19) {
        let index = menh_sinh.indexOf(menh_cc);
        if (index===0) hy_than= menh_sinh[menh_sinh.length -1];
        else hy_than= menh_sinh[index - 1];
    } else if (per_nc === 20) {
        let maxElement = Math.max(...elements);
        hy_than= menh[elements.indexOf(maxElement)];
    } else if (per_nc >= 21 && per_nc <= 50) {
        let index = menh_khac.indexOf(menh_cc);
        if (index===0) hy_than= menh_khac[menh_khac.length -1];
        else hy_than= menh_khac[index - 1];
    } else if (per_nc >= 51 && per_nc <= 80) {
        let index = menh_sinh.indexOf(menh_cc);
        index = index + 1 > 4 ? 0 : index + 1;
        hy_than= menh_sinh[index];
    } else if (per_nc > 80) {
        let index = menh_sinh.indexOf(menh_cc);
        if (index===0) hy_than= menh_sinh[menh_sinh.length -1];
        else hy_than= menh_sinh[index - 1];
    }
    console.log(hy_than);
    return [menh_cc,hy_than];
}

const calculate_gio_sinh=(hour, minute,thien_can_ngay)=>{
    let timeSlot;

    if (hour >= 23 || (hour === 0 && minute < 60)) {
        timeSlot = "23:00 - 00:59";
    } else if (hour >= 1 && hour < 3) {
        timeSlot = "01:00 - 02:59";
    } else if (hour >= 3 && hour < 5) {
        timeSlot = "03:00 - 04:59";
    } else if (hour >= 5 && hour < 7) {
        timeSlot = "05:00 - 06:59";
    } else if (hour >= 7 && hour < 9) {
        timeSlot = "07:00 - 08:59";
    } else if (hour >= 9 && hour < 11) {
        timeSlot = "09:00 - 10:59";
    } else if (hour >= 11 && hour < 13) {
        timeSlot = "11:00 - 12:59";
    } else if (hour >= 13 && hour < 15) {
        timeSlot = "13:00 - 14:59";
    } else if (hour >= 15 && hour < 17) {
        timeSlot = "15:00 - 16:59";
    } else if (hour >= 17 && hour < 19) {
        timeSlot = "17:00 - 18:59";
    } else if (hour >= 19 && hour < 21) {
        timeSlot = "19:00 - 20:59";
    } else if (hour >= 21 && hour < 23) {
        timeSlot = "21:00 - 22:59";
    }

    const dia_chi = gio_sinh_map.get(timeSlot);
    const tc_gio_ty=thien_can_ngay_gio[thien_can_ngay];
    const index=gio_sinh_array.indexOf(dia_chi);
    const tc_index=thien_can_array.indexOf(tc_gio_ty);
    const tc_gio=thien_can_array[tc_index+index >=10 ?tc_index+index-10: tc_index+index];


    if (!dia_chi) {
        throw new Error('Zodiac time not found for the given hour and minute');
    }
    return tc_gio+' '+ dia_chi;

   

}

const calculate_dai_van = (can_chi_thang, nam, sex) => {
    let index = can_chi_array.findIndex(element => element === can_chi_thang);
    let thien_can = can_chi_thang.split(' ')[0];
    let flag = 0;
    if (can_duong.includes(thien_can)) flag = 1;
    const year = (new Date()).getFullYear();
    while (nam < year) {
        if ((sex === "male" && flag === 1) || (sex === "female" && flag === 0)) {
            index++;
        } else {
            index--;
        }
        nam += 10;
    }
    return can_chi_array[index];
}

const get_per_thien_can = (thien_can_dv, thien_can, ngay, thang, can_chi) => {
    let sum = 0;
    sum += thien_can_dai_van[thien_can_dv][thien_can];
    if (ngay > 12 && [3, 6, 9, 12].includes(thang)) {
        sum += nguyet_lenh["nguyet_lenh_5"]["gia_giam_tri_so"][thien_can];
    } else {
        sum += nguyet_lenh[`nguyet_lenh_${thang % 3 === 0 ? parseInt(thang / 3) : parseInt(thang / 3) + 1}`]["gia_giam_tri_so"][thien_can];
    }
    if (Object.keys(tri_so_can_chi).includes(can_chi))
        sum += tri_so_can_chi[can_chi]["thiên_can"];
    return sum;
}

const get_per_can_tang = (dia_chi_dv, dia_chi, can_tang, ngay, thang, can_chi) => {
    let sum = 0;

    // Correct the typo in the condition, and check if `dia_chi_dv` exists.
    if (dia_chi_dai_van[dia_chi_dv] && dia_chi_dai_van[dia_chi_dv][dia_chi] && Object.keys(dia_chi_dai_van[dia_chi_dv][dia_chi]).includes(can_tang)) {
        sum += dia_chi_dai_van[dia_chi_dv][dia_chi][can_tang];
    }


    // Calculate nguyet_lenh condition based on month and day.
    if (ngay > 12 && [3, 6, 9, 12].includes(thang)) {
        sum += nguyet_lenh["nguyet_lenh_5"]["gia_giam_tri_so"][can_tang];
    } else {
        const nguyet_lenh_key = `nguyet_lenh_${(thang % 3 === 0 ? thang / 3 : parseInt(thang / 3) + 1)}`;
        sum += nguyet_lenh[nguyet_lenh_key]["gia_giam_tri_so"][can_tang];
    }


    // Check tri_so_can_chi for the `can_chi` and `can_tàng`.
    if (tri_so_can_chi[can_chi] && tri_so_can_chi[can_chi]["can_tàng"] && Object.keys(tri_so_can_chi[can_chi]["can_tàng"]).includes(can_tang)) {
        sum += tri_so_can_chi[can_chi]["can_tàng"][can_tang];
    }


    return sum;
}

const calculate_nguyen_to = (thien_can, can_tang) => {
    let moc = 0;
    let hoa = 0;
    let tho = 0;
    let kim = 0;
    let thuy = 0;

    // Calculate Mộc (Wood)
    moc += (thien_can['giáp'] || 0) + (thien_can['ất'] || 0);
    moc += (can_tang['giáp'] || 0) + (can_tang['ất'] || 0);

    // Calculate Hỏa (Fire)
    hoa += (thien_can['bính'] || 0) + (thien_can['đinh'] || 0);
    hoa += (can_tang['bính'] || 0) + (can_tang['đinh'] || 0);

    // Calculate Thổ (Earth)
    tho += (thien_can['mậu'] || 0) + (thien_can['kỷ'] || 0);
    tho += (can_tang['mậu'] || 0) + (can_tang['kỷ'] || 0);

    // Calculate Kim (Metal)
    kim += (thien_can['canh'] || 0) + (thien_can['tân'] || 0);
    kim += (can_tang['canh'] || 0) + (can_tang['tân'] || 0);

    // Calculate Thủy (Water)
    thuy += (thien_can['nhâm'] || 0) + (thien_can['quý'] || 0);
    thuy += (can_tang['nhâm'] || 0) + (can_tang['quý'] || 0);

    // Output the results
    // console.log('Tổng số điểm hành Mộc:', moc);
    // console.log('Tổng số điểm hành Hỏa:', hoa);
    // console.log('Tổng số điểm hành Thổ:', tho);
    // console.log('Tổng số điểm hành Kim:', kim);
    // console.log('Tổng số điểm hành Thủy:', thuy);

    return [kim, thuy, hoa, tho, moc];

}
const calculate_Nc = (thien_can_keys, dia_chi_keys, thien_can_dv, dia_chi_dv, day_am, month_am) => {
    let combinedKeys = thien_can_keys.map((can, index) => `${can} ${dia_chi_keys[index]}`);
    let [cc_0, cc_1, cc_2, cc_3] = combinedKeys
    const [tc_0, tc_1, tc_2, tc_3] = [...thien_can_keys];
    const ke_sat = [{ "tc": tc_1, "cc": cc_1 }, { "tc": tc_3, "cc": cc_3 }];

    const cach_tru = [{ "tc": tc_0, "cc": cc_0 }];
    const gan_tru = [{ "tc": tc_0, "cc": cc_0 }, { "tc": tc_1, "cc": cc_1 }, { "tc": tc_3, "cc": cc_3 }];

    const nhat_chu_sao = nhat_chu[tc_2]["thiên_can"];
    let nhat_can_point = (1 + get_per_thien_can(thien_can_dv, tc_2, day_am, month_am, cc_2) / 100) * 36;
    console.log(nhat_can_point);
    let ke_sat_point = 0;
    let cach_tru_point = 0;
    let gan_tru_point = 0;


    ke_sat.forEach((e) => {
        let nc_tc = nhat_chu_sao[e["tc"]];
        if (nc_tc === "chính ấn") {
            ke_sat_point += (1 + get_per_thien_can(thien_can_dv, e["tc"], day_am, month_am, e["cc"]) / 100) * 36 * 30 / 100;
        } else if (nc_tc === "thiên ấn") {
            ke_sat_point += (1 + get_per_thien_can(thien_can_dv, e["tc"], day_am, month_am, e["cc"]) / 100) * 36 * 20 / 100;
        }
    })

    cach_tru.forEach((e) => {

        let nc_tc = nhat_chu_sao[e["tc"]];
        if (nc_tc === "chính ấn")
            cach_tru_point += (1 + get_per_thien_can(thien_can_dv, e["tc"], day_am, month_am, e["cc"]) / 100) * 36 * 15 / 100;
        else if (nc_tc === "thiên ấn")
            cach_tru_point += (1 + get_per_thien_can(thien_can_dv, e["tc"], day_am, month_am, e["cc"]) / 100) * 36 * 10 / 100;
        else if (nc_tc === "tỷ" || nc_tc === "kiếp")
            cach_tru_point += (1 + get_per_thien_can(thien_can_dv, e["tc"], day_am, month_am, e["cc"]) / 100) * 36 * 50 / 100;

    })
    gan_tru.forEach((e) => {
        let nc_tc = nhat_chu_sao[e["tc"]];
        if (nc_tc === "tỷ" || nc_tc === "kiếp") {
            gan_tru_point += (1 + get_per_thien_can(thien_can_dv, e["tc"], day_am, month_am, e["cc"]) / 100) * 36 / 100;
        }
    })

    const [dc_0, dc_1, dc_2, dc_3] = [...dia_chi_keys];
    let ct_ngay = 0;
    can_tang_array[dc_2].forEach((e) => {
        let nc_ct = nhat_chu_sao[e];
        if ((nc_ct === "tỷ" || nc_ct === "kiếp")) {
            let value = (1 + get_per_can_tang(dia_chi_dv, dc_2, e, day_am, month_am, cc_2) / 100) * dia_chi_diem_co_ban[dc_2]["can_tang"][e];
            ct_ngay += value > 0 ? value : 0;
        }
    })

    let ct_thang = 0;
    can_tang_array[dc_1].forEach((e) => {
        let nc_ct = nhat_chu_sao[e];
        console.log("quý", nc_ct);
        if ((nc_ct === "tỷ" || nc_ct === "kiếp")) {
            let value = (1 + get_per_can_tang(dia_chi_dv, dc_1, e, day_am, month_am, cc_1) / 100) * dia_chi_diem_co_ban[dc_1]["can_tang"][e];

            ct_thang += value > 0 ? value : 0;
        }
    })


    let ct_nam = 0;

    can_tang_array[dc_0].forEach((e) => {
        let value = (1 + get_per_can_tang(dia_chi_dv, dc_0, e, day_am, month_am, cc_0) / 100) * dia_chi_diem_co_ban[dc_0]["can_tang"][e];
        console.log(get_per_can_tang(dia_chi_dv, dc_0, e, day_am, month_am, cc_0));

        ct_nam += value > 0 ? value : 0;
    })


    let ct_gio = 0;
    can_tang_array[dc_3].forEach((e) => {
        let nc_ct = nhat_chu_sao[e];
        if ((nc_ct === "tỷ" || nc_ct === "kiếp") && nc_ct === tc_3) {
            let value = (1 + get_per_can_tang(dia_chi_dv, dc_1, e, day_am, month_am, cc_3) / 100) * dia_chi_diem_co_ban[dc_3]["can_tang"][e];
            ct_gio += value > 0 ? value : 0;
        } else if ((nc_ct === "tỷ" || nc_ct === "kiếp")) {
            let value = (1 + get_per_can_tang(dia_chi_dv, dc_1, e, day_am, month_am, cc_3) / 100) * dia_chi_diem_co_ban[dc_3]["can_tang"][e] * 80 / 100;
            ct_gio += value > 0 ? value : 0;
        }
    })

    return nhat_can_point + ke_sat_point + cach_tru_point + gan_tru_point + ct_gio + ct_nam * 60 / 100 + ct_ngay + ct_thang;
}


const get_menh = (can_chi) => {
    let [tc, dc] = can_chi.split(' ');
    let j = 1;
    for (let c_menh of can_menh) {
        if (c_menh.includes(tc)) break;
        j++;
    }
    let i = 0;
    for (let ch_menh of chi_menh) {
        if (ch_menh.includes(dc)) break;
        i++;
    }
    let sum = i + j > 5 ? i + j - 5 : i + j;
    return menh[sum - 1];
}

export {calculate}