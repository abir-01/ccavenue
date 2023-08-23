var crypto = require('crypto');
exports.encrypt = function (plainText, workingKey) {
	var iv = crypto.randomBytes(16);	
	var m = crypto.createHash("sha1");
    	m.update(workingKey);
   	var key = m.digest().slice(0,16);
	var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
	console.log(cipher)
	var encoded = cipher.update(plainText,'utf8','hex');
	encoded += cipher.final('hex');
    	return encoded;
};


exports.decrypt = function (encText, workingKey) {
	var m = crypto.createHash("sha1");
    	m.update(workingKey)
	var key = m.digest().slice(0, 16);
	var iv = crypto.randomBytes(16);	
	var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    	var decoded = decipher.update(encText,'hex','utf8');
	decoded += decipher.final('utf8');
    	return decoded;
};

