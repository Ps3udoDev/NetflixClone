require('dotenv').config()

const config = {
    api: {
        port: process.env.PORT || 9000,
        nodeEnv: process.env.NODE_ENV || 'development',
        host: process.env.HOST || 'http://localhost:9000',
        jwtSecret: process.env.JWT_SECRET,
        firebase:{
            apiKey:  process.env.FB_API_KEY,
            authDomain: process.env.FB_AUTH_DOMAIN,
            projectId: process.env.FB_PROJECT_ID,
            storageBucket: process.env.FB_STORAGE_BUCKET,
        }
    },
    db: {
        development: {
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            },
        },
        production: {
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        },
        testing: {
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            }
        },
    }
}

module.exports = config