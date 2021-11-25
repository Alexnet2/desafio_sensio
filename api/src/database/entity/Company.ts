import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity({
    name: "companies"
})
export class Company {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    cnpj: string;
}
