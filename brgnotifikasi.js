const { jsPDF } = require("jspdf"); 

let doc = new jsPDF();


/* ========================
    RECT BOX CONFIGURATION
   ======================== */

// General Properties
const BIG_RECT_X = 6.31
const BIG_RECT_WIDTH = 195.17
const SMALL_BOX_WIDTH = 4.5
const SMALL_BOX_HEIGHT = 4.5
const MEDIUM_BOX_WIDTH = 36
const MEDIUM_BOX_HEIGHT = 8
const LARGE_BOX_WIDTH = 99
const LARGE_BOX_HEIGHT = 8
const SMALL_BOX_TEXT_INSET_X = 1.25
const SMALL_BOX_TEXT_INSET_Y = 1
const SMALL_BOX_TEXT_FONTSIZE = 7.9

// 2ND RECT
const NAMA_X = 51
const NAMA_Y = 31.8
const NAMA_NUMOFROW = 2
const NAMA_BOXPERROW = 32
const NAMA_PENGIRING_X = 59.99
const NAMA_PENGIRING_Y = 41.5
const NAMA_PENGIRING_NUMOFROW = 2
const NAMA_PENGIRING_BOXPERROW = 30
// 3RD RECT
const ID_X = 68.97
const ID_Y = 52.3
const ID_NUMOFROW = 1
const ID_BOXPERROW = 18
const ID_SENDIRI_X = 155.75
const ID_SENDIRI_Y = 52.3
const ID_SENDIRI_NUMOFROW = 1
const ID_SENDIRI_BOXPERROW = 1
const ID_PENGIRING_X = 173.70
const ID_PENGIRING_Y = 52.3
const ID_PENGIRING_NUMOFROW = 1
const ID_PENGIRING_BOXPERROW = 1
const NO_DAFTAR_HOSP_KLINIK_X = 46.36
const NO_DAFTAR_HOSP_KLINIK_Y = 61.7
const NO_DAFTAR_HOSP_KLINIK_NUMOFROW = 1
const NO_DAFTAR_HOSP_KLINIK_BOXPERROW = 8
const TARIKH_ADM_DAY_X = 146.95
const TARIKH_ADM_DAY_Y = 61.7
const TARIKH_ADM_DAY_NUMOFROW = 1
const TARIKH_ADM_DAY_BOXPERROW = 2
const TARIKH_ADM_MTH_X = 160.24
const TARIKH_ADM_MTH_Y = 61.7
const TARIKH_ADM_MTH_NUMOFROW = 1
const TARIKH_ADM_MTH_BOXPERROW = 2
const TARIKH_ADM_YR_X = 173.87
const TARIKH_ADM_YR_Y = 61.7
const TARIKH_ADM_YR_NUMOFROW = 1
const TARIKH_ADM_YR_BOXPERROW = 4
// 4TH RECT
const WARGANEGARA_YA_X = 13.98
const WARGANEGARA_YA_Y = 78.02
const WARGANEGARA_YA_NUMOFROW = 1
const WARGANEGARA_YA_BOXPERROW = 1
const KETURUNAN_X = 46.36
const KETURUNAN_Y = 78.02
const KETURUNAN_NUMOFROW = 1
const KETURUNAN_BOXPERROW = 12
const SUKUKETURUNAN_X = 46.36
const SUKUKETURUNAN_Y = 83.19
const SUKUKETURUNAN_NUMOFROW = 1
const SUKUKETURUNAN_BOXPERROW = 12
const WARGANEGARA_TIDAK_X = 13.98
const WARGANEGARA_TIDAK_Y = 91.23
const WARGANEGARA_TIDAK_NUMOFROW = 1
const WARGANEGARA_TIDAK_BOXPERROW = 1
const NEGARA_ASAL_X = 46.36
const NEGARA_ASAL_Y = 91.23
const NEGARA_ASAL_NUMOFROW = 1
const NEGARA_ASAL_BOXPERROW = 12
const KEDATANGAN_IZIN_X = 46.36
const KEDATANGAN_IZIN_Y = 99.4
const KEDATANGAN_IZIN_NUMOFROW = 1
const KEDATANGAN_IZIN_BOXPERROW = 1
const KEDATANGAN_TANPA_IZIN_X = 59.82
const KEDATANGAN_TANPA_IZIN_Y = 99.4
const KEDATANGAN_TANPA_IZIN_NUMOFROW = 1
const KEDATANGAN_TANPA_IZIN_BOXPERROW = 1
const KEDATANGAN_PDK_TETAP_X = 78.92
const KEDATANGAN_PDK_TETAP_Y = 99.4
const KEDATANGAN_PDK_TETAP_NUMOFROW = 1
const KEDATANGAN_PDK_TETAP_BOXPERROW = 1
const JANTINA_LELAKI_X = 123.62
const JANTINA_LELAKI_Y = 70.11
const JANTINA_LELAKI_NUMOFROW = 1
const JANTINA_LELAKI_BOXPERROW = 1
const JANTINA_PEREMPUAN_X = 141.74
const JANTINA_PEREMPUAN_Y = 70.11
const JANTINA_PEREMPUAN_NUMOFROW = 1
const JANTINA_PEREMPUAN_BOXPERROW = 1
const TARIKH_LAHIR_DAY_X = 128.11
const TARIKH_LAHIR_DAY_Y = 78.02
const TARIKH_LAHIR_DAY_NUMOFROW = 1
const TARIKH_LAHIR_DAY_BOXPERROW = 2
const TARIKH_LAHIR_MTH_X = 141.4
const TARIKH_LAHIR_MTH_Y = 78.02
const TARIKH_LAHIR_MTH_NUMOFROW = 1
const TARIKH_LAHIR_MTH_BOXPERROW = 2
const TARIKH_LAHIR_YR_X = 155.03
const TARIKH_LAHIR_YR_Y = 78.02
const TARIKH_LAHIR_YR_NUMOFROW = 1
const TARIKH_LAHIR_YR_BOXPERROW = 4
const UMUR_X = 123.62
const UMUR_Y = 87.46
const UMUR_NUMOFROW = 1
const UMUR_BOXPERROW = 3
const UMUR_TAHUN_X = 146.78
const UMUR_TAHUN_Y = 87.46
const UMUR_TAHUN_NUMOFROW = 1
const UMUR_TAHUN_BOXPERROW = 1
const UMUR_BULAN_X = 160.24
const UMUR_BULAN_Y = 87.46
const UMUR_BULAN_NUMOFROW = 1
const UMUR_BULAN_BOXPERROW = 1
const UMUR_HARI_X = 173.87
const UMUR_HARI_Y = 87.46
const UMUR_HARI_NUMOFROW = 1
const UMUR_HARI_BOXPERROW = 1
// 5TH RECT
const TEL_RUMAH_X = 36.41
const TEL_RUMAH_Y = 106.54
const TEL_RUMAH_NUMOFROW = 1
const TEL_RUMAH_BOXPERROW = 1
const TEL_BIMBIT_X = 55.34
const TEL_BIMBIT_Y = 106.54
const TEL_BIMBIT_NUMOFROW = 1
const TEL_BIMBIT_BOXPERROW = 1
const TEL_PEJABAT_X = 73.46
const TEL_PEJABAT_Y = 106.54
const TEL_PEJABAT_NUMOFROW = 1
const TEL_PEJABAT_BOXPERROW = 1
const TEL_NUMBER_X = 92.38
const TEL_NUMBER_Y = 106.54
const TEL_NUMBER_NUMOFROW = 1
const TEL_NUMBER_BOXPERROW = 12
const ALAMAT_KEDIAMAN1_X = 36.58
const ALAMAT_KEDIAMAN1_Y = 114.84
const ALAMAT_KEDIAMAN1_NUMOFROW = 1
const ALAMAT_KEDIAMAN1_BOXPERROW = 16
const ALAMAT_KEDIAMAN2_X = 14.1
const ALAMAT_KEDIAMAN2_Y = 119.4
const ALAMAT_KEDIAMAN2_NUMOFROW = 2
const ALAMAT_KEDIAMAN2_BOXPERROW = 21
const ALAMAT_PEJABAT_X = 119.13
const ALAMAT_PEJABAT_Y = 119.4
const ALAMAT_PEJABAT_NUMOFROW = 2
const ALAMAT_PEJABAT_BOXPERROW = 17
// 7TH RECT
const DISEASE_BOX_BASE_Y = 136.66
const DISEASE_BOX_BASE_X1 = 13.98
const DISEASE_BOX_BASE_X2 = 79.23
const DISEASE_BOX_BASE_X3 = 141.74
let DISEASE_BOX_BASE_X_ARR = [DISEASE_BOX_BASE_X1,DISEASE_BOX_BASE_X2,DISEASE_BOX_BASE_X3]
// 9TH RECT
const KES_X = 13.98
const KES_Y = 231.01
const KES_NUMOFROW = 1
const KES_BOXPERROW = 1
const KONTAK_X = 31.93
const KONTAK_Y = 231.01
const KONTAK_NUMOFROW = 1
const KONTAK_BOXPERROW = 1
const FOMEMA_X = 51.02
const FOMEMA_Y = 231.01
const FOMEMA_NUMOFROW = 1
const FOMEMA_BOXPERROW = 1
const UJIAN_SARINGAN_X = 13.98
const UJIAN_SARINGAN_Y = 236.88
const UJIAN_SARINGAN_NUMOFROW = 1
const UJIAN_SARINGAN_BOXPERROW = 1
const STATUS_HIDUP_X = 77.75
const STATUS_HIDUP_Y = 231.01
const STATUS_HIDUP_NUMOFROW = 1
const STATUS_HIDUP_BOXPERROW = 1
const STATUS_MATI_X = 77.75
const STATUS_MATI_Y = 236.88
const STATUS_MATI_NUMOFROW = 1
const STATUS_MATI_BOXPERROW = 1
const TARIKH_MATI_DAY_X = 90.21
const TARIKH_MATI_DAY_Y = 236.88
const TARIKH_MATI_DAY_NUMOFROW = 1
const TARIKH_MATI_DAY_BOXPERROW = 2
const TARIKH_MATI_MTH_X = 103.5
const TARIKH_MATI_MTH_Y = 236.88
const TARIKH_MATI_MTH_NUMOFROW = 1
const TARIKH_MATI_MTH_BOXPERROW = 2
const TARIKH_MATI_YR_X = 117.13
const TARIKH_MATI_YR_Y = 236.88
const TARIKH_MATI_YR_NUMOFROW = 1
const TARIKH_MATI_YR_BOXPERROW = 4
const TARIKH_ONSET_DAY_X = 144.26
const TARIKH_ONSET_DAY_Y = 231.01
const TARIKH_ONSET_DAY_NUMOFROW = 1
const TARIKH_ONSET_DAY_BOXPERROW = 2
const TARIKH_ONSET_MTH_X = 157.55
const TARIKH_ONSET_MTH_Y = 231.01
const TARIKH_ONSET_MTH_NUMOFROW = 1
const TARIKH_ONSET_MTH_BOXPERROW = 2
const TARIKH_ONSET_YR_X = 171.18
const TARIKH_ONSET_YR_Y = 231.01
const TARIKH_ONSET_YR_NUMOFROW = 1
const TARIKH_ONSET_YR_BOXPERROW = 4
// 10TH RECT
const TARIKH_SAMPLING_DAY_X = 13.98
const TARIKH_SAMPLING_DAY_Y = 260.35
const TARIKH_SAMPLING_DAY_NUMOFROW = 1
const TARIKH_SAMPLING_DAY_BOXPERROW = 2
const TARIKH_SAMPLING_MTH_X = 27.27
const TARIKH_SAMPLING_MTH_Y = 260.35
const TARIKH_SAMPLING_MTH_NUMOFROW = 1
const TARIKH_SAMPLING_MTH_BOXPERROW = 2
const TARIKH_SAMPLING_YR_X = 40.9
const TARIKH_SAMPLING_YR_Y = 260.35
const TARIKH_SAMPLING_YR_NUMOFROW = 1
const TARIKH_SAMPLING_YR_BOXPERROW = 4
const UJIAN_POSITIVE_X = 77.75
const UJIAN_POSITIVE_Y = 247.61
const UJIAN_POSITIVE_NUMOFROW = 1
const UJIAN_POSITIVE_BOXPERROW = 1
const UJIAN_NEGATIVE_X = 77.75
const UJIAN_NEGATIVE_Y = 252.84
const UJIAN_NEGATIVE_NUMOFROW = 1
const UJIAN_NEGATIVE_BOXPERROW = 1
const UJIAN_BELUM_SIAP_X = 77.75
const UJIAN_BELUM_SIAP_Y = 258
const UJIAN_BELUM_SIAP_NUMOFROW = 1
const UJIAN_BELUM_SIAP_BOXPERROW = 1
const DIAG_SEMENTARA_X = 144.43
const DIAG_SEMENTARA_Y = 246.61
const DIAG_SEMENTARA_NUMOFROW = 1
const DIAG_SEMENTARA_BOXPERROW = 1
const DIAG_DISAHKAN_X = 144.43
const DIAG_DISAHKAN_Y = 251.84
const DIAG_DISAHKAN_NUMOFROW = 1
const DIAG_DISAHKAN_BOXPERROW = 1
const TARIKH_DIAG_DAY_X = 144.26
const TARIKH_DIAG_DAY_Y = 260.35
const TARIKH_DIAG_DAY_NUMOFROW = 1
const TARIKH_DIAG_DAY_BOXPERROW = 2
const TARIKH_DIAG_MTH_X = 157.55
const TARIKH_DIAG_MTH_Y = 260.35
const TARIKH_DIAG_MTH_NUMOFROW = 1
const TARIKH_DIAG_MTH_BOXPERROW = 2
const TARIKH_DIAG_YR_X = 171.18
const TARIKH_DIAG_YR_Y = 260.35
const TARIKH_DIAG_YR_NUMOFROW = 1
const TARIKH_DIAG_YR_BOXPERROW = 4
// 11TH RECT
const MAKLUMAT_KLINIKAL_X = 36.41
const MAKLUMAT_KLINIKAL_Y = 267.49
const MAKLUMAT_KLINIKAL_NUMOFROW = 1
const MAKLUMAT_KLINIKAL_BOXPERROW = 1
const KOMEN_X = 153.92
const KOMEN_Y = 267.49
const KOMEN_NUMOFROW = 1
const KOMEN_BOXPERROW = 1
// 13TH RECT
const NAMA_OFFICER_X = 55.51
const NAMA_OFFICER_Y = 281.17
const NAMA_OFFICER_NUMOFROW = 1
const NAMA_OFFICER_BOXPERROW = 23
const NAMA_HOSP_KLINIK_X = 55.51
const NAMA_HOSP_KLINIK_Y = 286.17
const NAMA_HOSP_KLINIK_NUMOFROW = 1
const NAMA_HOSP_KLINIK_BOXPERROW = 23
const TARIKH_NOTIFIKASI_DAY_X = 55.51
const TARIKH_NOTIFIKASI_DAY_Y = 291.17
const TARIKH_NOTIFIKASI_DAY_NUMOFROW = 1
const TARIKH_NOTIFIKASI_DAY_BOXPERROW = 2
const TARIKH_NOTIFIKASI_MTH_X = 68.8
const TARIKH_NOTIFIKASI_MTH_Y = 291.17
const TARIKH_NOTIFIKASI_MTH_NUMOFROW = 1
const TARIKH_NOTIFIKASI_MTH_BOXPERROW = 2
const TARIKH_NOTIFIKASI_YR_X = 82.43
const TARIKH_NOTIFIKASI_YR_Y = 291.17
const TARIKH_NOTIFIKASI_YR_NUMOFROW = 1
const TARIKH_NOTIFIKASI_YR_BOXPERROW = 4


