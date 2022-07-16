const fs = require("fs")
const LO_DAY_NUM = 0
const HI_DAY_NUM = 5
const TEMPLATE_PATH = "\\..\\..\\..\\..\\template.cpp"
module.exports = {GenContest: GenContest}

function GenContest()
{
    const contest_dir = process.cwd() + "\\Contest"
    if (!fs.existsSync(contest_dir))
    {
        fs.mkdirSync(contest_dir)
        fs.cpSync(process.cwd() + "\\template.cpp", contest_dir + "\\template.cpp")

        const workspace_dir = contest_dir + "\\Workspace"
        fs.mkdirSync(workspace_dir)
        GenWorkspace(workspace_dir)

        const testenv_dir = contest_dir + "\\TestEnv"
        fs.mkdirSync(testenv_dir)
        GenTestEnv(testenv_dir)
    }
    else
    {
        console.log("Please move Contest directory and try again")
    }
}

function GenWorkspace(workspace_dir, env = false)
{
    const day_name = "\\Day_"
    for (var i = LO_DAY_NUM; i <= HI_DAY_NUM; ++i)
    {
        const day_dir = workspace_dir + day_name + i.toString()
        fs.mkdirSync(day_dir)
        GenDay(day_dir, i, env)
    }
}

function GenDay(string, num, env = false)
{
    const A_dir = string + "\\A1"
    const B_dir = string + "\\B1"
    const C_dir = string + "\\C1"

    fs.mkdirSync(A_dir)
    PutTemplateWorkspace(A_dir, env)

    if (num > 0)
    {
        fs.mkdirSync(B_dir)
        PutTemplateWorkspace(B_dir, env)

        fs.mkdirSync(C_dir)
        PutTemplateWorkspace(C_dir, env)
    }
    if (num == 5)
    {
        fs.mkdirSync(A_dir + "2")
        PutTemplateWorkspace(A_dir + "2", env)

        fs.mkdirSync(B_dir + "2")
        PutTemplateWorkspace(B_dir + "2", env)

        fs.mkdirSync(C_dir + "2")
        PutTemplateWorkspace(C_dir + "2", env)
    }
}

function PutTemplateWorkspace(string, env = false)
{
    if (env)
    {
        console.log("Will be fixed soon!")
    }
    else
    {
        fs.cpSync(string + TEMPLATE_PATH, string + "\\main.cpp")
        fs.mkdirSync(string + "\\Test")
    }
}



