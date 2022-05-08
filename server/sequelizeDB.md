```bash
    npx sequelize-cli model:generate --name member --attributes name:string,role:string,status:string
    
    npx sequelize-cli model:generate --name item --attributes name:string,category:string,price:integer,image:string,memberId:integer,brandId:integer

    npx sequelize-cli model:generate --name brand --attributes name:string,image:string
```