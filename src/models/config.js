const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgresql://postgres:B4A5GfBCDFF2e11deC56eb*fED32bgcE@roundhouse.proxy.rlwy.net:51114/railway')

module.exports = sequelize