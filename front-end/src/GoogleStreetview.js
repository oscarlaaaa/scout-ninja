import React from 'react';
import PropTypes from 'prop-types';
import asyncLoading from 'react-async-loader';
import isEqual from 'lodash.isequal';

class GoogleStreetview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: 49.2516, longitude: -123.0014 };
    this.streetView = null;
  }

  componentDidMount() {
    this.initialize(this.node, this.props);
  }

  componentDidUpdate(prevProps) {
    this.initialize(this.node, prevProps);
  }

  componentWillUnmount() {
    if (this.streetView) {
      this.props.googleMaps.event.clearInstanceListeners(this.streetView);
    }
  }

  initialize(canvas, prevProps) {
    if (this.props.googleMaps && this.streetView == null) {
      this.streetView = new this.props.googleMaps.StreetViewPanorama(
        canvas,
        this.props.streetViewPanoramaOptions,
      );

      this.streetView.addListener('pano_changed', () => {
        if (this.props.onPanoChanged) {
          this.props.onPanoChanged(this.streetView.getPano());
        }
      });

      this.streetView.addListener('position_changed', () => {
        if (this.props.onPositionChanged) {
          this.props.onPositionChanged(this.streetView.getPosition());
        }
        let target = this.streetView.getPosition();
        let lat = target.lat();
        let long = target.lng();
        this.setState({ latitude: lat, longitude: long });
        console.log(lat, long);
        console.log(this.state);
      });

      this.streetView.addListener('pov_changed', () => {
        if (this.props.onPovChanged) {
          this.props.onPovChanged(this.streetView.getPov());
        }
      });

      this.streetView.addListener('visible_changed', () => {
        if (this.props.onVisibleChanged) {
          this.props.onVisibleChanged(this.streetView.getVisible());
        }
      });

      this.streetView.addListener('zoom_changed', () => {
        if (this.props.onZoomChanged) {
          this.props.onZoomChanged(this.streetView.getZoom());
        }
      });
    }
    if (
      this.streetView !== null &&
      this.props.streetViewPanoramaOptions &&
      !isEqual(
        this.props.streetViewPanoramaOptions,
        prevProps.streetViewPanoramaOptions,
      )
    ) {
      const {
        zoom,
        pov,
        position,
        ...otherOptions
      } = this.props.streetViewPanoramaOptions;
      const {
        zoom: prevZoom,
        pov: prevPov,
        position: prevPos,
        ...prevOtherOptions
      } = prevProps.streetViewPanoramaOptions;
      if (!isEqual(zoom, prevZoom)) {
        this.streetView.setZoom(zoom);
      }
      if (!isEqual(pov, prevPov)) {
        this.streetView.setPov(pov);
      }
      if (!isEqual(position, prevPos)) {
        this.streetView.setPosition(position);
      }
      if (!isEqual(otherOptions, prevOtherOptions)) {
        this.streetView.setOptions(otherOptions);
      }
    }
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <div style={{ height: '90%' }} ref={node => (this.node = node)} />
        <div style={{ height: "10% "}}>
          <button onClick={() => this.props.changeCoord("Latitude: " + this.state.latitude + ", Longitude: " + this.state.longitude)}>click me to grab your coordinates</button>
        </div>
      </div>
    );

  }
}

GoogleStreetview.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  apiKey: PropTypes.string,
  streetViewPanoramaOptions: PropTypes.object,
  onPositionChanged: PropTypes.func,
  onPovChanged: PropTypes.func,
  onZoomChanged: PropTypes.func,
  onPanoChanged: PropTypes.func,
  onVisibleChanged: PropTypes.func,
  googleMaps: PropTypes.object,
};

GoogleStreetview.defaultProps = {
  apiKey: null,
  streetViewPanoramaOptions: {
    position: { lat: 49.2516, lng: -123.0014 },
    pov: { heading: 0, pitch: 0 },
    zoom: 1,
  },
  googleMaps: {},
  onPositionChanged: () => {},
  onPovChanged: () => {},
  onZoomChanged: () => {},
  onPanoChanged: () => {},
  onVisibleChanged: () => {},
};

function mapScriptsToProps({ apiKey }) {
  if (!apiKey) return {};

  return {
    googleMaps: {
      globalPath: 'google.maps',
      url: `https://maps.googleapis.com/maps/api/js?key=${apiKey}`,
      jsonp: true,
    },
  };
}

export default asyncLoading(mapScriptsToProps)(GoogleStreetview);