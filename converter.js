function convert(data) {
    const value = data.distance.value;
    const unit = data.distance.unit;
    const convert = data.convert_to;
    let result;

    if (unit == 'ft' && convert == 'm') {
        result = value / 3.2808
    }
    if (unit == 'cm' && convert == 'm') {
        result = value / 1000
    }
    if (unit == 'in' && convert == 'm') {
       result = value / 39.370
    }

    
    if (unit == 'ft' && convert == 'cm') {
        result = value / 3280.8
    }
    if (unit == 'in' && convert == 'cm') {
        result = value / 39370
    }
    if (unit == 'm' && convert == 'cm') {
        result = value * 1000
    }
    

    if (unit == 'ft' && convert == 'in') {
        result = value*12
    }
    if (unit == 'm' && convert == 'in') {
        result = value*3.2808
    }
    if (unit == 'cm' && convert == 'in') {
        result = value*0.39370
    }


    if (unit == 'cm' && convert == 'ft') {
        result = value*0.032808
    }
    if (unit == 'm' && convert == 'ft') {
        result = value*3.2808
    }
    if (unit == 'in' && convert == 'ft') {
        result = value*0.083333
    }
    
    result = Math.round((result) * 100) / 100;
    return { "unit": convert, "value": result }
}


function test() {
    const input = { "distance": { "unit": "m", "value": 0.5 }, "convert_to": "ft" }
    const output = { "unit": "ft", "value": 1.64 }

    const result = convert(input);
    console.log(Math.abs(result.value - output.value) < 0.1)

}
function test1() {
    const input = { "distance": { "unit": "in", "value": 1 }, "convert_to": "ft" }
    const output = { "unit": "ft", "value": 0.083333 }

    const result = convert(input);
    console.log(Math.abs(result.value - output.value) < 0.1)

}

test();
test1();