/* ==========================
    TEXT FIELD CONFIGURATION
   ========================== */

const WAD_X = 88.32
const WAD_Y = 62.43
const PEKERJAAN_X = 110.76
const PEKERJAAN_Y = 96.49
const DISEASE_TXT_BASE_Y = 137.47
const DISEASE_TXT_BASE_X1 = 20.50
const DISEASE_TXT_BASE_X2 = 84.53
const DISEASE_TXT_BASE_X3 = 147.59
const DISEASE_BOX_BASE_DISPL_Y = 5.74
const DISEASE_TXT_BASE_DISPL_Y = 5.86
const OTHER_DISEASE_X = DISEASE_TXT_BASE_X3
const OTHER_DISEASE_Y = DISEASE_TXT_BASE_Y + (DISEASE_TXT_BASE_DISPL_Y*14)
const UJIAN_SARINGAN_NAME_X = 19.02
const UJIAN_SARINGAN_NAME_Y = 238.01
const UJIAN_MAKMAL_NAME_X = 14.53
const UJIAN_MAKMAL_NAME_Y = 248.14
const TANDATANGAN_X = 161
const TANDATANGAN_Y = NAMA_OFFICER_Y

let diseases = [
        '1. Poliomyelitis',
        '16. Hand, Food and Mouth Disease',
        '31. Syphilis - Acquired',
        '2. Viral Hepatitis A',
        '17. Human Immunodeficiency Virus Infection',
        '32. Tetanus Neonatorum',
        '3. Viral Hepatitis B',
        '18. Influenza',
        '33. Tetanus (Others)',
        '4. Viral Hepatitis C',
        '19. Leprosy (Multibacillary)',
        '34. Typhus - Scrub',
        '5. Viral Hepatitis (Others)',
        '20. Leprosy (Paucibacillary)',
        '35. Tuberculosis - PTB Smear Positive',
        '6. AIDS',
        '21. Leptospirosis',
        '36. Tuberculosis - PTB Smear Negative',
        '7. Chancroid',
        '22. Malaria - Vivax',
        '37. Tuberculosis - Extra Pulmonary',
        '8. Cholera',
        '23. Malaria - Falciparum',
        '38. Typhoid - Salmonella Typhi',
        '9. Dengue Fever',
        '24. Malaria - Malariae',
        '39. Typhoid - Paratyphoid',
        '10. Dengue Haemorrhagic Fever',
        '25. Malaria - Others',
        '40. Viral Encephalitis Japanese',
        '11. Diphtheria',
        '26. Measles',
        '41. Viral Encephalitis Nipah',
        '12. Dysentery',
        '27. Plague',
        '42. Viral Encephalitis (Others)',
        '13. Ebola',
        '28. Rabies',
        '43. Whooping Cough / Pertussis',
        '14. Food Poisoning',
        '29. Relapsing Fever',
        '44. Yellow Fever',
        '15. Gonorrhoea',
        '30. Syphilis - Congenital',
        '45. Others: please specify__________________'
]

