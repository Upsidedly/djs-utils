import { MessageActionRow } from "discord.js";

/**
 * Takes a MessageActionRow and returns it with all components disabled.
 * @param {MessageActionRow} row 
 * The MessageActionRow
 * @returns {MessageActionRow}
 * Disabled MessageActionRow
 */
export function disableRow(row) {
    return new MessageActionRow().addComponents(row.com)
}