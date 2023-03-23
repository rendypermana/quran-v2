export function arabicNumbering(value) {
    const ayat_ = String(value)
    let id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return ayat_.replace(/[0-9]/g, function(w){
        return id[+w]
    });
}

export function splitBismillah(ayah, number, numberInSurah) {
    if (number != 1 && number != 9 && numberInSurah == 1) {
        const firstAyah = ayah;
        const replaceAyah = String(firstAyah).slice(39);
        return replaceAyah;
    } else {
        return ayah;
    }
}