let diseasesIndex = [
        { name: 'Poliomyelitis', value: 0 },
        { name: 'Hand, Food and Mouth Disease', value: 1 },
        { name: 'Syphilis - Acquired', value: 2 },
        { name: 'Viral Hepatitis A', value: 3 },
        { name: 'Human Immunodeficiency Virus Infection', value: 4 },
        { name: 'Tetanus Neonatorum', value: 5 },
        { name: 'Viral Hepatitis B', value: 6 },
        { name: 'Influenza', value: 7 },
        { name: 'Tetanus (Others)', value: 8 },
        { name: 'Viral Hepatitis C', value: 9 },
        { name: 'Leprosy (Multibacillary)', value: 10 },
        { name: 'Typhus - Scrub', value: 11 },
        { name: 'Viral Hepatitis (Others)', value: 12 },
        { name: 'Leprosy (Paucibacillary)', value: 13 },
        { name: 'Tuberculosis - PTB Smear Positive', value: 14 },
        { name: 'AIDS', value: 15 },
        { name: 'Leptospirosis', value: 16 },
        { name: 'Tuberculosis - PTB Smear Negative', value: 17 },
        { name: 'Chancroid', value: 18 },
        { name: 'Malaria - Vivax', value: 19 },
        { name: 'Tuberculosis - Extra Pulmonary', value: 20 },
        { name: 'Cholera', value: 21 },
        { name: 'Malaria - Falciparum', value: 22 },
        { name: 'Typhoid - Salmonella Typhi', value: 23 },
        { name: 'Dengue Fever', value: 24 },
        { name: 'Malaria - Malariae', value: 25 },
        { name: 'Typhoid - Paratyphoid', value: 26 },
        { name: 'Dengue Haemorrhagic Fever', value: 27 },
        { name: 'Malaria - Others', value: 28 },
        { name: 'Viral Encephalitis Japanese', value: 29 },
        { name: 'Diphtheria', value: 30 },
        { name: 'Measles', value: 31 },
        { name: 'Viral Encephalitis Nipah', value: 32 },
        { name: 'Dysentery', value: 33 },
        { name: 'Plague', value: 34 },
        { name: 'Viral Encephalitis (Others)', value: 35 },
        { name: 'Ebola', value: 36 },
        { name: 'Rabies', value: 37 },
        { name: 'Whooping Cough / Pertussis', value: 38 },
        { name: 'Food Poisoning', value: 39 },
        { name: 'Relapsing Fever', value: 40 },
        { name: 'Yellow Fever', value: 41 },
        { name: 'Gonorrhoea', value: 42 },
        { name: 'Syphilis - Congenital', value: 43 },
        { name: 'Others', value: 44 }
]


/* ================
    CORE FUNCTIONS
   ================ */

function createBox(startX, startY, numRow, cellsPerRow, 
        width, height) {
    for (let i=0; i<numRow; i++) {
        let rectY = startY + (i * height)
        for (let j=0; j<cellsPerRow; j++) {
            let rectX = startX + (j * width)
            doc.rect(rectX, rectY, width, height);
        }
    }
}

function textBox(startX, startY, numRow, cellsPerRow, 
        boxWidth, boxHeight, insetX, insetY, text, opt) {
    doc.setFontSize(SMALL_BOX_TEXT_FONTSIZE)
    doc.setFont("helvetica", opt);
    let textArr = text.toUpperCase().split("")
    for (let i=0; i<numRow; i++) {
        let textY = startY + (i * boxHeight) + insetY 
        for (let j=0; j<cellsPerRow; j++) {
            let c = (i*cellsPerRow) + j 
            if (c > textArr.length-1) { return }
            let textX = startX + (j * boxWidth) + insetX            
            doc.text(textArr[c], textX, textY, {baseline: "top"})
        }
    }
}

function text2CharIn1Box(startX, startY, numRow, cellsPerRow, 
        boxWidth, boxHeight, insetX, insetY, text, opt) {
    doc.setFontSize(SMALL_BOX_TEXT_FONTSIZE*0.8)
    doc.setFont("helvetica", opt);
    cellsPerRow = cellsPerRow *2
    boxWidth = boxWidth/2
    insetX = insetX/2
    let textArr = text.toUpperCase().split("")
    for (let i=0; i<numRow; i++) {
        let textY = startY + (i * boxHeight) + insetY 
        for (let j=0; j<cellsPerRow; j++) {
            let c = (i*cellsPerRow) + j 
            if (c > textArr.length-1) { return }
            let textX = startX + (j * boxWidth) + insetX            
            doc.text(textArr[c], textX, textY, {baseline: "top"})
        }
    }
}

function textLargeBox(startX, startY, charWidth, 
        boxWidth, boxHeight, insetX, insetY, text, opt) {
    doc.setFontSize(SMALL_BOX_TEXT_FONTSIZE)
    doc.setFont("helvetica", opt);
    let charNumPerRow = Math.floor(boxWidth / charWidth * 3.4) 
    if (text.length <=22) {
        let textY = startY + insetY 
        let textX = startX + insetX        
        doc.text(text, textX, textY, {baseline: "top"})
    } else {
        let textX = startX + insetX                
        
        let textPrt1 = text.slice(0, charNumPerRow)
        let text1Y = startY + insetY 
        doc.text(textPrt1, textX, text1Y, {baseline: "top"})

        let textPrt2 = text.slice(charNumPerRow, charNumPerRow*2)
        let text2Y = startY + insetY + (boxHeight/2)
        doc.text(textPrt2, textX, text2Y, {baseline: "top"})
    }
}

function text(textX, textY, content, font, fontStyle, fontSize) {
    doc.setFontSize(fontSize)
    doc.setFont(font, fontStyle);
    doc.text(content, textX, textY, {baseline: "top"})
}

function rect(rectX, rectY, width, height, fillYellow) {
    doc.setDrawColor(0);
    if (fillYellow) {
        doc.setFillColor(255, 255, 0); //yellow
        doc.rect(rectX, rectY, width, height, "FD");
    } else {
        doc.rect(rectX, rectY, width, height);
    }
}


/* ===========
    FUNCTIONS
   =========== */

