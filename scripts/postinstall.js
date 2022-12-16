const fs = require('fs');
const path = require('path');

const configPath = path.join(process.env.INIT_CWD, '.stylelintrc');
const ignorePath = path.join(process.env.INIT_CWD, '.stylelintignore');

if (fs.existsSync(configPath)) {
	fs.readFile(configPath, 'utf8', (err, data) => {
		fs.writeFileSync(
			configPath,
			data.replace(
				/@meteozdemir\/stylelint-config-core/g,
				'@meteozdemir/stylelint-config-scss',
			),
		);
	});
}

if (!fs.existsSync(configPath)) {
	fs.writeFileSync(
		configPath,
		'{\n\t"extends": [\n\t\t"@meteozdemir/stylelint-config-scss",\n\t\t"@meteozdemir/stylelint-config-scss/rules/prettier"\n\t],\n\t"rules": {}\n}\n',
	);
}

if (!fs.existsSync(ignorePath)) {
	fs.writeFileSync(ignorePath, 'node_modules\n');
}
