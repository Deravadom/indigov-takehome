import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('contacts', table => {
        table.increments()
        table.string('email').unique()
        table.string('firstName')
        table.string('lastName')

        table.string('street1')
        table.string('street2')
        table.string('city')
        table.string('state')
        table.string('zip')

        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('contacts')
}