function setNama(val) {
    textBox(NAMA_X, NAMA_Y, NAMA_NUMOFROW, NAMA_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")
}

function setNamaPengiring(val) {
    textBox(NAMA_PENGIRING_X, NAMA_PENGIRING_Y, 
            NAMA_PENGIRING_NUMOFROW, NAMA_PENGIRING_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")
}

function setID(val) {
    textBox(ID_X, ID_Y, 
            ID_NUMOFROW, ID_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")
}

function checkIDSendiri() {
    textBox(ID_SENDIRI_X, ID_SENDIRI_Y, 
            ID_SENDIRI_NUMOFROW, ID_SENDIRI_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkIDPengiring() {
    textBox(ID_PENGIRING_X, ID_PENGIRING_Y, 
            ID_PENGIRING_NUMOFROW, ID_PENGIRING_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function setNoDaftarHospKlinik(val) {
    textBox(NO_DAFTAR_HOSP_KLINIK_X, NO_DAFTAR_HOSP_KLINIK_Y, 
            NO_DAFTAR_HOSP_KLINIK_NUMOFROW, NO_DAFTAR_HOSP_KLINIK_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")
}

function setNamaWad(val) {
    let txt = val.slice(0, 12).toUpperCase()
    let textX = WAD_X + 13.5
    text(textX, WAD_Y, txt, "helvetica", "bold", 6.9)
}

function setTarikhAdm(val) {
    let date = val.split("-")
    textBox(TARIKH_ADM_DAY_X, TARIKH_ADM_DAY_Y, 
            TARIKH_ADM_DAY_NUMOFROW, TARIKH_ADM_DAY_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[2], "bold")

    textBox(TARIKH_ADM_MTH_X, TARIKH_ADM_MTH_Y, 
            TARIKH_ADM_MTH_NUMOFROW, TARIKH_ADM_MTH_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[1], "bold")

    textBox(TARIKH_ADM_YR_X, TARIKH_ADM_YR_Y, 
            TARIKH_ADM_YR_NUMOFROW, TARIKH_ADM_YR_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[0], "bold")
}

function checkWarganegaraYa() {
    textBox(WARGANEGARA_YA_X, WARGANEGARA_YA_Y, 
            WARGANEGARA_YA_NUMOFROW, WARGANEGARA_YA_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkWarganegaraTidak() {
    textBox(WARGANEGARA_TIDAK_X, WARGANEGARA_TIDAK_Y, 
            WARGANEGARA_TIDAK_NUMOFROW, WARGANEGARA_TIDAK_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function setKeturunan(val) {
    textBox(KETURUNAN_X, KETURUNAN_Y, 
            KETURUNAN_NUMOFROW, KETURUNAN_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")
}

function setSukuketurunan(val) {
    textBox(SUKUKETURUNAN_X, SUKUKETURUNAN_Y, 
            SUKUKETURUNAN_NUMOFROW, SUKUKETURUNAN_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")
}

function setNegaraAsal(val) {
    textBox(NEGARA_ASAL_X, NEGARA_ASAL_Y, 
            NEGARA_ASAL_NUMOFROW, NEGARA_ASAL_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")
}

function checkKedatanganIzin() {
    textBox(KEDATANGAN_IZIN_X, KEDATANGAN_IZIN_Y, 
            KEDATANGAN_IZIN_NUMOFROW, KEDATANGAN_IZIN_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkKedatanganTanpaIzin() {
    textBox(KEDATANGAN_TANPA_IZIN_X, KEDATANGAN_TANPA_IZIN_Y, 
            KEDATANGAN_TANPA_IZIN_NUMOFROW, KEDATANGAN_TANPA_IZIN_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkKedatanganPdkTetap() {
    textBox(KEDATANGAN_PDK_TETAP_X, KEDATANGAN_PDK_TETAP_Y, 
            KEDATANGAN_PDK_TETAP_NUMOFROW, KEDATANGAN_PDK_TETAP_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkJantinaLelaki() {
    textBox(JANTINA_LELAKI_X, JANTINA_LELAKI_Y, 
            JANTINA_LELAKI_NUMOFROW, JANTINA_LELAKI_BOXPERROW,  
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkJantinaPerempuan() {
    textBox(JANTINA_PEREMPUAN_X, JANTINA_PEREMPUAN_Y, 
            JANTINA_PEREMPUAN_NUMOFROW, JANTINA_PEREMPUAN_BOXPERROW,  
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function setTarikhLahir(val) {
    let date = val.split("-")
    textBox(TARIKH_LAHIR_DAY_X, TARIKH_LAHIR_DAY_Y, 
            TARIKH_LAHIR_DAY_NUMOFROW, TARIKH_LAHIR_DAY_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[2], "bold")

    textBox(TARIKH_LAHIR_MTH_X, TARIKH_LAHIR_MTH_Y, 
            TARIKH_LAHIR_MTH_NUMOFROW, TARIKH_LAHIR_MTH_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[1], "bold")

    textBox(TARIKH_LAHIR_YR_X, TARIKH_LAHIR_YR_Y, 
            TARIKH_LAHIR_YR_NUMOFROW, TARIKH_LAHIR_YR_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[0], "bold")
}

function setUmur(val) {
    textBox(UMUR_X, UMUR_Y, 
            UMUR_NUMOFROW, UMUR_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")
}

function checkUmurTahun() {
    textBox(UMUR_TAHUN_X, UMUR_TAHUN_Y, 
            UMUR_TAHUN_NUMOFROW, UMUR_TAHUN_BOXPERROW,  
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkUmurBulan() {
    textBox(UMUR_BULAN_X, UMUR_BULAN_Y, 
            UMUR_BULAN_NUMOFROW, UMUR_BULAN_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkUmurHari() {
    textBox(UMUR_HARI_X, UMUR_HARI_Y,
            UMUR_HARI_NUMOFROW, UMUR_HARI_BOXPERROW,  
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkTelRumah() {
    textBox(TEL_RUMAH_X, TEL_RUMAH_Y, 
            TEL_RUMAH_NUMOFROW, TEL_RUMAH_BOXPERROW,  
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function setPekerjaan(val) {
    let txt = val.slice(0, 30).toUpperCase()
    let textX = PEKERJAAN_X + 15
    text(textX, PEKERJAAN_Y, txt, "helvetica", "bold", 6.9)
}

function checkTelBimbit() {
    textBox(TEL_BIMBIT_X, TEL_BIMBIT_Y, 
            TEL_BIMBIT_NUMOFROW, TEL_BIMBIT_BOXPERROW,   
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkTelPejabat() {
    textBox(TEL_PEJABAT_X, TEL_PEJABAT_Y, 
            TEL_PEJABAT_NUMOFROW, TEL_PEJABAT_BOXPERROW,    
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function setTelNumber(val) {
    textBox(TEL_NUMBER_X, TEL_NUMBER_Y, 
            TEL_NUMBER_NUMOFROW, TEL_NUMBER_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")
}

function setAlamatKediaman(val) {
    text2CharIn1Box(ALAMAT_KEDIAMAN1_X, ALAMAT_KEDIAMAN1_Y, 
            ALAMAT_KEDIAMAN1_NUMOFROW, ALAMAT_KEDIAMAN1_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")
    if (val.length > (ALAMAT_KEDIAMAN1_BOXPERROW*2)) {
        text2CharIn1Box(ALAMAT_KEDIAMAN2_X, ALAMAT_KEDIAMAN2_Y, 
            ALAMAT_KEDIAMAN2_NUMOFROW, ALAMAT_KEDIAMAN2_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val.slice((ALAMAT_KEDIAMAN1_BOXPERROW*2)), "bold")
    }
}

function setAlamatPejabat(val) {
    text2CharIn1Box(ALAMAT_PEJABAT_X, ALAMAT_PEJABAT_Y, 
            ALAMAT_PEJABAT_NUMOFROW, ALAMAT_PEJABAT_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")    
}

function checkDisease(index) {
    let colInd = index%3
    let textX = DISEASE_BOX_BASE_X_ARR[colInd]

    let boxDisplY = 5.74 * (Math.floor(index/3))
    let textY = DISEASE_BOX_BASE_Y + boxDisplY

    textBox(textX, textY, 1, 1,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y, 
            "X", "bold")
}

function setOtherDisease(val) {
    let txt = val.slice(0, 18).toUpperCase()
    let textX = OTHER_DISEASE_X + 29
    text(textX, OTHER_DISEASE_Y, txt, "helvetica", "bold", 6.9)
}

function checkKes() {
    textBox(KES_X, KES_Y, 
            KES_NUMOFROW, KES_BOXPERROW,     
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkKontak() {
    textBox(KONTAK_X, KONTAK_Y, 
            KONTAK_NUMOFROW, KONTAK_BOXPERROW,     
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkFomema() {
    textBox(FOMEMA_X, FOMEMA_Y, 
            FOMEMA_NUMOFROW, FOMEMA_BOXPERROW,    
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkUjianSaringan() {
    textBox(UJIAN_SARINGAN_X, UJIAN_SARINGAN_Y, 
            UJIAN_SARINGAN_NUMOFROW, UJIAN_SARINGAN_BOXPERROW,    
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function setUjianSaringan(val) {
    let txt = val.slice(0, 15).toUpperCase()
    let textX = UJIAN_SARINGAN_NAME_X + 17
    text(textX, UJIAN_SARINGAN_NAME_Y, txt, "helvetica", "bold", 6.9)
}

function checkStatusHidup() {
    textBox(STATUS_HIDUP_X, STATUS_HIDUP_Y, 
            STATUS_HIDUP_NUMOFROW, STATUS_HIDUP_BOXPERROW,    
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkStatusMati() {
    textBox(STATUS_MATI_X, STATUS_MATI_Y, 
            STATUS_MATI_NUMOFROW, STATUS_MATI_BOXPERROW,    
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function setTarikhMati(val) {
    let date = val.split("-")
    textBox(TARIKH_MATI_DAY_X, TARIKH_MATI_DAY_Y, 
            TARIKH_MATI_DAY_NUMOFROW, TARIKH_MATI_DAY_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[2], "bold")

    textBox(TARIKH_MATI_MTH_X, TARIKH_MATI_MTH_Y, 
            TARIKH_MATI_MTH_NUMOFROW, TARIKH_MATI_MTH_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[1], "bold")

    textBox(TARIKH_MATI_YR_X, TARIKH_MATI_YR_Y, 
            TARIKH_MATI_YR_NUMOFROW, TARIKH_MATI_YR_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[0], "bold")
}

function setTarikhOnset(val) {
    let date = val.split("-")
    textBox(TARIKH_ONSET_DAY_X, TARIKH_ONSET_DAY_Y, 
            TARIKH_ONSET_DAY_NUMOFROW, TARIKH_ONSET_DAY_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[2], "bold")

    textBox(TARIKH_ONSET_MTH_X, TARIKH_ONSET_MTH_Y, 
            TARIKH_ONSET_MTH_NUMOFROW, TARIKH_ONSET_MTH_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[1], "bold")

    textBox(TARIKH_ONSET_YR_X, TARIKH_ONSET_YR_Y, 
            TARIKH_ONSET_YR_NUMOFROW, TARIKH_ONSET_YR_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[0], "bold")
}

function setUjianMakmal(val) {
    let txt = val.slice(0, 15).toUpperCase()
    let textX = UJIAN_MAKMAL_NAME_X + 17
    text(textX, UJIAN_MAKMAL_NAME_Y, txt, "helvetica", "bold", 6.9)
}

function setTarikhSampling(val) {
    let date = val.split("-")
    textBox(TARIKH_SAMPLING_DAY_X, TARIKH_SAMPLING_DAY_Y, 
            TARIKH_SAMPLING_DAY_NUMOFROW, TARIKH_SAMPLING_DAY_BOXPERROW,  
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[2], "bold")

    textBox(TARIKH_SAMPLING_MTH_X, TARIKH_SAMPLING_MTH_Y, 
            TARIKH_SAMPLING_MTH_NUMOFROW, TARIKH_SAMPLING_MTH_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[1], "bold")

    textBox(TARIKH_SAMPLING_YR_X, TARIKH_SAMPLING_YR_Y, 
            TARIKH_SAMPLING_YR_NUMOFROW, TARIKH_SAMPLING_YR_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[0], "bold")
}

function checkUjianPositif() {
    textBox(UJIAN_POSITIVE_X, UJIAN_POSITIVE_Y, 
            UJIAN_POSITIVE_NUMOFROW, UJIAN_POSITIVE_BOXPERROW,   
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkUjianNegatif() {
    textBox(UJIAN_NEGATIVE_X, UJIAN_NEGATIVE_Y, 
            UJIAN_NEGATIVE_NUMOFROW, UJIAN_NEGATIVE_BOXPERROW,   
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkUjianBelumSiap() {
    textBox(UJIAN_BELUM_SIAP_X, UJIAN_BELUM_SIAP_Y, 
            UJIAN_BELUM_SIAP_NUMOFROW, UJIAN_BELUM_SIAP_BOXPERROW,    
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkDiagSementara() {
    textBox(DIAG_SEMENTARA_X, DIAG_SEMENTARA_Y, 
            DIAG_SEMENTARA_NUMOFROW, DIAG_SEMENTARA_BOXPERROW,    
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function checkDiagDisahkan() {
    textBox(DIAG_DISAHKAN_X, DIAG_DISAHKAN_Y, 
            DIAG_DISAHKAN_NUMOFROW, DIAG_DISAHKAN_BOXPERROW,     
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            "X", "bold")
}

function setTarikhDiag(val) {
    let date = val.split("-")
    textBox(TARIKH_DIAG_DAY_X, TARIKH_DIAG_DAY_Y, 
            TARIKH_DIAG_DAY_NUMOFROW, TARIKH_DIAG_DAY_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[2], "bold")

    textBox(TARIKH_DIAG_MTH_X, TARIKH_DIAG_MTH_Y, 
            TARIKH_DIAG_MTH_NUMOFROW, TARIKH_DIAG_MTH_BOXPERROW,  
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[1], "bold")

    textBox(TARIKH_DIAG_YR_X, TARIKH_DIAG_YR_Y, 
            TARIKH_DIAG_YR_NUMOFROW, TARIKH_DIAG_YR_BOXPERROW,
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[0], "bold")
}

function setMaklumatKlinikal(val) {
    textLargeBox(MAKLUMAT_KLINIKAL_X, MAKLUMAT_KLINIKAL_Y,
            SMALL_BOX_WIDTH,  
            LARGE_BOX_WIDTH, LARGE_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")    
}

function setKomen(val) {
    textLargeBox(KOMEN_X, KOMEN_Y, 
            SMALL_BOX_WIDTH,  
            MEDIUM_BOX_WIDTH, MEDIUM_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")    
}

function setNamaOfficer(val) {
    textBox(NAMA_OFFICER_X, NAMA_OFFICER_Y, 
            NAMA_OFFICER_NUMOFROW, NAMA_OFFICER_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")    
}

function setNamaHospKlinik(val) {
    textBox(NAMA_HOSP_KLINIK_X, NAMA_HOSP_KLINIK_Y, 
            NAMA_HOSP_KLINIK_NUMOFROW, NAMA_HOSP_KLINIK_BOXPERROW,  
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            val, "bold")    
}

function setTarikhNotifikasi(val) {
    let date = val.split("-")
    textBox(TARIKH_NOTIFIKASI_DAY_X, TARIKH_NOTIFIKASI_DAY_Y, 
            TARIKH_NOTIFIKASI_DAY_NUMOFROW, TARIKH_NOTIFIKASI_DAY_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[2], "bold")

    textBox(TARIKH_NOTIFIKASI_MTH_X, TARIKH_NOTIFIKASI_MTH_Y, 
            TARIKH_NOTIFIKASI_MTH_NUMOFROW, TARIKH_NOTIFIKASI_MTH_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[1], "bold")

    textBox(TARIKH_NOTIFIKASI_YR_X, TARIKH_NOTIFIKASI_YR_Y, 
            TARIKH_NOTIFIKASI_YR_NUMOFROW, TARIKH_NOTIFIKASI_YR_BOXPERROW, 
            SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
            SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y,
            date[0], "bold")
}

function setTandatangan(val) {
    const textX = TANDATANGAN_X 
    text(textX, TANDATANGAN_Y, val, "helvetica", "bold", 6.9)
}

function drawQRCode(val) {
    doc.text(val, 'PNG', TANDATANGAN_X+4, TANDATANGAN_Y+4,
             5, 5, '', 'NONE', 0)
}





/* ===========
    RENDERING
   =========== */

/* 
    PRE-TITLE
*/
text(99.62, 1.18, "JADUAL", "helvetica", "normal", 5)
text(97.89, 3.68, "(Peraturan 2)", "helvetica", "normal", 5)
text(100.64, 6.18, "Borang", "helvetica", "normal", 5)
text(97.89, 8.67, "(Peraturan 2)", "helvetica", "normal", 5)
text(72.68, 11.17, "AKTA PENCEGAHAN DAN PENGAWALAN PENYAKIT BERJANGKIT 1988", "helvetica", "normal", 5)
text(48.08, 13.67, "PERATURAN-PERATURAN PENCEGAHAN DAN PENGAWALAN PENYAKIT BERJANGKIT (BORANG NOTIS (PINDAAN) 2011", "helvetica", "normal", 5)
text(169.77, 11.17, "Borang Notis: Rev/2010", "helvetica", "normal", 5)
text(169.77, 13.67, "No. Siri:", "helvetica", "normal", 5)


/* 
TITLE
*/
text(49.49, 18.5, "NOTIFIKASI PENYAKIT BERJANGKIT YANG PERLU DILAPORKAN",
"helvetica", "bold", 9.8)


/* 
1SUBTITLE
*/
text(64.64, 22.5, "(Seksyen 10, Akta Pencegahan Dan Pengawalan Penyakit Berjangkit 1988)", 
"helvetica", "normal", 7)


/* 
1ST RECT
*/
rect(BIG_RECT_X, 25.88, BIG_RECT_WIDTH, 4.45, true)
// Section-1 Title
text(6.74, 26.48, "  A. MAKLUMAT PESAKIT", "helvetica", "normal", 6.9)


/* 
2ND RECT - Name
*/
rect(BIG_RECT_X, 30.33, BIG_RECT_WIDTH, 21, false)
// Nama 
text(10.47, 32.53, "1. Nama Penuh (HURUF BESAR):", "helvetica", "normal", 6.9)
createBox(NAMA_X, NAMA_Y, 
        NAMA_NUMOFROW, NAMA_BOXPERROW,
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
// Nama pengiring
text(14.58, 41.63, "Nama Pengiring (Ibu/Bapa/Penjaga):", "helvetica", "normal", 6.9)
createBox(NAMA_PENGIRING_X, NAMA_PENGIRING_Y, 
        NAMA_PENGIRING_NUMOFROW, NAMA_PENGIRING_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(14.58, 45.02, "(Jika belum mempunyai Kad Pengenalan diri)", "helvetica", "normal", 6)


/* 
3RD RECT - ID, No Daftar Hosp/Klinik, Wad, Date of Admission
*/
rect(BIG_RECT_X, 51.30, BIG_RECT_WIDTH, 17, false)
// Kad pengenalan
text(10.47, 53.15, "2. No. Kad Pengenalan Diri / Dokumen Perjalanan", "helvetica", "normal", 6.9)
createBox(ID_X, ID_Y, ID_NUMOFROW, ID_BOXPERROW, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
createBox(ID_SENDIRI_X, ID_SENDIRI_Y, 
        ID_SENDIRI_NUMOFROW, ID_SENDIRI_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(160.84, 53.15, "Sendiri", "helvetica", "normal", 6.9)
createBox(ID_PENGIRING_X, ID_PENGIRING_Y, 
        ID_PENGIRING_NUMOFROW, ID_PENGIRING_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(178.79, 53.15, "Pengiring", "helvetica", "normal", 6.9)
text(42.25, 57, "(Untuk Bukan Warganegara)", "helvetica", "normal", 6.9)
// No. pendaftaran hosp/klinik
text(13, 62.43, "No. Daftar Hospital / Klinik", "helvetica", "normal", 6.9)
createBox(NO_DAFTAR_HOSP_KLINIK_X, NO_DAFTAR_HOSP_KLINIK_Y, 
        NO_DAFTAR_HOSP_KLINIK_NUMOFROW, NO_DAFTAR_HOSP_KLINIK_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(WAD_X, WAD_Y, "Nama Wad:_______________", "helvetica", "normal", 6.9)
text(124.22, 62.43, "Tarikh Masuk Wad:", "helvetica", "normal", 6.9)
createBox(TARIKH_ADM_DAY_X, TARIKH_ADM_DAY_Y, 
        TARIKH_ADM_DAY_NUMOFROW, TARIKH_ADM_DAY_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(157.96, 62.43, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_ADM_MTH_X, TARIKH_ADM_MTH_Y, 
        TARIKH_ADM_MTH_NUMOFROW, TARIKH_ADM_MTH_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(171.42, 62.43, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_ADM_YR_X, TARIKH_ADM_YR_Y, 
        TARIKH_ADM_YR_NUMOFROW, TARIKH_ADM_YR_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)


/* 
4TH RECT - Nationality, Gender, DOB, Age, Occupation
*/
rect(BIG_RECT_X, 68.27, BIG_RECT_WIDTH/2, 37, false)
rect(BIG_RECT_X+(BIG_RECT_WIDTH/2), 68.27, BIG_RECT_WIDTH/2, 37, false)
// left-half
text(10.47, 70.79, "3. Kewarganegaraan:", "helvetica", "normal", 6.9)
text(14.58, 74.73, "Warganegara:", "helvetica", "normal", 6.9)
createBox(WARGANEGARA_YA_X, WARGANEGARA_YA_Y, 
        WARGANEGARA_YA_NUMOFROW, WARGANEGARA_YA_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(19.06, 78.96, "Ya", "helvetica", "normal", 6.9)
text(28.04, 78.96, "Keturunan:", "helvetica", "normal", 6.9)
createBox(KETURUNAN_X, KETURUNAN_Y, 
        KETURUNAN_NUMOFROW, KETURUNAN_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(28.04, 84.13, "Sukuketurunan:", "helvetica", "normal", 6.9)
createBox(SUKUKETURUNAN_X, SUKUKETURUNAN_Y, 
        SUKUKETURUNAN_NUMOFROW, SUKUKETURUNAN_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(28.6, 88.15, "(Bagi O/Asli, Pribumi Sabah/Sarawak)", "helvetica", "normal", 6.9)
createBox(WARGANEGARA_TIDAK_X, WARGANEGARA_TIDAK_Y, 
        WARGANEGARA_TIDAK_NUMOFROW, WARGANEGARA_TIDAK_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(19.06, 92.43, "Tidak", "helvetica", "normal", 6.9)
text(28.04, 92.43, "Negara Asal:", "helvetica", "normal", 6.9)
createBox(NEGARA_ASAL_X, NEGARA_ASAL_Y, 
        NEGARA_ASAL_NUMOFROW, NEGARA_ASAL_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(28.04, 96.49, "Status", "helvetica", "normal", 6.9)
text(28.04, 100.13, "Kedatangan:", "helvetica", "normal", 6.9)
createBox(KEDATANGAN_IZIN_X, KEDATANGAN_IZIN_Y, 
        KEDATANGAN_IZIN_NUMOFROW, KEDATANGAN_IZIN_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(51.45, 100.13, "Izin", "helvetica", "normal", 6.9)
createBox(KEDATANGAN_TANPA_IZIN_X, KEDATANGAN_TANPA_IZIN_Y, 
        KEDATANGAN_TANPA_IZIN_NUMOFROW, KEDATANGAN_TANPA_IZIN_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(64.91, 100.13, "Tanpa Izin", "helvetica", "normal", 6.9)
createBox(KEDATANGAN_PDK_TETAP_X, KEDATANGAN_PDK_TETAP_Y, 
        KEDATANGAN_PDK_TETAP_NUMOFROW, KEDATANGAN_PDK_TETAP_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(83.83, 100.13, "Penduduk Tetap", "helvetica", "normal", 6.9)
// right-half
text(110.76, 70.79, "4. Jantina:", "helvetica", "normal", 6.9)
createBox(JANTINA_LELAKI_X, JANTINA_LELAKI_Y, 
        JANTINA_LELAKI_NUMOFROW, JANTINA_LELAKI_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(128.71, 70.79, "Lelaki", "helvetica", "normal", 6.9)
createBox(JANTINA_PEREMPUAN_X, JANTINA_PEREMPUAN_Y, 
        JANTINA_PEREMPUAN_NUMOFROW, JANTINA_PEREMPUAN_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(147.37, 70.79, "Perempuan", "helvetica", "normal", 6.9)
text(110.76, 78.96, "5. Tarikh Lahir:", "helvetica", "normal", 6.9)
createBox(TARIKH_LAHIR_DAY_X, TARIKH_LAHIR_DAY_Y, 
        TARIKH_LAHIR_DAY_NUMOFROW, TARIKH_LAHIR_DAY_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(139.12, 78.75, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_LAHIR_MTH_X, TARIKH_LAHIR_MTH_Y, 
        TARIKH_LAHIR_MTH_NUMOFROW, TARIKH_LAHIR_MTH_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(152.58, 78.75, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_LAHIR_YR_X, TARIKH_LAHIR_YR_Y, 
        TARIKH_LAHIR_YR_NUMOFROW, TARIKH_LAHIR_YR_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(110.76, 88.15, "6. Umur:", "helvetica", "normal", 6.9)
createBox(UMUR_X, UMUR_Y, UMUR_NUMOFROW, UMUR_BOXPERROW, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
createBox(UMUR_TAHUN_X, UMUR_TAHUN_Y, 
        UMUR_TAHUN_NUMOFROW, UMUR_TAHUN_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(151.86, 88.15, "Tahun", "helvetica", "normal", 6.9)
createBox(UMUR_BULAN_X, UMUR_BULAN_Y, 
        UMUR_BULAN_NUMOFROW, UMUR_BULAN_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(165.32, 88.15, "Bulan", "helvetica", "normal", 6.9)
createBox(UMUR_HARI_X, UMUR_HARI_Y,
        UMUR_HARI_NUMOFROW, UMUR_HARI_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(178.79, 88.15, "Hari", "helvetica", "normal", 6.9)
text(PEKERJAAN_X, PEKERJAAN_Y, "7. Pekerjaan:____________________________________________", "helvetica", "normal", 6.9)
text(115.99, 100.6, "(Jika tidak bekerja, nyatakan status diri)", "helvetica", "normal", 6.9)


/* 
5TH RECT - Telephone, Address
*/
rect(BIG_RECT_X, 105.27, BIG_RECT_WIDTH, 25, false)
text(10.47, 107.52, "8. No. Telefon:", "helvetica", "normal", 6.9)
createBox(TEL_RUMAH_X, TEL_RUMAH_Y, 
        TEL_RUMAH_NUMOFROW, TEL_RUMAH_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(41.5, 107.52, "Rumah", "helvetica", "normal", 6.9)
createBox(TEL_BIMBIT_X, TEL_BIMBIT_Y, 
        TEL_BIMBIT_NUMOFROW, TEL_BIMBIT_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(60.42, 107.52, "Tel. Bimbit", "helvetica", "normal", 6.9)
createBox(TEL_PEJABAT_X, TEL_PEJABAT_Y, 
        TEL_PEJABAT_NUMOFROW, TEL_PEJABAT_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(79.35, 107.52, "Pejabat", "helvetica", "normal", 6.9)
createBox(TEL_NUMBER_X, TEL_NUMBER_Y, 
        TEL_NUMBER_NUMOFROW, TEL_NUMBER_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(13, 111.38, "(Untuk dihubungi)", "helvetica", "normal", 6.9)
text(10.47, 115.65, "9. Alamat Kediaman", "helvetica", "normal", 6.9)
createBox(ALAMAT_KEDIAMAN1_X, ALAMAT_KEDIAMAN1_Y, 
        ALAMAT_KEDIAMAN1_NUMOFROW, ALAMAT_KEDIAMAN1_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
createBox(ALAMAT_KEDIAMAN2_X, ALAMAT_KEDIAMAN2_Y, 
        ALAMAT_KEDIAMAN2_NUMOFROW, ALAMAT_KEDIAMAN2_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(115.24, 115.65, "10. Alamat Tempat Kerja / Belajar:", "helvetica", "normal", 6.9)
createBox(ALAMAT_PEJABAT_X, ALAMAT_PEJABAT_Y, 
        ALAMAT_PEJABAT_NUMOFROW, ALAMAT_PEJABAT_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)


/* 
6TH RECT
*/
rect(BIG_RECT_X, 130.27, BIG_RECT_WIDTH, 4.45, true)
// Section-1 Title
text(6.74, 131.59, "  B. DIAGNOSIS PENYAKIT", "helvetica", "normal", 6.9)


/* 
7TH RECT - Disease
*/
rect(BIG_RECT_X, 134.72, BIG_RECT_WIDTH, 89, false)


for (let i=0; i<15; i++) {
let boxDisplY = DISEASE_BOX_BASE_DISPL_Y * i 
let textDisplY = DISEASE_TXT_BASE_DISPL_Y * i
let d = i * 3 

createBox(DISEASE_BOX_BASE_X1, DISEASE_BOX_BASE_Y+boxDisplY, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(DISEASE_TXT_BASE_X1, DISEASE_TXT_BASE_Y+textDisplY, diseases[d], "helvetica", "normal", 6.9)
createBox(DISEASE_BOX_BASE_X2, DISEASE_BOX_BASE_Y+boxDisplY, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(DISEASE_TXT_BASE_X2, DISEASE_TXT_BASE_Y+textDisplY, diseases[d+1], "helvetica", "normal", 6.9)
createBox(DISEASE_BOX_BASE_X3, DISEASE_BOX_BASE_Y+boxDisplY, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(DISEASE_TXT_BASE_X3, DISEASE_TXT_BASE_Y+textDisplY, diseases[d+2], "helvetica", "normal", 6.9)
}


/* 
8TH RECT
*/
rect(BIG_RECT_X, 223.72, BIG_RECT_WIDTH, 3, true)
// Section-1 Title
text(8, 224.5, "Selain dari notifikasi bertulis, penyakit berikut perlu dinotifikasi melalui telefon dalam tempoh 24 jam iaitu:- Poliomielitis Akut, Kolera, Demam Denggi, Diptheria, Keracunan Makanan, Plague, Rabies dan Demam Kuning.", "helvetica", "bold", 5)
// text(8, 227.5, "Keracunan Makanan, Plague, Rabies dan Demam Kuning.", "helvetica", "bold", 5)


/* 
9TH RECT - Case Detection Method, Patient Status, Onset
*/
rect(BIG_RECT_X, 226.72, BIG_RECT_WIDTH/3, 16, false)
rect(BIG_RECT_X+(BIG_RECT_WIDTH/3), 226.72, BIG_RECT_WIDTH/3, 16, false)
rect(BIG_RECT_X+(2*BIG_RECT_WIDTH/3), 226.72, BIG_RECT_WIDTH/3, 16, false)
// 1st-third
text(10.43, 227.61, "11. Cara Pengesanan Kes:", "helvetica", "normal", 6.9)
createBox(KES_X, KES_Y, 
        KES_NUMOFROW, KES_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(19.02, 231.8, "Kes", "helvetica", "normal", 6.9)
createBox(KONTAK_X, KONTAK_Y, 
        KONTAK_NUMOFROW, KONTAK_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(36.97, 231.8, "Kontak", "helvetica", "normal", 6.9)
createBox(FOMEMA_X, FOMEMA_Y, 
        FOMEMA_NUMOFROW, FOMEMA_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(55.89, 231.8, "FOMEMA", "helvetica", "normal", 6.9)
createBox(UJIAN_SARINGAN_X, UJIAN_SARINGAN_Y, 
        UJIAN_SARINGAN_NUMOFROW, UJIAN_SARINGAN_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(UJIAN_SARINGAN_NAME_X, UJIAN_SARINGAN_NAME_Y, "Ujian Saringan ______________________", "helvetica", "normal", 6.9)
// 2nd-third
text(73.84, 227.61, "12. Status Pesakit:", "helvetica", "normal", 6.9)
createBox(STATUS_HIDUP_X, STATUS_HIDUP_Y, 
        STATUS_HIDUP_NUMOFROW, STATUS_HIDUP_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(82.79, 231.8, "Hidup", "helvetica", "normal", 6.9)
createBox(STATUS_MATI_X, STATUS_MATI_Y, 
        STATUS_MATI_NUMOFROW, STATUS_MATI_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(82.79, 238.01, "Mati", "helvetica", "normal", 6.9)
createBox(TARIKH_MATI_DAY_X, TARIKH_MATI_DAY_Y, 
        TARIKH_MATI_DAY_NUMOFROW, TARIKH_MATI_DAY_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)//92.21(-35.9);78.02(+162.86)
text(101.22, 237.61, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_MATI_MTH_X, TARIKH_MATI_MTH_Y, 
        TARIKH_MATI_MTH_NUMOFROW, TARIKH_MATI_MTH_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(114.68, 237.61, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_MATI_YR_X, TARIKH_MATI_YR_Y, 
        TARIKH_MATI_YR_NUMOFROW, TARIKH_MATI_YR_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
// 3rd-third
text(140.37, 227.61, "13. Tarikh Onset:", "helvetica", "normal", 6.9)
createBox(TARIKH_ONSET_DAY_X, TARIKH_ONSET_DAY_Y, 
        TARIKH_ONSET_DAY_NUMOFROW, TARIKH_ONSET_DAY_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)//144.26(+54.05);235.01(-5.87)
text(155.27, 231.74, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_ONSET_MTH_X, TARIKH_ONSET_MTH_Y, 
        TARIKH_ONSET_MTH_NUMOFROW, TARIKH_ONSET_MTH_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(168.73, 231.74, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_ONSET_YR_X, TARIKH_ONSET_YR_Y, 
        TARIKH_ONSET_YR_NUMOFROW, TARIKH_ONSET_YR_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)


/* 
10TH RECT - Test, Result, Diagnosis
*/
rect(BIG_RECT_X, 242.72, BIG_RECT_WIDTH/3, 23, false)
rect(BIG_RECT_X+(BIG_RECT_WIDTH/3), 242.72, BIG_RECT_WIDTH/3, 23, false)
rect(BIG_RECT_X+(2*BIG_RECT_WIDTH/3), 242.72, BIG_RECT_WIDTH/3, 23, false)
// 1st-third
text(10.43, 243.85, "14. Ujian Makmal:", "helvetica", "normal", 6.9)
text(UJIAN_MAKMAL_NAME_X, UJIAN_MAKMAL_NAME_Y, "Nama Ujian: (i)_____________________", "helvetica", "normal", 6.9)
text(14.53, 252.5, "(ii)_______________ (iii)________________", "helvetica", "normal", 6.9)
text(14.53, 257.5, "Tarikh Sampel Diambil:", "helvetica", "normal", 6.9)
createBox(TARIKH_SAMPLING_DAY_X, TARIKH_SAMPLING_DAY_Y, 
        TARIKH_SAMPLING_DAY_NUMOFROW, TARIKH_SAMPLING_DAY_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)//13.98(-130.28);265.35(+30.34)
text(24.99, 261.08, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_SAMPLING_MTH_X, TARIKH_SAMPLING_MTH_Y, 
        TARIKH_SAMPLING_MTH_NUMOFROW, TARIKH_SAMPLING_MTH_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(38.45, 261.08, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_SAMPLING_YR_X, TARIKH_SAMPLING_YR_Y, 
        TARIKH_SAMPLING_YR_NUMOFROW, TARIKH_SAMPLING_YR_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
// 2nd-third
text(73.84, 243.85, "15. Keputusan Ujian Makmal:", "helvetica", "normal", 6.9)
createBox(UJIAN_POSITIVE_X, UJIAN_POSITIVE_Y, 
        UJIAN_POSITIVE_NUMOFROW, UJIAN_POSITIVE_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(86.28, 249.14, "Positif (_____________________________)", "helvetica", "normal", 6.9)
createBox(UJIAN_NEGATIVE_X, UJIAN_NEGATIVE_Y, 
        UJIAN_NEGATIVE_NUMOFROW, UJIAN_NEGATIVE_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(86.28, 254.5, "Negatif", "helvetica", "normal", 6.9)
createBox(UJIAN_BELUM_SIAP_X, UJIAN_BELUM_SIAP_Y, 
        UJIAN_BELUM_SIAP_NUMOFROW, UJIAN_BELUM_SIAP_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(86.28, 259.8, "Belum Siap", "helvetica", "normal", 6.9)
// 3rd-third
text(140.37, 243.6, "16. Status Diagnosis:", "helvetica", "normal", 6.9)
createBox(DIAG_SEMENTARA_X, DIAG_SEMENTARA_Y, 
        DIAG_SEMENTARA_NUMOFROW, DIAG_SEMENTARA_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(151.31, 247.23, "Sementara (Provisional/Suspected)", "helvetica", "normal", 6.9)
createBox(DIAG_DISAHKAN_X, DIAG_DISAHKAN_Y, 
        DIAG_DISAHKAN_NUMOFROW, DIAG_DISAHKAN_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(151.31, 252.59, "Disahkan (Confirmed)", "helvetica", "normal", 6.9)
text(144.43, 257.5, "Tarikh Diagnosis", "helvetica", "normal", 6.9)
createBox(TARIKH_DIAG_DAY_X, TARIKH_DIAG_DAY_Y, 
        TARIKH_DIAG_DAY_NUMOFROW, TARIKH_DIAG_DAY_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)//144.26(+54.05);235.01(-5.87)
text(155.27, 261.08, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_DIAG_MTH_X, TARIKH_DIAG_MTH_Y, 
        TARIKH_DIAG_MTH_NUMOFROW, TARIKH_DIAG_MTH_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(168.73, 261.08, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_DIAG_YR_X, TARIKH_DIAG_YR_Y, 
        TARIKH_DIAG_YR_NUMOFROW, TARIKH_DIAG_YR_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)


/* 
11TH RECT - Clinical Info, Comment 
*/
rect(BIG_RECT_X, 265.72, BIG_RECT_WIDTH, 11, false)
text(10.43, 268.15, "17. Maklumat Klinikal", "helvetica", "normal", 6.9)
text(14.43, 272.05, "  Yang Relevan:", "helvetica", "normal", 6.9)
createBox(MAKLUMAT_KLINIKAL_X, MAKLUMAT_KLINIKAL_Y, 
        MAKLUMAT_KLINIKAL_NUMOFROW, MAKLUMAT_KLINIKAL_BOXPERROW, 
        LARGE_BOX_WIDTH, LARGE_BOX_HEIGHT)
text(140.13, 268.15, "18. Komen:", "helvetica", "normal", 6.9)
createBox(KOMEN_X, KOMEN_Y, 
        KOMEN_NUMOFROW, KOMEN_BOXPERROW, 
        MEDIUM_BOX_WIDTH, MEDIUM_BOX_HEIGHT)


/* 
12TH RECT
*/
rect(BIG_RECT_X, 276.72, BIG_RECT_WIDTH, 3.45, true)
// Section-1 Title
text(6.74, 277.2, "  C. MAKLUMAT PEMBERITAHU", "helvetica", "normal", 6)


/* 
13TH RECT - Officer Name, Admission Center, Notification Date
*/
rect(BIG_RECT_X, 280.17, BIG_RECT_WIDTH, 16, false)
text(10.43, 282.17, "19. Nama Pengamal Perubatan:", "helvetica", "normal", 6.9)
createBox(NAMA_OFFICER_X, NAMA_OFFICER_Y, 
        NAMA_OFFICER_NUMOFROW, NAMA_OFFICER_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(10.43, 287.17, "20. Nama Hospital / Klinik dan Alamat:", "helvetica", "normal", 6.9)
createBox(NAMA_HOSP_KLINIK_X, NAMA_HOSP_KLINIK_Y, 
        NAMA_HOSP_KLINIK_NUMOFROW, NAMA_HOSP_KLINIK_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(10.43, 292.17, "21. Tarikh Pemberitahuan:", "helvetica", "normal", 6.9)
createBox(TARIKH_NOTIFIKASI_DAY_X, TARIKH_NOTIFIKASI_DAY_Y, 
        TARIKH_NOTIFIKASI_DAY_NUMOFROW, TARIKH_NOTIFIKASI_DAY_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)//55.51(-88.75);291.17(+30.82)
text(66.52, 291.9, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_NOTIFIKASI_MTH_X, TARIKH_NOTIFIKASI_MTH_Y, 
        TARIKH_NOTIFIKASI_MTH_NUMOFROW, TARIKH_NOTIFIKASI_MTH_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(79.98, 291.9, "-", "helvetica", "normal", 6.9)
createBox(TARIKH_NOTIFIKASI_YR_X, TARIKH_NOTIFIKASI_YR_Y, 
        TARIKH_NOTIFIKASI_YR_NUMOFROW, TARIKH_NOTIFIKASI_YR_BOXPERROW, 
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(TANDATANGAN_X, 289, "????????????????????????????????????????????????", "helvetica", "normal", 6.9)
text(TANDATANGAN_X, 292, "Tandatangan Pengamal Perubatan", "helvetica", "normal", 6.9)


/* ===================================
    Example: Filling up for a patient
   =================================== */

setNama("chow hsien lung")
setID("880601105149")
checkIDSendiri()
setNamaWad('Kenanga 1')
setTarikhAdm('2021-03-13')
checkWarganegaraYa()
setKeturunan('cina')
checkJantinaLelaki()
setTarikhLahir('1988-06-01')
setUmur('32')
checkUmurTahun()
setPekerjaan('Doctor')
checkTelBimbit()
setTelNumber('0163184120')
setAlamatKediaman('C2,Kuarters Klinik Kesihatan Jengka 2, Maran, Pahang')
setAlamatPejabat('C2,Kuarters Klinik Kesihatan Jengka 2, Maran, Pahang')
checkDisease(44)
setOtherDisease('COVID-19')
checkKes()
checkUjianSaringan()
setUjianSaringan('RTK-Ag')
checkStatusHidup()
setTarikhOnset('2021-03-10')
setUjianMakmal('RT-PCR')
setTarikhSampling('2021-03-11')
checkUjianPositif()
checkDiagDisahkan()
setTarikhDiag('2021-03-13')
setMaklumatKlinikal('fever, cough 2/7. Kes Kluster Kilang Alps. fever, cough 2/7. Kes Kluster Kilang Alps. fever, cough 2/7. Kes Kluster Kilang Alps.')
setNamaOfficer('Dr Chow Hsien Lung')
setNamaHospKlinik('PKD Maran')
setTarikhNotifikasi('2021-03-13')
setTandatangan('Dr Chow Hsien Lung\nMPM: 64650\nPKD Maran')


// Output
doc.save("BorangNotifikasi3.pdf"); 

