const nameTrimming = name => {
  return name.length > 28 ? `${name.slice(0, 25)}...` : name;
};

export default nameTrimming;