"use strict";var imgArr=["https://gitee.com/uploads/images/2017/1123/124042_a71e4763_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/123852_1b686623_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/123837_86398a64_1449449.jpeg","https://gitee.com/uploads/images/2017/1019/142754_10fc546e_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/161828_15e43417_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/123926_8c52c76f_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/162256_caacc13f_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/162304_0d959bde_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/162312_e73a714a_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/162329_adeb6b79_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/162441_df096460_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184006_981fcd99_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184155_b89d75c2_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184312_e0b1dd74_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184417_1f62ecf2_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184624_85f500f5_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184832_a7ddc667_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184913_cb050bf0_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184931_203ae9bf_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/184952_3625bddf_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185047_f3e44c5f_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185111_20f424d6_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185134_e6abe070_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185158_51fd0422_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185217_1139c828_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185248_99996675_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185326_51ac8350_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/185351_bf1d0516_1449449.jpeg","https://dn-coding-net-production-pp.qbox.me/5c960ceb-5626-472d-96f6-9c2d1c0f8fa1.jpg","https://dn-coding-net-production-pp.qbox.me/fefafa60-af62-4e2a-ac3c-e3c84075d11a.jpg","https://dn-coding-net-production-pp.qbox.me/97d1d7bd-3e55-407a-b7f6-771c40e2b7dc.jpg","https://dn-coding-net-production-pp.qbox.me/fb834a31-3408-480f-9319-ac18c45a703b.jpg","https://dn-coding-net-production-pp.qbox.me/c879653b-78c3-4b6e-82e3-3a19c3a91863.jpg","https://dn-coding-net-production-pp.qbox.me/17d05a6b-5bc7-4c4c-9c18-e50c4f22d571.png","https://dn-coding-net-production-pp.qbox.me/4c9f6630-30b4-4505-b61d-6689a157792e.png"],imgArrsb=["https://gitee.com/uploads/images/2017/1123/134434_a845e337_1449449.jpeg","https://gitee.com/uploads/images/2017/1022/134236_aa6ad5f4_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/134444_2dd7747c_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/134459_3319923b_1449449.jpeg","https://gitee.com/uploads/images/2017/1123/134510_be69785e_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/182633_ba488faa_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/182642_aa3353ec_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/182655_78f0c4a7_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/182703_9cf26b0d_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/182716_01b3e6dc_1449449.jpeg","https://gitee.com/uploads/images/2017/1124/182727_f4f37192_1449449.jpeg","https://gitee.com/uploads/images/2017/1202/213822_bf9458be_1449449.jpeg","https://gitee.com/uploads/images/2017/1202/213851_c5f9d1cc_1449449.jpeg","https://dn-coding-net-production-pp.qbox.me/af272589-77f8-4987-9bbd-71ffb22ba8a0.jpg","https://dn-coding-net-production-pp.qbox.me/6563b6d0-7e44-444f-bbec-e0824a2ba0e9.jpg","https://dn-coding-net-production-pp.qbox.me/8dee1836-82b4-4d5d-86a0-fd1676cc768b.jpg","https://gitee.com/uploads/images/2017/1204/123222_4e9a1852_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123229_0c722545_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123238_51a3066e_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123248_68564157_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123259_6abab11d_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123307_10745b6c_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123320_732bc34d_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123336_34c00425_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123349_7ee6fd5d_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123400_d02686c5_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123417_932de8be_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123409_9645146e_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123425_ccfb2fba_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123436_daa4d1e1_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123445_aee572a7_1449449.jpeg","https://gitee.com/uploads/images/2017/1204/123457_c3e76c2c_1449449.jpeg","https://dn-coding-net-production-pp.qbox.me/08950c26-8391-45b5-8a4b-c10d0a30f93c.jpg","https://dn-coding-net-production-pp.qbox.me/13a35265-66c2-401e-8e44-8dcaeec4331f.jpg","https://dn-coding-net-production-pp.qbox.me/a5568957-b692-436e-ad5c-b1df888d1cdb.jpg","https://dn-coding-net-production-pp.qbox.me/b320c9a2-5cb4-46e5-bd7e-6e0c09649cf5.jpg","https://dn-coding-net-production-pp.qbox.me/717e5093-5363-4ad5-8ac8-368b5f9851ed.jpg","https://dn-coding-net-production-pp.qbox.me/843b8b83-d456-4b24-adaf-73e9ec1989eb.jpg","https://dn-coding-net-production-pp.qbox.me/5771e583-2c9e-47bc-9ad3-6361c4f08d9e.jpg","https://dn-coding-net-production-pp.qbox.me/acee4ff4-9002-48b8-8e7d-e87c6e138c45.jpg","https://dn-coding-net-production-pp.qbox.me/e9c3c607-bfc1-45c4-8b92-0be5eb757526.jpg","https://dn-coding-net-production-pp.qbox.me/a12aa3d7-1f84-4d36-8ab9-b76e25725a76.jpg","https://dn-coding-net-production-pp.qbox.me/6da00777-2d5d-447c-9049-aea13a4b4c25.jpg","https://dn-coding-net-production-pp.qbox.me/74ebdc0f-d6ca-42a4-81db-1aa7fbd4f13a.jpg","https://dn-coding-net-production-pp.qbox.me/ba94ff8c-f605-4d6a-b318-2fff3d90a5b6.jpg","https://dn-coding-net-production-pp.qbox.me/501bedde-35ba-4ef8-b192-01e81b2eefd2.jpg","https://dn-coding-net-production-pp.qbox.me/d55a20a5-6e3a-441d-9423-fb8fe588f5fd.jpeg","https://dn-coding-net-production-pp.qbox.me/feb72e8b-c2dc-4801-b814-d7f19053a0f2.jpeg","https://dn-coding-net-production-pp.qbox.me/a1ed8b7f-10bb-40f9-af1e-746dc3009922.jpeg","https://dn-coding-net-production-pp.qbox.me/370acf7a-8774-4feb-afaa-1c087f623d8d.jpeg","https://dn-coding-net-production-pp.qbox.me/7c84d13d-e95e-40d0-b021-ce82773f6e82.jpeg","https://dn-coding-net-production-pp.qbox.me/d04cb883-e549-44dd-844b-a465e9aafd78.jpeg","https://dn-coding-net-production-pp.qbox.me/1f90dcaa-c1d8-4cf5-99b6-3148a1635480.jpeg","https://dn-coding-net-production-pp.qbox.me/4c41bf89-c5bc-498b-90fc-7f0d9ef68041.jpeg","https://dn-coding-net-production-pp.qbox.me/ee714636-ae38-46a6-b5a4-fcf07e28463d.jpeg","https://dn-coding-net-production-pp.qbox.me/148e99ea-7430-45bf-ad61-915ac7b8adbc.jpeg","https://dn-coding-net-production-pp.qbox.me/81bc9b0c-55c8-4c46-a762-13be1217f0ab.jpeg","https://dn-coding-net-production-pp.qbox.me/75cdff8a-15ea-45e6-8909-eb5b66e7db8e.jpeg","https://dn-coding-net-production-pp.qbox.me/9a4e2dc6-981d-4c18-a4ff-9cc97f2faf88.jpeg"],randomIndex=Math.floor(Math.random()*imgArr.length),randomIndexsb=Math.floor(Math.random()*imgArrsb.length),img=imgArr[randomIndex],imgsb=imgArrsb[randomIndexsb];$("body").css("background-image","url("+img+")"),$("#sidebar").css("background-image","url("+imgsb+")");