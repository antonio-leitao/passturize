export async function hashFile(file) {
  const buffer = await file.arrayBuffer();
  const data = new Uint8Array(buffer);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
}

export function hashToPassword(hash, length = 16) {
  const charset = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz', 
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  };
  
  const allChars = Object.values(charset).join('');
  let password = '';
  let hashIndex = 0;

  // Ensure we have at least one character from each set
  for (const set of Object.values(charset)) {
    const value = parseInt(hash.substr(hashIndex, 2), 16);
    password += set[value % set.length];
    hashIndex = (hashIndex + 2) % hash.length;
  }

  // Fill remaining length with mixed characters
  while (password.length < length) {
    const value = parseInt(hash.substr(hashIndex, 2), 16);
    password += allChars[value % allChars.length];
    hashIndex = (hashIndex + 2) % hash.length;
  }

  // Deterministic shuffle using the hash
  const passwordArray = password.split('');
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = parseInt(hash.substr((i * 2) % hash.length, 2), 16) % (i + 1);
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }

  return passwordArray.join('');
}
