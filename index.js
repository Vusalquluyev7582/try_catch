let a = document.getElementById("myBtn").addEventListener("click", function (e) {

    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let errors = document.getElementById("errors")
    errors.innerHTML = "" // Yazdığ ki (yaş)ı (hərf)lə yazıb (error) aldığdan sonra onu silib (rəqəm)lə düzgün yazanda birdə köhnə (error) (div)də qalmasın deyə.

    try {
        if (name.value.length === 0) {
            throw new Error("Ad daxil edin !") // Ad daxil etmiyibsə
        }
        if (name.value.length > 12) {
            throw new Error("Adınız uzundur !") // Adın uzunluğu (12)dən çoxdusa
        }
        if (age.value.length === 0) {
            throw new Error("Yaşınızı daxil edin !"); // Yaş daxil etmiyibsə
        }
        if (isNaN(age.value)) {
            throw new Error("Yaşınızı rəqəmlə daxil edin ! ") // Yaş hərflə daxil edilibsə
        }
        if (age.value.length > 2) {
            throw new Error("Yaşınızı düzgün yazın ! (2 rəqəmdən artıq yazmısız)") // Yaş (2) rəqəmdən çox olarsa
        }

        alert("Göndərildi")
    }
    catch (err) {
        errors.innerHTML = err;
    }
    finally {
        name.value = " "
        age.value = " "   // Hər (2) input xəta olsada - olmasada (submit) etdikdən sonra (xana)nın içi təmizlənsin.
    }
    e.preventDefault()
})