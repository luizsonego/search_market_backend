import { ValidationError } from 'yup';
const errorHandler = (error, request, response, next) => {
    if (error instanceof ValidationError) {
        const errors = {};
        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });
        return response.status(400).json({ message: 'Validation fails', errors });
    }
    console.log(error);
    return response.status(500).json({ message: 'Internal server error' });
};
export default errorHandler;
//# sourceMappingURL=handler.js.map