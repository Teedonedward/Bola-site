const image = document.getElementById("image");
const selectItem = document.getElementById("design_type");

const items = ["../images/teedon_logo.jpg",
                "../images/flyer.jpg",
                "../images/rollup_banner.jpg",
                "../images/billboard.jpg",
                "../images/sticker.jpg",
                "../images/letterhead.jpg",
                "../images/cotton_roundneck.jpg",
                "../images/business-card.jpg",
                "../images/business-card.jpg",
                "../images/wedding IV.jpg",
                "../images/id_card.jpg",
                "../images/layout.jpg",
                "../images/business-card.jpg",
                "../images/book_cover.jpg",
                "../images/ad.jpg",
                "../images/full_colour_book.jpg",
                "../images/full_colour_book.jpg"
            ];

selectItem.addEventListener("change", () => {
    const value = selectItem.options[selectItem.selectedIndex].value

    switch (value) {
        case "logo":
            image.setAttribute("src", items[0])
            break;
        case "flyer":
            image.setAttribute("src", items[1])
            break;
        case "banner":
            image.setAttribute("src", items[2])
            break;
        case "billboard":
            image.setAttribute("src", items[3])
            break;
        case "sticker":
            image.setAttribute("src", items[4])
            break;
        case "letter head":
            image.setAttribute("src", items[5])
            break;
        case "shirt":
            image.setAttribute("src", items[6])
            break;
        case "web page":
            image.setAttribute("src", items[7])
            break;
        case "web site":
            image.setAttribute("src", items[8])
            break;
        case "iv":
            image.setAttribute("src", items[9])
            break;
        case "id":
            image.setAttribute("src", items[10])
            break;
        case "layout":
            image.setAttribute("src", items[11])
            break;
        case "illustration":
            image.setAttribute("src", items[12])
            break;
        case "book cover":
            image.setAttribute("src", items[13])
            break;
        case "online ad":
            image.setAttribute("src", items[14])
            break;
        case "song cover":
            image.setAttribute("src", items[15])
            break;
        case "book layout":
            image.setAttribute("src", items[16])
            break;
        default:
            break;
    }
})

const dimensionLength = document.getElementById("length");
const dimensionWidth = document.getElementById("width");
const inputLength = document.getElementById("inputlength");
const inputWidth = document.getElementById("inputwidth");
const writeLength = inputLength.value;

const sizesWidth = ["105",
                    "148.5",
                    "210",
                    "297",
                    "420",
                    "840"
                ];

const sizesLength = ["148.5",
                    "210",
                    "297",
                    "420",
                    "594",
                    "840",
                    writeLength
                ];

dimensionLength.addEventListener("change", () => {
    if (dimensionLength.options[dimensionLength.dimensionIndex[0]]) {
        inputLength.style.display = "flex";
    } else {
        inputLength.style.display = "hidden"
    }
    const length = selectItem.options[selectItem.selectedIndex].value;

    switch (length) {
        case "A6":
            inputLength.value = sizesLength[0]
            break;
        case "A5":
            inputLength.value = sizesLength[1]
            break;
        case "A4":
            inputLength.value = sizesLength[2]
            break;
        case "A3":
            inputLength.value = sizesLength[3]
            break;
        case "A2":
            inputLength.value = sizesLength[4]
            break;
        case "A1":
            inputLength.value = sizesLength[5]
            break;
        case "custom length":
            inputLength.value = sizesLength[6]
            break;
        default:
            break;
    }
})