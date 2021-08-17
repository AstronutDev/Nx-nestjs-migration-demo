import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movies {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        default: ''
    })
    name: string

    @Column({
        default: ''
    })
    director: string

    @Column({
        default: '0 hr'
    })
    duration: string

    @Column({
        default: ''
    })
    styple: string
}