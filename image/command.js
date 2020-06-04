#!/usr/bin/env node

const fs = require('fs')
const {Command, flags} = require('@oclif/command')

class CustomCommand extends Command {
  async run() {
    const {flags} = this.parse(CustomCommand)
    await require('./runLighthouse').run(flags.addr, flags.exportTo);
  }
}

CustomCommand.flags = {
  version: flags.version(),
  help: flags.help(),
  addr: flags.string({
    char: 'a',
    default: 'http://ratehub.ca',
  }),
  exportTo: flags.string({
    char: 'e',
    default: 'none', // or 'html'
  }),
}

CustomCommand.run()
.catch(require('@oclif/errors/handle'))