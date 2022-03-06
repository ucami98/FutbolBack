const User = require("../model/user");
Roles = require("../model/roles");
Modules = require("../model/grants");
assignedModuleToRol = require("../model/assignedModuleToRol");
RolUser = require("../model/rolUser");

exports.createUser = () => {
  var user = new User({
    user: "jugador1",
    password: "jugador1",
  });
  user.save();
  var user = new User({
    user: "tecnicoLocal",
    password: "tecnicoLocal",
  });
  user.save();
  var user = new User({
    user: "tecnicoVisitante",
    password: "tecnicoVisitante",
  });
  user.save();
  var user = new User({
    user: "arbitro1",
    password: "arbitro1",
  });
  user.save();
};

exports.createRoles = () => {
  var rol = new Roles({
    name: "arbitro",
  });
  rol.save();
  var rol = new Roles({
    name: "tecnico",
  });
  rol.save();
  var rol = new Roles({
    name: "jugador",
  });
  rol.save();
};

exports.createModules = () => {
  var modules = new Modules({
    modulo: "usuario",
    submodulos: [
      {
        name: "listar",
        opciones: [
          { name: "edit" },
          { name: "visualizar" },
          { name: "delete" },
        ],
      },
      { name: "crear", opciones: [{ name: "save" }] },
      { name: "reporte", opciones: [{ name: "generar" }] },
    ],
    modulo: "inventario",
    submodulos: [
      {
        name: "listar",
        opciones: [
          { name: "edit" },
          { name: "visualizar" },
          { name: "update-stock" },
        ],
      },
      { name: "crear", opciones: [{ name: "save" }] },
      { name: "reporte", opciones: [{ name: "generar" }, { name: "alertar" }] },
    ],
    modulo: "visual",
    submodulos: [
      { name: "preview", opciones: [{ name: "visualizar" }] },
      { name: "reporte", opciones: [{ name: "alertar" }] },
    ],
  });
  modules.save();
};

exports.createAssignedModuleToRol = () => {
  var assigned = new assignedModuleToRol({
    rol: "arbitro",
    modulo: [{ name: "usuario" }],
  });
  assigned.save();

  var assigned = new assignedModuleToRol({
    rol: "tecnico",
    modulo: [{ name: "usuario" }],
  });
  assigned.save();

  var assigned = new assignedModuleToRol({
    rol: "jugador",
    modulo: [{ name: "visual" }],
  });
  assigned.save();
};

exports.createRolUser = () => {
    var roluser = new RolUser({
        rol: "tecnico",
        userId: "62226572386fdd407c3104c7",
    });
    roluser.save();
    var roluser = new RolUser({
        rol: "arbitro",
        userId: "62226572386fdd407c3104c9",
    });
    roluser.save();
    var roluser = new RolUser({
        rol: "jugador",
        userId: "62226572386fdd407c3104c6",
    });
    roluser.save();
  };