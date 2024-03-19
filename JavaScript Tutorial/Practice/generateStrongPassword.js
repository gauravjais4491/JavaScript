function generatePassword() {
    // Define the regular expression for a strong password
    const regex = /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\d){2,})(?=(.*[@$!%*?&]){2,})[A-Za-z\d@$!%*?&]{20,}$/;

    // Function to generate a random character from the given character set
    function getRandomCharacter(charSet) {
        return charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    // Character sets for letters, digits, and special characters
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const specialChars = '@$!%*?&';

    let password = '';

    // Generate a random password until it matches the regex
    while (!password.match(regex)) {
        password = '';

        // Add 2 lowercase letters
        password += getRandomCharacter(lowercaseLetters);
        password += getRandomCharacter(lowercaseLetters);

        // Add 2 uppercase letters
        password += getRandomCharacter(uppercaseLetters);
        password += getRandomCharacter(uppercaseLetters);

        // Add 2 digits
        password += getRandomCharacter(digits);
        password += getRandomCharacter(digits);

        // Add 2 special characters
        password += getRandomCharacter(specialChars);
        password += getRandomCharacter(specialChars);

        // Add additional characters to meet minimum length requirement
        const additionalChars = 20 - password.length;
        for (let i = 0; i < additionalChars; i++) {
            const charSet = lowercaseLetters + uppercaseLetters + digits + specialChars;
            password += getRandomCharacter(charSet);
        }
    }

    return password;
}

// Example usage:
const password = generatePassword();
console.log("Generated password:", password);
