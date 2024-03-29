const fs = require('fs')

if (fs.existsSync('../hexo/package.json')) {
    const version = JSON.parse(fs.readFileSync('../hexo/package.json')).version
    if (Number(version.split('.')[0]) >= 5) {
        const configPath = '../../_config.yoga.yml'
        if (!fs.existsSync(configPath)) {
            fs.writeFileSync(configPath, fs.readFileSync('./_config.yml'))
        }
        fs.unlinkSync('./_config.yml')
    }
}
