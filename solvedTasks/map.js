// Метод map

const users = [
	{
	name: 'Dan',
	gender: 'male',
	},
	{
	name: 'Maria',
	gender: 'female',
	},
	{
	name: 'Ted',
	gender: 'male',
	},
	{
		name: 'Mall',
		gender: '',
		},
	{
	name: 'Tina',
	gender: 'female',
	},
];


const usersWithAppeal = users.map((user) => {
	if (user.gender === 'female') {
		return ({...user, appeal: 'Mrs'});
	} else if (user.gender === 'male') {
		return ({...user, appeal: 'Mr'});
	} else {
		return ({...user, appeal: null});
	}
});

console.log(users);
console.log(usersWithAppeal);