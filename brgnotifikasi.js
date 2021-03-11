const { jsPDF } = require("jspdf"); 

const doc = new jsPDF();

const BIG_RECT_X = 6.31
const BIG_RECT_WIDTH = 195.17
const NAMA_TEXTFIELD_X = 51
const NAMA_TEXTFIELD_Y = 41.8
const NAMA_TEXTFIELD_LENGTH = 145.3
const NAME_TEXTFIELD_BOXPERROW = 32
const NAME_TEXTFIELD_NUMOFROW = 2
const SMALL_BOX_WIDTH = 4.5
const SMALL_BOX_HEIGHT = 4.5
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

// TITLE
text(49.49, 25.75, "NOTIFIKASI PENYAKIT BERJANGKIT YANG PERLU DILAPORKAN",
    "helvetica", "bold", 9.8)

// SUBTITLE
text(64.64, 31.19, "(Seksyen 10, Akta Pencegahan Dan Pengawalan Penyakit Berjangkit 1988)", 
    "helvetica", "normal", 7)

// 1ST RECT
rect(BIG_RECT_X, 35.88, BIG_RECT_WIDTH, 4.45, true)
// Section-1 Title
text(6.74, 36.48, "  A. MAKLUMAT PESAKIT", "helvetica", "normal", 6.9)

// 2ND RECT
rect(BIG_RECT_X, 40.33, BIG_RECT_WIDTH, 21, false)
// Nama 
text(10.47, 42.53, "1. Nama Penuh (HURUF BESAR):", "helvetica", "normal", 6.9)
createSmallBox(NAMA_TEXTFIELD_X, NAMA_TEXTFIELD_Y, 
        NAME_TEXTFIELD_NUMOFROW, NAME_TEXTFIELD_BOXPERROW,
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
textSmallBox(NAMA_TEXTFIELD_X, NAMA_TEXTFIELD_Y, 
        NAME_TEXTFIELD_NUMOFROW, NAME_TEXTFIELD_BOXPERROW,
        SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT,
        SMALL_BOX_TEXT_INSET_X, SMALL_BOX_TEXT_INSET_Y, "A")
// Nama pengiring
text(14.58, 51.63, "Nama Pengiring (Ibu/Bapa/Penjaga):", "helvetica", "normal", 6.9)
createSmallBox(59.99, 51.5, 2, 30, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(14.58, 55.02, "(Jika belum mempunyai Kad Pengenalan diri)", "helvetica", "normal", 6)

// 3RD RECT
rect(BIG_RECT_X, 61.30, BIG_RECT_WIDTH, 21, false)
// Kad pengenalan
text(10.47, 63.15, "2. No. Kad Pengenalan Diri / Dokumen Perjalanan", "helvetica", "normal", 6.9)
createSmallBox(68.97, 62.3, 1, 18, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
createSmallBox(155.75, 62.3, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(160.84, 63.15, "Sendiri", "helvetica", "normal", 6.9)
createSmallBox(173.70, 62.3, 1, 1, SMALL_BOX_WIDTH, SMALL_BOX_HEIGHT)
text(178.79, 63.15, "Pengiring", "helvetica", "normal", 6.9)
text(42.25, 67, "(Untuk Bukan Warganegara)", "helvetica", "normal", 6.9)
// No. pendaftaran hosp/klinik
text(13, 72.43, "No. Daftar Hospital / Klinik", "helvetica", "normal", 6.9)














// Output
doc.save("BorangNotifikasi.pdf"); 