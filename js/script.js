var inputbox = document.getElementById('inputbox')
console.log(inputbox.value)
var item_box = document.getElementById('item_box')
console.log(item_box)


function getvalue() {
    if (inputbox.value != '') {

        console.log(inputbox.value)

        var item = inputbox.value;

        var createnewlist = document.createElement('li')

        console.log(createnewlist)

        createnewlist.innerText = inputbox.value;

        console.log(createnewlist.innerText)

        item_box.append(createnewlist)

        createnewlist.addEventListener('click', function () {

            createnewlist.classList.toggle('done')

            // console.log("first")
        })

        createnewlist.addEventListener('contextmenu', function (e) {
            e.preventDefault()
            createnewlist.remove()
        })
        inputbox.value = '';
        inputbox.focus();

    }
}

