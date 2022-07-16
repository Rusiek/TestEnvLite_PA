const fse = require("fs-extra")
const TEMPLATE_PATH = "\\..\\..\\..\\..\\Test_template\\"
module.exports = {GenTestEnv: GenTestEnv,}

function GenTestEnv(string)
{
    const gen_dir = string + "\\gen"
    fse.mkdirSync(gen_dir)
    fse.copySync(string + TEMPLATE_PATH + "gen", gen_dir)

    const src_dir = string + "\\src"
    fse.mkdirSync(src_dir)
    fse.copySync(string + TEMPLATE_PATH + "src", src_dir)

    const tst_dir = string + "\\tst"
    fse.mkdirSync(tst_dir)
    fse.copySync(string + TEMPLATE_PATH + "tst", tst_dir)
}