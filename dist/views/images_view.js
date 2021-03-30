export default {
    render(image) {
        return {
            id: image.id,
            path: `http://localhost:3001/uploads/${image.path}`
        };
    },
    renderMany(images) {
        return images.map((image) => this.render(image));
    }
};
//# sourceMappingURL=images_view.js.map