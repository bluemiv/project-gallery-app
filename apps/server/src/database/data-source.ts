import { DataSource } from 'typeorm';

const createDataSource = async () => {
  const { PG_PORT, PG_HOST, PG_DATABASE, PG_PASSWORD, PG_USERNAME } = process.env;
  return new DataSource({
    type: 'postgres',
    host: PG_HOST,
    port: parseInt(PG_PORT ?? '5432'),
    username: PG_USERNAME,
    password: PG_PASSWORD,
    database: PG_DATABASE,
    entities: ['src/entity/*'],
    logging: true,
    synchronize: true,
  });
};

let dataSource: DataSource;

export const initDataSource = async () => {
  dataSource = await createDataSource();
  await dataSource.initialize();
};

const getDataSource = () => dataSource;

export default getDataSource;
