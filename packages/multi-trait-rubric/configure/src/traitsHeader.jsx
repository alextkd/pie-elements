import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { color } from '@pie-lib/render-ui';

import {
  Block,
  PrimaryBlock,
  Row,
  SecondaryBlock,
  ScorePoint,
  MaxPointsPicker,
  SimpleInput,
  ScaleSettings,
  HeaderHeight,
  HeaderHeightLarge
} from './common';

const styles = {
  label: {
    textAlign: 'center',
    width: '140px',
    border: 'none',
    margin: '8px',
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  greyHeader: {
    background: color.secondaryBackground(),
    borderRadius: '4px',
    position: 'relative'
  },
  primaryBlockGreyHeader: {
    paddingTop: '12px'
  }
};

export class TraitsHeaderTile extends React.Component {
  state = {
    anchorEl: null,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentPosition !== this.props.currentPosition) {
      this.scrollToPosition(nextProps.currentPosition);
    }
  }

  onScorePointLabelChange = ({ scorePointLabel, value }) => {
    const { scorePointsLabels, onScaleChange } = this.props;

    if (value < 0 || value >= scorePointsLabels.length) return;

    scorePointsLabels[value] = scorePointLabel;

    onScaleChange({ scorePointsLabels });
  };

  handleClick = (event) => this.setState({ anchorEl: event.currentTarget });

  handleClose = () => this.setState({ anchorEl: null });

  scrollToPosition = position => this.secondaryBlock.scrollTo({ left: position });

  openMenu = () => {
    this.props.showDeleteScaleModal();
    this.handleClose();
  };

  render() {
    const {
      scorePointsValues,
      scorePointsLabels,
      traitLabel,
      classes,
      showStandards,
      onTraitLabelChange,
      showDescription,
      showLevelTagInput,
      maxPoints,
      updateMaxPointsFieldValue,
      scaleIndex,
      showScorePointLabels,
      setSecondaryBlockRef,
    } = this.props;
    const pluginProps = {
      image: { disabled: true },
      math: { disabled: true }
    };
    const { anchorEl } = this.state;

    return (
      <Row className={classes.greyHeader} height={showLevelTagInput ? HeaderHeightLarge : HeaderHeight}>
        <PrimaryBlock className={classes.primaryBlockGreyHeader}>
          {showLevelTagInput && (
            <SimpleInput
              markup={traitLabel || 'Trait'}
              onChange={onTraitLabelChange}
              pluginProps={pluginProps}
              label='Level Label'
            />
          )}

          <ScaleSettings>
            <div>
              Scale {scaleIndex + 1}
            </div>

            <MaxPointsPicker
              maxPoints={maxPoints}
              onChange={updateMaxPointsFieldValue}
            />

            <div>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MoreVertIcon/>
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={!!anchorEl}
                onClose={this.handleClose}
              >
                {['Remove Scale'].map((option) => (
                  <MenuItem
                    key={option}
                    onClick={this.openMenu}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </ScaleSettings>
        </PrimaryBlock>

        <SecondaryBlock
          setRef={ref => {
            if (ref) {
              this.secondaryBlock = ref;

              setSecondaryBlockRef(ref);
            }
          }}
        >

          {showStandards && (
            <Block>
              <div className={classes.label}>
                Standard(s)
              </div>
            </Block>
          )}

          {showDescription && (
            <Block>
              <div className={classes.label}>
                Description
              </div>
            </Block>
          )}

          {scorePointsValues.map((scorePointsValue, index) => {
            const value = scorePointsValues.length - index - 1;
            let scoreDescriptor;

            try {
              scoreDescriptor = scorePointsLabels[value] || '';
            } catch (e) {
              scoreDescriptor = '';
            }

            return (
              <Block key={`secondary-block-part-${index}`}>
                <ScorePoint
                  scorePointsValue={scorePointsValue}
                  scoreDescriptor={scoreDescriptor}
                  pluginProps={pluginProps}
                  showScorePointLabels={showScorePointLabels}
                  onChange={scorePointLabel => this.onScorePointLabelChange({ scorePointLabel, value })}
                />
              </Block>
            )
          })}
        </SecondaryBlock>
      </Row>
    );
  }
}

TraitsHeaderTile.propTypes = {
  classes: PropTypes.object.isRequired,
  onTraitLabelChange: PropTypes.func,
  onScaleChange: PropTypes.func,
  scorePointsValues: PropTypes.arrayOf(PropTypes.number),
  scorePointsLabels: PropTypes.arrayOf(PropTypes.string),
  traitLabel: PropTypes.string,
  showStandards: PropTypes.bool,
  showLevelTagInput: PropTypes.bool,
  showDescription: PropTypes.bool,
  maxPoints: PropTypes.number,
  updateMaxPointsFieldValue: PropTypes.func,
  scaleIndex: PropTypes.number,
  currentPosition: PropTypes.number,
  showDeleteScaleModal: PropTypes.func,
  showScorePointLabels: PropTypes.bool,
  setSecondaryBlockRef: PropTypes.func
};

export default withStyles(styles)(TraitsHeaderTile);
