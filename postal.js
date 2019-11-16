//Start should be fifteen cents less than the mimimum cost
function incrementFifteenCents(start, weight) {
    for (i = 0; i < weight; i++) {
        start += 0.15;
    }
    return start;
}

function computeRate(req, res) {
    var weight = req.query.weight;
    var type = req.query.type;
    var rate = 0;

    if (type == "letters-stamped") {
        if (weight > 3.5) {
            rate = 1.00;
        }
        else if (weight <= 1.0) {
            rate = 0.55;
        }
        else {
            rate = incrementFifteenCents(0.40, weight);
        }
    }
    else if (type == "letters-metered") {
        if (weight > 3.5) {
            rate = 0.95;
        }
        else if (weight <= 1.0) {
            rate = 0.50;
        }
        else {
            rate = incrementFifteenCents(0.35, weight);
        }
    }
    else if (type == "large-envelopes") {
        rate = incrementFifteenCents(0.75, weight);
    }
    else if (type == "first-class") {
        if (weight < 5) {
            rate = 3.66;
        }
        else if (weight >= 5 && weight < 9) {
            rate = 4.39;
        }
        else if (weight >= 9 && weight < 13) {
            rate = 5.19;
        }
        else if (weight > 12 && weight <= 13) {
            rate = 5.71;
        }
    }
    var answer = {rate: rate};
    res.render('result', answer);
}

module.exports = {computeRate: computeRate};