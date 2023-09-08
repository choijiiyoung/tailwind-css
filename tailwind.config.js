tailwind.config = {
	theme: {
		screens: {
			md: { max: '768px' },
		},
		extend: {
			spacing: {
				//rem단위로 쓰면 16px씩 커짐
				r1: '10rem',
				r2: '20rem',
				r3: '30rem',
			},
		},
	},
};
