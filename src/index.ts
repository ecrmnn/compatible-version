export default (versionish: string): boolean => {
  const [versionishMajor, versionishMinor, versionishPatch] = versionish.replace(/v/g, '').split('.');
  const [nodeMajor, nodeMinor, nodePatch] = process.versions.node.split('.');

  if ((versionishMajor === nodeMajor)
    && (versionishMinor === nodeMinor)
    && (versionishPatch === nodePatch)) {
    return true;
  }

  if ((versionishMajor === nodeMajor)
    && (versionishMinor === nodeMinor)
    && (versionishPatch === undefined)) {
    return true;
  }

  if ((versionishMajor === nodeMajor)
    && (versionishMinor === undefined)
    && (versionishPatch === undefined)) {
    return true;
  }

  return false;
};
