import { Entity, BaseEntity, Column , PrimaryGeneratedColumn} from "typeorm";

@Entity('events')
export class Events extends BaseEntity{
    @PrimaryGeneratedColumn()
    Index!: number;

    @Column()
    Date!: string;


    @Column()
    location!: string;


    @Column()
    typeActivity!: string ;


    @Column()
    categoryoption!: string ;


    @Column()
    eventSeverity!: string ;


    @Column()
    typeUnitActivity!: string ;


    @Column()
    weather!: string ;


    @Column()
    eventDescription!: string ;


    @Column()
    subSubUnitInput!: string ;


    @Column()
    results!: string ;

    
    @Column()
    injuryLevel!: string ;



}

