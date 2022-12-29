export const getDynamicStyles = width => {
  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    canvas: {
      width: width,
      height: width,
    },
  };

  return styles;
};
