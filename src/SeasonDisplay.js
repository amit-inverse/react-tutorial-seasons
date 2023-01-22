const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

function SeasonDisplay({ lat }) {
    const season = getSeason(lat, new Date().getMonth());

    console.log(season);

    return <div>SeasonDisplay</div>;
}

export default SeasonDisplay;
