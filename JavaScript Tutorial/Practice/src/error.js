export class InputValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InputValidationError';
    }
}
// export default { InputValidationError }


