import { MessageActionRow } from "discord.js";

/**
 * Takes a [MessageActionRow](https://discord.js.org/#/docs/main/stable/class/MessageActionRow)
 * and returns it with all [components](https://discord.js.org/#/docs/main/stable/typedef/MessageActionRowComponentResolvable) disabled.
 * @param {MessageActionRow} row 
 * The MessageActionRow
 * @returns {MessageActionRow}
 * Disabled MessageActionRow
 */
export function disableRow(row) {
    return new MessageActionRow().addComponents(row.components.map(c => c.setDisabled()))
}