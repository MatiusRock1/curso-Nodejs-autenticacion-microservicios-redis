module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '1054561667QAZXSW',
        database: process.env.MYSQL_DB || 'Platzi_microservices',
    },
    mysqlService: {
        port: process.env.MYSQL_SRV_PORT || 3001,
    }
}