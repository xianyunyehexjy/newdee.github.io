"use strict";var imgArr=["https://gitee.com/uploads/images/2017/1123/124042_a71e4763_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/123852_1b686623_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/123837_86398a64_1449449.jpeg","https://gitee.com/uploads/images/2017/1019/142754_10fc546e_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/161828_15e43417_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/123926_8c52c76f_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/162256_caacc13f_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/162304_0d959bde_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/162312_e73a714a_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/162329_adeb6b79_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/162441_df096460_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184006_981fcd99_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184155_b89d75c2_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184312_e0b1dd74_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184417_1f62ecf2_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184624_85f500f5_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184832_a7ddc667_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184913_cb050bf0_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184931_203ae9bf_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184952_3625bddf_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185047_f3e44c5f_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185111_20f424d6_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185134_e6abe070_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185158_51fd0422_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185217_1139c828_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185248_99996675_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185326_51ac8350_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185351_bf1d0516_1449449.jpeg"],imgArrsb=["https://gitee.com/uploads/images/2017/1123/134434_a845e337_1449449.jpeg","https://gitee.com/uploads/images/2017/1022/134236_aa6ad5f4_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/134444_2dd7747c_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/134459_3319923b_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/134510_be69785e_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/182633_ba488faa_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/182642_aa3353ec_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/182655_78f0c4a7_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/182703_9cf26b0d_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/182716_01b3e6dc_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/182727_f4f37192_1449449.jpeg","https://gitee.com/uploads/images/2017/1202/213822_bf9458be_1449449.jpeg","https://gitee.com/uploads/images/2017/1202/213836_6507e8c7_1449449.jpeg","https://gitee.com/uploads/images/2017/1202/213851_c5f9d1cc_1449449.jpeg","https://dn-coding-net-production-pp.qbox.me/af272589-77f8-4987-9bbd-71ffb22ba8a0.jpg","https://dn-coding-net-production-pp.qbox.me/6563b6d0-7e44-444f-bbec-e0824a2ba0e9.jpg","https://dn-coding-net-production-pp.qbox.me/8dee1836-82b4-4d5d-86a0-fd1676cc768b.jpg"],randomIndex=Math.floor(Math.random()*imgArr.length),randomIndexsb=Math.floor(Math.random()*imgArrsb.length),img=imgArr[randomIndex],imgsb=imgArrsb[randomIndexsb];$("body").css("background-image","url("+img+")"),$("#sidebar").css("background-image","url("+imgsb+")");