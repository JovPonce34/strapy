module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cddh5c6n6mps6fn2hflg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_kjrn'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'gjamuvFF7Ne1Mo1qjY498S2qQvFZLrZH'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
