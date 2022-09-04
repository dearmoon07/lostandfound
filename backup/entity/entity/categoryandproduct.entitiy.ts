import { type } from "os";
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CategoryEntity } from "./category.entitiy";
import { ProductEntity } from "./product.entity";

@Entity('categoryandproduct')
export class CategoryandProductEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @OneToOne(type => ProductEntity, product => product.id)
    @JoinColumn({foreignKeyConstraintName: 'product_id'})
    product_id:string

    @OneToOne(type => CategoryEntity, category => category.id)
    @JoinColumn({foreignKeyConstraintName: 'category_id'})
    category_id:string
}