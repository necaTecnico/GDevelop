// @flow
import React from 'react';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';
import IconButton from 'material-ui/IconButton';

type PropsType = {
  helpPagePath: ?string,
};

/**
 * The icon that can be used in any dialog to open a help page
 */
export default (props: PropsType) => {
  if (!props.helpPagePath) return null;

  return (
    <IconButton
      onClick={() => window.open(`http://wiki.compilgames.net/doku.php/gdevelop5${props.helpPagePath}`, 'blank') }
    >
      <HelpOutline />
    </IconButton>
  );
};
