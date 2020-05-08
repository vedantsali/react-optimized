/**
 * @function getModuleReducers use to get the reducers according the modules
 * @param {modules} modules module pass
 * @param {node} node  node input
 */
const getModuleReducers = (modules, node) => modules.reduce((map, module) => ({ ...map, [module.name]: module[node] }), {});

export default getModuleReducers;
