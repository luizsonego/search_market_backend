export default {
    render(market) {
        return {
            id: market.id,
            name: market.name,
            latitude: market.latitude,
            longitude: market.longitude,
            about: market.about,
            sunday: market.sunday,
            sunStart: market.sunStart,
            sunEnd: market.sunEnd,
            monday: market.monday,
            monStart: market.monStart,
            monEnd: market.monEnd,
            tuesday: market.tuesday,
            tueStart: market.tueStart,
            tueEnd: market.tueEnd,
            wednesday: market.wednesday,
            wedStart: market.wedStart,
            wedEnd: market.wedEnd,
            thursday: market.thursday,
            thuStart: market.thuStart,
            thuEnd: market.thuEnd,
            friday: market.friday,
            friStart: market.friStart,
            friEnd: market.friEnd,
            saturday: market.saturday,
            satStart: market.satStart,
            satEnd: market.satEnd
        };
    },
    renderMany(market) {
        return market.map((market) => this.render(market));
    }
};
//# sourceMappingURL=market_view.js.map