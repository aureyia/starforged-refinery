import { Args, Command } from "@effect/cli"
import { Console } from "effect"

const resource_type = Args.text({ name: "resource type" })
// const remote = Options.boolean("remote").pipe(Options.withAlias("r"))

const command = Command.make(
    "generate",
    { resource_type },
    ({ resource_type }) => {
        if (resource_type === "all") {
            return Console.log("I generated all resources")
        }

        if (resource_type === "oracles") {
            return Console.log("I generate all oracles")
        }

        return Console.log(`The Resource type ${resource_type} was not supported`)
    }
)

export const run = Command.run(command, {
    name: "starforged-refinery/roll20",
    version: "0.0.1"
})
