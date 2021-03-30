export default {
    render(developer) {
        return {
            id: developer.id,
            name: developer.name,
            gender: developer.gender,
            age: developer.age,
            hobby: developer.hobby,
            birth: developer.birth
        };
    },
    renderMany(developers) {
        return developers.map((developers) => this.render(developers));
    }
};
//# sourceMappingURL=developers_view.js.map