const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('GISELE', 'SEO');
userRoles.set('INAIA', 'ADMIN');
userRoles.set('CAMILA', 'USER');
userRoles.set('HELLEN', 'USER');
userRoles.set('CAROL', 'USER');

console.log(getAdmins(userRoles));
