function convert(data) {
    const include = data.condition.include
    const sort_by = data.condition.sort_by;
    let result = [];

    data.data.forEach(element => {
        include.forEach(inc_element => {
            Object.keys(inc_element).forEach(key => {
                if (element.hasOwnProperty(key) && element[key] == inc_element[key]) {
                    result.push(element);
                    
                }
            })
        })
    });


    result.sort(
        function (a, b) {
            const x = a[sort_by] < b[sort_by] ? -1 : 1;
            return x
       })
    console.log(result)
}

function test() {
    const input = {
        "data": [
            { "user": "mike@mail.com", "rating": 20, "disabled": false },
            {"user": "greg@mail.com", "rating": 14, "disabled": false},
            { "user": "john@mail.com", "rating": 25, "disabled": true }], 
        "condition": {
            "include":
                [{ "disabled": false }],
                "sort_by": "rating"
        }
    }

    const output = {"result": [{"user": "greg@mail.com", "rating": 14, "disabled": false},
                { "user": "mike@mail.com", "rating": 20, "disabled": false }]
    }
    
    const result = convert(input);
    console.log(result==output)
}

test();
