const { jsPDF } = require("jspdf"); 

const doc = new jsPDF();

const BIG_RECT_X = 6.31
const BIG_RECT_WIDTH = 195.17
const NAMA_TEXTFIELD_X = 51
const NAMA_TEXTFIELD_Y = 31.8
const NAMA_TEXTFIELD_LENGTH = 145.3
const NAME_TEXTFIELD_BOXPERROW = 32
const NAME_TEXTFIELD_NUMOFROW = 2
const SMALL_BOX_WIDTH = 4.5
const SMALL_BOX_HEIGHT = 4.5
const MEDIUM_BOX_WIDTH = 36
const MEDIUM_BOX_HEIGHT = 8
const LARGE_BOX_WIDTH = 99
const LARGE_BOX_HEIGHT = 8
const SMALL_BOX_TEXT_INSET_X = 1
const SMALL_BOX_TEXT_INSET_Y = 1
const SMALL_BOX_TEXT_FONTSIZE = 7.7

function createSmallBox(startX, startY, numRow, cellsPerRow, 
        width, height) {
    for (let i=0; i<numRow; i++) {
        let rectY = startY + (i * height)
        for (let j=0; j<cellsPerRow; j++) {
            let rectX = startX + (j * width)
            doc.rect(rectX, rectY, width, height);
        }
    }
}

