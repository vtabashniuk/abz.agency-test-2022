const nameTrimming = name => {
  return name.length > 29 ? `${name.slice(0, 26)}...` : name;
};

export default nameTrimming;