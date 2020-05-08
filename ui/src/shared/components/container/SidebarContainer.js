import React from 'react';
class SideNav extends React.Component {
  render() {
    return (
      <div style={{
        position: 'fixed',
        height: '100%',
        width: '10%',
        zIndex: '1',
        top: '50px',
        backgroundColor: '#2c3e50',
        overflowX: 'hidden',
        paddingTop: '10px'
      }}>
        <div style={{ padding: '3px', height: '50px', borderStyle: 'hidden', borderLeftStyle: 'solid', borderWidth: '0px 0px 0px 2px', borderColor: '#e4f2cd' }}></div>
        <hr style={{ color: '#e4f2cd' }} /><div style={{ height: '50px', borderStyle: 'hidden', borderLeftStyle: 'solid', borderWidth: '0px 0px 0px 2px', borderColor: '#e4f2cd' }}></div>
        <hr style={{ color: '#e4f2cd' }} /><div style={{ height: '50px', borderStyle: 'hidden', borderLeftStyle: 'solid', borderWidth: '0px 0px 0px 2px', borderColor: '#e4f2cd' }}></div>
        <hr style={{ backgroundColor: 'red' }} />
      </div>
    );
  }
}



class SidebarContainer extends React.Component {
  render() {
    return (
      <SideNav />
    )
  }
}
export default SidebarContainer;