function textSmallBox(startX, startY, numRow, cellsPerRow, 
        width, height, insetX, insetY, text) {
    for (let i=0; i<numRow; i++) {
        let textY = startY + (i * height) + insetY 
        for (let j=0; j<cellsPerRow; j++) {
            let textX = startX + (j * width) + insetX
            doc.setFontSize(SMALL_BOX_TEXT_FONTSIZE)
            doc.setFont("times", "normal");
            doc.text(text, textX, textY, {baseline: "top"})
        }
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


// PRE-TITLE
text(99.62, 1.18, "JADUAL", "helvetica", "normal", 5)
text(97.89, 3.68, "(Peraturan 2)", "helvetica", "normal", 5)
text(100.64, 6.18, "Borang", "helvetica", "normal", 5)
text(97.89, 8.67, "(Peraturan 2)", "helvetica", "normal", 5)
text(72.68, 11.17, "AKTA PENCEGAHAN DAN PENGAWALAN PENYAKIT BERJANGKIT 1988", "helvetica", "normal", 5)
text(48.08, 13.67, "PERATURAN-PERATURAN PENCEGAHAN DAN PENGAWALAN PENYAKIT BERJANGKIT (BORANG NOTIS (PINDAAN) 2011", "helvetica", "normal", 5)
text(169.77, 11.17, "Borang Notis: Rev/2010", "helvetica", "normal", 5)
text(169.77, 13.67, "No. Siri:", "helvetica", "normal", 5)


// TITLE
text(49.49, 18.5, "NOTIFIKASI PENYAKIT BERJANGKIT YANG PERLU DILAPORKAN",
    "helvetica", "bold", 9.8)


// SUBTITLE
text(64.64, 22.5, "(Seksyen 10, Akta Pencegahan Dan Pengawalan Penyakit Berjangkit 1988)", 
    "helvetica", "normal", 7)


// 1ST RECT
rect(BIG_RECT_X, 25.88, BIG_RECT_WIDTH, 4.45, true)
// Section-1 Title
text(6.74, 26.48, "  A. MAKLUMAT PESAKIT", "helvetica", "normal", 6.9)


// 2ND RECT
rect(BIG_RECT_X, 30.33, BIG_RECT_WIDTH, 21, false)
// Nama 
text(10.47, 32.53, "1. Nama Penuh (HURUF BESAR):", "helvetica", "normal", 6.9)
createSmallBox(NAMA_TEXTFIELD_X, NAMA_TEXTFIELD_Y, 
        NAME_TEXTFIELD_NUMOFROW, NAME_TEXTFIELD_BOXPERROW,
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
textSmallBox(NAMA_TEXTFIELD_X, NAMA_TEXTFIELD_Y, 
        NAME_TEXTFIELD_NUMOFROW, NAME_TEXTFIELD_BOXPERROW,
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
        SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y, "A")
// Nama pengiring
text(14.58, 41.63, "Nama Pengiring (Ibu/Bapa/Penjaga):", "helvetica", "normal", 6.9)
createSmallBox(59.99, 41.5, 2, 30, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(14.58, 45.02, "(Jika belum mempunyai Kad Pengenalan diri)", "helvetica", "normal", 6)


// 3RD RECT
rect(BIG_RECT_X, 51.30, BIG_RECT_WIDTH, 17, false)
// Kad pengenalan
text(10.47, 53.15, "2. No. Kad Pengenalan Diri / Dokumen Perjalanan", "helvetica", "normal", 6.9)
createSmallBox(68.97, 52.3, 1, 18, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
createSmallBox(155.75, 52.3, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(160.84, 53.15, "Sendiri", "helvetica", "normal", 6.9)
createSmallBox(173.70, 52.3, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(178.79, 53.15, "Pengiring", "helvetica", "normal", 6.9)
text(42.25, 57, "(Untuk Bukan Warganegara)", "helvetica", "normal", 6.9)
// No. pendaftaran hosp/klinik
text(13, 62.43, "No. Daftar Hospital / Klinik", "helvetica", "normal", 6.9)
createSmallBox(46.36, 61.7, 1, 8, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(88.32, 62.43, "Nama Wad:_______________", "helvetica", "normal", 6.9)
text(124.22, 62.43, "Tarikh Masuk Wad:", "helvetica", "normal", 6.9)
createSmallBox(146.95, 61.7, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(157.96, 62.43, "/", "helvetica", "normal", 6.9)
createSmallBox(160.24, 61.7, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(171.42, 62.43, "/", "helvetica", "normal", 6.9)
createSmallBox(173.87, 61.7, 1, 4, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)


// 4TH RECT
rect(BIG_RECT_X, 68.27, BIG_RECT_WIDTH/2, 37, false)
rect(BIG_RECT_X+(BIG_RECT_WIDTH/2), 68.27, BIG_RECT_WIDTH/2, 37, false)
// left-half
text(10.47, 70.79, "3. Kewarganegaraan:", "helvetica", "normal", 6.9)
text(14.58, 74.73, "Warganegara:", "helvetica", "normal", 6.9)
createSmallBox(13.98, 78.02, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(19.06, 78.96, "Ya", "helvetica", "normal", 6.9)
text(28.04, 78.96, "Keturunan:", "helvetica", "normal", 6.9)
createSmallBox(46.36, 78.02, 1, 12, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(28.04, 84.13, "Sukuketurunan:", "helvetica", "normal", 6.9)
createSmallBox(46.36, 83.19, 1, 12, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(28.6, 88.15, "(Bagi O/Asli, Pribumi Sabah/Sarawak)", "helvetica", "normal", 6.9)
createSmallBox(13.98, 91.23, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(19.06, 92.43, "Tidak", "helvetica", "normal", 6.9)
text(28.04, 92.43, "Negara Asal:", "helvetica", "normal", 6.9)
createSmallBox(46.36, 91.23, 1, 12, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(28.04, 96.49, "Status", "helvetica", "normal", 6.9)
text(28.04, 100.13, "Kedatangan:", "helvetica", "normal", 6.9)
createSmallBox(46.36, 99.4, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(51.45, 100.13, "Izin", "helvetica", "normal", 6.9)
createSmallBox(59.82, 99.4, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(64.91, 100.13, "Tanpa Izin", "helvetica", "normal", 6.9)
createSmallBox(78.92, 99.4, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(83.83, 100.13, "Penduduk Tetap", "helvetica", "normal", 6.9)
// right-half
text(110.76, 70.79, "4. Jantina:", "helvetica", "normal", 6.9)
createSmallBox(123.62, 70.11, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(128.71, 70.79, "Lelaki", "helvetica", "normal", 6.9)
createSmallBox(141.74, 70.11, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(147.37, 70.79, "Perempuan", "helvetica", "normal", 6.9)
text(110.76, 78.96, "5. Tarikh Lahir:", "helvetica", "normal", 6.9)
createSmallBox(128.11, 78.02, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(139.12, 78.75, "/", "helvetica", "normal", 6.9)
createSmallBox(141.4, 78.02, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(152.58, 78.75, "/", "helvetica", "normal", 6.9)
createSmallBox(155.03, 78.02, 1, 4, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(110.76, 88.15, "6. Umur:", "helvetica", "normal", 6.9)
createSmallBox(123.62, 87.46, 1, 3, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
createSmallBox(146.78, 87.46, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(151.86, 88.15, "Tahun", "helvetica", "normal", 6.9)
createSmallBox(160.24, 87.46, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(165.32, 88.15, "Bulan", "helvetica", "normal", 6.9)
createSmallBox(173.87, 87.46, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(178.79, 88.15, "Hari", "helvetica", "normal", 6.9)
text(110.76, 96.49, "7. Pekerjaan:____________________________________________", "helvetica", "normal", 6.9)
text(115.99, 100.6, "(Jika tidak bekerja, nyatakan status diri)", "helvetica", "normal", 6.9)


// 5TH RECT
rect(BIG_RECT_X, 105.27, BIG_RECT_WIDTH, 25, false)
text(10.47, 107.52, "8. No. Telefon:", "helvetica", "normal", 6.9)
createSmallBox(36.41, 106.54, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(41.5, 107.52, "Rumah", "helvetica", "normal", 6.9)
createSmallBox(55.34, 106.54, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(60.42, 107.52, "Tel. Bimbit", "helvetica", "normal", 6.9)
createSmallBox(73.46, 106.54, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(79.35, 107.52, "Pejabat", "helvetica", "normal", 6.9)
createSmallBox(92.38, 106.54, 1, 12, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(13, 111.38, "(Untuk dihubungi)", "helvetica", "normal", 6.9)
text(10.47, 115.65, "9. Alamat Kediaman", "helvetica", "normal", 6.9)
createSmallBox(36.58, 114.84, 1, 16, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
createSmallBox(14.1, 119.4, 2, 21, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(115.24, 115.65, "10. Alamat Tempat Kerja / Belajar:", "helvetica", "normal", 6.9)
createSmallBox(119.13, 119.4, 2, 17, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)


// 6TH RECT
rect(BIG_RECT_X, 130.27, BIG_RECT_WIDTH, 4.45, true)
// Section-1 Title
text(6.74, 131.59, "  B. DIAGNOSIS PENYAKIT", "helvetica", "normal", 6.9)


// 7TH RECT
rect(BIG_RECT_X, 134.72, BIG_RECT_WIDTH, 89, false)
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
for (let i=0; i<15; i++) {
    boxDisplY = 5.74 * i 
    textDisplY = 5.86 * i
    d = i * 3 

    createSmallBox(13.98, 136.66+boxDisplY, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
    text(20.50, 137.47+textDisplY, diseases[d], "helvetica", "normal", 6.9)
    createSmallBox(79.23, 136.66+boxDisplY, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
    text(84.53, 137.47+textDisplY, diseases[d+1], "helvetica", "normal", 6.9)
    createSmallBox(141.74, 136.66+boxDisplY, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
    text(147.59, 137.47+textDisplY, diseases[d+2], "helvetica", "normal", 6.9)
}


// 8TH RECT
rect(BIG_RECT_X, 223.72, BIG_RECT_WIDTH, 3, true)
// Section-1 Title
text(8, 224.5, "Selain dari notifikasi bertulis, penyakit berikut perlu dinotifikasi melalui telefon dalam tempoh 24 jam iaitu:- Poliomielitis Akut, Kolera, Demam Denggi, Diptheria, Keracunan Makanan, Plague, Rabies dan Demam Kuning.", "helvetica", "bold", 5)
// text(8, 227.5, "Keracunan Makanan, Plague, Rabies dan Demam Kuning.", "helvetica", "bold", 5)


// 9TH RECT
rect(BIG_RECT_X, 226.72, BIG_RECT_WIDTH/3, 16, false)
rect(BIG_RECT_X+(BIG_RECT_WIDTH/3), 226.72, BIG_RECT_WIDTH/3, 16, false)
rect(BIG_RECT_X+(2*BIG_RECT_WIDTH/3), 226.72, BIG_RECT_WIDTH/3, 16, false)
// 1st-third
text(10.43, 227.61, "11. Cara Pengesanan Kes:", "helvetica", "normal", 6.9)
createSmallBox(13.98, 231.01, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(19.02, 231.8, "Kes", "helvetica", "normal", 6.9)
createSmallBox(31.93, 231.01, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(36.97, 231.8, "Kontak", "helvetica", "normal", 6.9)
createSmallBox(51.02, 231.01, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(55.89, 231.8, "FOMEMA", "helvetica", "normal", 6.9)
createSmallBox(13.98, 236.88, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(19.02, 238.01, "Ujian Saringan ______________________", "helvetica", "normal", 6.9)
// 2nd-third
text(73.84, 227.61, "12. Status Pesakit:", "helvetica", "normal", 6.9)
createSmallBox(77.75, 231.01, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(82.79, 231.8, "Hidup", "helvetica", "normal", 6.9)
createSmallBox(77.75, 236.88, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(82.79, 238.01, "Mati", "helvetica", "normal", 6.9)
createSmallBox(90.21, 236.88, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)//92.21(-35.9);78.02(+162.86)
text(101.22, 237.61, "-", "helvetica", "normal", 6.9)
createSmallBox(103.5, 236.88, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(114.68, 237.61, "-", "helvetica", "normal", 6.9)
createSmallBox(117.13, 236.88, 1, 4, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
// 3rd-third
text(140.37, 227.61, "13. Tarikh Onset:", "helvetica", "normal", 6.9)
createSmallBox(144.26, 231.01, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)//144.26(+54.05);235.01(-5.87)
text(155.27, 231.74, "-", "helvetica", "normal", 6.9)
createSmallBox(157.55, 231.01, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(168.73, 231.74, "-", "helvetica", "normal", 6.9)
createSmallBox(171.18, 231.01, 1, 4, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)


// 10TH RECT
rect(BIG_RECT_X, 242.72, BIG_RECT_WIDTH/3, 23, false)
rect(BIG_RECT_X+(BIG_RECT_WIDTH/3), 242.72, BIG_RECT_WIDTH/3, 23, false)
rect(BIG_RECT_X+(2*BIG_RECT_WIDTH/3), 242.72, BIG_RECT_WIDTH/3, 23, false)
// 1st-third
text(10.43, 243.85, "14. Ujian Makmal:", "helvetica", "normal", 6.9)
text(14.53, 248.14, "Nama Ujian: (i)_____________________", "helvetica", "normal", 6.9)
text(14.53, 252.5, "(ii)_______________ (iii)________________", "helvetica", "normal", 6.9)
text(14.53, 257.5, "Tarikh Sampel Diambil:", "helvetica", "normal", 6.9)
createSmallBox(13.98, 260.35, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)//13.98(-130.28);265.35(+30.34)
text(24.99, 261.08, "-", "helvetica", "normal", 6.9)
createSmallBox(27.27, 260.35, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(38.45, 261.08, "-", "helvetica", "normal", 6.9)
createSmallBox(40.9, 260.35, 1, 4, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
// 2nd-third
text(73.84, 243.85, "15. Keputusan Ujian Makmal:", "helvetica", "normal", 6.9)
createSmallBox(77.75, 247.61, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(86.28, 249.14, "Positif (_____________________________)", "helvetica", "normal", 6.9)
createSmallBox(77.75, 252.84, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(86.28, 254.5, "Negatif", "helvetica", "normal", 6.9)
createSmallBox(77.75, 258, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(86.28, 259.8, "Belum Siap", "helvetica", "normal", 6.9)
// 3rd-third
text(140.37, 243.6, "16. Status Diagnosis:", "helvetica", "normal", 6.9)
createSmallBox(144.43, 246.61, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(151.31, 247.23, "Sementara (Provisional/Suspected)", "helvetica", "normal", 6.9)
createSmallBox(144.43, 251.84, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(151.31, 252.59, "Disahkan (Confirmed)", "helvetica", "normal", 6.9)
text(144.43, 257.5, "Tarikh Diagnosis", "helvetica", "normal", 6.9)
createSmallBox(144.26, 260.35, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)//144.26(+54.05);235.01(-5.87)
text(155.27, 261.08, "-", "helvetica", "normal", 6.9)
createSmallBox(157.55, 260.35, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(168.73, 261.08, "-", "helvetica", "normal", 6.9)
createSmallBox(171.18, 260.35, 1, 4, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)


// 11TH RECT
rect(BIG_RECT_X, 265.72, BIG_RECT_WIDTH, 11, false)
text(10.43, 268.15, "17. Maklumat Klinikal", "helvetica", "normal", 6.9)
text(14.43, 272.05, "  Yang Relevan:", "helvetica", "normal", 6.9)
createSmallBox(36.41, 267.49, 1, 1, LARGE_BOX_WIDTH, LARGE_BOX_HEIGHT)
text(140.13, 268.15, "18. Komen:", "helvetica", "normal", 6.9)
createSmallBox(153.92, 267.49, 1, 1, MEDIUM_BOX_WIDTH, MEDIUM_BOX_HEIGHT)


// 12TH RECT
rect(BIG_RECT_X, 276.72, BIG_RECT_WIDTH, 3.45, true)
// Section-1 Title
text(6.74, 277.2, "  C. MAKLUMAT PEMBERITAHU", "helvetica", "normal", 6)


// 13TH RECT
rect(BIG_RECT_X, 280.17, BIG_RECT_WIDTH, 16, false)
text(10.43, 282.17, "19. Nama Pengamal Perubatan:", "helvetica", "normal", 6.9)
createSmallBox(55.51, 281.17, 1, 23, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(10.43, 287.17, "20. Nama Hospital / Klinik dan Alamat:", "helvetica", "normal", 6.9)
createSmallBox(55.51, 286.17, 1, 23, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(10.43, 292.17, "21. Tarikh Pemberitahuan:", "helvetica", "normal", 6.9)
createSmallBox(55.51, 291.17, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)//55.51(-88.75);291.17(+30.82)
text(66.52, 291.9, "-", "helvetica", "normal", 6.9)
createSmallBox(68.8, 291.17, 1, 2, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(79.98, 291.9, "-", "helvetica", "normal", 6.9)
createSmallBox(82.43, 291.17, 1, 4, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(161, 289, "…………………………………………", "helvetica", "normal", 6.9)
text(161, 292, "Tandatangan Pengamal Perubatan", "helvetica", "normal", 6.9)


// Output
doc.save("BorangNotifikasi.pdf"); 