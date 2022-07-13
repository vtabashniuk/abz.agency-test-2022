const nameTrimming = (name, length = 28) => {
  return name.length > length ? `${name.slice(0, length - 3)}...` : name;
};

export default nameTrimming;
