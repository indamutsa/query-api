const { User } = require("../models/User");
const { Workspace } = require("../models/Workspace");
const { Project } = require("../models/Project");

async function loadInitData() {
  await saveDefaultData();
}

const saveDefaultData = async () => {
  let user = await User.find({ username: "arsene" });

  if (user.length === 0) {
    try {
      let newUser = await User({
        username: "arsene",
        email: "arsene@gmail.com",
      });

      const savedUser = await newUser.save();

      //   console.log(savedUser);

      const workspace = await saveDefaultWorkspace(savedUser);
      await saveDefaultProject(workspace);
    } catch (error) {
      console.log(error);
    }
  } else {
    return;
  }
};

const saveDefaultWorkspace = async (user) => {
  try {
    const workspace = await Workspace({
      name: "default-workspace",
      owner: user._id,
      description: "Default workspace",
    });
    const savedWorkspace = await workspace.save();
    // console.log(savedWorkspace);

    return savedWorkspace;
  } catch (error) {
    console.log(error);
  }
};

const saveDefaultProject = async (workspace) => {
  try {
    const project = await Project({
      name: "Default-project",
      workspace: workspace._id,
      description: "Default Project",
    });
    const savedProject = await project.save();
    // console.log(savedProject);
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadInitData;
