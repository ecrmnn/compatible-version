export default (versionish: string): boolean => {
  const [versionishMajor, versionishMinor, versionishPatch] = versionish.replace(/v/g, '').split('.');
  let [nodeMajor, nodeMinor, nodePatch] = process.version.replace(/v/g, '').split('.');

  if (process.env.APP_ENV === 'testing') {
    [nodeMajor, nodeMinor, nodePatch] = 'v8.10.0'.replace(/v/g, '').split('.');
  }

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
